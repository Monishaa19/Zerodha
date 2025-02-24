import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

import Hero from './Hero';

function ProductsPage() {
    return ( 
        <>  
        
            <Hero />
            <LeftSection 
            img='media/images/kite.png'
            head='Kite'
            desc='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.'
            demo=''
            learn=''
            />

            <RightSection 
            head='Console'
            desc='The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.'
            img='media/images/console.png'
            />

            <LeftSection 
            img='media/images/coin.png'
            head='Coin'
            desc='Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.'
            demo=''
            learn=''
            />

            <RightSection 
            head='Kite Connect API'
            desc='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.'
            img='media/images/kiteconnect.png'
            />

            <LeftSection 
            img='media/images/varsity.png'
            head='Varsity mobile'
            desc='An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.'
            demo=''
            learn=''
            />

            <Universe />
         
        </>
     );
}

export default ProductsPage;