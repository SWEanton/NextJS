import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Styles from '../styles/AirdropButton.module.css';
import Image from 'next/image';


const HomePage: React.FC = () => {
    const [clicked, setClicked] = useState(false);
    const [address, setAddress] = useState('');
    const [backgroundPosition, setBackgroundPosition] = useState('0px 0px');

    useEffect(() => {
        const animation = setInterval(() => {
            if (backgroundPosition === '0px 0px') {
                setBackgroundPosition('10px 10px');
            } else {
                setBackgroundPosition('0px 0px');
            }
        }, 2500);

        return () => clearInterval(animation);
    }, [backgroundPosition]);

    const handleButtonClick = async () => {
        setClicked(true);

        try {
            if (!web3) {
                console.log('Web3 is not available.');
                return;
            }

            // Prompt the user to connect to MetaMask if not connected
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            // Now you can use web3 to interact with your smart contracts
            console.log(`Airdropping to address: ${address}`);
            // Add your airdrop logic here

        } catch (error) {
            console.error('Airdrop error:', error);
        }
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
                <main style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100%', 
    width: '100vw',  // Add this to ensure the full width
    position: 'absolute',  // Use absolute positioning
    top: '50%',  // Center vertically
    left: '50%',  // Center horizontally
    transform: 'translate(-50%, -50%)'  // Adjusts for the actual center
}}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input 
                            type="text" 
                            placeholder="Enter Wallet Address" 
                            value={address} 
                            onChange={(e) => setAddress(e.target.value)}
                            style={{
                                width: '300px',
                                fontSize: '18px',
                                padding: '10px',
                                marginRight: '10px',
                                borderRadius: '15px',
                                border: '1px solid #ccc',
                                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'
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
