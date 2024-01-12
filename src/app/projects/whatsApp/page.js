'use client'
import './whatsApp.css'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { green } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {getMethod} from '@/app/apiServices/apiMethods';
import { useEffect, useState } from 'react';


function wtsp() {

  const [loading, setLoading] = useState(true)
  const [qrCode_url, setQr_url] = useState('')

  useEffect(()=>{
    generateQrCode()
  },)
  
  const generateQrCode = async () => {
    try {
      const url = "http://localhost:5000/qrcode_url";
      const res = await getMethod(url)
      setTimeout(() => {
        setQr_url(res)
        qrCode_url==''? setLoading(true) : setLoading(false)
        console.log("loading = ",loading, qrCode_url)
      }, 2000);
    } catch  {

    }
  }

  
  return (
    <div className='page-center'>
    <Card sx={{ maxWidth: 500, minHeight: 480,boxShadow:'10px 10px 15px' }} >
      <CardHeader className='text-center pb-0'
        avatar={
          <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
            <WhatsAppIcon/>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon className='mt-1' />
          </IconButton>
        }
        title= {<h2 className='text-xl font-bold'> Scan To Login Your WhatsApp </h2>}
      />
      <div className='div-center'>
      
        {loading? 
        <span className="loader"></span> :
        <img style={{width:"-webkit-fill-available"}} src={qrCode_url} alt='QR-Code'/>
      }
      </div>
    </Card>
    </div>
  );
}

export default wtsp;