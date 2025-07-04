import React, { useState, useEffect } from "react";
import "./Carousel.css";

const slides = [
  {
    image: "https://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/revslider/slide1/slide-slide1.jpg",
    text: "Delicious Sweet Cakes",
  },
  {
    image: "https://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/revslider/slide1/slide-slide3.jpg",
    text: "Colorful French Macarons",
  },
  {
    image: "https://www.nicdark-themes.com/themes/food/wp/demo/sweet-cake/wp-content/uploads/sites/2/revslider/slide1/slide-slide2.jpg",
    text: "Tasty Cupcakes Collection",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [words, setWords] = useState([]);

  useEffect(() => {
    const splitWords = slides[index].text.split(" ");
    setWords([]);
    splitWords.forEach((word, i) => {
      setTimeout(() => {
        setWords((prev) => [...prev, word]);
      }, i * 300);
    });
  }, [index]);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="carousel">
      <img src={slides[index].image} alt="slide" className="carousel-image" />
      <div className="carousel-overlay">
        <h2 className="carousel-text">
          {words.map((word, i) => (
            <span key={i} className="animated-word">{word}&nbsp;</span>
          ))}
        </h2>
      </div>

      <button className="nav left" onClick={prevSlide}>❮</button>
      <button className="nav right" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Carousel;
