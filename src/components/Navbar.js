import React, {Component} from 'react';
import '../css/navbar.css';

class Navbar extends Component {
    render() {
        const {handleChange, level} = this.props;
        return (
            <header className="navbar">
                <div className="logo">
                    <a href = "#">Color Palettes</a>
                </div>
                <div className="slider-container">
                    <label>{level}</label>
                    <input className="slider" type="range" min="100" max="900" step="100" value={level} onChange={handleChange}/>
                </div>
            </header>
        );
    }
}

export default Navbar;
