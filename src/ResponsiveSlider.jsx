import Slider from "react-slick";
import BookItem from "./BookItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ResponsiveSlider({ books }) {
  var settings = {
    dots: true,
    arrows: false,
    // centerPadding: "8px",
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1720,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 1420,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {books.books.map(
          (book, index) => index < 10 && <BookItem data={book} key={book.id} />
        )}
      </Slider>
    </div>
  );
}

export default ResponsiveSlider;
