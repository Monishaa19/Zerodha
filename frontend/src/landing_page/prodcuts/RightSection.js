import React from 'react';
function RightSection({head,desc,img}) {
    return ( 
        <div className='container'>
        
        <div className='row'>

    
        <div className='col-6  p-5'>
            <h1 className='mt-5' >{head}</h1>
            <p className='fs-6' style={{width:'40ch'}}>{desc}</p>
            
            <a href='' style={{textDecoration:'none'}}>Learn more <i class="fa-solid fa-arrow-right"></i></a><br/><br></br>
           
        </div>

        <div className='col-6'>
            <img src={img} style={{width:'80%'}}></img>
        </div> 
        </div>
        
        </div>   
     );
}

export default RightSection;