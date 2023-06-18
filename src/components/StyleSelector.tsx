import React from 'react';
import '../styles/global.css';
import { useRandomStyle } from '../hooks/useRandomStyle';
import styleOne from '../assets/style1.png';
import styleTwo from '../assets/style2.png';
import styleThree from '../assets/style3.png';
import { DESTINY } from '../constants';

export const StyleSelector = () => {
    const { currentStyle, randomizeStyle, isRandomizeButtonDisabled } =
        useRandomStyle();

    /**
     * Accepts a number representing a style and returns an image for that style.
     * @param currentStyle A number representing one of three styles.
     * @returns The image representing the current style.
     */
    const renderCurrentStyle = (currentStyle: number) => {
        switch (currentStyle) {
            case 1:
                return <img src={styleOne} alt="The current style" />;
            case 2:
                return <img src={styleTwo} alt="The current style" />;
            case 3:
                return <img src={styleThree} alt="The current style" />;
        }
    };

    return (
        <main>
            <section>{renderCurrentStyle(currentStyle)}</section>
            <button
                onClick={randomizeStyle}
                disabled={isRandomizeButtonDisabled}
            >
                {DESTINY}
            </button>
        </main>
    );
};
