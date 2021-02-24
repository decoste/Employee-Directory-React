import React, { Component } from "react";
import './style.css'

class Reset extends Component {
    render() {
        return(
            <>
            <button type="button" className="reset" onClick={this.props.reset}>Reset</button>
            </>
        )
    }
}

export default Reset;