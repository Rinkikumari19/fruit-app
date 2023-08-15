import CustomButton from "../../shared/CustomButton";
// import CloseIcon from '@mui/icons-material/Close';

export default function OutOfStockFood(props) {
    return (
        <>
            <div className=" home-div">
                <div className="contact-head">
                    <u>
                        {/* <AddCloseIcon /> */}
                        <div className="available-dot" style={{background:"red", marginLeft:"43%"}}></div>
                        <h5>Out Of Stock Fruits</h5>
                    </u>
                </div>
                <div className="available-div">
                    <div className="fruit-card fruit-c-ml">
                        <img className='sub-slider' src='https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/63b69966-4855-4b1f-80a2-74796c8a5e09_425x425.JPG' alt="custard apple" />
                        <h4>Custard apple</h4>
                        <p>1kg | 500g | 250g</p>
                        <div className="fruits-items">
                            <CustomButton>MRP ₹250</CustomButton>
                            <CustomButton className="heading">Add</CustomButton>
                        </div>
                    </div>

                    <div className="fruit-card fruit-c-ml">
                        <img className='sub-slider' src='https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/6ea997b9-efca-415c-951d-c315c177acb8_425x425.JPG' alt="pine apple" />
                        <h4>Pine apple</h4>
                        <p>2kg | 1kg</p>
                        <div className="fruits-items">
                            <CustomButton>MRP ₹100</CustomButton>
                            <CustomButton className="heading">Add</CustomButton>
                        </div>
                    </div>
                    <div className="fruit-card fruit-c-ml">
                        <img className='sub-slider' src='https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/760765ec-aac4-41c0-a9aa-f3269d63e89b_425x425.jpg' alt="apple" />
                        <h4>Apple</h4>
                        <p>1kg | 500g | 250g</p>
                        <div className="fruits-items">
                            <CustomButton>MRP ₹80</CustomButton>
                            <CustomButton className="heading">Add</CustomButton>
                        </div>
                    </div>

                    <div className="fruit-card fruit-c-ml">
                        <img className='sub-slider' src='https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/9a6422c2-fdbe-4d33-b6b1-4dbcad83b5b3_425x425.jpg' alt="kiwi" />
                        <h4>Kiwi</h4>
                        <p>2pc | 1pc</p>
                        <div className="fruits-items">
                            <CustomButton>MRP ₹350</CustomButton>
                            <CustomButton className="heading">Add</CustomButton>
                        </div>
                    </div>

                    <div className="fruit-card fruit-c-ml">
                        <img className='sub-slider' src=' https://i1.wp.com/fruitsonline.in/wp-content/uploads/2020/04/Pear.jpg?resize=299%2C242&ssl=1' alt="pear" />
                        <h4>Pear</h4>
                        <p>2kg | 1kg | 500g </p>
                        <div className="fruits-items">
                            <CustomButton>MRP ₹100</CustomButton>
                            <CustomButton className="heading">Add</CustomButton>
                        </div>
                    </div>

                    <div className="fruit-card fruit-c-ml">
                        <img className='sub-slider' src='https://i2.wp.com/fruitsonline.in/wp-content/uploads/2020/04/lychee.jpg?resize=299%2C185&ssl=1' alt="lychee" />
                        <h4>Lichi</h4>
                        <p>1kg  | 500g </p>
                        <div className="fruits-items">
                            <CustomButton>MRP ₹150</CustomButton>
                            <CustomButton className="heading">Add</CustomButton>
                        </div>
                    </div>

                    <div className="fruit-card fruit-c-ml">
                        <img className='sub-slider' src='https://i1.wp.com/fruitsonline.in/wp-content/uploads/2020/04/Chiku.jpg?resize=299%2C167&ssl=1' alt="chiku" />
                        <h4>Chiku</h4>
                        <p>1kg  | 500g </p>
                        <div className="fruits-items">
                            <CustomButton>MRP 90</CustomButton>
                            <CustomButton className="heading">Add</CustomButton>
                        </div>
                    </div>
                    <div className="fruit-card fruit-c-ml">
                        <img className='sub-slider' src='https://i0.wp.com/fruitsonline.in/wp-content/uploads/2020/04/Alphonsos.jpg?resize=299%2C168&ssl=1' alt="mango" />
                        <h4>Mango</h4>
                        <p>2kg | 1kg  | 500g </p>
                        <div className="fruits-items">
                            <CustomButton>MRP ₹200</CustomButton>
                            <CustomButton className="heading">Add</CustomButton>
                        </div>
                    </div>
                    <div className="fruit-card fruit-c-ml">
                        <img className='sub-slider' src='https://i0.wp.com/fruitsonline.in/wp-content/uploads/2020/04/melon.png?resize=299%2C160&ssl=1' alt="watermelon" />
                        <h4>Watermelon</h4>
                        <p>5kg | 2kg | 1kg  | 500g </p>
                        <div className="fruits-items">
                            <CustomButton>MRP ₹350</CustomButton>
                            <CustomButton className="heading">Add</CustomButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}