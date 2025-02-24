import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='text-center items-center mt-5 p-5'>
            <h6 className='mt-5 mb-4'>404 </h6>
            <h2>
            Couldn't find that page

            </h2><br></br>
            <p style={{fontSize:"1.3rem"}}>
            We couldn't find the page you were looking for. Visit <Link to="/" style={{textDecoration:"none"}} >  Zerodha’s home page</Link> 

            </p>
            
        </div>
     );
}

export default NotFound;