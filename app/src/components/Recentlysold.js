
import React from 'react'
import '../Css/Banner.css'
import '../CSS/Recentlysold.css'
const Recentlysold = ({ imageUrl, title, EndTime, CurrentPrice, numberOfBids, driveMode, numberOfMiles, description }) => {
  return (
  <>
     <div className='cardsection'>
                <div className="cards">
                    <div className="cardimage">
                        <img className='cardimg' src={imageUrl} alt={title} />
                    </div>
                    <div className='cells'>
                    <div className='pillmain soldrecent'>
                        <div className='pilltext row'>
                            {/* <div className='col-4 para-text'>
                                    <p>Ends in</p>
                                    <h1 className='time'>{EndTime}</h1>

                                </div> */}

                            {/* <div className='col-4 currentbid'>
                                <p>Ends in</p>
                                <p className='endstime'>{EndTime}</p>
                            </div> */}
                            {/* <span>|</span> */}
                            <div className='col-6 currentbids'>
                                <h3 className='soldfor'>Sold For</h3>
                                <h3 className='price'>£{CurrentPrice}</h3>
                            </div>
                            <span>|</span>
                            <div className='col-6'>
                                <h3 className='bid'>
                                    BID
                                </h3>
                                <h3 className='timbidsnum'>{numberOfBids}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="card-content">

                        <div className='TITLE-DESC '>
                            <h2 className="card-title">{title}</h2>
                            <p className="card-description">{description}</p>

                        </div>

                        <div className='row lastrow'>
                            <div className='col-4 last-col'>
                                <div className='wheelimg'>
                                    <span><img src='../asset/wheel (2).png'></img> </span><span className='lhd' style={{ marginLeft: "21px" }}><h5>{driveMode}</h5></span>
                                </div></div>
                            <span>|</span>

                            <div className='col-4 speedimg speedometer'>
                                <span><img src='../asset/icon miles.png'></img> </span><span className='speeds' style={{ marginLeft: "21px" }}><h5>{numberOfMiles} Miles</h5></span>
                            </div>
                            <span>|</span>
                            <div className='col-4'>
                                <span><img src='../asset/flag.png'></img> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
  </>
  )
}

export default Recentlysold