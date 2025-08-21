import styled from "styled-components";
import { Component } from "react";

export class Choice extends Component{
    state = {
        text : "",
        label: ""
    };

    add = () =>{
        this.setState((prevState)=>{
            return {
                text: prevState.text{label}
            }
        })
    }

    render(){
        console.log(this.props)
        return <div>
            <button onClick={this.add}>add</button>
            <p>{this.state.number}</p>
            <button onClick={this.minus}>minus</button>
        </div>
    }
}