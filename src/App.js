import React, { Component } from 'react'
import './App.css'
import Hello from './hello'


class App extends Component {

   render(){
    const fontSizeMapper = word => Math.log2(word.value) * 3;
    const rotate = word => word.value % 180;

   return (
      <div className='App'>
        <div><Hello text={'Hello world'}/></div>
      </div>
   )
   }
}
export default App