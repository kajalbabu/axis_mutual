import React, { useState, useRef, useEffect } from "react";
import "./carousel.css";
import NavButton from "../atoms/buttons/NavButton";

interface CarouselProps {
  items: {
    name: string;
    content: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [disablePrev, setDisablePrev] = useState<boolean>(true);
  const [disableNext, setDisableNext] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const itemWidth = 9.1;

  useEffect(() => {
    if (currentIndex === 0) {
      setDisablePrev(true);
    } else {
      setDisablePrev(false);
    }

    if (currentIndex >= items.length - 4) {
      setDisableNext(true);
    } else {
      setDisableNext(false);
    }
  }, [currentIndex, items.length]);

  const nextSlide = () => {
    if (!disableNext) {
      setCurrentIndex((prev) => prev + 1);
      if (carouselRef.current) {
        carouselRef.current.style.transform = `translateX(-${
          (currentIndex + 1) * itemWidth
        }%)`;
      }
    }
  };

  const prevSlide = () => {
    if (!disablePrev) {
      setCurrentIndex((prev) => prev - 1);
      if (carouselRef.current) {
        carouselRef.current.style.transform = `translateX(-${
          (currentIndex - 1) * itemWidth
        }%)`;
      }
    }
  };

  const navigateToItem = (content: string) => {
    // Navigate to the specific content or link
    window.location.href = content; // Assuming content is a URL
  };

  return (
    <div className="carousel-container">
      {/* <button className="prev-btn btn" onClick={prevSlide} disabled={disablePrev}>
        &lt;
      </button> */}
      <NavButton onClick={prevSlide} disabled={disablePrev} label="&lt;" />

      <div className="carousel">
        <div className="carousel-body" ref={carouselRef}>
          {items.map((item, index) => (
            <div
              className="carousel-item"
              key={index}
              onClick={() => navigateToItem(item.content)}
            >
              <img
                src={item.content}
                alt={`Item ${index + 1}`}
                className="carousel-img"
              />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <button className="next-btn btn"  onClick={nextSlide} disabled={disableNext}>
        &gt;
      </button> */}
      <div className="carousel-fade-container">
      <div className="carousel-fade" hidden={disableNext}></div>
      <NavButton onClick={nextSlide} disabled={disableNext} label="&gt;" />
      </div>
    </div>
  );
};

export default Carousel;
