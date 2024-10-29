import React from 'react'
import ProfileImg from '../../../assets/images/contact-profile.png'
import ccard from '../../../assets/images/c-card.svg'

function Product() {
  return (
    <div className='flex items-center justify-between p-6 rounded-[8px] border border-[rgba(87,98,105,0.24)]'>
        <div className='flex items-center gap-3'>
            <img src={ProfileImg} alt="ProfileImg" />
            <p className='text-[18px] font-medium text-[#576269]'>Demo Product</p>
        </div>
        <div className='flex items-center gap-2'>
            <img className='w-6 h-6' src={ccard} alt="ccard" />
            <p className='text-[#576269]'>Contact Card #1</p>
        </div>
    </div>
  )
}

export default Product