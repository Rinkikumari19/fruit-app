import { Carousel } from "../hooks/CusCarousel";
import "react-multi-carousel/lib/styles.css";
import CustomButton from "../shared/CustomButton";
import { FruitLists } from "../utils/common";

export default function FruitsList({ searchString, data }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 450, min: 0 },
      items: 1.5,
    },
  };
  return (
    <>
      <div className="home-div">
        <div>
          <Carousel responsive={responsive}>
            {FruitLists.filter(
              (item) =>
                item.name.toLowerCase().includes(searchString.toLowerCase()) &&
                item.type.toLowerCase().includes(data.toLowerCase())
            ).map((ele, i) => {
              return (
                <div className="fruit-card fruit-c-ml" key={i}>
                  <img className="sub-slider" src={ele.img} alt={ele.alt} />
                  <h4>{ele.name}</h4>
                  <p>{ele.qty}</p>
                  <div className="fruits-items">
                    <CustomButton>{ele.price}</CustomButton>
                    <CustomButton className="heading">Add</CustomButton>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}
