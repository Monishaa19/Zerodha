import React from 'react';
function Awards() {
    return ( 
     <div className='container '>
            <div className='row'>
                <div className='col-6 '>

                    <img src='media/images/largestBroker.svg' className='mt-4s'></img>
                </div>
                <div className='col-6 mt-5'>


                    <h1>
                        Largest stock broker in India

                    </h1>

                    <p mt-4>
                        2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and Investing in:

                    <div className='container mt-3'>

                      <div className='row'  >

                        
                      <div className='col-6'>
                        <ul>

                            <li className='mb-3' style={{ textDecoration: "none" }}>

                                Future options
                            </li>

                            <li className='mb-3' style={{ textDecoration: "none" }}   >

                                Commodity derivatives
                            </li>

                            <li className='mb-3' style={{ textDecoration: "none" }}   >

                                Currency derivatives
                            </li>
                            </ul>
                        </div>


                        
                        <div className='col-6'>
                        <ul>

                            <li className='mb-3' style={{ textDecoration: "none" }}   >

                                Stocks &amp; IPos
                            </li>

                            <li className='mb-3' style={{ textDecoration: "none" }}   >

                               Direct mutual funds
                            </li>


                            <li className='mb-3' style={{ textDecoration: "none" }}   >

                                Bonds and Go
                            </li>
                            </ul>
                        </div>


                      </div>




                    </div>

                    
                    </p>

                    <img src='media/images/pressLogos.png' className='mt-2' width='500px'></img>

                </div>

            </div>


     </div>
     );
}

export default Awards;