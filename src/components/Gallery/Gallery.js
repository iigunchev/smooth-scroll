import React from "react";
import "./style.scss";

const images = [
  {
    src: 'https://images.unsplash.com/photo-1521336575822-6da63fb45455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    title: 'Kayak in Norway',
    subtitle: 'Steep valley sides and moody clouds made this paddle an overwhelming experience. ',
    location: 'Gudvangen, Norway',
  },
  {
    src: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1703&q=80',
    title: 'Rock and Sea',
    subtitle: 'A unique mix of rock climbing by the sea and sailing in a private boat',
    location: 'Tonsai, Ao Nang, Thailand',
  },
  {
    src: 'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    title: 'Mountain Hiking',
    subtitle: 'A full day hike with a group of like minded souls in the heart of Kaneohe',
    location: 'Haiku Stairs, Kaneohe, United States',
  },
]

const Gallery = () => {
  return <section className="gallery-wrap section-wrapper">Gallery</section>;
};

export default Gallery;
