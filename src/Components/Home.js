import { useState } from "../hooks/CusModules";
import { Carousel } from "../hooks/CusCarousel";
import "react-multi-carousel/lib/styles.css";
import AvailableFood from "./FruitsItems/AvailableFood";
import HealthyFood from "./FruitsItems/HealthyFood";
import OfferFood from "./FruitsItems/OfferFood";
import OutOfStockFood from "./FruitsItems/OutOfStockFood";
import UpcomingFood from "./FruitsItems/UpcomingFood";
import FruitsList from "./FruitsList";
import { FruitsCard, FruitsSlider } from "../utils/common";
import { useWidth } from "../hooks/use-width";
import { SideNavbarItems } from "./SideNavbarItems";

export default function Home({ searchData, menuOpen, updateMenuOpen }) {
  const { width } = useWidth();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [food, setFood] = useState("basic");

  return (
    <>
      <div className=" navbar-items home-div">
        {width <= 768 ? null : (
          <div className="sideMenu">
            <div className="fruit-item heading">Your Items</div>
            <div
              className={`fruit-item ${food === "available" ? "active" : ""}`}
              onClick={() => {
                setFood("available");
              }}
            >
              Available Fruits
            </div>
            <div
              className={`fruit-item ${food === "offer" ? "active" : ""}`}
              onClick={() => {
                setFood("offer");
              }}
            >
              Offers on Fruits
            </div>
            <div
              className={`fruit-item ${food === "healthy" ? "active" : ""}`}
              onClick={() => {
                setFood("healthy");
              }}
            >
              Most healthy Fruits
            </div>
            <div
              className={`fruit-item ${food === "upcoming" ? "active" : ""}`}
              onClick={() => {
                setFood("upcoming");
              }}
            >
              Upcoming Fruits
            </div>
            <div
              className={`fruit-item ${food === "outOfStock" ? "active" : ""}`}
              onClick={() => {
                setFood("outOfStock");
              }}
            >
              Out of Stock Fruits
            </div>
          </div>
        )}

        <div style={{ width: width <= 768 ? "100%" : "55%" }}>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            draggable={true}
          >
            {FruitsSlider.map((ele, i) => {
              return (
                <img key={i} className="big-slider" src={ele} alt="fruit-img" />
              );
            })}
          </Carousel>
        </div>
        {width <= 768 ? null : (
          <div style={{ width: "20%" }}>
            {FruitsCard.map((ele, i) => {
              return (
                <div className="fruit-card" key={i}>
                  <img className="sub-slider" src={ele.img} alt="fruit-img" />
                  <h4>{ele.name}</h4>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div>
        {food === "available" ? (
          <AvailableFood data={food} searchString={searchData} />
        ) : food === "offer" ? (
          <OfferFood data={food} searchString={searchData} />
        ) : food === "healthy" ? (
          <HealthyFood data={food} searchString={searchData} />
        ) : food === "upcoming" ? (
          <UpcomingFood data={food} searchString={searchData} />
        ) : food === "outOfStock" ? (
          <OutOfStockFood data={food} searchString={searchData} />
        ) : (
          <FruitsList data={food} searchString={searchData} />
        )}
      </div>

      {width <= 768 && menuOpen ? (
        <SideNavbarItems {...{ food, setFood, updateMenuOpen, menuOpen }} />
      ) : null}
    </>
  );
}
