import React, { useState } from 'react';
import './Quotes.css';

const Quotes = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const imageList = Array.from({ length: 325 }, (_, i) =>
  `/HANUMANJIQUOTES/1749381840215-bb449d5e-c5ad-4f85-8869-a088dab5f4f4_${i + 1}.jpg`
);


  return (
    <div className="gallery-container">
      {selectedImage && (
        <div className="preview-section">
          <span className="close-btn" onClick={() => setSelectedImage(null)}>&times;</span>
          <img src={selectedImage} alt="Preview" className="preview-img" />
          <p className="image-text">This is a detailed view of the selected image.</p>
        </div>
      )}

      <div className="gallery-grid">
        {imageList.map((src, index) => (
          <div className="gallery-item" key={index} onClick={() => setSelectedImage(src)}>
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quotes;
