import React from 'react';
function Education() {
    return (  
        <div className='container mt-5 mb-5'>

            <div className='row mt-5'> 
                
                <div className='col-6 mt-5'>
                    <img src='media/images/education.svg'></img>
                </div>
                

                <div className='col-6 mt-5 p-3'>

                    <h2 className='mt-5 mb-5'>Free and open market education</h2>
                    <p className='mb-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a className='mb-3' style={{textDecoration:'none'}}> Varsity <i class="fa-solid fa-arrow-right"></i></a>

                    <p className='mb-3 mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a className='mb-3' style={{textDecoration:'none'}}>Trading Q&A  <i class="fa-solid fa-arrow-right"></i></a>
                </div>



                
                
                 </div>
        </div>
    );
}

export default Education;