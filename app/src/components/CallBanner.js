
import React from 'react'
import Banner from './Banner';
// import data from '../components/DataStore'
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
const data = [
    {
        "image": "/assets/flag.png",
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
        "image": "https://imgd-ct.aeplcdn.com/1200x900/n/cw/ec/130635/fronx-right-front-three-quarter-2.jpeg?isig=0&q=75",
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
        "image": "https://images.91wheels.com/assets/b_images/main/models/profile/profile1660828002.jpg",
        "endTime": "16:45:00",
        "numberOfBids": 3,
        "currentBidPrice": 12000,
        "title": "Compact Hatchback",
        "subheading": "Efficient and practical urban car",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 30000,
        "countryIconImage": "https://example.com/flags/germany.png"
    },
    {
        "image": "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/HuracanModelImage.jpg&w=872&h=578&q=75&c=1",
        "endTime": "2:15:00",
        "numberOfBids": 7,
        "currentBidPrice": 22000,
        "title": "SUV Adventure",
        "subheading": "Explore the great outdoors in style",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 40000,
        "countryIconImage": "https://example.com/flags/canada.png"
    },
    {
        "image": "https://www.astonmartin.com/-/media/models---db12/db12_stills_ext_1230_villa_front_3-4_static_rgb_hero_crop_2.jpg?mw=1920&width=NaN&format=jpeg&quality=50",
        "endTime": "21:00:00",
        "numberOfBids": 2,
        "currentBidPrice": 13500,
        "title": "Electric City Car",
        "subheading": "Eco-friendly and perfect for urban commuting",
        "lhdOrRhdDrive": "RHD",
        "numberOfMiles": 12000,
        "countryIconImage": "https://example.com/flags/japan.png"
    },
    {
        "image": "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Audi-Q3-300820222026.jpg&w=872&h=578&q=75&c=1",
        "endTime": "14:30:00",
        "numberOfBids": 4,
        "currentBidPrice": 9000,
        "title": "Classic Vintage",
        "subheading": "Timeless elegance and nostalgic charm",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 5000,
        "countryIconImage": "https://example.com/flags/france.png"
    },
    {
        "image": "https://cdn.jdpower.com/Average%20Weight%20Of%20A%20Car.jpg",
        "endTime": "17:45:00",
        "numberOfBids": 6,
        "currentBidPrice": 15800,
        "title": "Convertible Beauty",
        "subheading": "Feel the wind in your hair with style",
        "lhdOrRhdDrive": "RHD",
        "numberOfMiles": 18000,
        "countryIconImage": "https://example.com/flags/italy.png"
    },
    {
        "image": "https://www.autobest.co.in/uploads/slider/836608193748.png",
        "endTime": "10:00:00",
        "numberOfBids": 9,
        "currentBidPrice": 10500,
        "title": "Family Minivan",
        "subheading": "Spacious and comfortable for all your journeys",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 32000,
        "countryIconImage": "https://example.com/flags/spain.png"
    },
    {
        "image": "https://images.91wheels.com/assets/b_images/main/models/profile/profile1660828002.jpg",
        "endTime": "9:30:00",
        "numberOfBids": 1,
        "currentBidPrice": 7500,
        "title": "Off-Road Monster",
        "subheading": "Dominate any terrain with power",
        "lhdOrRhdDrive": "RHD",
        "numberOfMiles": 8000,
        "countryIconImage": "https://example.com/flags/australia.png"
    },
    {
        "image": "https://hips.hearstapps.com/hmg-prod/images/mclaren-gt-globaltestdrive-0009-1568995044.jpg?crop=0.704xw:0.704xh;0.248xw,0.296xh&resize=980:*",
        "endTime": "15:45:00",
        "numberOfBids": 12,
        "currentBidPrice": 27000,
        "title": "Executive Limousine",
        "subheading": "Arrive in style and luxury",
        "lhdOrRhdDrive": "LHD",
        "numberOfMiles": 1500,
        "countryIconImage": "https://example.com/flags/china.png"
    }
]



const CallBanner = () => {
    return (
        <>
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
            </div>


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
            </div>

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
            </div>

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


            <div class="newsletter-container">
                <div class="content">
                    <h2 className='signuptxt'> Signup to Our <span>newsletter</span> </h2>
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
        <img src="/asset/buttonlastarrow.png" alt="Arrow" />
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