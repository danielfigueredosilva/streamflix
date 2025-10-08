import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./MultiCarousel.css"

export default function MyCarousel() {
  const slides = [
    { src: "https://preview.redd.it/1920x1080-interstellar-black-hole-wallpaper-by-me-made-in-v0-ba6o4k61m47f1.png?auto=webp&s=7fa371ad8765c2321e3215a4771b690f83bbacc6", title: "Titulo 1" },
    { src: "https://preview.redd.it/1920x1080-interstellar-black-hole-wallpaper-by-me-made-in-v0-ba6o4k61m47f1.png?auto=webp&s=7fa371ad8765c2321e3215a4771b690f83bbacc6", title: "Titulo 2" },
    { src: "https://preview.redd.it/1920x1080-interstellar-black-hole-wallpaper-by-me-made-in-v0-ba6o4k61m47f1.png?auto=webp&s=7fa371ad8765c2321e3215a4771b690f83bbacc6", title: "Titulo 3" },
    { src: "https://preview.redd.it/1920x1080-interstellar-black-hole-wallpaper-by-me-made-in-v0-ba6o4k61m47f1.png?auto=webp&s=7fa371ad8765c2321e3215a4771b690f83bbacc6", title: "Titulo 4" },
    { src: "https://preview.redd.it/1920x1080-interstellar-black-hole-wallpaper-by-me-made-in-v0-ba6o4k61m47f1.png?auto=webp&s=7fa371ad8765c2321e3215a4771b690f83bbacc6", title: "Titulo 5" },
    { src: "https://preview.redd.it/1920x1080-interstellar-black-hole-wallpaper-by-me-made-in-v0-ba6o4k61m47f1.png?auto=webp&s=7fa371ad8765c2321e3215a4771b690f83bbacc6", title: "Titulo 6" },
    { src: "https://preview.redd.it/1920x1080-interstellar-black-hole-wallpaper-by-me-made-in-v0-ba6o4k61m47f1.png?auto=webp&s=7fa371ad8765c2321e3215a4771b690f83bbacc6", title: "Titulo 7" },
    { src: "https://preview.redd.it/1920x1080-interstellar-black-hole-wallpaper-by-me-made-in-v0-ba6o4k61m47f1.png?auto=webp&s=7fa371ad8765c2321e3215a4771b690f83bbacc6", title: "Titulo 8" },
  ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="container my-4"> {/* <-- Container do Bootstrap */}
    <p className="text-start mb-4 fs-4">Ação</p>
      <Carousel
        responsive={responsive}
        infinite={true}
        slidesToSlide={1}
        autoPlay={false}
        keyBoardControl={true}
      >
        {slides.map((slide, index) => (
          <div key={index} className="p-2">
            <img
              src={slide.src}
              alt={slide.title}
              className="w-100 rounded-2"
              style={{ height: "130px" , objectFit: "cover" }}
            />
            <h5 className="mt-2">{slide.title}</h5>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
