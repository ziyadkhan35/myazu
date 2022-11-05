import React,{useState} from 'react'
// Footwear images
// import product_item_1 from '../img/foot-product/product-item-1.jpg'
// import product_item_2 from '../img/foot-product/product-item-2.jpg'
// import product_item_3 from '../img/foot-product/product-item-3.jpg'
// import product_item_4 from '../img/foot-product/product-item-4.jpg'
// import product_item_5 from '../img/foot-product/product-item-5.jpg'
// import product_item_6 from '../img/foot-product/product-item-6.jpg'
// import product_item_7 from '../img/foot-product/product-item-7.jpg'
// import product_item_8 from '../img/foot-product/product-item-8.jpg'
// import product_item_9 from '../img/foot-product/product-item-9.jpg'
// import product_item_10 from '../img/foot-product/product-item-10.jpg'
import Categories from '../Categories/Categories'


const Product = () => {

  const [data,setData]=useState(Categories)
  
  const filterResult=(catItem)=>{
    const result = Categories.filter((curDate)=>{
      return curDate.gender===catItem
    });
    setData(result)
  }
  const openFilterOption = (content) =>{
    var hideContent = document.querySelector(".hide-"+content+"-content")
    var hideContentStyle = hideContent.style.display
    var plmn = document.querySelector(".plus-minus-"+content)

    if(hideContentStyle==='none'){
      hideContent.style.display="block"
      plmn.innerHTML="-"
    }
    else{
      hideContent.style.display="none"
      plmn.innerHTML="+"
    }
  }
  const closeFilter = () => {
    var filterContainer = document.querySelector(".all-filters")
    var filterContainerDisplay = filterContainer.style.display
    
    if(filterContainerDisplay==='block'){
      filterContainer.style.display="none"
      }
      else{
        filterContainer.style.display="block"
      }
  }

  const showFiltersContainer=()=>{
    var filterContainer = document.querySelector(".all-filters")
    var filterContainerDisplay = filterContainer.style.display

    if(filterContainerDisplay==='block'){
      filterContainer.style.display="none"
    }
    else{
      filterContainer.style.display="block"
    }
  }

  return (

                                // Products For Home Page
    <div>

      {/* Filters button col */}
      <div className="filters-button container mb-4">
        <div className="row justify-content-center">
          <div className="filter-hover col-8" onClick={()=>showFiltersContainer()}>
            <div className="filter-btn col-12 d-flex p-2 align-items-center justify-content-center">
              <span className='me-2 fs-4 fw-bold text-muted'>Filter</span>
              <i class="bi bi-filter fs-4 text-muted"></i>
              
            </div>
          </div>
        </div>                             
      </div>                          
      {/* Filters button col end */}



        <section class="products-container container-fluid">
            <div class="row">
                                    {/* Filters */}
                <div class="filter-col col-lg-3 bg-light">

                    <div class="row">
                        <div class="filters-container">
                            <h6 class="">FILTERS</h6>
                            <hr/>
                            <div class="genders">
                            <div class="row">
                                <div class="label-input-container">
                                {/* <label for="men" class="gender-label fw-bold">Men</label>
                                <input type="radio" class="gender-radio me-2" id="men" name="gender-filter" /> */}
                                <button className='btn btn-warning' onClick={()=>filterResult('men')}>Men</button>
                                <button className='btn btn-warning' onClick={()=>filterResult('women')}>Women</button>
                                <button className='btn btn-warning' onClick={()=>filterResult('kids')}>Kids</button>
                                </div>
                                <div class="label-input-container">
                                <label for="women" class="gender-label fw-bold">Women</label>
                                <input type="radio" class="gender-radio me-2" id="women" name="gender-filter" />
                                </div>
                                <div class="label-input-container">
                                    <label for="boys" class="gender-label fw-bold">Boys</label>
                                    <input type="radio" class="gender-radio me-2" id="boys" name="gender-filter" />
                                </div>
                                <div class="label-input-container">
                                    <label for="girls" class="gender-label fw-bold">Girls</label>
                                    <input type="radio" class="gender-radio me-2" id="girls" name="gender-filter" />
                                </div>
                            </div> {/* Filters end */}
                            </div>
                        </div>
                    </div>

    <hr/>
        
                    <div class="row"> {/* Categories start */}
                        <div class="categories-container">
                            <div class="category-header-container row align-items-start align-items-baseline justify-content-around">
                                <h6 class="category-header col-9">CATEGORIES</h6>
                                <button class="col-3 filter-search-button"><i class="bi bi-search"></i></button>
                            </div>
                            <div class="categories">
                                <div class="label-input-container">
                                    <label class="label category-label" for="casual">Casual Shoes<span class="text-muted small ms-2">(21547)</span></label>
                                    <input type="checkbox" class="category me-2" id="casual" />
                                </div>
                                <div class="label-input-container">
                                    <label class="label category-label" for="flats">Flats<span class="text-muted small ms-2">(21547)</span></label>
                                    <input type="checkbox" class="category me-2" id="flats" />
                                </div>
                                <div class="label-input-container">
                                    <label class="label category-label" for="heels">Heels<span class="text-muted small ms-2">(19498)</span></label>
                                    <input type="checkbox" class="category me-2" id="heels" />
                                </div>
                                <div class="label-input-container">
                                    <label class="label category-label" for="sports">Sports Shoes<span class="text-muted small ms-2">(12836)</span></label>
                                    <input type="checkbox" class="category me-2" id="sports" />
                                </div>
                                <div class="label-input-container">
                                    <label class="label category-label" for="flip">Flip Flops<span class="text-muted small ms-2">(12662)</span></label>
                                    <input type="checkbox" class="category me-2" id="flip" />
                                </div>
                                <div class="label-input-container">
                                    <label class="label category-label" for="sandals">Sandals<span class="text-muted small ms-2">(7875)</span></label>
                                    <input type="checkbox" class="category me-2" id="sandals" />
                                </div>
                                <div class="label-input-container">
                                    <label class="label category-label" for="formal">Formal Shoes<span class="text-muted small ms-2">(7188)</span></label>
                                    <input type="checkbox" class="category me-2" id="formal" />
                                </div>
                            </div>
                        </div>
                    </div>  {/*Categories end*/}
    <hr/>
    
        <div class="row"> {/* Brands filter start */}
          <div class="brands-container">
            <div class="brand-filter-header row align-items-start align-items-baseline justify-content-around">
              <h6 class="brand-filter-header col-9">BRAND</h6>
              <button class="col-3 filter-search-button"><i class="bi bi-search"></i></button>
            </div>
              <div class="brands">
                <div class="label-input-container">
                  <label class="label brand-label" for="puma">Puma</label>
                  <input type="checkbox" class="brand-filter-input me-2" id="puma" />
                </div>
                <div class="label-input-container">
                  <label class="label brand-label" for="adidas">Adidas</label>
                  <input type="checkbox" class="brand-filter-input me-2" id="adidas" />
                </div>
                <div class="label-input-container">
                  <label class="label brand-label" for="sparx">Sparx</label>
                  <input type="checkbox" class="brand-filter-input me-2" id="sparx" />
                </div>
                <div class="label-input-container">
                  <label class="label brand-label" for="mochi">Mochi</label>
                  <input type="checkbox" class="brand-filter-input me-2" id="mochi" />
                </div>
                <div class="label-input-container">
                  <label class="label brand-label" for="campus">Campus</label>
                  <input type="checkbox" class="brand-filter-input me-2" id="campus" />
                </div>

              </div>
          </div>
        </div> {/* Brands filter end */}

  <hr/>

           {/* Color filter start  */}
        <div class="row">
          <div class="colors-container">
            <div class="color-header-container row align-items-start align-items-baseline justify-content-around">
              <h6 class="color-header col-9">COLOR</h6>
              <button class="col-3 filter-search-button"><i class="bi bi-search"></i></button>
            </div>
              <div class="colors">
                <div class="label-input-container">
                  <label class="label color-label" for="black">Black</label>
                  <input type="checkbox" class="color me-2" id="black" />
                </div>
                <div class="label-input-container">
                  <label class="label color-label" for="green">Green</label>
                  <input type="checkbox" class="color me-2" id="green" />
                </div>
                <div class="label-input-container">
                  <label class="label color-label" for="red">Red</label>
                  <input type="checkbox" class="color me-2" id="red" />
                </div>
                <div class="label-input-container">
                  <label class="label color-label" for="orange">Orange</label>
                  <input type="checkbox" class="color me-2" id="orange" />
                </div>
                <div class="label-input-container">
                  <label class="label color-label" for="blue">Blue</label>
                  <input type="checkbox" class="color me-2" id="blue" />
                </div>
                <div class="label-input-container">
                  <label class="label color-label" for="white">White</label>
                  <input type="checkbox" class="color me-2" id="white" />
                </div>
                <div class="label-input-container">
                  <label class="label color-label" for="grey">Grey</label>
                  <input type="checkbox" class="color me-2" id="grey" />
                </div>
              </div>
          </div>
        </div> {/* Colors end */}

      </div>  {/* Filters col end */}


       
        {/* FootWears  */}


      <div class="col-12 col-lg-9">
        <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 gy-2 gy-md-3 gy-lg-4 gy-xl-5 gx-2 gx-sm-3 gx-lg-4">
          
          {
            data.map((product)=>(
              <div class="col product-card">
                <div class="card h-100">
                  <div className="addition-info">
                    <a href="/">
                      <img src={product.image} class="product-img card-img-top img-fluid" alt="product-1" />
                    </a>
                    <a href="/">
                      <div className="hidden-product-field">
                        <h6 class="foot-size-header card-title">Size:</h6>
                        <div class="foot-size-container d-flex">
                          <a href='/' class="size card-text me-2 text-decoration-none">39</a>
                          <a href='/' class="size card-text me-2 text-decoration-none">40</a>
                          <a href='/' class="size card-text me-2 text-decoration-none">41</a>
                          <a href='/' class="size card-text me-2 text-decoration-none">42</a>
                          <a href='/' class="size card-text align-self-start text-decoration-none">43</a>
                        </div>
                        <h6 class="foot-color-header card-title">Color:</h6>
                        <div class="foot-color-container d-flex">
                          <a href="/"><div class="color card-title bg-dark rounded-circle me-2"></div></a>
                          <a href='/'><div class="color card-title bg-danger rounded-circle me-2"></div></a>
                          <a href='/'><div class="color card-title bg-info rounded-circle me-2"></div></a>
                          <a href='/'><div class="color card-title bg-primary rounded-circle me-2"></div></a>
                          <a href='/'><div class="color card-title bg-secondary rounded-circle me-2"></div></a>
                          <a href='/'><div class="color card-title bg-warning rounded-circle"></div></a>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="product-card-body card-body">
                    <h6 class="card-title m-0 p-0">{product.name}</h6>
                    <p class="card-text m-0 p-0">{product.about}</p>
                    
                    <h6 class="card-title">$ {product.price} <span class="text-decoration-line-through text-muted ms-2"><small>$ 300</small></span></h6>
                    <button class="btn-add-bag btn-product-card me-1">Bag</button>
                    <button class="btn-wishlist btn-product-card">
                      <i class="btn-wishlist-ico bi bi-heart me-2"></i>WishList
                    </button>
                    <button class="btn-wishlist-responsive">
                      <i class="btn-wishlist-ico-responsive bi bi-heart-fill"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </div>










      <div className="col-12 col-sm-9 col-md-7 all-filters">
        <div className="row">
          <div className="col-12">
            <div className="col-12 bg-light">
              <div className="row justify-content-center">
                <div className="f col-11 text-center p-2 border-for-filters-section">
                  <span className='fs-3 text-secondary'>Filter</span>
                  <i class="x bi bi-x-lg me-4 fs-4" onClick={()=>closeFilter()}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
          <div className="hidden-filter-container col-12 bg-light">
        
        <div className="row justify-content-center">
          <div className="col-11 p-2 border-for-filters-section">
            <h6 className='ms-2 fs-4 mb-3'>Category</h6>
            <div className="ms-2">
              <button className='btn-category-in-hidden-filter' onClick={()=>filterResult('men')}>Men</button>
              <button className='btn-category-in-hidden-filter' onClick={()=>filterResult('women')}>Women</button>
              <button className='btn-category-in-hidden-filter' onClick={()=>filterResult('kids')}>Kids</button>
            </div>
            <div className="ms-2">
              <a href="/" className=''>All Categories</a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-11 text-center p-3 border-for-filters-section">
            <div className="d-flex justify-content-between align-items-center" onClick={()=>openFilterOption("brand")}>
              <span className='ms-2 fs-4'>Brand</span>
              <span className='plus-minus-brand me-2 fs-4 fw-bold'>+</span>
            </div>
            <div className='hide-brand-content hide-content mt-3 ms-2'>
              <div className="">
                <div className="label-input-container">
                  <label htmlFor="nike-f" className='ms-2'>Nike</label>
                  <input type="checkbox" id='nike-f' className='brand-input-size' />
                </div>
              <div className="label-input-container mt-2">
                <label htmlFor="adidas-f" className='ms-2'>Adidas</label>
                <input type="checkbox" id='adidas-f' className='brand-input-size' />
              </div>
              <div className="label-input-container mt-2">
                <label htmlFor="puma-f" className='ms-2'>Puma</label>
                <input type="checkbox" id='puma-f' className='brand-input-size' /> 
              </div>
              <div className="label-input-container mt-2 mb-2">
                <label htmlFor="dockers-f" className='ms-2'>Dockers</label>
                <input type="checkbox" id='dockers-f' className='brand-input-size' />
              </div>
              <div className="label-input-container mt-2 mb-2">
                <label htmlFor="sparx-f" className='ms-2'>Sparx</label>
                <input type="checkbox" id='sparx-f' className='brand-input-size' />
              </div>
              <div className="label-input-container mt-2 mb-2">
                <label htmlFor="mochi-f" className='ms-2'>Mochi</label>
                <input type="checkbox" id='mochi-f' className='brand-input-size' />
              </div>
              <div className="label-input-container mt-2 mb-2">
                <label htmlFor="campus-f" className='ms-2'>Campus</label>
                <input type="checkbox" id='campus-f' className='brand-input-size' />
              </div>
              <div className="label-input-container mt-2 mb-2">
                <label htmlFor="reebok-f" className='ms-2'>Reebok</label>
                <input type="checkbox" id='reebok-f' className='brand-input-size' />
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-11 text-center p-3 border-for-filters-section">
            <div className="d-flex justify-content-between" onClick={()=>openFilterOption("color")}>
              <span className='ms-2 fs-4'>Color</span>
              <span className='plus-minus-color me-2 fs-4 fw-bold'>+</span>
            </div>
            <div className="hide-color-content hide-content mt-3 mb-2">
              <div className="color-sub-container d-flex flex-wrap gap-2">
                <div className="color-sub-container d-flex ms-3">
                  <div className="color-rounded" style={{backgroundColor: "#D2B48C"}}></div>
                  <span className="ms-2">Tan</span>
                </div>
                <div className="color-sub-container d-flex ms-3">
                  <div className="color-rounded" style={{backgroundColor: "grey"}}></div>
                  <span className="ms-2">Grey</span>
                </div>
                <div className="color-sub-container d-flex ms-3">
                  <div className="color-rounded" style={{backgroundColor: "white"}}></div>
                  <span className="ms-2">White</span>
                </div>
                <div className="color-sub-container d-flex ms-3">
                  <div className="color-rounded" style={{backgroundColor: "brown"}}></div>
                  <span className="ms-2">Brown</span>
                </div>
                <div className="color-sub-container d-flex ms-3">
                  <div className="color-rounded" style={{backgroundColor: "blue"}}></div>
                  <span className="ms-2">Blue</span>
                </div>
                <div className="color-sub-container d-flex ms-3">
                  <div className="color-rounded" style={{backgroundColor: "black"}}></div>
                  <span className="ms-2">Black</span>
                </div>
                <div className="color-sub-container d-flex ms-3">
                  <div className="color-rounded" style={{backgroundColor: "pink"}}></div>
                  <span className="ms-2">Pink</span>
                </div>
                <div className="color-sub-container d-flex ms-3">
                  <div className="color-rounded" style={{backgroundColor: "orange"}}></div>
                  <span className="ms-2">Orange</span>
                </div>
                <div className="color-sub-container d-flex ms-3">
                  <div className="color-rounded" style={{backgroundColor: "yellow"}}></div>
                  <span className="ms-2">Yellow</span>
                </div>
                <div className="color-sub-container d-flex ms-3">
                  <div className="color-rounded" style={{backgroundColor: "purple"}}></div>
                  <span className="ms-2">Purple</span>
                </div>
                <div className="color-sub-container d-flex ms-3">
                  <div className="color-rounded" style={{backgroundColor: "green"}}></div>
                  <span className="ms-2">Green</span>
                </div>
                <div className="color-sub-container d-flex ms-3">
                  <div className="color-rounded" style={{backgroundColor: "navy"}}></div>
                  <span className="ms-2">Navy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-11 p-3 border-for-filters-section">
            <div className="d-flex justify-content-between" onClick={()=>openFilterOption("size")}>
              <span className='ms-2 fs-4'>Size</span>
              <span className='plus-minus-size me-2 fs-4 fw-bold'>+</span>
            </div>
            <div className="hide-size-content hide-content mt-3 mb-2 ms-2">
              <div className="ms-1 d-flex flex-wrap gap-2">
                <span className='p-2 me-2 border border-1 bg-transparent border-secondary text-muted '>38</span>
                <span className='p-2 me-2 border border-1 bg-transparent border-secondary text-muted'>39</span>
                <span className='p-2 me-2 border border-1 bg-transparent border-secondary text-muted'>40</span>
                <span className='p-2 me-2 border border-1 bg-transparent border-secondary text-muted'>41</span>
                <span className='p-2 me-2 border border-1 bg-transparent border-secondary text-muted'>42</span>
                <span className='p-2 me-2 border border-1 bg-transparent border-secondary text-muted'>43</span>
                <span className='p-2 me-2 border border-1 bg-transparent border-secondary text-muted'>44</span>
                <span className='p-2 me-2 border border-1 bg-transparent border-secondary text-muted'>45</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-11 p-3 border-for-filters-section">
            <div className="d-flex justify-content-between" onClick={()=>openFilterOption("width")}>
              <span className='ms-2 fs-4'>Width</span>
              <span className='plus-minus-width me-2 fs-4 fw-bold'>+</span>
            </div>
            <div className="hide-width-content hide-content mt-3 mb-2 ms-2">
              <div className="">
                <div className="label-input-container">
                  <label htmlFor="medium-f" className='ms-2'>Medium</label>
                  <input type="checkbox" id='medium-f' className='brand-input-size' />
                </div>
                <div className="label-input-container mt-2">
                  <label htmlFor="wide-f" className='ms-2'>Wide</label>
                  <input type="checkbox" id='wide-f' className='brand-input-size' />
                </div>
                <div className="label-input-container mt-2">
                  <label htmlFor="large-f" className='ms-2'>Large</label>
                  <input type="checkbox" id='large-f' className='brand-input-size' /> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-11 p-3 border-for-filters-section">
            <div className="d-flex justify-content-between" onClick={()=>openFilterOption("material")}>
              <span className='ms-2 fs-4'>Material</span>
              <span className='plus-minus-material me-2 fs-4 fw-bold'>+</span>
            </div>
            <div className="hide-material-content hide-content ms-2 mt-3 mb-2">
              <div className="">
                <div className="label-input-container">
                  <label htmlFor="canvas-f" className='ms-2'>Canvas</label>
                  <input type="checkbox" id='canvas-f' className='brand-input-size' />
                </div>
                <div className="label-input-container mt-2">
                  <label htmlFor="faux-f" className='ms-2'>Faux Leather</label>
                  <input type="checkbox" id='faux-f' className='brand-input-size' />
                </div>
                <div className="label-input-container mt-2">
                  <label htmlFor="leather-f" className='ms-2'>Leather</label>
                  <input type="checkbox" id='leather-f' className='brand-input-size' /> 
                </div>
                <div className="label-input-container mt-2">
                  <label htmlFor="nubuck-f" className='ms-2'>Nubuck</label>
                  <input type="checkbox" id='nubuck-f' className='brand-input-size' /> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-11 p-3 border-for-filters-section">
            <div className="d-flex justify-content-between" onClick={()=>openFilterOption("more")}>
              <span className='ms-2 fs-4'>More Options</span>
              <span className='plus-minus-more me-2 fs-4 fw-bold'>+</span>
            </div>
            <div className="hide-more-content hide-content ms-2 mt-3 mb-2">
              <div className="">
                <div className="label-input-container">
                  <label htmlFor="online-f" className='ms-2'>Online Only</label>
                  <input type="checkbox" id='online-f' className='brand-input-size' />
                </div>
                <div className="label-input-container mt-2">
                  <label htmlFor="sale-f" className='ms-2'>Sale</label>
                  <input type="checkbox" id='sale-f' className='brand-input-size' /> 
                </div>
                <div className="label-input-container mt-2">
                  <label htmlFor="clearance-f" className='ms-2'>Clearance</label>
                  <input type="checkbox" id='clearance-f' className='brand-input-size' /> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-11 p-3 border-for-filters-section">
            <div className="d-flex justify-content-between" onClick={()=>openFilterOption("price")}>
              <span className='ms-2 fs-4'>Price</span>
              <span className='plus-minus-price me-2 fs-4 fw-bold'>+</span>
            </div>
            <div className="hide-price-content hide-content mt-3 mb-2 ms-2">
              <div className="">
                <div className="label-input-container">
                  <label htmlFor="35-f" className='ms-2'>$35 to $50</label>
                  <input type="checkbox" id='35-f' className='brand-input-size' />
                </div>
                <div className="label-input-container mt-2">
                  <label htmlFor="50-f" className='ms-2'>$50 to $70</label>
                  <input type="checkbox" id='50-f' className='brand-input-size' />
                </div>
                <div className="label-input-container mt-2">
                  <label htmlFor="75-f" className='ms-2'>$75+</label>
                  <input type="checkbox" id='75-f' className='brand-input-size' /> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-11 p-3 border-for-filters-section">
            <div className="d-flex justify-content-between" onClick={()=>openFilterOption("percent")}>
              <span className='ms-2 fs-4'>Percent Off</span>
              <span className='plus-minus-percent me-2 fs-4 fw-bold'>+</span>
            </div>
            <div className="hide-percent-content hide-content mt-3 mb-2 ms-2">
              <div className="">
                <div className="label-input-container">
                  <label htmlFor="30-f" className='ms-2'>Up to 30%</label>
                  <input type="checkbox" id='30-f' className='brand-input-size' />
                </div>
                <div className="label-input-container mt-2">
                  <label htmlFor="50-f" className='ms-2'>30% to 50%</label>
                  <input type="checkbox" id='50-f' className='brand-input-size' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>

        <div className="view_btn row">
          <div className=" col-12">
            <div className="col-12 bg-light">
              <div className="row justify-content-center">
                <div className="f col-11 text-center p-2 mt-3 mb-3 cp">
                  <span className='fs-4 fw-bold text-light rounded-4 bg-dark px-4 py-3' onClick={()=>closeFilter()}>View Results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
    </div>
  )
}

export default Product