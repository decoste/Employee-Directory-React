import React , { Component } from "react";
import Nav from "../Nav/index.js";
import Search from "../Search/index.js";
import EmpTable from "../EmpTable/index.js";
import Reset from "../Reset/index.js";

class EmployeeDir extends Component {
    state = {
        people: [],
        peopleCopy: [],
        search: ""
      };
    
      componentDidMount() {
        console.log("mounted!");
        const data = fetch("https://randomuser.me/api/?results=50");
        data
          .then((response) => response.json())
          .then((response) => {
            this.setState({ people: response.results, peopleCopy: [...response.results] });
          });
      }
    
      componentWillUnmount() {
        console.log("I will unmount");
      }
    
      handleInputChange = (event) => {
        this.setState({ search: event.target.value });
      };
    
       handleSearchClick = (event) => {
        event.preventDefault();
        const filterByGender = this.state.peopleCopy.filter((results)=>
            results.gender ===this.state.search
        )
        this.setState({people: filterByGender});
      }

      reset = () => {
        this.setState({ people: this.state.peopleCopy });
        document.getElementById('filterName').value="";
        document.getElementById('filterGender').value="";
      };

      handleFilterClick = (event) => {
        event.preventDefault();
    const filterByName = this.state.peopleCopy.filter((names)=>
        names.name.first.toLowerCase().includes(this.state.search)
    )
    this.setState({people: filterByName});
      }

      sortbyFirstName = () =>{
        let people = this.state.people;
      const sortedFirstName = [...this.state.people].sort((a,b) => {
          let firstA = a.name.first.toUpperCase();
          let firstB = b.name.first.toUpperCase();
          if(firstA  > firstB) 
              return 1;
          if(firstA < firstB) 
              return -1;
          return 0;
      });
      this.setState({people: sortedFirstName});
    }
    
    sortbyLastName = () =>{
        let people = this.state.people;
      const sortedLastName = [...this.state.people].sort((a,b) => {
          let lastA = a.name.last.toUpperCase();
          let lastB = b.name.last.toUpperCase();
          if(lastA  > lastB) 
              return 1;
          if(lastA < lastB) 
              return -1;
          return 0;
      });
      this.setState({people: sortedLastName});
    }

    sortbyEmail = () =>{
        let people = this.state.people;
      const sortedEmail = [...this.state.people].sort((a,b) => {
          let emailA = a.email.toUpperCase();
          let emailB = b.email.toUpperCase();
          if(emailA  > emailB) 
              return 1;
          if(emailA < emailB) 
              return -1;
          return 0;
      });
      this.setState({people: sortedEmail});
    }
      render() {
        return (
          <div className="App">
            <Nav/>
            <br/>
            <Search handleInputChange = {this.handleInputChange} handleSearchClick={this.handleSearchClick} handleFilterClick={this.handleFilterClick}/>
            <Reset reset={this.reset}/>
            <br/>
            <br/>
            <EmpTable people={this.state.people} sortbyFirstName={this.sortbyFirstName} sortbyLastName={this.sortbyLastName} sortbyEmail={this.sortbyEmail}/>
          </div>
        );
      }
}

export default EmployeeDir;