import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AvailableFood from "./FruitsItems/AvailableFood";
import HealthyFood from "./FruitsItems/HealthyFood";
import OfferFood from "./FruitsItems/OfferFood";
import OutOfStockFood from "./FruitsItems/OutOfStockFood";
import UpcomingFood from "./FruitsItems/UpcomingFood";
import FruitsList from "./FruitsList";

export default function Home() {
    const [food, setFood] = useState('')
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <div className=" navbar-items home-div">
                <div className="sideMenu">
                    <div className="fruit-item heading">Your Items</div>
                    <div className="fruit-item" onClick={() => { setFood('available') }}>Available Fruits</div>
                    <div className="fruit-item" onClick={() => { setFood('offer') }}>Offers on Fruits</div>
                    <div className="fruit-item" onClick={() => { setFood('healthy') }}>Most healthy Fruits</div>
                    <div className="fruit-item" onClick={() => { setFood('upcoming') }}>Upcoming Fruits</div>
                    <div className="fruit-item" onClick={() => { setFood('outOfStock') }}>Out of Stock Fruits</div>
                </div>
                <div style={{ width: "55%" }}>
                    <Carousel responsive={responsive} autoPlay={true} infinite={true} draggable={true}>
                        <div>
                            <img className='big-slider' src='https://th.bing.com/th/id/R.2a0cdb30a4389d1d13d312f11fda6209?rik=k%2bUEyQBNQo3cMA&riu=http%3a%2f%2fwww.hdwallpaper.nu%2fwp-content%2fuploads%2f2016%2f12%2ffruit-7.jpg&ehk=STxLFmebQqLHNMaQ9Z4MFRc9QR0pNF1KcNU%2f7BPhsm8%3d&risl=&pid=ImgRaw&r=0' alt="fruit-img" />
                        </div>
                        <div>
                            <img className='big-slider' src='https://www.freshproduceshoppe.com/wp-content/uploads/2018/07/online-vegetables-in-gurgaon.jpg' alt="fruit-img" />
                        </div>
                        <div>
                            <img className='big-slider' src='https://www.freshproduceshoppe.com/wp-content/uploads/2018/07/fresh-fruit-delivery-in-gurgaon.jpg' alt="fruit-img" />
                        </div>
                        <div>
                            <img className='big-slider' src='https://i1.wp.com/fruitsonline.in/wp-content/uploads/2020/04/mixfruits.jpg?resize=299%2C211&ssl=1' alt="fruit-img" />
                        </div>

                    </Carousel>
                </div>
                <div style={{ width: '20%' }}>
                    <div className="fruit-card">
                        <img className='sub-slider' src='https://th.bing.com/th/id/OIP.MlbK3H1lALyNz0iPMBBxMwHaEo?pid=ImgDet&rs=1' alt="fruit-img" />
                        <h4>Apple</h4>
                    </div>
                    <div className="fruit-card">
                        <img className='sub-slider' src='https://www.dietspotlight.com/wp-content/uploads/African-Mango-Health-Benefits.jpg' alt="fruit-img" />
                        <h4>Mango</h4>
                    </div>
                </div>
            </div>
            <div>
                {food === 'available' ?
                    <AvailableFood data={food} /> :
                    food === 'offer' ?
                        <OfferFood data={food} />
                        :
                        food === 'healthy' ?
                            <HealthyFood data={food} />
                            : food === 'upcoming' ?
                                <UpcomingFood data={food} />
                                : food === 'outOfStock' ?
                                    <OutOfStockFood data={food} />
                                    :
                                    <FruitsList />
                }


            </div>
        </>
    )
}