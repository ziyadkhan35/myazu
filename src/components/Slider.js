import React from 'react'
// Slider images
import b0 from '../img/slides/b0.jpg'
import b1 from '../img/slides/b1.jpg'
import b2 from '../img/slides/b2.jpg'
import b3 from '../img/slides/b3.jpg'
import b4 from '../img/slides/b4.jpg'
import b5 from '../img/slides/b5.jpg'
import b6 from '../img/slides/b6.jpg'
import b7 from '../img/slides/b7.jpg'


const Slider = () => {


  return (

    <div>
        <section class="slider-container container-fluid mb-5">
            <div class="row justify-content-center align-items-center">

                <div className="slider-container-1 col-lg-3 col-10">
                    <div className="row justify-content-center align-items-center bg-warning py-xg-5 py-lg-3">
                        <h2 className=' col-10 text-center'>Famous for all</h2>
                        <p className='text-center col-10'>Get the looks you want this season at wallet-happy values. Save online & in-store with code FALLSAVINGS</p>
                        <span className=' col-10 text-center'>GET COUPON</span>
                    </div>
                </div>

                <div class="col-lg-6 text-center my-1 my-md-2 my-lg-0">
                    <img src={b1} className='img-fluid' alt="" />
                </div>
                {/* Slider col start */}    
                {/* <div class="col-6">
                    <div class="slider mb-2 mb-md-0">
                        <div class="slides">
                            <input type="radio" name="radio-btn" id="radio1" />
                            <input type="radio" name="radio-btn" id="radio2" />
                            <input type="radio" name="radio-btn" id="radio3" />
                            <input type="radio" name="radio-btn" id="radio4" />
            
                            <div class="slide first"><img src={b0} class="img-fluid" alt="" /></div>
                            <div class="slide"><img src={b1} class="img-fluid" alt="" /></div>
                            <div class="slide"><img src={b2} class="img-fluid" alt="" /></div>
                            <div class="slide"><img src={b3} class="img-fluid" alt="" /></div>
            
                            <div class="navigation-auto text-center bg-secondary d-flex align-items-center justify-content-center">
                                <div class="auto-btn1 sticky-lg-top"></div>
                                <div class="auto-btn2"></div>
                                <div class="auto-btn3"></div>
                                <div class="auto-btn4"></div>
                            </div>
            
                            <div class="navigation-manual">
                                <label htmlFor="radio1" class="manual-btn"></label>
                                <label htmlFor="radio2" class="manual-btn"></label>
                                <label htmlFor="radio3" class="manual-btn"></label>
                                <label htmlFor="radio4" class="manual-btn"></label>
                            </div>
            
                        </div>
                    </div>
                </div>Slider col end     */}

                <div className="slider-container-2 col-lg-3 col-10">
                    <div className="row justify-content-center align-items-center bg-warning py-xg-5 py-lg-3">
                        <h2 className=' col-10 text-center'>Famous for all</h2>
                        <p className='text-center col-10'>Get the looks you want this season at wallet-happy values. Save online & in-store with code FALLSAVINGS</p>
                        <span className=' col-10 text-center'>GET COUPON</span>
                    </div>
                </div>

            </div>
        </section>
    </div>
  )
}

export default Slider