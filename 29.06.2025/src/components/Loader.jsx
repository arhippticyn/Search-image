import React from 'react';
import { InfinitySpin } from 'react-loader-spinner' 

const loader = () => {
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

export default loader