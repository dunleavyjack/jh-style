import { useState } from 'react';
import {
    RANDOM_TIMEOUT_DURATION,
    TIMEOUT_BASE_DURATION,
    MIN_NUM_OF_STYLES,
    MAX_NUM_OF_STYLES,
    INTERVAL_DURATION,
} from '../constants';

export const useRandomStyle = () => {
    const [currentStyle, setCurrentStyle] = useState<number>(3);
    const [isRandomizeButtonDisabled, setIsRandomizeButtonDisabled] =
        useState(false);

    /**
     * Increments the current style (represented as a number) with a set min and max.
     * If the max is reached, the next increment will reset back to the min.
     *
     * @param max The maximum number of styles.
     * @param min The minimum number of styles.
     */
    const incrementStyle = (min: number, max: number) => {
        setCurrentStyle((currentStyle) =>
            currentStyle < max ? currentStyle + min : min
        );
    };

    /**
     * Begins a randomization of potential styles.
     *
     * @returns A closure for the `setInterval` and `setTimeout` used inside this function's scope.
     */
    const randomizeStyle = () => {
        const randomTime =
            Math.floor(Math.random() * RANDOM_TIMEOUT_DURATION) +
            TIMEOUT_BASE_DURATION;

        setIsRandomizeButtonDisabled(true);

        const timeout = setTimeout(() => {
            setIsRandomizeButtonDisabled(false);
            clearInterval(interval);
        }, randomTime);

        const interval = setInterval(
            () => incrementStyle(MIN_NUM_OF_STYLES, MAX_NUM_OF_STYLES),
            INTERVAL_DURATION
        );

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    };

    return {
        currentStyle,
        randomizeStyle,
        isRandomizeButtonDisabled,
    };
};
