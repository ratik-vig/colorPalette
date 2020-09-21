import React, {Component} from 'react';
import ColorBox from "./ColorBox";
import '../css/Palette.css';

class Palette extends Component {

    render() {
        const {colors} = this.props;
        return (
            <div className="palette">
                {/*Navbar*/}
                <div className="palette-colors">
                    {colors.map(color => (
                        <ColorBox background = {color.color} name = {color.name} />
                    ))}
                </div>
                {/*footer*/}
            </div>
        );
    }
}

export default Palette;
