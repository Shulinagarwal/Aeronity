"use client";

import React, { useState, ChangeEvent } from 'react';
import { BackgroundBeams } from '@/components/ui/backBeams';
import Navbar from '@/components/Navbar';
import Featured from '@/components/Featured';
import Category from '@/components/Category';
import CardList from '@/components/CardList';
import Footer from '@/components/Footer';
import Menu from '@/components/menu/Menu';

const JoinNow: React.FC = () => {

  return (
    <>
    <div className="h-[60rem] w-full rounded-md bg-neutral-950 relative flex flex-col antialiased">  
      <BackgroundBeams />
      <Navbar/>
      <Featured/>
     <Category/>
     <div className='flex gap-12'>
     <CardList/>
     <Menu/>
     </div>
     <Footer/>
    </div>

    
   
    
    
</>
  );
};

export default JoinNow;
