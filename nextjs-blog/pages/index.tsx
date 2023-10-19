import React, { useState } from 'react';
import Header from '../components/Header';
import Styles from '../styles/AirdropButton.module.css';
import Image from 'next/image';

const HomePage: React.FC = () => {
    const [clicked, setClicked] = useState(false);

    const handleButtonClick = () => {
        setClicked(true);
    }

    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            {/* Background image */}
            <Image 
                src="/thumb-1920-947087.jpg"
                alt="Background"
                layout="fill"
                objectFit="cover"
            />
            
            {/* Content */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
                <Header />
                <main>
                    <button className={`${Styles.AirdropButton} ${clicked ? Styles.clicked : ''}`}
                        onClick={handleButtonClick}>Airdrop</button>
                    <div className="features">
                        {/* Feature icons and descriptions */}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default HomePage;
