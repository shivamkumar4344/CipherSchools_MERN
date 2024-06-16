import logo from './logo.svg';
import './App.css';
import {Component} from "react";
class App extends Component{
      name = "Shivam";
      render(){
        return(
          <>
          <div>
              <h1>The name is {this.name}</h1>
          </div>
          <div>
            <h1>New name is {this.name}</h1>
          </div>
          </>
        )
      }
}

export default App;
