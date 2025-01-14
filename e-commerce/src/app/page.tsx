import React from 'react'
import Arrivels from '@/components/Products/Arrivels';
import TopSelling from '@/components/Products/TopSelling';
import BrowseDressPage from '@/components/Products/BrowseByDress';
import MainCover from '@/components/Products/MainCover';
import Brands from '@/components/Brands';
const page = () => {
  return (
    <div>
    <MainCover/>
    <Brands/>
    <Arrivels/>
    <TopSelling/>
    <BrowseDressPage/>
    </div>
  )
}

export default page






