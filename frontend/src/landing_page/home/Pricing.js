import React from 'react';
function Pricing() {
    return ( 
       <div className='container mb-5'>

        <div className='row mt-5 mb-5'>
            <div className='col-5 mt-5'>

                <h3 className='mb-4 fs-3'>Unbeatable Pricing</h3>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a className='fs-6' style={{textDecoration:'none'}}>See Pricing <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className='col-2 mt-5 row p-2 ' style={{marginRight:'20px'}}>
               
                <img src="media/images/pricing0.svg" style={{width:'80%'}}></img>
                <p style={{fontSize:"small"}}>Free account opening</p>
               
               
            </div>

            <div className='col-2 mt-5 row p-2' style={{marginRight:'50px'}}>
                <img src="media/images/pricing0.svg"  style={{width:'80%'}} ></img>
                <p style={{fontSize:"small"}}>Free equity delivery and direct mutual funds</p>
            </div>


            <div className='col-2 mt-5 row p-2' style={{marginRight:'20px'}}>
                <img src="media/images/intradayTrades.svg"  style={{width:'80%'}}></img>
                <p style={{fontSize:"small"}}> Intraday and F&O</p>
            </div>
        </div>

       </div>
     );
}

export default Pricing;