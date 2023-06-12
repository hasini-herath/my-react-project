import './Destination.css';
import { Component } from 'react';

class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
            <div className='des-text'>
                <h2>{this.props.header}</h2>
                <p>{this.props.text}</p>
                </div>
        <div className='des-image'>
        <img alt='img' src={this.props.imag1}></img>
            <img alt='img' src={this.props.imag2}></img>
        </div>
    </div>
        )
    }
}
export default DestinationData;