import './index.css'
import React from 'react'
import Card1 from "../Card1";
import Carousel from "react-elastic-carousel";


export default function Slider1() {
    const cardProps = [
        {
          title: "Jeep",
          source:
            "https://resources.turo.com/f/81934/386x308/9bf274f19e/image_make_jeep-2x.jpg",
        },
        {
          title: "Tesla",
          source:
            "https://resources.turo.com/f/81934/386x308/7dcf9bff19/image_make_tesla-2x.jpg",
        },
        {
          title: "Subaru",
          source:
            "https://resources.turo.com/f/81934/386x308/ef857a4438/image_make_subaru-2x.jpg",
        },
        {
          title: "Porsche",
          source:
            "https://resources.turo.com/f/81934/386x308/7e7ce60797/image_make_porsche-2x.jpg",
        },
        {
          title: "BMW",
          source:
            "https://resources.turo.com/f/81934/386x308/0c4f5f5186/image_make_bmw-2x.jpg",
        },
        {
          title: "Mercedes-Benz",
          source:
            "https://resources.turo.com/f/81934/386x308/065308f2c4/image_make_mb-2x.jpg",
        },
        {
          title: "Toyota",
          source:
            "https://resources.turo.com/f/81934/386x308/2809ca8702/image_make_toyota-2x.jpg",
        },
        {
          title: "Nissan",
          source:
            "https://resources.turo.com/f/81934/386x308/994b145776/image_make_nissan-2x.jpg",
        },
        {
          title: "Lamborghini",
          source:
            "https://resources.turo.com/f/81934/386x308/a470b4f290/image_make_lambo-2x.jpg",
        },
        {
          title: "Ford",
          source:
            "https://resources.turo.com/f/81934/386x308/0431f873ac/image_make_ford-2x.jpg",
        },
      ];
  return (
    <div className="carouselContainer">
      <div className="carouselHeadingContainer">
        <p className="carouselHeading">Browse by make</p>
      </div>
    <Carousel
      outerSpacing={0}
      itemPadding={[10, 0]}
      itemsToScroll={1}
      itemsToShow={5}
      pagination={false}
    >
      {cardProps.map((item) => {
        return <Card1 title={item.title} source={item.source} />;
      })}
    </Carousel>
  </div>
  )
}
