import React, { useState } from 'react'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Face3Icon from '@mui/icons-material/Face3';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './dashboard.css'
import bgImg from '../../assets/images/download.svg'
import bgImg1 from '../../assets/images/download (1).svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { PieChart } from '@mui/x-charts/PieChart';

import Tops from '../../assets/images/01.webp'

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';

import Pagination from '@mui/material/Pagination';


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
export default function Home() {
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
    <div className='content_area'>
     
        <div className='row'>
          <div className='col-md-8'>
            <div className='row'>
            <div className='col-md-6'>
            <div className='box'>
             
              
              <div className='d-flex mb-5'>
                <div>
                  <h4>Total Users</h4>
                  <h2>277</h2>
                </div>
                <div className='boxIcon1 ms-auto'>
                <Face3Icon className='boxIcon1'/>
                </div>
                
              </div>
              <div className='d-flex align-items-center'>
                <p>Last Month</p>
                <div className='ms-auto'>
                <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
              </div>
              <img src={bgImg}/>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
          <div className='box1'>
             
              
             <div className='d-flex mb-5'>
               <div>
                 <h4>Total Users</h4>
                 <h2>277</h2>
               </div>
               <div className='boxIcon1 ms-auto'>
               <ShoppingCartIcon className='boxIcon1'/>
               </div>
               
             </div>
             <div className='d-flex align-items-center'>
               <p>Last Month</p>
               <div className='ms-auto'>
               <IconButton
       aria-label="more"
       id="long-button"
       aria-controls={open ? 'long-menu' : undefined}
       aria-expanded={open ? 'true' : undefined}
       aria-haspopup="true"
       onClick={handleClick}
     >
       <MoreVertIcon />
     </IconButton>
     <Menu
       id="long-menu"
       MenuListProps={{
         'aria-labelledby': 'long-button',
       }}
       anchorEl={anchorEl}
       open={open}
       onClose={handleClose}
       slotProps={{
         paper: {
           style: {
             maxHeight: ITEM_HEIGHT * 4.5,
             width: '20ch',
           },
         },
       }}
     >
       {options.map((option) => (
         <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
           {option}
         </MenuItem>
       ))}
     </Menu>
             </div>
             <img src={bgImg1}/>
             </div>
           </div>
          </div>
            </div>


            <div className='row mt-3 row2'>
            <div className='col-md-6'>
            <div className='box'>
             
              
              <div className='d-flex mb-5'>
                <div>
                  <h4>Total Users</h4>
                  <h2>277</h2>
                </div>
                <div className='boxIcon1 ms-auto'>
                <Face3Icon className='boxIcon1'/>
                </div>
                
              </div>
              <div className='d-flex align-items-center'>
                <p>Last Month</p>
                <div className='ms-auto'>
                <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
              </div>
              <img src={bgImg}/>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
          <div className='box1'>
             
              
             <div className='d-flex mb-5'>
               <div>
                 <h4>Total Users</h4>
                 <h2>277</h2>
               </div>
               <div className='boxIcon1 ms-auto'>
               <ShoppingCartIcon className='boxIcon1'/>
               </div>
               
             </div>
             <div className='d-flex align-items-center'>
               <p>Last Month</p>
               <div className='ms-auto'>
               <IconButton
       aria-label="more"
       id="long-button"
       aria-controls={open ? 'long-menu' : undefined}
       aria-expanded={open ? 'true' : undefined}
       aria-haspopup="true"
       onClick={handleClick}
     >
       <MoreVertIcon />
     </IconButton>
     <Menu
       id="long-menu"
       MenuListProps={{
         'aria-labelledby': 'long-button',
       }}
       anchorEl={anchorEl}
       open={open}
       onClose={handleClose}
       slotProps={{
         paper: {
           style: {
             maxHeight: ITEM_HEIGHT * 4.5,
             width: '20ch',
           },
         },
       }}
     >
       {options.map((option) => (
         <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
           {option}
         </MenuItem>
       ))}
     </Menu>
             </div>
             <img src={bgImg1}/>
             </div>
           </div>
          </div>
            </div>


          </div>
         
          <div className='col-md-4'>
          <div className='box2'>
             
          <div className='d-flex align-items-center'>
               <p>Total Sales</p>
               
               <div className='ms-auto'>
               <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                      paper: {
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: '20ch',
                        },
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
             </div>
            
             </div>
              
             <div className=''>
             <h2>$3,787,681.00</h2>
             <p className='my-5'>$3,578.90 in last month</p>
             <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: 10, label: 'series A' },
                        { id: 1, value: 15, label: 'series B' },
                        { id: 2, value: 20, label: 'series C' },
                      ],
                    },
                  ]}
                  width={400}
                  height={200}
                  className='mt-5 mb-2'
                />
             </div>

           </div>
          </div>
        </div>

        <div className='card shadow border-0 mt-4 p-3'>
          <h3>Best Selling Products</h3>

          <div className='row cardFilters'>
            <div className='col-md-4'>
              <h4>SHOW BY NUMBER</h4>
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
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                 
                </FormControl>
            </div>

            <div className='col-md-4'>
              <h4>SHOW BY CATEGORY</h4>
              <FormControl sx={{ m: 1, minWidth: 120 }} className='selectBox'>
                  <Select
                    value={showbyCat}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                 
                </FormControl>
            </div>


            <div className='col-md-4'>
              <h4>SHOW BY PRICE</h4>
              <FormControl sx={{ m: 1, minWidth: 120 }} className='selectBox'>
                  <Select
                    value={showbyPrice}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                 
                </FormControl>
            </div>


          </div>

         <div className='row Table mt-4'>
          <div className='col'>
            <div className='table-responsive'>
              <table className='table table-bordered table-striped'>
                  <thead className='thead-light'>
                      <tr>
                        <th>UID</th>
                        <th style={{ width: "25%" }}>PRODUCT</th>
                        <th>CATEGORY</th>
                        <th>BRAND</th>
                        <th>PRICE</th>
                        <th>STOCK</th>
                        <th>RATING</th>
                        <th>ORDER</th>
                        <th>SALES</th>
                        <th>ACTION</th>
                      </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <div className='d-flex '>
                          <img src={Tops}/ >
                          <div className='cont ' style={{ width: "60%" }}>
                            <h4>Tops and Skirt Set's for...</h4>
                            <span>Women's exclusive fas..</span>
                           
                          </div>
                        </div>
                      </td>
                      <td>Womens</td>
                      <td>Richman</td>
                      <td>
                        <del>500</del>
                        <p className='price'>450</p>
                      </td>
                      <td>Available</td>
                      <td>
                        <Rating name="size-medium" defaultValue={2} size="small" />
                      </td>
                      <td>380</td>
                      <td>$38k</td>
                      <td>
                        <i class="fa-solid fa-eye icon1"></i>
                        <i class="fa-solid fa-pen icon2"></i>
                        <i class="fa-solid fa-trash icon3"></i>
                      </td>
                    </tr>

                    <tr>
                      <td>1</td>
                      <td>
                        <div className='d-flex '>
                          <img src={Tops}/ >
                          <div className='cont ' style={{ width: "60%" }}>
                            <h4>Tops and Skirt Set's for...</h4>
                            <span>Women's exclusive fas..</span>
                           
                          </div>
                        </div>
                      </td>
                      <td>Womens</td>
                      <td>Richman</td>
                      <td>
                        <del>500</del>
                        <p className='price'>450</p>
                      </td>
                      <td>Available</td>
                      <td>
                        <Rating name="size-medium" defaultValue={2} size="small" />
                      </td>
                      <td>380</td>
                      <td>$38k</td>
                      <td>
                        <i class="fa-solid fa-eye icon1"></i>
                        <i class="fa-solid fa-pen icon2"></i>
                        <i class="fa-solid fa-trash icon3"></i>
                      </td>
                    </tr>


                    <tr>
                      <td>1</td>
                      <td>
                        <div className='d-flex '>
                          <img src={Tops}/ >
                          <div className='cont ' style={{ width: "60%" }}>
                            <h4>Tops and Skirt Set's for...</h4>
                            <span>Women's exclusive fas..</span>
                           
                          </div>
                        </div>
                      </td>
                      <td>Womens</td>
                      <td>Richman</td>
                      <td>
                        <del>500</del>
                        <p className='price'>450</p>
                      </td>
                      <td>Available</td>
                      <td>
                        <Rating name="size-medium" defaultValue={2} size="small" />
                      </td>
                      <td>380</td>
                      <td>$38k</td>
                      <td>
                        <i class="fa-solid fa-eye icon1"></i>
                        <i class="fa-solid fa-pen icon2"></i>
                        <i class="fa-solid fa-trash icon3"></i>
                      </td>
                    </tr>


                    <tr>
                      <td>1</td>
                      <td>
                        <div className='d-flex '>
                          <img src={Tops}/ >
                          <div className='cont ' style={{ width: "60%" }}>
                            <h4>Tops and Skirt Set's for...</h4>
                            <span>Women's exclusive fas..</span>
                           
                          </div>
                        </div>
                      </td>
                      <td>Womens</td>
                      <td>Richman</td>
                      <td>
                        <del>500</del>
                        <p className='price'>450</p>
                      </td>
                      <td>Available</td>
                      <td>
                        <Rating name="size-medium" defaultValue={2} size="small" />
                      </td>
                      <td>380</td>
                      <td>$38k</td>
                      <td>
                        <i class="fa-solid fa-eye icon1"></i>
                        <i class="fa-solid fa-pen icon2"></i>
                        <i class="fa-solid fa-trash icon3"></i>
                      </td>
                    </tr>


                    <tr>
                      <td>1</td>
                      <td>
                        <div className='d-flex '>
                          <img src={Tops}/ >
                          <div className='cont ' style={{ width: "60%" }}>
                            <h4>Tops and Skirt Set's for...</h4>
                            <span>Women's exclusive fas..</span>
                           
                          </div>
                        </div>
                      </td>
                      <td>Womens</td>
                      <td>Richman</td>
                      <td>
                        <del>500</del>
                        <p className='price'>450</p>
                      </td>
                      <td>Available</td>
                      <td>
                        <Rating name="size-medium" defaultValue={2} size="small" />
                      </td>
                      <td>380</td>
                      <td>$38k</td>
                      <td>
                        <i class="fa-solid fa-eye icon1"></i>
                        <i class="fa-solid fa-pen icon2"></i>
                        <i class="fa-solid fa-trash icon3"></i>
                      </td>
                    </tr>


                    <tr>
                      <td>1</td>
                      <td>
                        <div className='d-flex '>
                          <img src={Tops}/ >
                          <div className='cont ' style={{ width: "60%" }}>
                            <h4>Tops and Skirt Set's for...</h4>
                            <span>Women's exclusive fas..</span>
                           
                          </div>
                        </div>
                      </td>
                      <td>Womens</td>
                      <td>Richman</td>
                      <td>
                        <del>500</del>
                        <p className='price'>450</p>
                      </td>
                      <td>Available</td>
                      <td>
                        <Rating name="size-medium" defaultValue={2} size="small" />
                      </td>
                      <td>380</td>
                      <td>$38k</td>
                      <td>
                        <i class="fa-solid fa-eye icon1"></i>
                        <i class="fa-solid fa-pen icon2"></i>
                        <i class="fa-solid fa-trash icon3"></i>
                      </td>
                    </tr>


                    <tr>
                      <td>1</td>
                      <td>
                        <div className='d-flex '>
                          <img src={Tops}/ >
                          <div className='cont ' style={{ width: "60%" }}>
                            <h4>Tops and Skirt Set's for...</h4>
                            <span>Women's exclusive fas..</span>
                           
                          </div>
                        </div>
                      </td>
                      <td>Womens</td>
                      <td>Richman</td>
                      <td>
                        <del>500</del>
                        <p className='price'>450</p>
                      </td>
                      <td>Available</td>
                      <td>
                        <Rating name="size-medium" defaultValue={2} size="small" />
                      </td>
                      <td>380</td>
                      <td>$38k</td>
                      <td>
                        <i class="fa-solid fa-eye icon1"></i>
                        <i class="fa-solid fa-pen icon2"></i>
                        <i class="fa-solid fa-trash icon3"></i>
                      </td>
                    </tr>


                    <tr>
                      <td>1</td>
                      <td>
                        <div className='d-flex '>
                          <img src={Tops}/ >
                          <div className='cont ' style={{ width: "60%" }}>
                            <h4>Tops and Skirt Set's for...</h4>
                            <span>Women's exclusive fas..</span>
                           
                          </div>
                        </div>
                      </td>
                      <td>Womens</td>
                      <td>Richman</td>
                      <td>
                        <del>500</del>
                        <p className='price'>450</p>
                      </td>
                      <td>Available</td>
                      <td>
                        <Rating name="size-medium" defaultValue={2} size="small" />
                      </td>
                      <td>380</td>
                      <td>$38k</td>
                      <td>
                        <i class="fa-solid fa-eye icon1"></i>
                        <i class="fa-solid fa-pen icon2"></i>
                        <i class="fa-solid fa-trash icon3"></i>
                      </td>
                    </tr>


               

                  </tbody>
              </table>
            </div>


            <div className='d-flex align-items-center'>
              <p className='mt-2'>Showing 12 of <strong>40</strong> items</p>
              <Pagination count={10} showFirstButton showLastButton className='ms-auto'/>
            </div>
          </div>
          </div>          


        </div>
     
    </div>
    </div>
  )
}
