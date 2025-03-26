import React from 'react';
import ReactDOM from 'react-dom/client';
import DogsGallery from './DogsGallery';
import './index.css'; // Optional: global styles if needed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DogsGallery />
  </React.StrictMode>
);