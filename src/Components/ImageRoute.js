import React from 'react';
import axios from 'axios';
import '../App.css';

class ImageRoute extends React.Component {
    constructor(props){
        super(props)
        this.state=(
            {posts:[]}
        );
    }

    render(){
        return(<h1>{this.state.posts}</h1>)
    }
}

export default ImageRoute;