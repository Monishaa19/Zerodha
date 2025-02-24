import React from 'react';
function Hero() {
    return ( 
        <div className='container-fluid' style={{backgroundColor:'#387ed1'}}>
            <div className='row'>
                <div className='col-9'>
                   <h5>Support Portal</h5> 
                </div>
                <div className='col-3'>
                    <a href="" className='p-3' style={{color:'white'}}><h6>Track tickets</h6></a>
                </div>
            </div>


            <div className='row'>

                <div className='col-7'>
                <h4>Search for an answer or browse help topics to create a <br/>ticket
                </h4>
                <input className='mt-4 mb-3' placeholder='Eg: How do i activate F&O, why is my oreder getting rejected.. ' style={{width:'85%', height:'60px', padding:'1rem'}}></input><i class="fa-solid fa-magnifying-glass" style={{position:'relative', right:'2rem', color:'black'}}></i><br></br>
                <a href='' className='mb-3' style={{color:'white'}}>Track account opening</a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href='' className='p-3' style={{color:'white'}}>Track segement activation</a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href='' className=''style={{color:'white'}}>Intraday margins</a><br></br><br></br>
                <a href='' className='mb-5' style={{color:'white', }}>Kite user manual</a>

                <div className='mb-5 '> &nbsp;</div>
                <div className='mb-5 mt-5 '> </div>
                </div>

                <div className='col-5 items-right text-right mt-3 '>
                    <h4>Featured</h4>
                    <ol>
                        <li><a href='' className='' style={{color:'white', fontSize:'large'}}>Rights Entitlements listing in February 2025</a></li><br></br>
                        <li><a href='' style={{color:'white', fontSize:'large'}}>Surveillance measure on scrips - February 2025</a></li>
                    </ol>
                </div>

            </div>
        </div>
     );
}

export default Hero;