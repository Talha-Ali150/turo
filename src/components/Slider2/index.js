import React from "react";
import "./index.css";
import Carousel from "react-elastic-carousel";
import Card2 from "../Card2";

export default function Slider2() {
  const cardProps = [
    {
      imgSrc: "https://resources.turo.com/f/81934/416x284/6e085cbe0e/image_outdoors_416x285.jpg",
      text1: "",
      text2: "",
      text3: "",
    },
    {
      imgSrc: "https://resources.turo.com/f/81934/416x284/7c424a07d5/image_unwind_416x285.jpg",
      text1: "",
      text2: "",
      text3: "",
    },
    {
      imgSrc: "https://resources.turo.com/f/81934/416x284/929b21c4fa/image_upgrade_416x285.jpg",
      text1: "",
      text2: "",
      text3: "",
    },
    {
      imgSrc: "https://resources.turo.com/f/81934/416x284/1e828ae782/image_scenic_416x285.jpg",
      text1: "",
      text2: "",
      text3: "",
    },
    {
      imgSrc: "https://resources.turo.com/f/81934/416x284/a3870434ac/image_try_416x285.jpg",
      text1: "",
      text2: "",
      text3: "",
    },
    {
      imgSrc: "https://resources.turo.com/f/81934/416x284/fa43ee8e2b/image_errand_416x285.jpg",
      text1: "",
      text2: "",
      text3: "",
    },
  ];
  return (
    <div>
      <div className="carouselContainer">
        <div className="carouselHeadingContainer">
          <p className="carouselHeading">Browse by make</p>
        </div>
        <Carousel
          itemsToScroll={1}
          itemsToShow={1}
          pagination={false}
        >
          {cardProps.map((item) => {
            return <Card2 imgSrc={item.imgSrc} text1={item.text1} text2={item.text2} text3={item.text3}/>;
          })}
        </Carousel>
      </div>
    </div>
  );
}
