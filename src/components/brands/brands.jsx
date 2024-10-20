import React from 'react';
import Header from './headerBrands.jsx';
import './brands.css';

const phones = {
  'Apple': [
    { name: 'iPhone 16', image: './src/assets/16.png', price: '$799', inStock: true, availableColors: ['#000000', '#FFFFFF', '#007AFF', '#FF2D55', '#FFCC00'] },
    { name: 'iPhone 16 Plus', image: './src/assets/16p.png', price: '$899', inStock: false, availableColors: ['#000000', '#FFFFFF', '#4CD964', '#FF5733', '#FFC0CB'] },
    { name: 'iPhone 16 Pro', image: './src/assets/16pr.png', price: '$999', inStock: true, availableColors: ['#101820', '#C0C0C0', '#FFD700', '#5C5D80'] },
    { name: 'iPhone 16 Pro Max', image: './src/assets/16prr.png', price: '$1199', inStock: true, availableColors: ['#101820', '#C0C0C0', '#FFD700', '#5C5D80'] }
  ],
  'Samsung': [
    { name: 'Galaxy S24', image: './src/assets/s24.webp', price: '$799', inStock: true, availableColors: ['#000000', '#FFFFFF', '#E0BBE4','#5B9BD5'] },
    { name: 'Galaxy S24 Plus', image: './src/assets/s24p.webp', price: '$999', inStock: true, availableColors: ['#000000', '#FFFFFF', '#E0BBE4','#5B9BD5'] },
    { name: 'Galaxy S24 Ultra', image: './src/assets/s24u.webp', price: '$1199', inStock: false, availableColors: ['#C0C0C0', '#555555'] },
    { name: 'Galaxy Z Fold 5', image: './src/assets/z5.webp', price: '$1799', inStock: true, availableColors: ['#C0C0C0'] },
  ],
  'Google': [
    { name: 'Pixel 9', image: './src/assets/9.webp', price: '$799', inStock: true, availableColors: ['#000000', '#4682B4', '#FFFFFF'] },
    { name: 'Pixel 9 Pro', image: './src/assets/9p.avif', price: '$999', inStock: false, availableColors: ['#000000', '#FFFFFF','#FFD700'] },
    { name: 'Pixel 9 Pro XL', image: './src/assets/9xl.webp', price: '$1099', inStock: true, availableColors: ['#FFFFFF','#B76E79'] },
    { name: 'Pixel 9 Pro Fold', image: './src/assets/9f.png', price: '$1799', inStock: true, availableColors: ['#000000'] }
  ],
  'OnePlus': [
    { name: 'OnePlus 12', image: './src/assets/12.png', price: '$799', inStock: true, availableColors: ['#000000', '#FFFFFF', '#555555'] },
    { name: 'OnePlus 12 Pro', image: './src/assets/12p.png', price: '$999', inStock: true, availableColors: ['#000000', '#555555'] },
    { name: 'OnePlus Open Apex Edition', image: './src/assets/oa.png', price: '$1699', inStock: false, availableColors: ['#D10032'] },
    { name: 'OnePlus Nord 3', image: './src/assets/n3.png', price: '$599', inStock: true, availableColors: ['#555555'] }
  ],
};

const PhoneRow = ({ brand, models }) => {
  const handleAddToCart = (modelName) => {
    alert(`${modelName} has been added to your cart!`);
  };

  return (
    <div className="phone-row">
      <h3>{brand}</h3>
      <div className="phone-grid">
        {models.map((model, index) => (
          <div key={index} className="phone-item">
            <img src={model.image} alt={model.name} className="phone-image" />
            <h4 style={{ color: 'black' }}>{model.name}</h4>
            <div className="color-circles">
              {model.availableColors.map((color, idx) => (
                <span key={idx} className="color-circle" style={{ backgroundColor: color }}></span>
              ))}
            </div>
            <div className="phone-info">
              <p>{model.price}</p>
              <p style={{ color: model.inStock ? 'green' : 'red' }}>
                {model.inStock ? 'In Stock' : 'Out of Stock'}
              </p>
            </div>
            {/* Add to Cart Button */}
            {model.inStock && (
              <button 
                className="add-to-cart-button" 
                onClick={() => handleAddToCart(model.name)}
                style={{ backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px', padding: '10px', cursor: 'pointer' }}
              >
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header /> {/* Display the Header */}
      <br />
      <br />
      <div className="phone-container">
        {Object.entries(phones).map(([brand, models], index) => (
          <PhoneRow key={index} brand={brand} models={models} />
        ))}
      </div>
    </div>
  );
};

export default App;
