import React, { useState } from 'react';

interface HyperFocusTextProps {
    text: string;
    focusColor?: string;
    blurColor?: string;
    focusWordIndex?: number;
}

export const HyperFocusText: React.FC<HyperFocusTextProps> = ({
    text,
    focusColor = '#ff6b6b',
    blurColor = '#cccccc',
    focusWordIndex = 0,
}) => {
    const [focusIndex, setFocusIndex] = useState(focusWordIndex);
    const words = text.split(' ');

    return (
        <div className="hyper-focus-container p-8">
            <div className="text-2xl leading-relaxed">
                {words.map((word, index) => (
                    <span
                        key={index}
                        onClick={() => setFocusIndex(index)}
                        style={{
                            color: index === focusIndex ? focusColor : blurColor,
                            cursor: 'pointer',
                            transition: 'color 0.2s ease',
                        }}
                        className="mr-2"
                    >
                        {word}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default HyperFocusText;