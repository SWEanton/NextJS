// pages/index.tsx
import React from 'react';
import Header from '../components/Header';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Rewriting The Future Of Work, Collectively</h1>
        <p>Monetise your knowledge through the community...</p>
        <button>Airdrop me reitokens please!</button>
   

        <div className="features">
          {/* Feature icons and descriptions */}
        </div>
      </main>
    </div>
  );
}

export default HomePage;
