import React from 'react'
import Main from '../Components/Main'
import Row from '../Components/Row'
import RowTv from '../Components/RowTv'
import {request, requestTv} from '../Request'



const Home = () => {
  return (
    <>
        <Main/>
        <Row rowID='1' title='Popular' fetchURL ={request.requestPopular}/>
        <Row rowID='2' title='Top Rated' fetchURL ={request.requestTopRated}/>
        <RowTv rowID='3' title='Up Coming' fetchURL ={requestTv.requestTvPopular}/>
        <RowTv rowID='4' title='Recommendation' fetchURL ={requestTv.requestTvRated}/>
    </>
  )
}

export default Home