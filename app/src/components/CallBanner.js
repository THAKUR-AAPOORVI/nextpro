'use client'
import React from 'react'
import Banner from './Banner';

import Recentlysold from './Recentlysold'
import RecentlyUnsold from './RecentlyUnsold'
import CommingSoon from './CommingSoon'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../CSS/swiper.css'
// import required modules
// import { Pagination } from 'swiper/modules';
import { images } from '../../../next.config';
const data = [
    {
        "image": "../asset/Bitmap (1).png",
        "endTime": "18:00:00",
        "numberOfBids": 5,
        "currentBidPrice": 15000,
        "title": "Porsche Cayman 2007",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 25000,
        "countryIconImage": "https://example.com/flags/usa.png"
    },
    {
        "image": "../asset/americascope.png",
        "endTime": "20:30:00",
        "numberOfBids": 10,
        "currentBidPrice": 18000,
        "title": "America Sport Coupe",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "RHD",
        "numberOfMiles": 15000,
        "countryIconImage": "https://example.com/flags/uk.png"
    },
    {
        "image": "../asset/porsche2.png",
        "endTime": "16:45:00",
        "numberOfBids": 3,
        "currentBidPrice": 12000,
        "title": "Porsche Cayman 2007",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 30000,
        "countryIconImage": "https://example.com/flags/germany.png"
    },
    {
        "image": "../asset/ferrari.png",
        "endTime": "2:15:00",
        "numberOfBids": 7,
        "currentBidPrice": 22000,
        "title": "Ferrari 250 GT Lusso 1964 ",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 40000,
        "countryIconImage": "https://example.com/flags/canada.png"
    },
    {
        "image": "../asset/rollsro.png",
        "endTime": "21:00:00",
        "numberOfBids": 2,
        "currentBidPrice": 13500,
        "title": "Rolls-Royce Ghost 2016 ",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "RHD",
        "numberOfMiles": 12000,
        "countryIconImage": "https://example.com/flags/japan.png"
    },
    {
        "image": "../asset/214turbo.png",
        "endTime": "14:30:00",
        "numberOfBids": 4,
        "currentBidPrice": 9000,
        "title": "2014 | Porsche 911 Turbo",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 5000,
        "countryIconImage": "https://example.com/flags/france.png"
    },
    {
        "image": "../asset/lg.png",
        "endTime": "17:45:00",
        "numberOfBids": 6,
        "currentBidPrice": 15800,
        "title": "Lamborghini Aventador LP 780-4 ",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "RHD",
        "numberOfMiles": 18000,
        "countryIconImage": "https://example.com/flags/italy.png"
    },
    {
        "image": "../asset/2009pr.png",
        "endTime": "10:00:00",
        "numberOfBids": 9,
        "currentBidPrice": 10500,
        "title": "2009 | Porsche 911 Carrera",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 32000,
        "countryIconImage": "https://example.com/flags/spain.png"
    },
    {
        "image": "../asset/1973.png",
        "endTime": "9:30:00",
        "numberOfBids": 1,
        "currentBidPrice": 7500,
        "title": "1973 BMW 3.0",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "RHD",
        "numberOfMiles": 8000,
        "countryIconImage": "https://example.com/flags/australia.png"
    },
    {
        "image": "../asset/2007.png",
        "endTime": "15:45:00",
        "numberOfBids": 12,
        "currentBidPrice": 27000,
        "title": "Porsche Cayman 2007",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 1500,
        "countryIconImage": "https://example.com/flags/china.png"
    }
]

const solddata = [
    {
        "image": "../asset/Bitmap (1).png",
        "soldPrice": "270000",
        "numberOfBids": 5,
        "currentBidPrice": 15000,
        "title": "Porsche Cayman 2007",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 25000,
        "countryIconImage": "https://example.com/flags/usa.png"
    },
    {

        "image": "../asset/2007.png",
        "soldPrice": "270000",
        "numberOfBids": 12,
        "currentBidPrice": 27000,
        "title": "Porsche Cayman 2007",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 1500,
        "countryIconImage": "https://example.com/flags/china.png"
    },
    {
        "image": "../asset/Bitmap (1).png",
        "soldPrice": "270000",
        "numberOfBids": 5,
        "currentBidPrice": 15000,
        "title": "Porsche Cayman 2007",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 25000,
        "countryIconImage": "https://example.com/flags/usa.png"
    },
    {

        "image": "../asset/2007.png",
        "soldPrice": "270000",
        "numberOfBids": 12,
        "currentBidPrice": 27000,
        "title": "Porsche Cayman 2007",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 1500,
        "countryIconImage": "https://example.com/flags/china.png"
    },  {
        "image": "../asset/Bitmap (1).png",
        "soldPrice": "270000",
        "numberOfBids": 5,
        "currentBidPrice": 15000,
        "title": "Porsche Cayman 2007",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 25000,
        "countryIconImage": "https://example.com/flags/usa.png"
    },
    {

        "image": "../asset/2007.png",
        "soldPrice": "270000",
        "numberOfBids": 12,
        "currentBidPrice": 27000,
        "title": "Porsche Cayman 2007",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 1500,
        "countryIconImage": "https://example.com/flags/china.png"
    }

]

