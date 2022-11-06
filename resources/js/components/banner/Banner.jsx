import React, { useEffect } from 'react'
import CarouselItem from './CarouselItem'
import "./Banner.css"
import { Container} from 'react-bootstrap'
import BannerTitle from './BannerTitle'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBookBannerData } from '../../services/BookBannerService'




const Banner = () => {
  const dispatch = useDispatch();
  const bookBannerData = useSelector(state => state.bookBanner.bookBanner);
  const success = useSelector(state => state.bookBanner.success);

  useEffect(() => {
    dispatch(fetchBookBannerData())
  },[dispatch])

  return (
        <Container className="banner mt-4">
            <BannerTitle/>
            <CarouselItem success={success} bookBannerData = {bookBannerData}/>
        </Container>
      
    
  )
}

export default Banner
