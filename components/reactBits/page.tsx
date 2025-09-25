"use client";

import SplitText from "./SplitText";

export const TextAnimation = () => {

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <SplitText
            text="I am Kerolos Khairy, Front End Engineer!"
            className="text-2xl font-semibold text-center text-purple-700"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
        />
    )
}