const unsolddata = [
    {
        "image": "../asset/Bitmap (1).png",
        "status": "Unsold",
        "numberOfBids": 5,
        "currentBidPrice": 15000,
        "title": "Porsche Cayman 2007",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 25000,
        "countryIconImage": "https://example.com/flags/usa.png"
    },
    {
        "image": "../asset/americascope.png",
        "status": "Unsold",
        "numberOfBids": 10,
        "currentBidPrice": 18000,
        "title": "America Sport Coupe",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "RHD",
        "numberOfMiles": 15000,
        "countryIconImage": "https://example.com/flags/uk.png"
    },
    {
        "image": "../asset/porsche2.png",
        "status": "Unsold",
        "numberOfBids": 3,
        "currentBidPrice": 12000,
        "title": "Porsche Cayman 2007",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 30000,
        "countryIconImage": "https://example.com/flags/germany.png"
    },
    {
        "image": "../asset/ferrari.png",
        "status": "Unsold",
        "numberOfBids": 7,
        "currentBidPrice": 22000,
        "title": "Ferrari 250 GT Lusso 1964 ",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 40000,
        "countryIconImage": "https://example.com/flags/canada.png"
    },
    {
        "image": "../asset/rollsro.png",
        "status": "Unsold",
        "numberOfBids": 2,
        "currentBidPrice": 13500,
        "title": "Rolls-Royce Ghost 2016 ",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "RHD",
        "numberOfMiles": 12000,
        "countryIconImage": "https://example.com/flags/japan.png"
    },
    {
        "image": "../asset/214turbo.png",
        "status": "Unsold",
        "numberOfBids": 4,
        "currentBidPrice": 9000,
        "title": "2014 | Porsche 911 Turbo",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 5000,
        "countryIconImage": "https://example.com/flags/france.png"
    },
    {
        "image": "../asset/lg.png",
        "status": "Unsold",
        "numberOfBids": 6,
        "currentBidPrice": 15800,
        "title": "Lamborghini Aventador LP 780-4 ",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "RHD",
        "numberOfMiles": 18000,
        "countryIconImage": "https://example.com/flags/italy.png"
    },
    {
        "image": "../asset/2009pr.png",
        "status": "Unsold",
        "numberOfBids": 9,
        "currentBidPrice": 10500,
        "title": "2009 | Porsche 911 Carrera",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 32000,
        "countryIconImage": "https://example.com/flags/spain.png"
    },
    {
        "image": "../asset/1973.png",
        "status": "Unsold",
        "numberOfBids": 1,
        "currentBidPrice": 7500,
        "title": "1973 BMW 3.0",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "RHD",
        "numberOfMiles": 8000,
        "countryIconImage": "https://example.com/flags/australia.png"
    },
    {
        "image": "../asset/2007.png",
        "status": "Unsold",
        "numberOfBids": 12,
        "currentBidPrice": 27000,
        "title": "Porsche Cayman 2007",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 1500,
        "countryIconImage": "https://example.com/flags/china.png"
    }
]



