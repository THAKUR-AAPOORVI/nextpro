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
                <div className='row'>
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
            <div  className='flex-listt'><h4>Vehicle</h4>
 <ul>
    <li>Car</li>
 </ul>
        </div>
          <div  className='flex-listt'><h4>Vehicle</h4>
 
 <ul>
    <li>Car</li>
 </ul>
        </div>
          <div  className='flex-listt'><h4>Vehicle</h4>
 
 <ul>
    <li>Car</li>
 </ul>
        </div>
          <div  className='flex-listt'><h4>Vehicle</h4>
 
 <ul>
    <li>Car</li>
 </ul>
        </div>
          <div  className='flex-listt'><h4>Vehicle</h4>
 
 <ul>
    <li>Car</li>
 </ul>
        </div>
        <div className='flex-listt' >Vehicle
 <ul>
    <li>Car</li>
 </ul>
        </div>
          <div  className='flex-listt'><h4>Vehicle</h4>
 
 <ul>
    <li>Car</li>
 </ul>
        </div></div>
      )}
    </div>



        
        </>
    )
}

export default Header