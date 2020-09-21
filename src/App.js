import React from 'react';
import Palette from "./components/Palette";
import seedColors from "./seedColors";
import generatePalette from "./utils/shadeGenerator";

class App extends React.Component{
  render(){
      console.log(generatePalette(seedColors[4]))
    return(
        <div className="App">
            <Palette {...seedColors[1]} />
        </div>
    );
  }
}

export default App;
