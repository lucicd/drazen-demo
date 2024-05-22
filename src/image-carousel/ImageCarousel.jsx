import { useEffect, useState } from "react";
import Spinner from "../shared/Spinner";
import Error from "../shared/Error";

import Image from "./Image";

export default function ImageCarousel() {
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [images, setImages] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      setIsFetching(true);
      try {
        const response = await fetch(
          "https://dog.ceo/api/breeds/image/random/50"
        );
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        setError({
          message: "Failed to fetch images. Please try again later.",
        });
      }
      setIsFetching(false);
    }
    fetchImages();
  }, []);

  const generateImages = () => {
    return images.message.map((image, index) => {
      return (
        <Image
          key={index}
          imageSrc={image}
          imageAlt={`Dog number ${index + 1}`}
          imageActive={index === 0}
        />
      );
    });
  };

  if (error) {
    return (
      <Error
        title="An error occurred!"
        message={error.message}
        onConfirm={() => setError(null)}
      />
    );
  }

  return (
    <>
      {isFetching && <Spinner />}
      {!isFetching && (
        <div id="carouselExample" className="carousel slide bg-dark">
          <div className="carousel-inner">{images && generateImages()}</div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}
    </>
  );
}
