// App.js
import React from 'react';
import './App.css'; 

const Card = ({ title, content, imageUrl }) => {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-content">{content}</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <Card
        title="first card"
        content="IEEE project.."
        imageUrl="https://via.placeholder.com/300"
      />
      <Card
        title="second card"
        content="IEEE project."
        imageUrl="https://via.placeholder.com/300"
      />
      <Card
        title="Third Card"
        content="IEEE project."
        imageUrl="https://via.placeholder.com/300"
      />
    </div>
  );
};

export default App;
