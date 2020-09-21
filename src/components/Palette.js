import React, {Component} from 'react';
import ColorBox from "./ColorBox";
import '../css/Palette.css';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500
        }
    }

    handleChange = event => {
        this.setState({level: event.target.value})
    }

    render() {
        const {colors} = this.props.palette;
        const {level} = this.state;
        return (
            <div className="palette">
                {/*Navbar*/}
                <div style={{display: 'flex', alignItems: 'centerg'}}>
                    <label>{level}</label>
                    <input type="range" min="100" max="900" step="100" value={level} onChange={this.handleChange}/>
                </div>

                <div className="palette-colors">
                    {colors[level].map(color => (
                        <ColorBox background={color.hex} name={color.name}/>
                    ))}
                </div>
                {/*footer*/}
            </div>
        );
    }
}

export default Palette;
