import React from 'react';
import Palette from "./components/Palette";
import seedColors from "./seedColors";
import generatePalette from "./utils/shadeGenerator";

class App extends React.Component{
  render(){
    return(
        <div className="App">
            <Palette palette={generatePalette(seedColors[1])} />
        </div>
    );
  }
}

export default App;
