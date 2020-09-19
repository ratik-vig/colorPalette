import React, {Component} from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import './ColorBox.css';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false
        }
    }

    handleCopy = () => {
        this.setState({copied: true}, () => {
            setTimeout(() => this.setState({copied: false}), 1500);
        });
    }

    render() {
        const {copied} = this.state;
        const {background, name} = this.props;
        return (
            <CopyToClipboard text={background} onCopy={this.handleCopy}>
                <div className="color-box" style={{background}} >
                    <div style={{background}} className={`overlay ${copied ? 'show':'hide'}`} />
                    <div className={`color-badge ${copied ? 'show': 'hide'}`}>
                        <h1>COPIED!</h1>
                        <label>{background}</label>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <label>{name}</label>
                        </div>
                        <button className='copy-btn'>COPY</button>
                    </div>
                    <label className="see-more">MORE</label>
                </div>
            </CopyToClipboard>
        );
    }
}

export default ColorBox;
