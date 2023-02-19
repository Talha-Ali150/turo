import "./index.css";
import Card4 from "../Card4";
import Carousel from "react-elastic-carousel";
import React from "react";
import { ReactComponent as Icon1 } from "../../images/slider4Icon1.svg";
import { ReactComponent as Icon2 } from "../../images/slider4Icon2.svg";
import { ReactComponent as Icon3 } from "../../images/slider4Icon3.svg";
import { ReactComponent as Icon4 } from "../../images/slider4Icon4.svg";
import { ReactComponent as Icon5 } from "../../images/slider4Icon5.svg";
import { ReactComponent as Icon6 } from "../../images/slider4Icon6.svg";

export default function Slider4() {
  const cardProps = [
    {
      card4Img:
        "https://resources.turo.com/f/81934/328x262/8e60a37cc1/image_experience_electric.jpg",
      card4icon: <Icon1 />,
      card4title: "Electric",
    },
    {
      card4Img:
        "https://resources.turo.com/f/81934/328x262/1d0c1a5bd7/image_experience_deluxesuperdeluxe.jpg",
      card4icon: <Icon2 />,
      card4title: "Deluxe & Super Deluxe",
    },
    {
      card4Img:
        "https://resources.turo.com/f/81934/328x262/0d5b069ff2/image_experience_petfriendly.jpg",
      card4icon: <Icon3 />,
      card4title: "Pet-friendly",
    },
    {
      card4Img:
        "https://resources.turo.com/f/81934/328x262/61e1aebed5/image_experience_convertibles.jpg",
      card4icon: <Icon4 />,
      card4title: "Convertibles",
    },
    {
      card4Img:
        "https://resources.turo.com/f/81934/328x262/6a22a954a4/image_experience_allwheeldrive.jpg",
      card4icon: <Icon5 />,
      card4title: "All-wheel drive",
    },
    {
      card4Img:
        "https://resources.turo.com/f/81934/328x262/294b8f8aec/image_experience_classiccars.jpg",
      card4icon: <Icon6 />,
      card4title: "Classic cars",
    },
  ];
  return (
    <div className="carouselContainer">
      <div className="carouselHeadingContainer">
        <p className="carouselHeading">Browse by experience</p>
      </div>
      <Carousel
        outerSpacing={0}
        itemPadding={[10, 0]}
        itemsToScroll={1}
        itemsToShow={3}
        pagination={false}
      >
        {cardProps.map((item) => {
          return (
            <Card4 card4Img={item.card4Img} card4icon={item.card4icon} card4title={item.card4title} />
          );
        })}
      </Carousel>
    </div>
  );
}
