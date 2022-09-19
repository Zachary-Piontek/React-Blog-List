import React from 'react';
import './BlogCard.css';

export default function BlogCard({ title, subtitle, text, image, author_id }) {
  return (
    <div className="blog-card">
      <div className="details">
        <h3>Written By: {author_id}</h3>
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        <div className="text">{text}</div>
      </div>
      <div className="image">
        <img src={image} />
      </div>
    </div>
  );
}
