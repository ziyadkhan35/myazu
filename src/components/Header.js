import React from 'react'
//Navbar Hover Images
import women_hover from '../img/navbar_hover/women_hover.jpg'
import men_hover from '../img/navbar_hover/men_hover.jpg'
import kids_hover from '../img/navbar_hover/kids_hover.jpg'

const Header = () => {
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
      const showFiltersContainer=()=>{
        var filterContainer = document.querySelector(".nnn")
        var filterContainerDisplay = filterContainer.style.display
    
        if(filterContainerDisplay==='block'){
          filterContainer.style.display="none"
        }
        else{
          filterContainer.style.display="block"
        }
      }
  return (
    <div>
        <nav className='all-navbar-container container-fluid fixed-top'>
            <div className="navbar-lg col-12 p-2">
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center">
                        <a href="/" className="myazu-logo fs-1">.myazu</a>
                    </div>
                    <div className="col">
                        <ul class="me-auto mb-2 mb-lg-0 d-flex list-unstyled ">
                            <li class="navbar-hover-container bg-light">
                                
                                <button class="navbar-select-button" aria-current="page" href="/">Women</button>
                                <div className="navbar-hover-box container p-0 container-shadow bg-light">
                                    <div className="row row-cols-lg-4 row-cols-1 gx-0">
                                        <div className="col-lg-3">
                                            <div className="card border-0 rounded-0 bg-light">
                                                <div className="card-body">
                                                    <div className="card-title fw-bold">Women's Shoes</div>
                                                    <div className="card-link-color card-text">
                                                        <a href='/' className='d-block'>View All</a>
                                                        <a href='/' className='d-block'>New Arrivals</a>
                                                        <a href='/' className='d-block'>Sneakers & Athletics</a>
                                                        <a href='/' className='d-block'>Boots</a>
                                                        <a href='/' className='d-block'>Heels</a>
                                                        <a href='/' className='d-block'>Loafers & Oxfords</a>
                                                        <a href='/' className='d-block'>Sandals</a>
                                                        <a href='/' className='d-block'>Flats</a>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="card-title fw-bold">Apparel</div>
                                                    <div className="card-link-color card-text">
                                                        <a href='/' className='d-block'>All Women's Apparel</a>
                                                        <a href='/' className='d-block'>Tops</a>
                                                        <a href='/' className='d-block'>Bottoms</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="card border-0 rounded-0 bg-light">
                                                <div className="card-body">
                                                    <div className="card-title fw-bold">Sneakers and Athletics</div>
                                                    <div className="card-link-color card-text">
                                                        <a href='/' className='d-block'>Running Shoes</a>
                                                        <a href='/' className='d-block'>View All</a>
                                                        <a href='/' className='d-block'>Walking Shoes</a>
                                                        <a href='/' className='d-block'>Lifestyle & Fashion</a>
                                                        <a href='/' className='d-block'>Outdoor & Trail Shoes</a>
                                                        <a href='/' className='d-block'>Slip Ons</a>
                                                        <a href='/' className='d-block'>Canvas Shoes</a>
                                                        <a href='/' className='d-block'>Flats</a>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="card-title fw-bold">Boots</div>
                                                    <div className="card-link-color card-text">
                                                        <a href='/' className='d-block'>View All</a>
                                                        <a href='/' className='d-block'>Ankle Boots & Booties</a>
                                                        <a href='/' className='d-block'>Chelsea Boots</a>
                                                        <a href='/' className='d-block'>Dress Boots</a>
                                                        <a href='/' className='d-block'>Tall Boots</a>
                                                        <a href='/' className='d-block'>Outdoor & Hiking Boots</a>
                                                        <a href='/' className='d-block'>Wide Calf Boots</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="card border-0 rounded-0 bg-light">
                                                <div className="card-body">
                                                    <div className="card-title fw-bold">Shops, Styles & More</div>
                                                    <div className="card-link-color card-text">
                                                        <a href='/' className='d-block'>Boot Shop</a>
                                                        <a href='/' className='d-block'>Sneaker Shop</a>
                                                        <a href='/' className='d-block'>Active Shop</a>
                                                        <a href='/' className='d-block'>Weddings & Events</a>
                                                        <a href='/' className='d-block'>Getaway Styles</a>
                                                        <a href='/' className='d-block'>Lug Soles</a>
                                                        <a href='/' className='d-block'>Eco-Conscious</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-12">
                                            <div className="hover-img p-lg-2">
                                                <img src={women_hover} alt="Women" className='img-fluid '/>
                                            </div>
                                            <div className="text-light text-center">
                                                <h4 className='hover-images-sub-text text-dark mt-2 fs-5 fw-bold'>VISIT THE SNEAKERS SHOP</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="navbar-hover-container nav-item">
                                <button class="navbar-select-button" href="/">Men</button>
                                <div className="navbar-hover-box container p-0 container-shadow bg-light">
                                    <div className="row row-cols-4 gx-0">
                                        <div className="col">
                                            <div className="card border-0 rounded-0 bg-light">
                                                <div className="card-body">
                                                    <div className="card-title fw-bold">Men's Shoes</div>
                                                    <div className="card-link-color card-text">
                                                        <a href='/' className='d-block'>View All</a>
                                                        <a href='/' className='d-block'>New Arrivals</a>
                                                        <a href='/' className='d-block'>Sneakers & Athletics</a>
                                                        <a href='/' className='d-block'>Boots</a>
                                                        <a href='/' className='d-block'>Loafers & Oxfords</a>
                                                        <a href='/' className='d-block'>Sandals</a>
                                                        <a href='/' className='d-block'> Work & Safety</a>
                                                        <a href='/' className='d-block'>Boat Shoes</a>
                                                        <a href='/' className='d-block'>Clogs & Mules</a>   
                                                        <a href='/' className='d-block'>Slippers</a>                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card border-0 bg-light">
                                                <div className="card-body">
                                                    <div className="card-title fw-bold">Shops, Styles & More</div>
                                                    <div className="card-link-color card-text">
                                                        <a href='/' className='d-block'>Sneaker Shop</a>
                                                        <a href='/' className='d-block'>Active Shop</a>
                                                        <a href='/' className='d-block'>Eco-Conscious</a>
                                                        <a href='/' className='d-block'>Sale</a>
                                                        <a href='/' className='d-block'>Clearance</a>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="card-title fw-bold">Boots</div>
                                                    <div className="card-link-color card-text">
                                                        <a href='/' className='d-block'>View All</a>
                                                        <a href='/' className='d-block'>Ankle Boots & Booties</a>
                                                        <a href='/' className='d-block'>Chelsea Boots</a>
                                                        <a href='/' className='d-block'>Dress Boots</a>
                                                        <a href='/' className='d-block'>Tall Boots</a>
                                                        <a href='/' className='d-block'>Outdoor & Hiking Boots</a>
                                                        <a href='/' className='d-block'>Wide Calf Boots</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card border-0 bg-light">
                                                <div className="card-body">
                                                    <div className="card-title fw-bold">Women's Shoes</div>
                                                    <div className="card-link-color card-text">
                                                        <a href='/' className='d-block'>View All</a>
                                                        <a href='/' className='d-block'>New Arrivals</a>
                                                        <a href='/' className='d-block'>Sneakers & Athletics</a>
                                                        <a href='/' className='d-block'>Boots</a>
                                                        <a href='/' className='d-block'>Heels</a>
                                                        <a href='/' className='d-block'>Loafers & Oxfords</a>
                                                        <a href='/' className='d-block'>Sandals</a>
                                                        <a href='/' className='d-block'>Flats</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="hover-img p-2">
                                                <img src={men_hover} alt="Men" className='img-fluid'/>
                                            </div>
                                            <div className="text-light text-center">
                                                <h4 className='hover-images-sub-text text-dark mt-2 fs-5 fw-bold'>VISIT THE SNEAKERS SHOP</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="navbar-hover-container nav-item">
                                <button class="navbar-select-button" href="/">Kids</button>
                                <div className="navbar-hover-box container p-0 container-shadow bg-light">
                                    <div className="row row-cols-4 gx-0">
                                        <div className="col">
                                            <div className="card border-0 rounded-0 bg-light">
                                                <div className="card-body">
                                                    <div className="card-title fw-bold">Shop by Size</div>
                                                    <div className="card-link-color card-text">
                                                        <a href='/' className='d-block'>Baby (0-3.5)</a>
                                                        <a href='/' className='d-block'>Toddler (4-10)</a>
                                                        <a href='/' className='d-block'>Little Kid (10.5-3)</a>
                                                        <a href='/' className='d-block'>Big Kid (3.5-7) </a>         
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="card-title fw-bold">Top Brands</div>
                                                    <div className="card-link-color card-text">
                                                        <a href='/' className='d-block'>Nike</a>
                                                        <a href='/' className='d-block'>Skechers</a>
                                                        <a href='/' className='d-block'>Adidas</a>
                                                        <a href='/' className='d-block'>Crocs</a>
                                                        <a href='/' className='d-block'>Puma</a>
                                                        <a href='/' className='d-block'>Vans</a>
                                                        <a href='/' className='d-block'>Converse</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card border-0 bg-light">
                                                <div className="card-body">
                                                    <div className="card-title fw-bold">Girls' Shoes</div>
                                                    <div className="card-link-color card-text">
                                                        <a href='/' className='d-block'>View All</a>
                                                        <a href='/' className='d-block'>Sneakers & Athletics</a>
                                                        <a href='/' className='d-block'>Boots</a>
                                                        <a href='/' className='d-block'>Sandals</a>
                                                        <a href='/' className='d-block'>Dress Shoes</a>
                                                        <a href='/' className='d-block'> Boat Shoes</a>
                                                        <a href='/' className='d-block'>Slippers</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card border-0 bg-light">
                                                <div className="card-body">
                                                    <div className="card-title fw-bold">Boys' Shoes</div>
                                                    <div className="card-link-color card-text">
                                                        <a href='/' className='d-block'>View All</a>
                                                        <a href='/' className='d-block'>Sneakers & Athletics</a>
                                                        <a href='/' className='d-block'>Sandals</a>
                                                        <a href='/' className='d-block'> Dress Shoes</a>
                                                        <a href='/' className='d-block'> Boat Shoes</a>
                                                        <a href='/' className='d-block'>Slippers</a>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="card-title fw-bold">Other Ways to Shop</div>
                                                    <div className="card-link-color card-text">
                                                        <a href='/' className='d-block'>New Arrivals</a>
                                                        <a href='/' className='d-block'>View All Kids' Shoes</a>
                                                        <a href='/' className='d-block'>Sale</a>
                                                        <a href='/' className='d-block'>Clearance</a>
                                                        <a href='/' className='d-block'>Wide</a>
                                                        <a href='/' className='d-block'>Eco-Conscious</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="hover-img p-2">
                                                <img src={kids_hover} alt="Kids" className='img-fluid'/>
                                            </div>
                                            <div className="text-light text-center">
                                                <h4 className='hover-images-sub-text text-dark mt-2 fs-5 fw-bold'>SHOP KIDS' NIKE</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="navbar-hover-container nav-item">
                                <button class="navbar-select-button" href="/">Accessories</button>
                                <div className="navbar-hover-box container p-0 container-shadow bg-light">
                                    <div className="row row-cols-4 gx-0">
                                        <div className="col">
                                            <div className="card border-0 rounded-0 bg-light">
                                                <div className="card-body">
                                                    <div className="card-title fw-bold ">Accessories</div>
                                                    <div className="card-link-color card-text">
                                                        <a href='/' className='d-block'>View All</a>
                                                        <a href='/' className='d-block'>Bags</a>
                                                        <a href='/' className='d-block'>Socks</a>
                                                        <a href='/' className='d-block'>Shoe Charms</a>
                                                        <a href='/' className='d-block'>Hair Accessories</a>
                                                        <a href='/' className='d-block'>Hats & Gloves</a>
                                                        <a href='/' className='d-block'>Insoles & Inserts</a>
                                                        <a href='/' className='d-block'>Slippers</a>                                 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card border-0 bg-light">
                                                <div className="card-body">
                                                    <div className="card-title fw-bold">Bags</div>
                                                    <div className="card-link-color card-text">
                                                        <a href='/' className='d-block'>View All</a>
                                                        <a href='/' className='d-block'>Backpacks</a>
                                                        <a href='/' className='d-block'>Lunch Boxes & Bags</a>
                                                        <a href='/' className='d-block'>Drawstring Bags</a>
                                                        <a href='/' className='d-block'>Mini Bags</a>
                                                        <a href='/' className='d-block'>Fanny Packs</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card border-0 bg-light">
                                                <div className="card-body">
                                                    <div className="card-title fw-bold">Slippers</div>
                                                    <div className="card-link-color card-text">
                                                        <a href='/' className='d-block'>All Slippers</a>
                                                        <a href='/' className='d-block'>Women</a>
                                                        <a href='/' className='d-block'>Men</a>
                                                        <a href='/' className='d-block'>Kids</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card border-0 bg-light">
                                                <div className="card-body">
                                                    <div className="card-title fw-bold">Other Ways to Shop</div>
                                                    <div className="card-link-color card-text">
                                                        <a href='/' className='d-block'>Eco-Conscious</a>
                                                        <a href='/' className='d-block'>New Arrivals</a>
                                                        <a href='/' className='d-block'>Sale</a>
                                                        <a href='/' className='d-block'>Clearance</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="navbar-hover-container nav-item">
                                <button class="navbar-select-button">Brands</button>
                            </li>
                            <li class="navbar-hover-container nav-item">
                                <button class="navbar-select-button">Sale</button>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <div className="d-flex align-items-center mt-2">
                            <form class="form-for-navbar d-none d-xl-flex align-items-center justify-content-center me-3">
                            <i class="bi bi-search ms-2 bg-tranparent"></i>
                            <input class="search-input-for-navbar" type="search" placeholder="Search for products, brands and more" aria-label="Search"/>
                            </form>
                            <div className="row-cols-3 d-inline-flex justify-content-center align-items-center mx-3">
                                <div className="col">
                                    <a href="/" className=' d-flex flex-column align-items-center text-decoration-none'>
                                        <i class="navbar_icon ni-1 bi bi-person fs-5"></i>
                                        <span className='navbar_icon_text small'>Profile</span>
                                    </a>
                                </div>
                                <div className="col ms-1">
                                    <a href="/" className='d-flex flex-column align-items-center text-decoration-none'>
                                        <i class="navbar_icon ni-2 bi bi-bag fs-5"></i>
                                        <span className='navbar_icon_text small'>Bag</span>
                                    </a>
                                </div>
                                <div className="col ms-1">
                                    <a href="/" className='navbar-icon-link d-flex flex-column align-items-center text-decoration-none'>
                                        <i class="navbar_icon ni-3 bi bi-heart fs-5"></i>
                                        <span className='navbar_icon_text small'>Wishlist</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 


            {/* Responsive nav */}

            <div className="navbar-sm col-12">
                <div className="row p-4">
                    <div className="col">
                        <button className="btn-filter-responsive ms-3" onClick={()=>showFiltersContainer()}><i class="bi bi-filter fs-1 text-dark"></i></button>
                    </div>
                    <div className="col text-center">
                        <a href="/" className="myazu-logo fs-2">.myazu</a>
                    </div>
                    <div className="col text-end">
                        <a href="/" className='me-3'><i class="navbar_icon ni-2 bi bi-bag fs-2"></i></a>
                    </div>
                </div>
            </div>

            

        </nav>

        



    {/* Filter btn hidden filters */}

        <div className="nnn col-12 bg-light">
            <div className="row justify-content-center align-items-center">
                <div className="col-11 text-center p-3 border-for-filters-section">
                    <div className="d-flex justify-content-between align-items-center" onClick={()=>openFilterOption("women")}>
                        <span className='ms-2 fs-4'>Women</span>
                        <span className='plus-minus-women me-2 fs-4 fw-bold'>+</span>
                    </div>
                    <div className='hide-women-content hide-content mt-3 ms-2'>
                        <div className="">
                            <div className="text-start">
                                <span className='fw-bold'>Women's Shoes</span>
                                <div className="ms-4 card-link-color">
                                    <a href="/" className='d-block'>View All</a>
                                    <a href="/" className='d-block'>New Arrivals</a>
                                    <a href="/" className='d-block'>Sneakers & Athletics</a>
                                    <a href="/" className='d-block'>Boots</a>
                                    <a href="/" className='d-block'>Heels</a>
                                </div>
                                <span className='fw-bold'>Sneakers and Athletics</span>
                                <div className="ms-4 card-link-color">
                                    <a href="/" className='d-block'>Running Shoes</a>
                                    <a href="/" className='d-block'>View All</a>
                                    <a href="/" className='d-block'>Walking Shoes</a>
                                    <a href="/" className='d-block'>Lifestyle & Fashion</a>
                                    <a href="/" className='d-block'>Outdoor & Trail Shoes</a>
                                </div>
                                <span className='fw-bold'>Apparel</span>
                                <div className="ms-4 card-link-color">
                                    <a href="/" className='d-block'>View All</a>
                                    <a href="/" className='d-block'>New Arrivals</a>
                                    <a href="/" className='d-block'>Sneakers & Athletics</a>
                                </div>
                                <div className="row justify-content-center align-items-center mt-2">
                                    <div className="col-12">
                                        <div className="hover-img p-lg-2">
                                            <img src={women_hover} alt="Women" className='img-fluid '/>
                                        </div>
                                        <div className="text-light text-center">
                                            <h4 className='hover-images-sub-text text-dark mt-2 fs-5 fw-bold'>VISIT THE SNEAKERS SHOP</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center align-items-center">
                        <div className="col-11 text-center p-3 border-for-filters-section">
                <div className="d-flex justify-content-between align-items-center" onClick={()=>openFilterOption("men")}>
                <span className='ms-2 fs-4'>Men</span>
                <span className='plus-minus-men me-2 fs-4 fw-bold'>+</span>
                </div>
                <div className='hide-men-content hide-content mt-3 ms-2'>
                <div className="">
                    <div className="text-start">
                        <span className='fw-bold'>Men's Shoes</span>
                        <div className="ms-4 card-link-color">
                            <a href="/" className='d-block'>View All</a>
                            <a href="/" className='d-block'>New Arrivals</a>
                            <a href="/" className='d-block'>Boots</a>
                            <a href="/" className='d-block'>Sandals</a>
                            <a href="/" className='d-block'>Slippers</a>
                        </div>
                        <span className='fw-bold'>Sneakers and Athletics</span>
                        <div className="ms-4 card-link-color">
                            <a href="/" className='d-block'>Running Shoes</a>
                            <a href="/" className='d-block'>View All</a>
                            <a href="/" className='d-block'>Walking Shoes</a>
                            <a href="/" className='d-block'>Lifestyle & Fashion</a>
                            <a href="/" className='d-block'>Outdoor & Trail Shoes</a>
                        </div>
                        <span className='fw-bold'>Apparel</span>
                        <div className="ms-4 card-link-color">
                            <a href="/" className='d-block'>View All</a>
                            <a href="/" className='d-block'>New Arrivals</a>
                            <a href="/" className='d-block'>Sneakers & Athletics</a>
                        </div>
                        <div className="row justify-content-center align-items-center mt-2">
                            <div className="col">
                                <div className="hover-img p-2">
                                    <img src={men_hover} alt="Men" className='img-fluid'/>
                                </div>
                                <div className="text-light text-center">
                                    <h4 className='hover-images-sub-text text-dark mt-2 fs-5 fw-bold'>VISIT THE SNEAKERS SHOP</h4>
                                </div>
                            </div>
                        </div>                       
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="row justify-content-center align-items-center">
                        <div className="col-11 text-center p-3 border-for-filters-section">
                <div className="d-flex justify-content-between align-items-center" onClick={()=>openFilterOption("kids")}>
                <span className='ms-2 fs-4'>Kids</span>
                <span className='plus-minus-kids me-2 fs-4 fw-bold'>+</span>
                </div>
                <div className='hide-kids-content hide-content mt-3 ms-2'>
                <div className="">
                    <div className="text-start">
                        <span className='fw-bold'>Kids's Shoes</span>
                        <div className="ms-4 card-link-color">
                            <a href="/" className='d-block'>View All</a>
                            <a href="/" className='d-block'>New Arrivals</a>
                            <a href="/" className='d-block'>Boots</a>

                        </div>
                        <span className='fw-bold'>Sneakers and Athletics</span>
                        <div className="ms-4 card-link-color">
                            <a href="/" className='d-block'>View All</a>
                            <a href="/" className='d-block'>Walking Shoes</a>
                            <a href="/" className='d-block'>Lifestyle & Fashion</a>
                            <a href="/" className='d-block'>Outdoor & Trail Shoes</a>
                        </div>
                        <span className='fw-bold'>Apparel</span>
                        <div className="ms-4 card-link-color">
                            <a href="/" className='d-block'>View All</a>
                            <a href="/" className='d-block'>New Arrivals</a>
                            <a href="/" className='d-block'>Sneakers & Athletics</a>
                        </div>
                        <div className="row justify-content-center align-items-center mt-2">
                        <div className="col">
                            <div className="hover-img p-2">
                                <img src={kids_hover} alt="Kids" className='img-fluid'/>
                            </div>
                            <div className="text-light text-center">
                                <h4 className='hover-images-sub-text text-dark mt-2 fs-5 fw-bold'>SHOP KIDS' NIKE</h4>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="row justify-content-center align-items-center">
                        <div className="col-11 text-center p-3 border-for-filters-section">
                <div className="d-flex justify-content-between align-items-center" onClick={()=>openFilterOption("brand")}>
                <span className='ms-2 fs-4'>Brands</span>
                <span className='plus-minus-brand me-2 fs-4 fw-bold'>+</span>
                </div>
                <div className='hide-brand-content hide-content mt-3 ms-2'>
                <div className="">
                    <div className="text-start">
                        <span className='fw-bold'>Brands</span>
                        <div className="ms-4 card-link-color">
                            <a href="/" className='d-block'>Nike</a>
                            <a href="/" className='d-block'>Adidas</a>
                            <a href="/" className='d-block'>Sneakers</a>
                            <a href="/" className='d-block'>Puma</a>
                            <a href="/" className='d-block'>Reed</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="row justify-content-center align-items-center">
                        <div className="col-11 text-center p-3 border-for-filters-section">
                <div className="d-flex justify-content-between align-items-center" onClick={()=>openFilterOption("accessories")}>
                <span className='ms-2 fs-4'>Accessories</span>
                <span className='plus-minus-accessories me-2 fs-4 fw-bold'>+</span>
                </div>
                <div className='hide-accessories-content hide-content mt-3 ms-2'>
                <div className="">
                    <div className="text-start">
                        <span className='fw-bold'>Accessories</span>
                        <div className="ms-4 card-link-color">
                            <a href="/" className='d-block'>View All</a>
                            <a href="/" className='d-block'>Bags</a>
                            <a href="/" className='d-block'>Socks</a>
                            <a href="/" className='d-block'>Shoe Charms</a>
                            <a href="/" className='d-block'>Hair Accessories</a>
                            <a href="/" className='d-block'>Slippers</a>

                        </div>
                        <span className='fw-bold'>Bags</span>
                        <div className="ms-4 card-link-color">
                            <a href="/" className='d-block'>Backpacks</a>
                            <a href="/" className='d-block'>Drawstring Bags</a>
                            <a href="/" className='d-block'>Mini Bags</a>
                            <a href="/" className='d-block'>Fanny Packs</a>
                            <a href="/" className='d-block'>Outdoor</a>
                        </div>
                        <span className='fw-bold'>Slippers</span>
                        <div className="ms-4 card-link-color">
                            <a href="/" className='d-block'>All Slippers</a>
                            <a href="/" className='d-block'>Sale</a>
                            <a href="/" className='d-block'>Clearance</a>
                            <a href="/" className='d-block'>Women</a>
                            <a href="/" className='d-block'>Men</a>
                            <a href="/" className='d-block'>Kids</a>
                        </div>
                        <span className='fw-bold'>Other Ways to Shop</span>
                        <div className="ms-4 card-link-color">
                            <a href="/" className='d-block'>New Arrivals</a>
                            <a href="/" className='d-block'>Sale</a>
                            <a href="/" className='d-block'>Clearance</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>


        {/* <nav class="header-navbar navbar navbar-expand-lg navbar-light fixed-top">
            <div class="container-fluid">
                <a className="myazu-logo navbar-brand ms-3 me-5 fs-1 mb-2" href="/">myazu.</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll">
                        <li class="navbar-hover-container nav-item">
                            
                            <button class="navbar-select-button" aria-current="page" href="/">Women</button>
                            <div className="navbar-hover-box container p-0 container-shadow bg-light">
                                <div className="row row-cols-lg-4 row-cols-1 gx-0">
                                    <div className="col-lg-3 ">
                                        <div className="card border-0 rounded-0 bg-light">
                                            <div className="card-body">
                                                <div className="card-title fw-bold">Women's Shoes</div>
                                                <div className="card-link-color card-text">
                                                    <a href='/' className='d-block'>View All</a>
                                                    <a href='/' className='d-block'>New Arrivals</a>
                                                    <a href='/' className='d-block'>Sneakers & Athletics</a>
                                                    <a href='/' className='d-block'>Boots</a>
                                                    <a href='/' className='d-block'>Heels</a>
                                                    <a href='/' className='d-block'>Loafers & Oxfords</a>
                                                    <a href='/' className='d-block'>Sandals</a>
                                                    <a href='/' className='d-block'>Flats</a>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div className="card-title fw-bold">Apparel</div>
                                                <div className="card-link-color card-text">
                                                    <a href='/' className='d-block'>All Women's Apparel</a>
                                                    <a href='/' className='d-block'>Tops</a>
                                                    <a href='/' className='d-block'>Bottoms</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="card border-0 rounded-0 bg-light">
                                            <div className="card-body">
                                                <div className="card-title fw-bold">Sneakers and Athletics</div>
                                                <div className="card-link-color card-text">
                                                    <a href='/' className='d-block'>Running Shoes</a>
                                                    <a href='/' className='d-block'>View All</a>
                                                    <a href='/' className='d-block'>Walking Shoes</a>
                                                    <a href='/' className='d-block'>Lifestyle & Fashion</a>
                                                    <a href='/' className='d-block'>Outdoor & Trail Shoes</a>
                                                    <a href='/' className='d-block'>Slip Ons</a>
                                                    <a href='/' className='d-block'>Canvas Shoes</a>
                                                    <a href='/' className='d-block'>Flats</a>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div className="card-title fw-bold">Boots</div>
                                                <div className="card-link-color card-text">
                                                    <a href='/' className='d-block'>View All</a>
                                                    <a href='/' className='d-block'>Ankle Boots & Booties</a>
                                                    <a href='/' className='d-block'>Chelsea Boots</a>
                                                    <a href='/' className='d-block'>Dress Boots</a>
                                                    <a href='/' className='d-block'>Tall Boots</a>
                                                    <a href='/' className='d-block'>Outdoor & Hiking Boots</a>
                                                    <a href='/' className='d-block'>Wide Calf Boots</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="card border-0 rounded-0 bg-light">
                                            <div className="card-body">
                                                <div className="card-title fw-bold">Shops, Styles & More</div>
                                                <div className="card-link-color card-text">
                                                    <a href='/' className='d-block'>Boot Shop</a>
                                                    <a href='/' className='d-block'>Sneaker Shop</a>
                                                    <a href='/' className='d-block'>Active Shop</a>
                                                    <a href='/' className='d-block'>Weddings & Events</a>
                                                    <a href='/' className='d-block'>Getaway Styles</a>
                                                    <a href='/' className='d-block'>Lug Soles</a>
                                                    <a href='/' className='d-block'>Eco-Conscious</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-12 bg-warning">
                                        <div className="hover-img p-lg-2">
                                            <img src={women_hover} alt="Women" className='img-fluid '/>
                                        </div>
                                        <div className="text-light text-center">
                                            <h4 className='hover-images-sub-text text-dark mt-2 fs-5 fw-bold'>VISIT THE SNEAKERS SHOP</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="navbar-hover-container nav-item">
                            <button class="navbar-select-button" href="/">Men</button>
                            <div className="navbar-hover-box container p-0 container-shadow bg-light">
                                <div className="row row-cols-4 gx-0">
                                    <div className="col">
                                        <div className="card border-0 rounded-0 bg-light">
                                            <div className="card-body">
                                                <div className="card-title fw-bold">Men's Shoes</div>
                                                <div className="card-link-color card-text">
                                                    <a href='/' className='d-block'>View All</a>
                                                    <a href='/' className='d-block'>New Arrivals</a>
                                                    <a href='/' className='d-block'>Sneakers & Athletics</a>
                                                    <a href='/' className='d-block'>Boots</a>
                                                    <a href='/' className='d-block'>Loafers & Oxfords</a>
                                                    <a href='/' className='d-block'>Sandals</a>
                                                    <a href='/' className='d-block'> Work & Safety</a>
                                                    <a href='/' className='d-block'>Boat Shoes</a>
                                                    <a href='/' className='d-block'>Clogs & Mules</a>   
                                                    <a href='/' className='d-block'>Slippers</a>                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card border-0 bg-light">
                                            <div className="card-body">
                                                <div className="card-title fw-bold">Shops, Styles & More</div>
                                                <div className="card-link-color card-text">
                                                    <a href='/' className='d-block'>Sneaker Shop</a>
                                                    <a href='/' className='d-block'>Active Shop</a>
                                                    <a href='/' className='d-block'>Eco-Conscious</a>
                                                    <a href='/' className='d-block'>Sale</a>
                                                    <a href='/' className='d-block'>Clearance</a>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div className="card-title fw-bold">Boots</div>
                                                <div className="card-link-color card-text">
                                                    <a href='/' className='d-block'>View All</a>
                                                    <a href='/' className='d-block'>Ankle Boots & Booties</a>
                                                    <a href='/' className='d-block'>Chelsea Boots</a>
                                                    <a href='/' className='d-block'>Dress Boots</a>
                                                    <a href='/' className='d-block'>Tall Boots</a>
                                                    <a href='/' className='d-block'>Outdoor & Hiking Boots</a>
                                                    <a href='/' className='d-block'>Wide Calf Boots</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card border-0 bg-light">
                                            <div className="card-body">
                                                <div className="card-title fw-bold">Women's Shoes</div>
                                                <div className="card-link-color card-text">
                                                    <a href='/' className='d-block'>View All</a>
                                                    <a href='/' className='d-block'>New Arrivals</a>
                                                    <a href='/' className='d-block'>Sneakers & Athletics</a>
                                                    <a href='/' className='d-block'>Boots</a>
                                                    <a href='/' className='d-block'>Heels</a>
                                                    <a href='/' className='d-block'>Loafers & Oxfords</a>
                                                    <a href='/' className='d-block'>Sandals</a>
                                                    <a href='/' className='d-block'>Flats</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="hover-img p-2">
                                            <img src={men_hover} alt="Men" className='img-fluid'/>
                                        </div>
                                        <div className="text-light text-center">
                                            <h4 className='hover-images-sub-text text-dark mt-2 fs-5 fw-bold'>VISIT THE SNEAKERS SHOP</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="navbar-hover-container nav-item">
                            <button class="navbar-select-button" href="/">Kids</button>
                            <div className="navbar-hover-box container p-0 container-shadow bg-light">
                                <div className="row row-cols-4 gx-0">
                                    <div className="col">
                                        <div className="card border-0 rounded-0 bg-light">
                                            <div className="card-body">
                                                <div className="card-title fw-bold">Shop by Size</div>
                                                <div className="card-link-color card-text">
                                                    <a href='/' className='d-block'>Baby (0-3.5)</a>
                                                    <a href='/' className='d-block'>Toddler (4-10)</a>
                                                    <a href='/' className='d-block'>Little Kid (10.5-3)</a>
                                                    <a href='/' className='d-block'>Big Kid (3.5-7) </a>         
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div className="card-title fw-bold">Top Brands</div>
                                                <div className="card-link-color card-text">
                                                    <a href='/' className='d-block'>Nike</a>
                                                    <a href='/' className='d-block'>Skechers</a>
                                                    <a href='/' className='d-block'>Adidas</a>
                                                    <a href='/' className='d-block'>Crocs</a>
                                                    <a href='/' className='d-block'>Puma</a>
                                                    <a href='/' className='d-block'>Vans</a>
                                                    <a href='/' className='d-block'>Converse</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card border-0 bg-light">
                                            <div className="card-body">
                                                <div className="card-title fw-bold">Girls' Shoes</div>
                                                <div className="card-link-color card-text">
                                                    <a href='/' className='d-block'>View All</a>
                                                    <a href='/' className='d-block'>Sneakers & Athletics</a>
                                                    <a href='/' className='d-block'>Boots</a>
                                                    <a href='/' className='d-block'>Sandals</a>
                                                    <a href='/' className='d-block'>Dress Shoes</a>
                                                    <a href='/' className='d-block'> Boat Shoes</a>
                                                    <a href='/' className='d-block'>Slippers</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card border-0 bg-light">
                                            <div className="card-body">
                                                <div className="card-title fw-bold">Boys' Shoes</div>
                                                <div className="card-link-color card-text">
                                                    <a href='/' className='d-block'>View All</a>
                                                    <a href='/' className='d-block'>Sneakers & Athletics</a>
                                                    <a href='/' className='d-block'>Sandals</a>
                                                    <a href='/' className='d-block'> Dress Shoes</a>
                                                    <a href='/' className='d-block'> Boat Shoes</a>
                                                    <a href='/' className='d-block'>Slippers</a>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <div className="card-title fw-bold">Other Ways to Shop</div>
                                                <div className="card-link-color card-text">
                                                    <a href='/' className='d-block'>New Arrivals</a>
                                                    <a href='/' className='d-block'>View All Kids' Shoes</a>
                                                    <a href='/' className='d-block'>Sale</a>
                                                    <a href='/' className='d-block'>Clearance</a>
                                                    <a href='/' className='d-block'>Wide</a>
                                                    <a href='/' className='d-block'>Eco-Conscious</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="hover-img p-2">
                                            <img src={kids_hover} alt="Kids" className='img-fluid'/>
                                        </div>
                                        <div className="text-light text-center">
                                            <h4 className='hover-images-sub-text text-dark mt-2 fs-5 fw-bold'>SHOP KIDS' NIKE</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="navbar-hover-container nav-item">
                            <button class="navbar-select-button" href="/">Accessories</button>
                            <div className="navbar-hover-box container p-0 container-shadow bg-light">
                                <div className="row row-cols-4 gx-0">
                                    <div className="col">
                                        <div className="card border-0 rounded-0 bg-light">
                                            <div className="card-body">
                                                <div className="card-title fw-bold ">Accessories</div>
                                                <div className="card-link-color card-text">
                                                    <a href='/' className='d-block'>View All</a>
                                                    <a href='/' className='d-block'>Bags</a>
                                                    <a href='/' className='d-block'>Socks</a>
                                                    <a href='/' className='d-block'>Shoe Charms</a>
                                                    <a href='/' className='d-block'>Hair Accessories</a>
                                                    <a href='/' className='d-block'>Hats & Gloves</a>
                                                    <a href='/' className='d-block'>Insoles & Inserts</a>
                                                    <a href='/' className='d-block'>Slippers</a>                                 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card border-0 bg-light">
                                            <div className="card-body">
                                                <div className="card-title fw-bold">Bags</div>
                                                <div className="card-link-color card-text">
                                                    <a href='/' className='d-block'>View All</a>
                                                    <a href='/' className='d-block'>Backpacks</a>
                                                    <a href='/' className='d-block'>Lunch Boxes & Bags</a>
                                                    <a href='/' className='d-block'>Drawstring Bags</a>
                                                    <a href='/' className='d-block'>Mini Bags</a>
                                                    <a href='/' className='d-block'>Fanny Packs</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card border-0 bg-light">
                                            <div className="card-body">
                                                <div className="card-title fw-bold">Slippers</div>
                                                <div className="card-link-color card-text">
                                                    <a href='/' className='d-block'>All Slippers</a>
                                                    <a href='/' className='d-block'>Women</a>
                                                    <a href='/' className='d-block'>Men</a>
                                                    <a href='/' className='d-block'>Kids</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card border-0 bg-light">
                                            <div className="card-body">
                                                <div className="card-title fw-bold">Other Ways to Shop</div>
                                                <div className="card-link-color card-text">
                                                    <a href='/' className='d-block'>Eco-Conscious</a>
                                                    <a href='/' className='d-block'>New Arrivals</a>
                                                    <a href='/' className='d-block'>Sale</a>
                                                    <a href='/' className='d-block'>Clearance</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="navbar-hover-container nav-item">
                            <button class="navbar-select-button">Brands</button>
                        </li>
                        <li class="navbar-hover-container nav-item">
                            <button class="navbar-select-button">Sale</button>
                        </li>
                    </ul>
                    <form class="form-for-navbar d-none d-xl-flex align-items-center justify-content-center me-3">
                    <i class="bi bi-search ms-2 bg-tranparent"></i>
                    <input class="search-input-for-navbar" type="search" placeholder="Search for products, brands and more" aria-label="Search"/>
                    </form>
                    <div className="row-cols-3 d-inline-flex justify-content-center mx-3">
                        <div className="col">
                            <a href="/" className=' d-flex flex-column align-items-center text-decoration-none'>
                                <i class="navbar_icon ni-1 bi bi-person fs-5"></i>
                                <span className='navbar_icon_text small'>Profile</span>
                            </a>
                        </div>
                        <div className="col ms-1">
                            <a href="/" className='d-flex flex-column align-items-center text-decoration-none'>
                                <i class="navbar_icon ni-2 bi bi-bag fs-5"></i>
                                <span className='navbar_icon_text small'>Bag</span>
                            </a>
                        </div>
                        <div className="col ms-1">
                            <a href="/" className='navbar-icon-link d-flex flex-column align-items-center text-decoration-none'>
                                <i class="navbar_icon ni-3 bi bi-heart fs-5"></i>
                                <span className='navbar_icon_text small'>Wishlist</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav> */}

    </div>
  )
}

export default Header