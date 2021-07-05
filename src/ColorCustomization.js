import React from "react";
import "./App.css";
import { TextField } from "@material-ui/core";

class App extends React.Component {
  state = {
    color: "",
  };
  onChangeHandler = (e) => {
    this.setState({
      color: e.target.value,
    });
  };
  render() {
    const styleObj = {
      background: this.state.color,
    };

    return (

      <div style={styleObj} className="Container">
        <div>
        
        <TextField id="standard-basic" label="Standard" 
         onChange={this.onChangeHandler}
         value={this.state.color}
         type="text" />
      
          </div>
      </div>
    );
  }
}

export default App;
