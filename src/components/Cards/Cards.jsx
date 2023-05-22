import React from 'react';
import './cards.css';

function Cards(){
    return(
        <div className='cards'>
            <div className='cards-cont'>
                <div className="card-cont">
                    <div className='card card1'>
                        <h2>Luz</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <span>Luz</span>
                        <div className='img'></div>
                        <button></button>
                    </div>
                </div>
                <div className="card-cont">
                    <div className='card card2'>
                        <h2>Oscuridad</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <span>Oscuridad</span>
                        <div className='img'></div>
                        <button></button>
                    </div>
                </div>
                <div className="card-cont">
                    <div className='card card3'>
                        <h2>Calus</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <span>Calus</span>
                        <div className='img'></div>
                        <button></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cards;