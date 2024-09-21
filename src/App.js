// App.js
import React from 'react';
import './App.css'; 


/*  function Heading() {
  return (
    <div className="App">
      <h1 className="big-heading">This is a Big Heading</h1>      for heading part
    </div>
  );
}
  */

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
        title="First Month Pregnant"
        content="IEEE project.."
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/6/6b/Icecat1-300x300.svg"
      />
      <Card
        title="Second Month Pregnant"
        content="IEEE project."
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/6/6b/Icecat1-300x300.svg"
      />
      <Card
        title="Third Month Pregnant"
        content="IEEE project."
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/6/6b/Icecat1-300x300.svg"
      />
      <Card
        title="Forth Month Pregnant"
        content="IEEE project."
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/6/6b/Icecat1-300x300.svg"
      />
      <Card
        title="Fifth Month Pregnant"
        content="IEEE project."
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/6/6b/Icecat1-300x300.svg"
      />
      <Card
        title="Sixth  Month Pregnant"
        content="IEEE project."
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/6/6b/Icecat1-300x300.svg"
      />
       <Card
        title="Seventh  Month Pregnant"
        content="IEEE project."
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/6/6b/Icecat1-300x300.svg"
      />
       <Card
        title="Eight  Month Pregnant"
        content="IEEE project."
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/6/6b/Icecat1-300x300.svg"
      />
       <Card
        title="Ninth  Month Pregnant"
        content="IEEE project."
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/6/6b/Icecat1-300x300.svg"
      />
    </div>
  );
};

export default App;
