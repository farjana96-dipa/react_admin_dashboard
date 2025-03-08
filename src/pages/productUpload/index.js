import React from 'react'
import InnerImageZoom from 'react-inner-image-zoom';

import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Slider from 'react-slick'

import {useRef, useState} from 'react'
import '../productDetails/productDetails.css'
import img1 from '../../assets/images/01 (1).webp'

import './productUpload.css'
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

import MenuItem from '@mui/material/MenuItem';


import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import CloseIcon from '@mui/icons-material/Close';

const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
  ];
  
  const ITEM_HEIGHT = 48;

export default function ProductUpload() {
     const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
    
      const [showbyNum, setShowByNum] = useState('');
      const [showbyCat, setShowByCat] = useState('');
      const [showbyPrice, setShowByPrice] = useState('');
    
      const handleChange = (event) => {
        setShowByNum(event.target.value);
        
      };
   
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
                    <button>Products Upload</button>
                </div>
            </div>
        </div>


       
        <div className='card border-0 shadow p-5 mt-3'>

        <div className='reply-form'>
                <h3>Basic Information</h3>
                <form className='reviewForm py-3 w-100'>
                   
                       
                    <div className='form-group mb-3'>
                        <label className='form-control-label mb-2'>Product Name</label>
                        <input type='text' className='form-control' />
                    </div>
            

                
                    <div className='form-group mb-3'>
                        <label className='form-control-label mb-2'>Product Description</label>
                        <textarea className='form-control'  rows={10} cols={15}/>
                    </div>


                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='form-group mb-3'>
                                <label className='form-control-label mb-2'>Category</label>
                                    <FormControl sx={{ m: 1, minWidth: 120 }} className='selectBox'>
                                        <Select
                                            value={showbyNum}
                                            onChange={handleChange}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value="">
                                            <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Men's</MenuItem>
                                            <MenuItem value={20}>women's</MenuItem>
                                            <MenuItem value={30}>Kid's</MenuItem>
                                        </Select>
                                        
                                    </FormControl>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='form-group mb-3'>
                            <label className='form-control-label mb-2'>sub Category</label>
                                        <FormControl sx={{ m: 1, minWidth: 120 }} className='selectBox'>
                                            <Select
                                                value={showbyNum}
                                                onChange={handleChange}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                                <MenuItem value="">
                                                <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Three Piece</MenuItem>
                                                <MenuItem value={20}>Shirt & Jacket</MenuItem>
                                                <MenuItem value={30}>Kid's Dresses</MenuItem>
                                            </Select>
                                            
                                        </FormControl>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='form-group mb-3'>
                                <label className='form-control-label mb-2'>Product Price</label>
                                <input type='text' className='form-control'/>
                            </div>
                        </div>
                    </div>
                  



                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='form-group mb-3'>
                                <label className='form-control-label mb-2'>Old Price</label>
                                <input type='text' className='form-control'/>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='form-group mb-3'>
                            <label className='form-control-label mb-2'>is featured</label>
                                        <FormControl sx={{ m: 1, minWidth: 120 }} className='selectBox'>
                                            <Select
                                                value={showbyNum}
                                                onChange={handleChange}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                                <MenuItem value="">
                                                <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>True</MenuItem>
                                                <MenuItem value={20}>False</MenuItem>
                                                
                                            </Select>
                                            
                                        </FormControl>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='form-group mb-3'>
                                <label className='form-control-label mb-2'>Product Stock</label>
                                <input type='text' className='form-control'/>
                            </div>
                        </div>
                    </div>
                 

                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='form-group mb-3'>
                                <label className='form-control-label mb-2'>Brand</label>
                                <input type='text' className='form-control'/>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='form-group mb-3'>
                                <label className='form-control-label mb-2'>Discount</label>
                                <input type='text' className='form-control'/> 
                            </div>
                        </div>

                        <div className='col-md-4'>
                        <div className='form-group mb-3'>
                        <label className='form-control-label mb-2'>product size</label>
                                        <FormControl sx={{ m: 1, minWidth: 120 }} className='selectBox'>
                                            <Select
                                                value={showbyNum}
                                                onChange={handleChange}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                                <MenuItem value="">
                                                <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Large</MenuItem>
                                                <MenuItem value={20}>Medium</MenuItem>
                                                <MenuItem value={20}>Small</MenuItem>
                                                
                                            </Select>
                                            
                                        </FormControl>
                            </div>
                        </div>
                    </div>

                   
                </form>
            </div>
        </div>


        <div className='card border-0 shadow p-5 mt-3'>
            <div className='media'>
                <h4>Media And Published</h4>
                <div className='d-flex'>
                    <img src={img1} /> <CloseIcon className='closeIcon'/>
                    <input type='file' />
                </div>
                
            </div>

            <button className='btn btn-primary pbtn'>PUBLISH & VIEW</button>
        </div>
        

        </div>

        </div>
    
   
  )
}
