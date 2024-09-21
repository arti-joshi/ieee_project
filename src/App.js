import React from 'react';
import './App.css';

const Card = ({ title, content, imageUrl, link }) => {
  return (
    <div className="card" onClick={() => window.location.href = link} style={{ cursor: 'pointer' }}>
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
    <div className="app-container">
      <h1 className="main-heading">Beginning Trimester of Pregnancy</h1>
      <div className="card-container">
        <Card
          title="2 weeks pregnant"
          content="Ovulation may happen about two weeks after your last period began. If egg meets sperm, you're on your way to being pregnant."
          imageUrl="https://assets.babycenter.com/ims/2018/06/pregnancy-week-2-fertilization_4x3.png"
          link="https://example.com/2-weeks-pregnant"
        />
        <Card
          title="4 weeks pregnant"
          content="Your baby is now an embryo the size of a poppy seed, and the amniotic sac and fluid are forming around it."
          imageUrl="https://assets.babycenter.com/ims/2018/06/pregnancy-week-4-yolk-sac_4x3.png"
          link="https://example.com/4-weeks-pregnant"
        />
        <Card
          title="6 weeks pregnant"
          content="Your baby's heart begins to beat, and the neural tube (precursor to the brain and spinal cord) is forming."
          imageUrl="https://assets.babycenter.com/ims/2018/06/pregnancy-week-6-webbed-hands_4x3.png"
          link="https://example.com/6-weeks-pregnant"
        />
        <Card
          title="8 weeks pregnant"
          content="Your baby's heart is beating at a rapid 150 to 170 times per minute, and tiny fingers and toes are starting to form."
          imageUrl="https://assets.babycenter.com/ims/2018/06/pregnancy-week-8-brain-nerve-cells_4x3.png"
          link="https://example.com/8-weeks-pregnant"
        />
        <Card
          title="8 weeks pregnant"
          content="Your baby's heart is beating at a rapid 150 to 170 times per minute, and tiny fingers and toes are starting to form."
          imageUrl="https://assets.babycenter.com/ims/2018/06/pregnancy-week-8-brain-nerve-cells_4x3.png"
          link="https://example.com/8-weeks-pregnant"
        />
        <Card
          title="8 weeks pregnant"
          content="Your baby's heart is beating at a rapid 150 to 170 times per minute, and tiny fingers and toes are starting to form."
          imageUrl="https://assets.babycenter.com/ims/2018/06/pregnancy-week-8-brain-nerve-cells_4x3.png"
          link="https://example.com/8-weeks-pregnant"
        />
        <Card
          title="8 weeks pregnant"
          content="Your baby's heart is beating at a rapid 150 to 170 times per minute, and tiny fingers and toes are starting to form."
          imageUrl="https://assets.babycenter.com/ims/2018/06/pregnancy-week-8-brain-nerve-cells_4x3.png"
          link="https://example.com/8-weeks-pregnant"
        />
        <Card
          title="8 weeks pregnant"
          content="Your baby's heart is beating at a rapid 150 to 170 times per minute, and tiny fingers and toes are starting to form."
          imageUrl="https://assets.babycenter.com/ims/2018/06/pregnancy-week-8-brain-nerve-cells_4x3.png"
          link="https://example.com/8-weeks-pregnant"
        />
        <Card
          title="8 weeks pregnant"
          content="Your baby's heart is beating at a rapid 150 to 170 times per minute, and tiny fingers and toes are starting to form."
          imageUrl="https://assets.babycenter.com/ims/2018/06/pregnancy-week-8-brain-nerve-cells_4x3.png"
          link="https://example.com/8-weeks-pregnant"
        />
      </div>
    </div>
  );
};

export default App;
