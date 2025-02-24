import React from 'react';
function Hero() {

  
      
  
    return ( 

        
        <div className='container text-center items-center mt-5'>
        <h1>Charges</h1>
        <h6 className='text-muted mb-5 mt-5'>List of all charges and taxes</h6>

            <div className='row'>
        <div className='col-4 mt-5    ' >
               
                <img src="media/images/pricing0.svg" style={{width:'70%'}}></img>
                <h2>Free equity delivery</h2>
                <p className='fs-6 text-muted' style={{fontSize:"larger", width:'40ch'}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
               
               
            </div>
           
            <div className='col-4 mt-5  ' >
                <img src="media/images/intradayTrades.svg"  style={{width:'70%'}}></img>
                <h2>Intraday and F&O trades</h2>
                <p className='fs-6 text-muted' style={{fontSize:"larger", width:'40ch'}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
        
            <div className='col-4 mt-5  ' >
                <img src="media/images/pricing0.svg"  style={{width:'70%'}} ></img>
                <h2>Free direct MF</h2>
                <p className='fs-6 text-muted' style={{fontSize:"larger", width:'40ch'}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>


            

            </div>
        </div>

     );
}

export default Hero;