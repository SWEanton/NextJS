import React, { useState } from 'react';
import Header from '../components/Header';
import Styles from '../styles/AirdropButton.module.css';

const HomePage: React.FC = () => {
    const [clicked, setClicked] = useState(false);

    const handleButtonClick = () => {
        setClicked(true);
    }

    return (
        <div>
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
    );
}

export default HomePage;