const soonData = [
    {
        "image": "../asset/Bitmap (1).png",
        "arriveDate": " 13th october",
        "numberOfBids": 5,
        "currentBidPrice": 15000,
        "title": "Porsche Cayman 2007",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 25000,
        "countryIconImage": "https://example.com/flags/usa.png"
    },
    {
        "image": "../asset/americascope.png",
        "arriveDate": " 14th october",
        "numberOfBids": 10,
        "currentBidPrice": 18000,
        "title": "America Sport Coupe",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "RHD",
        "numberOfMiles": 15000,
        "countryIconImage": "https://example.com/flags/uk.png"
    },
    {
        "image": "../asset/porsche2.png",
        "arriveDate": " 13th october",
        "numberOfBids": 3,
        "currentBidPrice": 12000,
        "title": "Porsche Cayman 2007",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 30000,
        "countryIconImage": "https://example.com/flags/germany.png"
    },
    {
        "image": "../asset/ferrari.png",
        "arriveDate": " 15th october",
        "numberOfBids": 7,
        "currentBidPrice": 22000,
        "title": "Ferrari 250 GT Lusso 1964 ",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 40000,
        "countryIconImage": "https://example.com/flags/canada.png"
    },
    {
        "image": "../asset/rollsro.png",
        "arriveDate": " 13th october",
        "numberOfBids": 2,
        "currentBidPrice": 13500,
        "title": "Rolls-Royce Ghost 2016 ",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "RHD",
        "numberOfMiles": 12000,
        "countryIconImage": "https://example.com/flags/japan.png"
    },
    {
        "image": "../asset/214turbo.png",
        "arriveDate": " 13th october",
        "numberOfBids": 4,
        "currentBidPrice": 9000,
        "title": "2014 | Porsche 911 Turbo",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 5000,
        "countryIconImage": "https://example.com/flags/france.png"
    },
    {
        "image": "../asset/lg.png",
        "arriveDate": " 13th october",
        "numberOfBids": 6,
        "currentBidPrice": 15800,
        "title": "Lamborghini Aventador LP 780-4 ",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "RHD",
        "numberOfMiles": 18000,
        "countryIconImage": "https://example.com/flags/italy.png"
    },
    {
        "image": "../asset/2009pr.png",
        "arriveDate": " 13th october",
        "numberOfBids": 9,
        "currentBidPrice": 10500,
        "title": "2009 | Porsche 911 Carrera",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 32000,
        "countryIconImage": "https://example.com/flags/spain.png"
    },
    {
        "image": "../asset/1973.png",
        "arriveDate": " 13th october",
        "numberOfBids": 1,
        "currentBidPrice": 7500,
        "title": "1973 BMW 3.0",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "RHD",
        "numberOfMiles": 8000,
        "countryIconImage": "https://example.com/flags/australia.png"
    },
    {
        "image": "../asset/2007.png",
        "arriveDate": " 13th october",
        "numberOfBids": 12,
        "currentBidPrice": 27000,
        "title": "Porsche Cayman 2007",
        "subheading": "Eu tristique condimentum eu penatibus ad a orci condimentum dapibus adipiscing dolor dictumst eu.",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 1500,
        "countryIconImage": "https://example.com/flags/china.png"
    }
]









