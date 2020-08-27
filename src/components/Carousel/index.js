import React from 'react';
import { CardGroupContainer, Title, ExtraLink } from './styles';
import Card from './components/Card';
import Slider, { SliderItem } from './components/Slider';

function Carousel({
  ignoreFirst,
  category,
}) {
  const categoryTitle = category.name;
  const categoryColor = category.color;
  const categoryExtraLink = category.link_extra;
  const { games } = category;
  return (
    <CardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink
            && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
            )}
        </>
      )}
      <Slider>
        {games.map((game, index) => {
          if (ignoreFirst && index === 0) {
            return null;
          }

          return (
            <SliderItem key={game.name}>
              <Card
                title={game.name}
                URL={game.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </CardGroupContainer>
  );
}

export default Carousel;
