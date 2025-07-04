import React from 'react';
import { InfinitySpin } from 'react-loader-spinner' 

export default class Loader extends React.Component {
    
    render() {
        return (
            <div>
                <InfinitySpin
                width='100'
                height='70'
                color='#3f51b5'
                ariaLabel="loading"
                wrapperStyle
                wrapperClass />
            </div>
        );
    }
}