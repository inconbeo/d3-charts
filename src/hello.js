import React, { Component } from 'react';
import { select } from 'd3-selection'

export default class Hello extends Component {
    
     componentDidMount() {
        this.createHello()
     }
      
     createHello() {
        select('h1')
          .text(this.props.text)
    }
    render() {
       return <h1></h1>
     }
}