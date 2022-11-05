import React, { useEffect } from 'react'

// Brand logos images
import adidas from '../img/logos/adidas.png';
import nike from '../img/logos/nike.jpg';
import bata from '../img/logos/bata.png';
import puma from '../img/logos/puma.png'
import kangaroos from '../img/logos/kangaroos.png'
import louis_vuitton from '../img/logos/louis-vuitton.png'
import reebook from '../img/logos/reebook.png'
import asics from '../img/logos/asics.jpg'
import babolat from '../img/logos/babolat.png'
import diadora from '../img/logos/diadora.png'
import fila from '../img/logos/fila.png'
import lotto from '../img/logos/lotto.jpg'
import new_balance from '../img/logos/new-balance.png'
import mizuno from '../img/logos/mizuno.png'
import k_swiss from '../img/logos/k-swiss.png'


const BrandLogos = () => {
  
    let currentScrollPosition=0;
    let scrollAmount=360;

    const sCount=document.querySelector('.logos');
    const hScroll=document.querySelector('.horizontal-scroll');
    const btnScrollLeft=document.querySelector('#btn-scroll-left');
    const btnScrollRight=document.querySelector('#btn-scroll-right');

    if(btnScrollLeft && sCount){
      btnScrollLeft.style.opacity='0'
      var maxScroll= -sCount.offsetWidth+hScroll.offsetWidth
    }
    // useEffect(() => {
    //   if(btnScrollLeft && sCount){
    //     document.querySelector('#btn-scroll-left').style.opacity='0'
    //   }
    //    });
    
    
    function scrollHorizonlly(val){
      currentScrollPosition+=(val*scrollAmount);

      if(currentScrollPosition>=0){
        currentScrollPosition=0
        btnScrollLeft.style.opacity='0'
      }else{
        btnScrollLeft.style.opacity='1'
      }

      if(currentScrollPosition<=maxScroll){    
        currentScrollPosition=maxScroll;
        btnScrollRight.style.opacity='0'
      }else{
        btnScrollRight.style.opacity='1'
      }
      
      sCount.style.left=currentScrollPosition+'px'

      
    }
  return (
    <div>
      <section class="brand-logos container-fluid">
        <div class="row">
          <h1 class="brand-header text-center">Your Brand</h1>
        </div>
        <div class="logo-container row">
          <div class="horizontal-scroll">
            <button class="btn-scroll d-none d-md-block" id="btn-scroll-left" onClick={()=>scrollHorizonlly(1)}><i class="bi bi-arrow-left"></i></button>
            <button class="btn-scroll d-none d-md-block" id="btn-scroll-right" onClick={()=>scrollHorizonlly(-1)}><i class="bi bi-arrow-right"></i></button>
            <div class="logos">
              <div class="logo"><img src={adidas} alt="" class="adidas brand img-fluid" /></div>
              <div class="logo"><img src={nike} alt="" class="nike brand img-fluid" /></div>
              <div class="logo"><img src={bata} alt="" class="bata brand img-fluid" /></div>
              <div class="logo"><img src={puma} alt="" class="puma brand img-fluid" /></div>
              <div class="logo"><img src={kangaroos} alt="" class="kangaroos brand img-fluid" /></div>
              <div class="logo"><img src={louis_vuitton} alt="" class="louis-vuitton brand img-fluid" /></div>
              <div class="logo"><img src={reebook} alt="" class="reebook brand img-fluid" /></div>
              <div class="logo"><img src={asics} alt="" class="asics brand img-fluid" /></div>
              <div class="logo"><img src={babolat} alt="" class="babolat brand img-fluid" /></div>
              <div class="logo"><img src={diadora} alt="" class="diadora brand img-fluid" /></div>
              <div class="logo"><img src={fila} alt="" class="fila brand img-fluid" /></div>
              <div class="logo"><img src={lotto} alt="" class="lotto brand img-fluid" /></div>
              <div class="logo"><img src={new_balance} alt="" class="new-balance brand img-fluid" /></div>
              <div class="logo"><img src={mizuno} alt="" class="mizuno brand img-fluid" /></div>
              <div class="logo"><img src={k_swiss} alt="" class="yonex brand img-fluid" /></div>
            </div>
          </div>
        </div>
      </section> 
    </div>
  )
}

export default BrandLogos