import React, { Component } from 'react'
import './App.css'
import BarChart from './barchart'
import WorldMap from './worldmap'
import Hello from './hello'
class App extends Component {
   render() {
   return (
      <div className='App'>
      <Hello text={'Hello world'}/>
        <div>
          <BarChart data={[5,10,15,20, 15, 10, 5]} size={[500,500]} />
        </div>
        <div>
          <WorldMap />
        </div>
      </div>
   )
   }
}
export default App