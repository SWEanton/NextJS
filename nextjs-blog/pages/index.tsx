import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Styles from '../styles/AirdropButton.module.css';
import Image from 'next/image';

const HomePage: React.FC = () => {
    const [clicked, setClicked] = useState(false);
    const [backgroundPosition, setBackgroundPosition] = useState('0px 0px');

    useEffect(() => {
        const animation = setInterval(() => {
            if (backgroundPosition === '0px 0px') {
                setBackgroundPosition('10px 10px');
            } else {
                setBackgroundPosition('0px 0px');
            }
        }, 2500);  // Animation duration is set to 2.5 seconds

        return () => clearInterval(animation);
    }, [backgroundPosition]);

    const handleButtonClick = () => {
        setClicked(true);
    }

    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <Image 
                src="/thumb-1920-947087.jpg"
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="backgroundImage"
                style={{ backgroundPosition: backgroundPosition }}
            />
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
                <Header />
                <main>
                    <button
                        className={`${Styles.AirdropButton} ${clicked ? Styles.clicked : ''}`}
                        onClick={handleButtonClick}
                    >
                        Airdrop
                    </button>
                    <div className="features">
                        {/* Feature icons and descriptions */}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default HomePage;
