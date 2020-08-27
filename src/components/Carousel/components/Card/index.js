import React from 'react';
import CardContainer from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/, '$7');
}

function Card({ title, URL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(URL)}/hqdefault.jpg`;
  return (
    <CardContainer
      url={image}
      href={URL}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={title}
    />
  );
}

export default Card;
