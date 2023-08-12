'use client'
import React , { useState, useEffect  }from 'react'
import '../Css/Header.css'
const Header = () => {
    const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    // Code inside useEffect will run only on the client side
  }, []);


  

    const [showContainer, setShowContainer] = useState(false);
  
    const toggleContainer = () => {
      setShowContainer(!showContainer);
    };
    return (
        <>

            {/* firstpart menu   */}
            <div className='mainarea'>
            <div className='oval'>
      
                    <div className='oval-outer'>

                        <div className='oval-inline'>
                            <div className='iconandheading'>
                                <h1>Menu</h1>
                                <div className='iconimg'>
                                    <img src='../asset/group15.png' />
                                </div>
                            </div>
                        

                    </div>
                </div>
            </div>

            {/* second part   */}



<section className='signup'>
            <div className='container'>
                <div className='rowpart'>
                    <div className='text'>


                        <h1>Sign up / Log in</h1>
                        <span className='profileimg'><img src='../asset/profile.png'/></span>

                    </div>
                </div>
            </div>
            </section>




            {/* center part  */}


            <div className='midpart'>
                <div className='centerpart'>
                    <h1>Iaculis dis nunc vitae faucibus ullamcorper ac ullamcorper a tristique consectetur diam pulvinar parturient</h1>
                </div>
            </div>

            {/* searcbar   */}




            <div className='searchbox'>
            <div className="search-container">
      <input
        type="text"
        className='searchBar'
        placeholder="Alfa Romeo, 164L, unsold…"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
  
     <div className={`underline ${isFocused ? 'show' : ''}`}></div>
    <div >
    <span style={{color:"white"}} className='searchig'><img src='../asset/btnsearchD.png'/></span>
    </div>
     </div>
    </div>
    {/* Live Auctions (45) */}




    <div className='containerss'>
        <div className='row view-row'>
            <div className='action'>
            <h1>Live Auctions (45)</h1>
        </div>
        <div className='buttonbox'>

<h1>View all </h1>

        </div>
        <div className='arrow'>
        <span><img src='../asset/btnarrow.png'></img></span>
        </div>
        </div>

<div >
    <div className='filterpart'>
<div className='filterside'>
<h1 >Filter results</h1>
</div>
<div className='filterimg'>
<span><img  onClick={toggleContainer} src='../asset/filterimg.png'></img></span>
</div>



<div className='filterside'>
<h1 >View by</h1>

</div>
<div className='filterimg'>
<span><img src='../asset/Group 12.png'></img></span>
</div>
<div className='filterside'></div>
<div className='filterimg'>
<span><img src='../asset/btn view.png'></img></span>
</div>

</div>


</div>

    </div>

            </div>





{/* filter components */}


<div>
      {/* <button onClick={toggleContainer}>Filter</button> */}
      {showContainer && (
        <div className="container filterboc">

{/* 
<div className='row'>
    <div className='col-lg-2'>
        <ul>Vehicle</ul>
        <li>Car</li>
    </div>
    <div className='col-lg-2'>
        <ul>Vehicle</ul>
        <li>Car</li>
    </div>
    <div className='col-lg-2'>
        <ul>Vehicle</ul>
        <li>Car</li>
    </div>
    <div className='col-lg-2'>
        <ul>Vehicle</ul>
        <li>Car</li>
    </div>
    <div className='col-lg-2'>
        <ul>Vehicle</ul>
        <li>Car</li>
    </div>
    <div className='col-lg-2'>
        <ul>Vehicle</ul>
        <li>Car</li>
    </div>






</div> */}

<div className="row">
      <div className="column">
        <div className="heading">Vehicle Type</div>
        <label className="checkbox-label"><input type="checkbox" /> Car</label><br />
        {/* <label><input type="checkbox" /> SUV</label><br />
        <label><input type="checkbox" /> Truck</label><br /> */}
        {/* Add more vehicle types here */}
      </div>
      {/* Repeat the above structure for the other columns */}
    {/* </div> */}
    {/* <div className="row"> */}
      <div className="column">
        <div className="heading">Vehicle Type</div>
        <label className="checkbox-label"><input type="checkbox" /> Porsche (20)</label>
  <label className="checkbox-label"><input type="checkbox" /> Ferrari (9)</label>
  <label className="checkbox-label"><input type="checkbox" /> BMW (7)</label>
  <label className="checkbox-label"><input type="checkbox" /> Fiat (6)</label>
  <label className="checkbox-label"><input type="checkbox" /> Mercedes-Benz (6)</label>
  <label className="checkbox-label"><input type="checkbox" /> Lamborghini (5)</label>
  <label className="checkbox-label"><input type="checkbox" /> Volkswagen (4)</label>
  <label className="checkbox-label"><input type="checkbox" /> Jaguar (3)</label>
  <label className="checkbox-label"><input type="checkbox" /> Lancia (3)</label>
  <label className="checkbox-label"><input type="checkbox" /> Audi (2)</label>
        {/* Add more vehicle types here */}
      </div>
      {/* Repeat the above structure for the other columns */}
    {/* </div> */}
    {/* <div className="row"> */}
      <div className="column">
        <div className="heading">Auction status</div>

        <label className="checkbox-label"><input type="checkbox" /> Live </label>
  <label className="checkbox-label"><input type="checkbox" /> Coming soon</label>
  <label className="checkbox-label"><input type="checkbox" /> Sold</label>
  <label className="checkbox-label"><input type="checkbox" /> Unsold</label>
  <label className="checkbox-label"><input type="checkbox" /> About to go</label>

        {/* Add more vehicle types here */}
      {/* </div> */}
      {/* Repeat the above structure for the other columns */}
    </div>
    {/* <div className="row"> */}
      <div className="column">
        <div className="heading">Seller type</div>

        <label className="checkbox-label"><input type="checkbox" /> Private (91) </label>
  <label className="checkbox-label"><input type="checkbox" />Trade (18)</label>
  <label className="checkbox-label"><input type="checkbox" /> Managed (4)</label>


        {/* Add more vehicle types here */}
      </div>
      {/* Repeat the above structure for the other columns */}
    {/* </div> */}
    {/* <div className="row"> */}
      <div className="column">
        <div className="heading">Location</div>
        <label className="checkbox-label"><input type="checkbox" /> United Kingdom (91) </label>
        <label className="checkbox-label"><input type="checkbox" /> Australia (9)</label>
        <label className="checkbox-label"><input type="checkbox" /> Italy (5)</label>
        <label className="checkbox-label"><input type="checkbox" /> United States Of America (3)</label>
        <label className="checkbox-label"><input type="checkbox" /> Germany (4)</label>
        <label className="checkbox-label"><input type="checkbox" /> Spain (4)</label>
        <label className="checkbox-label"><input type="checkbox" /> Hong Kong (4)</label>
        <label className="checkbox-label"><input type="checkbox" />Ireland (2)</label>
        <label className="checkbox-label"><input type="checkbox" /> Netherlands (5) </label>
        <label className="checkbox-label"><input type="checkbox" />Sweden (1)</label>
        {/* Add more vehicle types here */}
      </div>
      {/* Repeat the above structure for the other columns */}
    {/* </div> */}
    {/* <div className="row"> */}
      <div className="column">
        <div className="heading">Auction site</div>
        <label className="checkbox-label"><input type="checkbox" /> Auction site 01</label>
        <label className="checkbox-label"><input type="checkbox" /> Auction site 02</label>
        <label className="checkbox-label"><input type="checkbox" /> Auction site 03</label><br />
        {/* Add more vehicle types here */}
      </div>
      {/* Repeat the above structure for the other columns */}
    {/* </div> */}
  </div>
</div>
      )}
    </div>



        
        </>
    )
}

export default Header