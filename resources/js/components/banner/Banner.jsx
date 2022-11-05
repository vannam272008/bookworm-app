import React, { useEffect } from 'react'
import CarouselItem from './CarouselItem'
import "./Banner.css"
import { Container, Row } from 'react-bootstrap'
import BannerTitle from './BannerTitle'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBookBannerData } from '../../services/BookBannerService'




const Banner = () => {
  const dispatch = useDispatch();
  const bookData = useSelector(state => state.bookBanner.books);
  const success = useSelector(state => state.bookBanner.success);

  useEffect(() => {
    dispatch(fetchBookBannerData())
  },[dispatch])

  return (
        <Container className="banner mt-4">
            <BannerTitle/>
            <CarouselItem success={success} bookData = {bookData}/>
        </Container>
      
    
  )
}

export default Banner
