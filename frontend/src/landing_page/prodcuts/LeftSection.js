import React from 'react';
function LeftSection({img,head,desc,demo,learn}) {
    return ( 
        <div className='container'>
        
        <div className='row'>

        <div className='col-6'>
            <img src={img} style={{width:'80%'}}></img>
        </div> 
        <div className='col-6 p-5'>
            <h1>{head}</h1>
            <p className='fs-6' style={{width:'40ch'}}>{desc}</p>
            <a href='' style={{textDecoration:'none'}} className='me-5'>Try demo <i class="fa-solid fa-arrow-right"></i></a>
            <a href='' style={{textDecoration:'none'}} className='ms-5'>Learn more <i class="fa-solid fa-arrow-right"></i> </a><br/><br></br>
            <img src='media\images\appstoreBadge.svg' className='me-5'></img>
            <img src='media\images\googlePlayBadge.svg'></img>
        </div>

        </div>
        
        </div>
     );
}

export default LeftSection;