'use client';
import React from 'react'
import OutlinedCard from '@/components/card';
import Menulist from '@/components/menu.js';
import ResponsiveAppBar from '@/components/appbar';


export default function Page () {
  return (
    <div>
      <div>
        <ResponsiveAppBar></ResponsiveAppBar>
      </div>
    <OutlinedCard/> 
    <div>
    <Menulist/>
    </div>
  </div>
  )
}
