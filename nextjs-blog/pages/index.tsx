import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Styles from '../styles/AirdropButton.module.css';
import Image from 'next/image';

const HomePage: React.FC = () => {
    const [clicked, setClicked] = useState(false);
    const [address, setAddress] = useState(''); // New state for the address input
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
        console.log(`Airdropping to address: ${address}`);
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
                <main style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    {/* Container for centered input and button */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {/* Smoother Address Input Field */}
                        <input 
                            type="text" 
                            placeholder="Enter Wallet Address" 
                            value={address} 
                            onChange={(e) => setAddress(e.target.value)}
                            style={{
                                width: '300px',   // Adjust width as needed
                                fontSize: '18px', // Increase font size
                                padding: '10px',  // Add more padding
                                marginRight: '10px',
                                borderRadius: '15px',  // Increased rounded corners
                                border: '1px solid #ccc',  // Border styling
                                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' // Add a subtle shadow for depth
                            }}
                        />
                        <button
                            className={`${Styles.AirdropButton} ${clicked ? Styles.clicked : ''}`}
                            onClick={handleButtonClick}
                        >
                            Airdrop
                        </button>
                    </div>
                    <div className="features">
                        {/* Feature icons and descriptions */}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default HomePage;