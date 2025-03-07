import React from 'react'
import InnerImageZoom from 'react-inner-image-zoom';

import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Slider from 'react-slick'

import {useRef, useState} from 'react'
import './productDetails.css'
import img1 from '../../assets/images/01 (1).webp'
import img2 from'../../assets/images/02.webp'
import img3 from '../../assets/images/02.webp'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import CategoryIcon from '@mui/icons-material/Category';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CropIcon from '@mui/icons-material/Crop';
import VerifiedIcon from '@mui/icons-material/Verified';

import userImg from '../../assets/images/b02bea56-39de-4d2b-9918-9b260fd06677.webp'
import Rating from '@mui/material/Rating';
import ReplyIcon from '@mui/icons-material/Reply';

export default function ProductDetails() {
    const zoomSlider = useRef();

    const [zoomImage, setZoomImage] = useState('https://mironcoder-hotash.netlify.app/images/product/single/01.webp');

    const [bigImage, setbigImage] = useState(1500,1500);
    const [smallImage, setSmallImage] = useState(500,500);


    var settings = {
        dots: false,
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true
      };

     

      const goTo = (url,index) =>{
        setTimeout(()=>{
            setZoomImage(url);
        },500)

        zoomSlider.current.slickGoTo(index);
      }
  return (
    <div className='mycontent'>
         <div className='productDetails'>
     
        <div className='card border-0 shadow mt-2 p-3 mb-4 firstCard'>
            <div className='d-flex align-items-center'>
                <h3>Product Details</h3>
                <div className='d-flex ms-auto'>
                    <button><i class="fa-solid fa-house me-2"></i>Dashboard</button>
                    <span className='slash mx-2'>/</span>
                    <button>Products</button>
                    <span className='slash mx-2'>/</span>
                    <button>Products Details</button>
                </div>
            </div>
        </div>


        <div className='card mt-3 p-5 shadow border-0'>
            <div className='row'>
                 <div className='col-md-4 productZoom'>
                    <h3 className='mb-3'>Prodcut Gallery</h3>
                                <div className='productImg'>
                                    <InnerImageZoom src={`${zoomImage}?im=Resize=(${bigImage[0]}, ${bigImage[1]})`} zoomSrc={`${zoomImage}`} zoomType="hover" zoomScale={1.2} />
                                </div>

                                        <div className='zoomSlider' >
                                            <Slider {...settings} className="zoomSlider" ref={zoomSlider}>


                                                <div className="item2" >
                                                    <div className="item2_info">
                                                        <img src={`https://mironcoder-hotash.netlify.app/images/product/single/02.webp?im=Resize=(${smallImage[0]},${smallImage[1]})`} alt="sliderimage" onClick={()=> goTo('https://mironcoder-hotash.netlify.app/images/product/single/02.webp',0)}/>
                                                    </div>
                                                </div>

                                                <div className="item2" >
                                                    <div div className="item2_info">
                                                        <img src={`https://mironcoder-hotash.netlify.app/images/product/single/03.webp?im=Resize=(${smallImage[0]},${smallImage[1]})`} alt="sliderimage" onClick={()=> goTo('https://mironcoder-hotash.netlify.app/images/product/single/03.webp',1)}/>
                                                    </div>
                                                </div>

                                                <div className="item2" >
                                                    <div div className="item2_info">
                                                        <img src={`https://mironcoder-hotash.netlify.app/images/product/single/04.webp?im=Resize=(${smallImage[0]},${smallImage[1]})`} alt="sliderimage" onClick={()=> goTo('https://mironcoder-hotash.netlify.app/images/product/single/04.webp',2)} />
                                                    </div>
                                                </div>
                                            </Slider>
                                        </div>
                            </div>


                <div className='col-md-8'>
                   
                    <div className='pInfo'>
                    <h2>Formal suits for men wedding slim fit 3 piece dress business party jacket</h2>
                        <div className='row'>

                            <div className='col-md-2'>
                                    <div className='d-flex '>
                                    <BrandingWatermarkIcon className='me-2'/>
                                    <p>Brand</p>
                                
                                    </div> 

                                    <div className='d-flex '>
                                        <CategoryIcon className='me-2'/>
                                        <p>Category</p>
                                    
                                    </div>

                                    <div className='d-flex '>
                                        <FilterVintageIcon className='me-2'/>
                                        <p>Tags</p>
                                    
                                    </div>



                                  

                                    <div className='d-flex '>
                                    <ColorLensIcon className='me-2'/>
                                    <p>Color</p>
                                    
                                    </div>


                                    <div className='d-flex '>
                                    <CropIcon className='me-2'/>
                                    <p>Size</p>
                                        
                                    </div>

                                    <div className='d-flex '>
                                        <Inventory2Icon className='me-2'/>
                                        <p>In Stock</p>
                                    
                                    </div>

                                    <div className='d-flex '>
                                        <VerifiedIcon className='me-2'/>
                                        <p>Published</p>
                                    
                                    </div>
                            </div>

                            <div className='col-md-10 pdetail'>
                                    <p className='right'>Ecstasy</p>
                                    <p className='right'>Man's</p>
                                    <p className='right'>
                                        <span className='tags'>SUITE</span>
                                        <span className='tags'>PARTY</span>
                                        <span className='tags'>SMART</span>
                                        <span className='tags'>NORMAL</span>
                                        <span className='tags'>PREMIUM</span>
                                    </p>

                                    <p className='right'>
                                    <span className='tags'>RED</span>
                                        <span className='tags'>BLACK</span>
                                        <span className='tags'>GRAY</span>
                                    </p>

                                    <p className='right'>
                                        <span className='tags'>LARGE</span>
                                        <span className='tags'>MEDIUM</span>
                                        <span className='tags'>SMALL</span>
                                    </p>

                                    <p className='right'>(68) Piece </p>

                                    <p className='right'>02 FEBRUARY, 2022 </p>
                            </div>
                        </div>
                        
                       
                       

                       

                        
                       


                    </div>
                </div>

            </div>

            <div className='desc mt-4'>
                <h3>Product Description</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reprehenderit repellendus expedita esse cupiditate quos doloremque rerum, corrupti ab illum est nihil, voluptate ex dignissimos! Sit voluptatem delectus nam, molestiae, repellendus ab sint quo aliquam debitis amet natus doloremque laudantium? Repudiandae, consequuntur, officiis quidem quo deleniti, autem non laudantium sequi error molestiae ducimus accusamus facere velit consectetur vero dolore natus nihil temporibus aspernatur quia consequatur? Consequuntur voluptate deserunt repellat tenetur debitis molestiae doloribus dicta. In rem illum dolorem atque ratione voluptates asperiores maxime doloremque laudantium magni neque ad quae quos quidem, quaerat rerum ducimus blanditiis reiciendis</p>
            </div>

            <div className='rating mt-4'>
                <h3>Rating Analytics</h3>

                <div className='progressBox w-50'>
                    <span className=''>5 Star</span>
                    <div className='progress my-2' style={{width:'85%', height:'5px'}}>
                        <div className='progress-bar bg-warning' style={{width:'75%', height:'5px'}}></div>
                    </div>

                    <span className=''>4 Star</span>
                    <div className='progress my-2' style={{width:'85%', height:'5px'}}>
                        <div className='progress-bar bg-warning' style={{width:'65%', height:'5px'}}></div>
                    </div>


                    <span className=''>3 Star</span>
                    <div className='progress my-2' style={{width:'85%',height:'5px'}}>
                        <div className='progress-bar bg-warning' style={{width:'55%', height:'5px'}}></div>
                    </div>

                    <span className=''>2 Star</span>
                    <div className='progress my-2' style={{width:'85%', height:'5px'}}>
                        <div className='progress-bar bg-warning' style={{width:'45%', height:'5px'}}></div>
                    </div>

                    <span className=''>1 Star</span>
                    <div className='progress my-2' style={{width:'85%', height:'5px'}}>
                        <div className='progress-bar bg-warning' style={{width:'25%', height:'5px'}}></div>
                    </div>
                </div>
            </div>

            <div className='customer-review mt-4'>
                <h3>Customer Reviews</h3>
                <div className=' card p-3 ucard border-0'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='d-flex'>
                                <div className='imgWrap '>
                                <img src={userImg} />
                                </div>

                                <div className='userReview'>
                                <p className='name'>Farjana Dipa</p>
                                <p className='time'>25 minutes ago!</p>
                                </div>
                            </div>
                           

                        </div>
                 
                        <div className='col-md-8'>
                            <button className='btn btn-primary reply'><ReplyIcon className='me-2'/>Reply</button>
                        </div>


                    </div>   
                    <div className='rating mt-3'>
                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                            <p className='mt-2 p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>
                    </div>                    
                </div>

                <div className=' card p-3 ucard border-0 mt-4 cright'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='d-flex'>
                                <div className='imgWrap '>
                                <img src={userImg} />
                                </div>

                                <div className='userReview'>
                                <p className='name'>Farjana Dipa</p>
                                <p className='time'>25 minutes ago!</p>
                                </div>
                            </div>
                           

                        </div>
                 
                        <div className='col-md-8'>
                            <button className='btn btn-primary reply'><ReplyIcon className='me-2'/>Reply</button>
                        </div>


                    </div>   
                    <div className='rating mt-3'>
                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                            <p className='mt-2 p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>
                    </div>                    
                </div>

                <div className=' card p-3 ucard border-0 mt-4 cright'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='d-flex'>
                                <div className='imgWrap '>
                                <img src={userImg} />
                                </div>

                                <div className='userReview'>
                                <p className='name'>Farjana Dipa</p>
                                <p className='time'>25 minutes ago!</p>
                                </div>
                            </div>
                           

                        </div>
                 
                        <div className='col-md-8'>
                            <button className='btn btn-primary reply'><ReplyIcon className='me-2'/>Reply</button>
                        </div>


                    </div>   
                    <div className='rating mt-3'>
                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                            <p className='mt-2 p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>
                    </div>                    
                </div>


                <div className=' card p-3 ucard border-0 mt-4'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='d-flex'>
                                <div className='imgWrap '>
                                <img src={userImg} />
                                </div>

                                <div className='userReview'>
                                <p className='name'>Farjana Dipa</p>
                                <p className='time'>25 minutes ago!</p>
                                </div>
                            </div>
                           

                        </div>
                 
                        <div className='col-md-8'>
                            <button className='btn btn-primary reply'><ReplyIcon className='me-2'/>Reply</button>
                        </div>


                    </div>   
                    <div className='rating mt-3'>
                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                            <p className='mt-2 p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima, adipisci natus quod magni omnis quas.</p>
                    </div>                    
                </div>


            </div>

            <div className='reply-form mt-5'>
                <h3>Review Reply Form</h3>
                <form className='reviewForm py-3 w-50'>
                                <h4>Write a Review</h4>

                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='form-group mb-3'>
                                            <input type='text' className='form-control' placeholder='Enter Your Name'/>
                                        </div>
                                    </div>

                                    <div className='col-md-6'>
                                        <div className='form-group mb-3'>
                                            <input type='email' className='form-control' placeholder='Enter Your Email'/>
                                        </div>
                                    </div>
                                </div>

                                <div className='form-group mb-3' >
                                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} />
                                </div>
                                <div className='form-group mb-3'>
                                   <textarea className='form-control' placeholder='write a comment' rows={10} cols={15}/>
                                </div>

                               

                                <button className='btn btn-primary submitBtn w-100'>Submit</button>
                            </form>
            </div>
        </div>

        </div>
    </div>
   
  )
}
