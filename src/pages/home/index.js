import React from 'react'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import './home.css'
export default function Home() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
            <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
                <button className='btn btn-success'>Submit</button>
            </div>

            <div className='col-md-6'>
                <button className='btn btn-info'>Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}
