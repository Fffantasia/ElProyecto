import React from 'react';
import './images.css';

function Images(){
    return(
        <div className='images'>
            <div className="images-cont">
                <div className='wrapper'>
                    <div className="slide">
                        <div className="gallery-cont">
                            <div className="gallery-wrap">
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                                <div className="item"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Images;