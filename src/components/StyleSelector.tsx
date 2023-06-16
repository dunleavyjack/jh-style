import React, { useState, useEffect } from 'react';
import styleOne from '../assets/style1.png';
import styleTwo from '../assets/style2.png';
import styleThree from '../assets/style3.png';
import ArrowLeft from '../assets/circle-arrow-left-solid.svg';
import ArrowRight from '../assets/circle-arrow-right-solid.svg';
import '../styles/global.css';

type Styles = 1 | 2 | 3;

export const StyleSelector = () => {
    const [style, setStyle] = useState<number>(3);

    const renderCurrentStyle = (currentStyle: number) => {
        switch (currentStyle) {
            case 1:
                return <img src={styleOne} alt="style" />;
            case 2:
                return <img src={styleTwo} alt="style" />;
            case 3:
                return <img src={styleThree} alt="style" />;
        }
    };

    const chooseStyle = () => {
        const interval = setInterval(() => {
            const newRandomNumber = Math.floor(Math.random() * 3) + 1; // Generates a random number between 0 and 9
            setStyle(newRandomNumber);
        }, 200);

        setTimeout(() => {
            clearInterval(interval);
            const finalNumber = Math.floor(Math.random() * 3) + 1; // Generates a final random number after 5 seconds
            setStyle(finalNumber);
        }, Math.floor(Math.random() * 5000));
    };

    return (
        <div className="page">
            <div className="style">{renderCurrentStyle(style)}</div>
            <button onClick={chooseStyle}>DESTINY</button>
        </div>
    );
};
