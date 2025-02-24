import React from 'react';
function Brokerage() {

    const styles = {
        table: {
          width:'80%',
          marginLeft:'10%',
          marginTop:'5rem'
       
          
        },

        
       
      };

    return ( 
      <table style={styles.table} className='my-table  items-center table  border '>

        <thead>
            <tr>
                <th style={{width:'1ch'}}></th>
            <th style={{width:'10ch'}}>Equity delivery</th>
            <th style={{width:'10ch'}}>Equity intraday</th>
            <th style={{width:'10ch'}}>F&O - Futures</th>
            <th style={{width:'10ch'}}>F&O - Options  </th>
            </tr>
        </thead>
           
        <tbody>
        <tr>
            <th>Brokerage</th>
            <td>Zero Brokerage</td>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>0.03% or Rs. 20/executed order whichever is lower</td>
            <td>Flat Rs. 20 per executed order</td>
        </tr>
        
        <tr>
            <th>STT/CTT</th>
            <td>0.1% on buy & sell</td>
            <td>0.025% on the sell side</td>
            <td>0.02% on the sell side</td>
            <td><li>0.125% of the intrinsic value on options that are bought and exercised</li>
            <li>0.1% on sell side (on premium)</li></td>
        </tr>

        <tr>
            <th>Transaction charges</th>
            <td>NSE: 0.00297%
            BSE: 0.00375%</td>
            <td>NSE: 0.00297%
            BSE: 0.00375%</td>
            <td>NSE: 0.00173%
            BSE: 0</td>
            <td>NSE: 0.03503% (on premium)
            BSE: 0.0325% (on premium)</td>
        </tr>

        <tr>
            <th>GST</th>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
        </tr>


        <tr>
            <th>SEBI charges</th>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
            <td>₹10 / crore</td>
        </tr>

        <tr>
            <th>Stamp charges</th>
            <td>0.015% or ₹1500 / crore on buy side</td>
            <td>0.003% or ₹300 / crore on buy side</td>
            <td>0.002% or ₹200 / crore on buy side</td>
            <td>0.003% or ₹300 / crore on buy side</td>
        </tr>

        </tbody>
      </table>
     );
}

export default Brokerage;