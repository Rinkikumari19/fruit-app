import CustomButton from "../../shared/CustomButton"

export default function AvailableFood(props) {
    return (
        <>
            <div className="home-div">
                <div className="contact-head">
                    {/* <LocationIcon className="contact-icon" /> */}
                    {/* <h5>{props.data}</h5> */}
                    <div className="available-dot"></div>
                    <u><h5>Available Fruits</h5></u>
                </div>
                <div className="available-div">
                    <div className="fruit-card fruit-c-ml">
                        <img className='sub-slider' src='https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/63b69966-4855-4b1f-80a2-74796c8a5e09_425x425.JPG' alt="custard apple" />
                        <h4>Custard apple</h4>
                        <p> 1kg | 500g | 250g</p>
                        <div className="fruits-items">
                        <CustomButton>MRP ₹150</CustomButton>
                            <CustomButton className="heading">Add</CustomButton>
                        </div>

                    </div>
                    <div className="fruit-card fruit-c-ml">
                        <img className='sub-slider' src='https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/52f5fdaa-c9c5-4026-bf57-5e2bf06c24cf_425x425.JPG' alt="orange" />
                        <h4>Orange</h4>
                        <p>1kg | 500g </p>
                        <div className="fruits-items">
                            <CustomButton>MRP ₹150</CustomButton>
                            <CustomButton className="heading">Add</CustomButton>
                        </div>
                    </div>
                    {/* <div className="fruit-card fruit-c-ml">
                        <img className='sub-slider' src='https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/639006d2-1a80-411f-b5ac-c4a457839907_425x425.JPG' alt="pomegranate" />
                        <h4>Pomegranate</h4>
                        <p> 500g | 250g</p>
                        <div className="fruits-items">
                            <CustomButton>MRP ₹300</CustomButton>
                            <CustomButton className="heading">Add</CustomButton>
                        </div>
                    </div> */}
                    <div className="fruit-card fruit-c-ml">
                        <img className='sub-slider' src='https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/54d367b3-614b-4208-bfdb-b9a4e52cdeb9_425x425.JPG' alt="banana" />
                        <h4>Banana</h4>
                        <p>12pc </p>
                        <div className="fruits-items">
                            <CustomButton>MRP ₹50</CustomButton>
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
                        <img className='sub-slider' src='https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/ea187c8e-3131-41f4-ad75-f5ddbc5d79ef_425x425.jpg' alt="seedless khajoor" />
                        <h4>Seedless khajoor</h4>
                        <p>250g</p>
                        <div className="fruits-items">
                            <CustomButton>MRP ₹250</CustomButton>
                            <CustomButton className="heading">Add</CustomButton>
                        </div>
                    </div>
                    <div className="fruit-card fruit-c-ml">
                        <img className='sub-slider' src='https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/3c6dfc29-7127-480d-a162-8c12cd2116db_425x425.JPG' alt="guava" />
                        <h4>Guava</h4>
                        <p>1kg | 500g | 250g</p>
                        <div className="fruits-items">
                            <CustomButton>MRP ₹40</CustomButton>
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
                        <img className='sub-slider' src='https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/06dd4c2e-6f7f-49bf-8f8b-c2dd84a8cef2_425x425.jpg' alt="papaya" />
                        <h4>Papaya</h4>
                        <p>2kg | 1kg | 500g </p>
                        <div className="fruits-items">
                            <CustomButton>MRP ₹170</CustomButton>
                            <CustomButton className="heading">Add</CustomButton>
                        </div>
                    </div>
                    {/* <div className="fruit-card fruit-c-ml">
                        <img className='sub-slider' src=' https://i1.wp.com/fruitsonline.in/wp-content/uploads/2020/04/Pear.jpg?resize=299%2C242&ssl=1' alt="pear" />
                        <h4>Pear</h4>
                        <p>2kg | 1kg | 500g </p>
                        <div className="fruits-items">
                            <CustomButton>MRP ₹100</CustomButton>
                            <CustomButton className="heading">Add</CustomButton>
                        </div>
                    </div> */}
                    <div className="fruit-card fruit-c-ml">
                        <img className='sub-slider' src='https://i0.wp.com/fruitsonline.in/wp-content/uploads/2020/04/Pomegranate.jpg?resize=299%2C167&ssl=1' alt="Pomegranate" />
                        <h4>Pomegranate</h4>
                        <p>1kg  | 500g </p>
                        <div className="fruits-items">
                            <CustomButton>MRP ₹150</CustomButton>
                            <CustomButton className="heading">Add</CustomButton>
                        </div>
                    </div>

                    {/* <div className="fruit-card fruit-c-ml">
                        <img className='sub-slider' src='https://i2.wp.com/fruitsonline.in/wp-content/uploads/2020/04/lychee.jpg?resize=299%2C185&ssl=1' alt="lychee" />
                        <h4>Lichi</h4>
                        <p>1kg  | 500g </p>
                        <div className="fruits-items">
                            <CustomButton>MRP ₹150</CustomButton>
                            <CustomButton className="heading">Add</CustomButton>
                        </div>
                    </div> */}


                    <div className="fruit-card fruit-c-ml">
                        <img className='sub-slider' src='https://i1.wp.com/fruitsonline.in/wp-content/uploads/2020/04/grapes.jpg?resize=299%2C186&ssl=1' alt="grapes" />
                        <h4>Grapes</h4>
                        <p>1kg  | 500g | 250g</p>
                        <div className="fruits-items">
                            <CustomButton>MRP ₹60</CustomButton>
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
                    {/* <div className="fruit-card fruit-c-ml">
                        <img className='sub-slider' src='https://i0.wp.com/fruitsonline.in/wp-content/uploads/2020/04/Alphonsos.jpg?resize=299%2C168&ssl=1' alt="mango" />
                        <h4>Mango</h4>
                        <p>2kg | 1kg  | 500g </p>
                        <div className="fruits-items">
                            <CustomButton>MRP ₹200</CustomButton>
                            <CustomButton className="heading">Add</CustomButton>
                        </div>
                    </div> */}
                    {/* <div className="fruit-card fruit-c-ml">
                        <img className='sub-slider' src='https://i0.wp.com/fruitsonline.in/wp-content/uploads/2020/04/melon.png?resize=299%2C160&ssl=1' alt="watermelon" />
                        <h4>Watermelon</h4>
                        <p>5kg | 2kg | 1kg  | 500g </p>
                        <div className="fruits-items">
                            <CustomButton>MRP ₹350</CustomButton>
                            <CustomButton className="heading">Add</CustomButton>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}