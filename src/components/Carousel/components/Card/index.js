import React from 'react';
import { CardContainer, IframeContainer, OverlayContainer } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    '$7',
  );
}

function Card({ title, URL, categoryColor }) {
  const isItchUrl = URL.includes('itch.io');
  if (isItchUrl) {
    return (
      <OverlayContainer
        target="_blank"
        title={title}
        href={URL}
        style={{ borderColor: categoryColor || 'red' }}
      >
        <IframeContainer
          src={`${URL}?dark=true`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </OverlayContainer>
    );
  }
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
