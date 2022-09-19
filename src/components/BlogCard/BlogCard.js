import React from 'react';
import './BlogCard.css';

export default function BlogCard({ title, subtitle, text, image, authors: { name }, created_at }) {
  return (
    <div className="blog-card">
      <div className="details">
        <h3>Written By: {name}</h3>
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        <div className="text">{text}</div>
        <h4>Created: {created_at}</h4>
      </div>
      <div className="image">
        <img src={image} />
      </div>
    </div>
  );
}
