import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SimpleSlider(props) {
  let Show = props.Show;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Show,
    slidesToScroll: 6,
  };

  return (
    <div className="forSliderDiv">
      <Slider {...settings}> {props.mysongs}</Slider>
    </div>
  );
}
