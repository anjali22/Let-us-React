import React from 'react'
import '../App.css';
import FdcImage from '../Images/unnamed.jpg';

class UploadImage extends React.Component {

    handleClick() {
        console.log('this is:', this);
    }

    render(){
    const style = {
        backgroundColor: 'green',

    };

    return (
        <div className = "UploadImage">
            {/* <img src={FdcImage} alt="FDC coverImage" className="App-image" /> */}
            
            <p>
            <button 
            style={style}
            onClick={(e) => this.handleClick(e)}>
                Upload Image
            </button>
            </p>
        </div>
    )}
}

export default UploadImage;