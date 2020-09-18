import React, {Component} from 'react';
import './ColorBox.css';

class ColorBox extends Component {
    render() {
        const {background, name} = this.props;
        return (
            <div className="color-box" style={{background}} >
                <div className="copy-container">
                    <div className="box-content">
                        <label>{name}</label>
                    </div>
                    <button className='copy-btn'>COPY</button>
                </div>
                <label className="see-more">MORE</label>
            </div>
        );
    }
}

export default ColorBox;
