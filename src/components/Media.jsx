import React from 'react';
import './Media.css';

const Media = () => {
  const videos = [
    {
      id: "YlzYTr_3jBU",
      title: "యువతి జీవితాన్నే మార్చేసిన పానీ పూరి | Karimnagar | SumanTV",
      description: "SumanTV's in-depth feature on Purnima's inspiring story and her commitment to hygiene and quality in street food."
    },
    {
      id: "rbuRNvRvTII",
      title: "M Pharmacy Student Selling Pani Puri | V6 Life",
      description: "Purnima's journey featured on V6 Life, highlighting her unique approach to street food."
    },
    {
      id: "XVxQFDdz0CY",
      title: "Science Meets Street Food | T News",
      description: "T News covers the story of how an M. Pharmacy graduate became a local sensation in Karimnagar."
    },
    
    {
      id: "A06Jed9XoZY",
      title: "Purnima's Interview | Shiva Studios",
      description: "An in-depth look into the daily preparation and the hygiene standards at the food court."
    }
  ];

  return (
    <section className="media-section" id="media">
      <div className="media-container">
        <div className="media-header">
          <span className="subtitle">Media Coverage</span>
          <h2 className="title">As Seen on <span>News Channels</span></h2>
          <p>Our commitment to hygiene and quality has been recognized by top media outlets.</p>
        </div>

        <div className="media-grid">
          {videos.map((video) => (
            <div className="video-card" key={video.id}>
              <div className="video-responsive">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-info">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;