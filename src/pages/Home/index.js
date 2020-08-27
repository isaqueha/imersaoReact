/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriesRepository from '../../repositories/categories';

function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    // http://localhost:8080/categories?_embed=games
    categoriesRepository.getAllWithGames()
      .then((categoriesWithGames) => {
        console.log(categoriesWithGames[0].games[0]);
        setInitialData(categoriesWithGames);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {initialData.length === 0 && (<div>Loading...</div>)}

      {initialData.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                title={initialData[0].games[0].name}
                url={initialData[0].games[0].url}
                description={initialData[0].games[0].description}
              />
              <Carousel
                ignoreFirst
                category={initialData[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