const CallBanner = () => {


    
    
    return (
        <>




 {/* <div className='cardsmove'> */}
       <div
        className='slider-container'
   
      > 

  <Swiper
            slidesPerView={3}
            spaceBetween={-2} 
            pagination={{
              clickable: true,
            }}
            // modules={[Pagination]}
            className="mySwiper"
          >
           
        {data.map((item, index) => (
      <SwiperSlide className={SwiperSlide}>
          <Banner
            key={index}
            imageUrl={item.image}
            EndTime={item.endTime}
            CurrentPrice={item.currentBidPrice}
            numberOfBids={item.numberOfBids}
            title={item.title}
            description={item.subheading}
            driveMode={item.lhdOrRhdDrive}
            numberOfMiles={item.numberOfMiles}
          />
        </SwiperSlide>
        ))}
         
    </Swiper>
      {/* </div> */}
    </div>

 
   
            <div className='row view-row recent_main'>
                <div className='action'>
                    <h1 className='recent'>Recently sold (32) </h1>
                </div>
                <div className='buttonbox'>

                    <h1>View all </h1>

                </div>
                <div className='arrow'>
                    <span><img src='../asset/btnarrow.png'></img></span>
                </div>
            </div>

           {/* <div className='scroller' >
                {solddata.map((item, index) => (
                    <Recentlysold
                        key={index}
                        imageUrl={item.image} // Use the actual property from your data object
                        soldPrice={item.soldPrice}
                        CurrentPrice={item.currentBidPrice}
                        numberOfBids={item.numberOfBids}
                        title={item.title} // Use the actual property from your data object
                        description={item.subheading} // Use the actual property from your data object
                        driveMode={item.lhdOrRhdDrive}
                        numberOfMiles={item.numberOfMiles}
                    />
                ))}
            </div> */}

<Swiper
        slidesPerView={3}
                    spaceBetween={-2} 
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
       
        {solddata.map((item, index) => (
             <SwiperSlide className={SwiperSlide}>
                    <Recentlysold
                        key={index}
                        imageUrl={item.image} // Use the actual property from your data object
                        soldPrice={item.soldPrice}
                        CurrentPrice={item.currentBidPrice}
                        numberOfBids={item.numberOfBids}
                        title={item.title} // Use the actual property from your data object
                        description={item.subheading} // Use the actual property from your data object
                        driveMode={item.lhdOrRhdDrive}
                        numberOfMiles={item.numberOfMiles}
                    />
                        </SwiperSlide>
                ))}
    
        </Swiper>


            <div className='row view-row recent_main'>
                <div className='action'>
                    <h1 className='recent'>Recently unsold (821)</h1>
                </div>
                <div className='buttonbox'>

                    <h1>View all </h1>

                </div>
                <div className='arrow'>
                    <span><img src='../asset/btnarrow.png'></img></span>
                </div>
            </div>

            <Swiper
            slidesPerView={3}
                        spaceBetween={-2}  
            pagination={{
              clickable: true,
            }}
            // modules={[Pagination]}
            className="mySwiper"
          >
            <div className='scroller' >
                {unsolddata.map((item, index) => (
                     <SwiperSlide className={SwiperSlide}>
                    <RecentlyUnsold
                        key={index}
                        imageUrl={item.image} // Use the actual property from your data object
                        status={item.status}
                        CurrentPrice={item.currentBidPrice}
                        numberOfBids={item.numberOfBids}
                        title={item.title} // Use the actual property from your data object
                        description={item.subheading} // Use the actual property from your data object
                        driveMode={item.lhdOrRhdDrive}
                        numberOfMiles={item.numberOfMiles}
                    />
                    </SwiperSlide>
                ))}
            </div>
            </Swiper>

            <div className='row view-row recent_main'>
                <div className='action'>
                    <h1 className='recent'>Comming Soon (123) </h1>
                </div>
                <div className='buttonbox'>

                    <h1>View all </h1>

                </div>
                <div className='arrow'>
                    <span><img src='../asset/btnarrow.png'></img></span>
                </div>
            </div>

            <Swiper
            slidesPerView={3}
                        spaceBetween={-2}  
            pagination={{
              clickable: true,
            }}
            // modules={[Pagination]}
            className="mySwiper"
          >
            <div className='scroller' >
                {soonData.map((item, index) => (
                          <SwiperSlide className={SwiperSlide}>
                    <CommingSoon
                        key={index}
                        imageUrl={item.image} // Use the actual property from your data object
                        arriveDate={item.arriveDate}
                        // CurrentPrice={item.currentBidPrice}
                        // numberOfBids={item.numberOfBids}
                        title={item.title} // Use the actual property from your data object
                        description={item.subheading} // Use the actual property from your data object
                        driveMode={item.lhdOrRhdDrive}
                        numberOfMiles={item.numberOfMiles}
                    />
                    </SwiperSlide>
                ))}
            </div>
            </Swiper>

            {/* <div className='row view-row'>
        <div className='action'>
          <h1>Recently unsold (32) (45)</h1>
        </div>
        <div className='buttonbox'>

          <h1>View all </h1>

        </div>
        <div className='arrow'>
          <span><img src='../asset/btnarrow.png'></img></span>
        </div>
      </div>

      <div className='scroller' >
        {data.map((item, index) => (
          <Banner
            key={index}
            imageUrl={item.image} // Use the actual property from your data object
            EndTime={item.endTime}
            CurrentPrice={item.currentBidPrice}
            numberOfBids={item.numberOfBids}
            title={item.title} // Use the actual property from your data object
            description={item.subheading} // Use the actual property from your data object
            driveMode={item.lhdOrRhdDrive}
            numberOfMiles={item.numberOfMiles}
          />
        ))}
      </div> */}


            {/* <div class="newsletter-container">
                <div class="content">
                    <h2 className='signuptxt'> Signup to Our <span className='newsletter'>newsletter</span> </h2>
                    <div class="p-container">
                        <p className='industry'>Industry insight straight to your inbox. We’ll provide you with key information to help you determine whether and how much to bid.</p>
                    </div>
                    <div class="input-row">
                        <input type="text" placeholder="" />
                        <input type="email" placeholder="" />
                    </div>
                    <div className="buttonlast">
    <div className="submit">
        <button type="submit">Submit details</button>
    </div>
    <div className="arrowsubmit">
       <span><img src="/asset/buttonlastarrow.png" alt="Arrow" /></span> 
    </div>
</div>
                </div>
            </div> */}
            <div class="image-container">
                <div class="overlay-text">

                    <div class="content">
                        <h2 class="signuptxt">Signup to Our <span class="newsletter">newsletter</span></h2>
                        <div class="p-container">
                            <p class="industry">Industry insight straight to your inbox. We’ll provide you with key information to help you determine whether and how much to bid.</p>
                        </div>
                        <div class="input-row">
                            <input type="text" placeholder="" />
                            <input type="email" placeholder="" />
                        </div>
                        <div class="buttonlast">
                            <div class="submit">
                                <button class="no-hover" type="submit">Submit details</button>
                            </div>
                            <div class="arrowsubmit">
                                <span><img src="/asset/buttonlastarrow.png" alt="Arrow" /></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="green-div">
                <img src="../asset/footerlogo.png" alt="Small Image" class="center-image" />
                <hr className="horizontal-line" />
            </div>






        </>
    )
}

export default CallBanner