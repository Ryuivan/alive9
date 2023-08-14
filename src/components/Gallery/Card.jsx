import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const gallery = [
  {
    id: 1,
    url: "https://cdn.discordapp.com/attachments/1138154440512241845/1138154911096385576/PLENO_1_FINAL-2.jpg",
    alt: "Photo Rapat Pleno 1",
    title: "Pleno 1",
    date: "27 JULI 2023",
  },
  {
    id: 2,
    url: "https://cdn.discordapp.com/attachments/1138154440512241845/1138154911096385576/PLENO_1_FINAL-2.jpg",
    alt: "Photo Rapat Pleno 1",
    title: "Pleno 1",
    date: "27 JULI 2023",
  },
  {
    id: 3,
    url: "https://cdn.discordapp.com/attachments/1138154440512241845/1138154911096385576/PLENO_1_FINAL-2.jpg",
    alt: "Photo Rapat Pleno 1",
    title: "Pleno 1",
    date: "27 JULI 2023",
  },
];

const Card = () => {
  return (
    <section className="gallery-card-section">
      <div className="gallery-card-title">
        <h1>Gallery</h1>
      </div>
      <div className="gallery-card-container">
        {gallery.map((card) => (
          <Link to={`${card.title}`} style={{ textDecoration: "none" }}>
            <div className="gallery-card-gallery" key={card.id}>
              <div className="gallery-card-gallery-image">
                <img src={card.url} alt={card.alt} />
              </div>
              <h1>{card.title}</h1>
              <h2>{card.date}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="gallery-wave">
        <div className="wave1"></div>
      </div>
    </section>
  );
};

export default Card;
