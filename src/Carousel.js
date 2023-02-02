import React from 'react';
import "./App.css";
import { useState } from 'react';


const Carousel = (props) => {
    const {children} = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const next = () => {
        setCurrentIndex((currentIndex => {
            currentIndex++;
            if (currentIndex > 3) {
                currentIndex = 0;
            }
            return currentIndex;
        }))
    }
    
    const prev = () => {
        setCurrentIndex (( currentIndex => {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = 3;
            }
            return currentIndex;
        }))
        }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <button onClick={prev} className="left-arrow">
                    &lt;
                </button>
                    <div className="carousel-content-wrapper">
                        <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {children}
                        </div>
                    </div>
                        <button onClick={next} className="right-arrow">
                            &gt;
                        </button>
                </div>

                </div>
    )
}

export default Carousel;