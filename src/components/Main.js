import React from 'react'
// Foot image for Promotion
import back_for_main from "../img/background/foot-for-home.jpg";
// Brands image for Promotion
import adidas_promotion from "../img/promotion-for-main/adidas_promotion.png";
import nike_promotion from "../img/promotion-for-main/nike_promotion.png";
import puma_promotion from "../img/promotion-for-main/puma_promotion.png";




const Main = () => {
    
  return (
    <div>
        <div className="main-container container mb-3">
            <div className="row justify-content-between">
                <div className="col-6 col-sm-4 bg-info">
                    <a href="/" className='fw-bold'><i class="bi bi-geo-alt-fill me-2 fs-5"></i>Find a Store</a>
                </div>
                <div className="col-4 text-end">
                    <div className="row justify-content-end">
                        <div className="ticket-circle d-md-none">
                            <i class="fa-solid fa-ticket text-light fs-3"></i>
                        </div>
                        <p className='mb-0 d-none d-md-block'>Free Shipping for Rewards or Orders $75%+</p>
                    </div>
                    <div className="row"><a href="/" className='fw-bold d-none d-md-block'>Sign in / Join Now</a></div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row justify-content-evenly">
                <div className="promotion-box col-12 col-md-3 mb-3 mb-md-0 text-light fw-bold py-2 px-5 pt-3 text-center">
                    20% OFF Blowfish Malibu, Roxy & Sperry with code SAVEONFAVES
                </div>
                <div className="promotion-box col-12 col-md-3 mb-3 mb-md-0 text-light fw-bold py-2 px-5 text-center">
                    <div className="row justify-content-center">25% OFF Journee Collection</div>
                    <div className="row"><a href="/" className='fw-bold'>Sign in</a></div>
                    <div className="row"><small className='text-muted'>Prices as marked. Valid online only</small></div>
                </div>
                <div className="promotion-box col-12 col-md-3 text-light fw-bold py-2 px-5 pt-3 text-center">
                    <div className="row justify-content-center">30% OFF Women's & Kids Boots</div>
                    <div className="row fw-bold"><a href="/">Shop Now</a></div>
                </div>
            </div>
        </div>

        <section class="hero container">
            <div class="row">
                <div class="col-lg-9 col-md-8 col-sm-10">
                    <div className="container">
                        <div class="row justify-content-center">
                            <h1 class="greeting text-center ">20% OFF</h1>
                        </div>
                        <div className="row align-items-center justify-content-center">
                            <img src={adidas_promotion} alt="brand" className="promotion-brand adidas_promotion" />
                            <img src={nike_promotion} alt="brand" className="promotion-brand nike_promotion" />
                            <img src={puma_promotion} alt="brand" className="promotion-brand puma_promotion" />
                        </div>
                        <div className="promotion-sub-box-container row justify-content-center">
                            <div className="promotion-sub-box col-12 col-lg-8 p-3 mt-5 mt-lg-4">
                                <h4 className='text-center'>Save on Hot Famous Brands</h4>
                                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus  ratione tes magnam debitis laborum.</p>
                                <div className="d-flex justify-content-center">
                                    <a href="/" className='shop-now fw-bold fs-3 text-center text-uppercase'>Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>              
            <img src={back_for_main} class="hero-foot img-fluid" alt="" />   
        </section>
    </div>
  )
}

export default Main