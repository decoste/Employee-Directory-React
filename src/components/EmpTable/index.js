import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import './style.css';

export default function EmpTable(props) {
return (
    <Container>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>image</th>
      <th>Gender</th>
      <th onClick={props.sortbyFirstName} className="first">First Name</th>
      <th onClick={props.sortbyLastName}>Last Name</th>
      <th onClick={props.sortbyEmail}>Email</th>
    </tr>
  </thead>
  <tbody>
      {props.people.map((person) => (
      <tr key={person.email}>
      <td><img src={person.picture.thumbnail}/></td>
      <td>{person.gender}</td>
      <td>{person.name.first}</td>
      <td>{person.name.last}</td>
      <td>{person.email}</td>
    </tr>
        ))}
  </tbody>
</Table>
</Container>
    )
}