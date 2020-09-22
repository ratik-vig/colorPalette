import React, {Component} from 'react';
import ColorBox from "./ColorBox";
import '../css/Palette.css';
import Navbar from "./Navbar";

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
                <Navbar
                    handleChange = {this.handleChange}
                    level = {level}
                />
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
