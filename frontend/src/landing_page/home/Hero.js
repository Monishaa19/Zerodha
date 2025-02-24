import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5 mb-5'>

        <div className='row items-center text-center fs-5' >

            <img src='media/images/homeHero.png'  alt='Hero Image' width='20%' height='20%'  className='mb-10' />

            <h1 className='mt-5 text-4xl font-semibold text-gray-900 mb-3'>
            Invest in everything
            </h1>

            <p>
            Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
            </p>

            <button className='btn btn-primary fs-5 mb-3 ' style={{width:'200px', margin:'0 auto'}}>
                Sign up for free
            </button>
        </div>


        </div>
     );
}

export default Hero;