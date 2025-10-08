import React from "react";
import "./MyCarousel.css";

const MyCarousel  = () => {
  return (
    
    
    <div id="myCarousel" className="container carousel slide mb-6" data-bs-ride="carousel">
      {/* Indicadores */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          className="active"
          aria-current="true"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner rounded-5">
        <div className="carousel-item">
          <img src="https://preview.redd.it/1920x1080-interstellar-black-hole-wallpaper-by-me-made-in-v0-ba6o4k61m47f1.png?auto=webp&s=7fa371ad8765c2321e3215a4771b690f83bbacc6" alt="" className="d-block w-100 carousel-img"/>
          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Titulo</h1>
              <p className="opacity-75">
                Some representative placeholder content for the first slide of the
                carousel.
              </p>
              <p>
                <a className="btn btn-lg btn-primary rounded-5" href="#">
                  Assista
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img src="https://preview.redd.it/1920x1080-interstellar-black-hole-wallpaper-by-me-made-in-v0-ba6o4k61m47f1.png?auto=webp&s=7fa371ad8765c2321e3215a4771b690f83bbacc6" alt="" className="d-block w-100 carousel-img"/>
          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Titulo</h1>
              <p>Some representative placeholder content for the second slide of the carousel.</p>
              <p>
                <a className="btn btn-lg btn-primary rounded-5" href="#">
                  Assista
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="carousel-item active">
          <img src="https://preview.redd.it/1920x1080-interstellar-black-hole-wallpaper-by-me-made-in-v0-ba6o4k61m47f1.png?auto=webp&s=7fa371ad8765c2321e3215a4771b690f83bbacc6" alt="" className="d-block w-100 carousel-img"/>
          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Titulo</h1>
              <p>Some representative placeholder content for the third slide of this carousel.</p>
              <p>
                <a className="btn btn-lg btn-primary rounded-5" href="#">
                  Assista
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCarousel;
