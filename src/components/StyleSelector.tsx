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
    const [previousStyle, setPreviousStyle] = useState<number>(3);
    const [disabled, setDisabled] = useState(false);

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
        const incrementNumber = () => {
            setStyle((style) => (style < 3 ? style + 1 : 1));
        };

        const randomTime = Math.floor(Math.random() * 1000) + 500;

        setDisabled(true);

        const timeout = setTimeout(() => {
            setDisabled(false);
            clearInterval(interval);
        }, randomTime);

        const interval = setInterval(incrementNumber, 150);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    };

    return (
        <div className="page">
            <div className="style">{renderCurrentStyle(style)}</div>
            <button onClick={chooseStyle} disabled={disabled}>
                DESTINY
            </button>
        </div>
    );
};
