import React from "react";
function CreateTicket() {
  return (
    <div>
      <h5 className=" container text-muted mt-5">
        To create a ticket, select a relevant topic
      </h5>
      <div className="container ticket">
        <div className="row " style={{ marginLeft: "0rem", marginTop: "4rem" }}>
          <div className="col-4 ">
            <h5>
              <i
                class="fa-solid fa-plus p-2"
                style={{
                  border: "1px solid black",
                  borderRadius: "100%",
                  fontSize: "0.7rem",
                  width: "16px",
                  height: "16px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position:'relative',
                  bottom:'4px'
                }}
              ></i>{" "}
              Account Opening
            </h5>
            <ul>
              <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Getting started</a></li>
              <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Online</a></li>
              <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Offline</a></li>
              <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Charges</a></li>
              <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Company, Partnership and HUF</a></li>
              <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Non Resident Indian (NRI)</a></li>
            </ul>
          </div>

          <div className="col-4">
            <h5>
              <i class="fa-regular fa-user p-2"></i>Your Zerodha Account
            </h5>
            <ul>
              <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Login credentials</a></li>
              <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Your Profile</a></li>
              <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Account modification and segment addition</a></li>
              <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>CMR & DP ID</a></li>
              <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Nomination</a></li>
              <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Transfer and conversion of shares</a></li>
            </ul>
          </div>

          <div className="col-4">
            <h5>
              <i class="fa-solid fa-chart-simple p-2"></i>Trading and Markets
            </h5>
            <ul>
              <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Trading FAQs</a></li>
              <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Kite</a></li>
              <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Margins</a></li>
              <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Product and order types</a></li>
              <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Corporate actions</a></li>
              <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Kite features</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container ticket">
        <div className="row " style={{ marginLeft: "0rem", marginTop: "4rem" }}>
          <div className="col-4 ">
            <h5>
            <i class="fa-solid fa-wallet"></i> Funds
            </h5>
            <ul>
                <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Fund withdrawal</a></li>
                <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Adding funds</a></li>
                <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Adding bank accounts</a></li>
                <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>eMandates</a></li>
            </ul>
          </div>

          <div className="col-4">
            <h5>
            <i class="fa-solid fa-terminal ms-2"></i>&nbsp; Console
            </h5>
            <ul>
            <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>IPO</a></li>
            <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Portfolio</a></li>
            <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Funds statement</a></li>
            <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Profile</a></li>
            <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Reports</a></li>
            <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Referral program</a></li>
            </ul>
          </div>

          <div className="col-4">
            <h5>
            <i class="fa-solid fa-coins me-2 ms-3"></i>Coin
            </h5>
            <ul>
            <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Understanding mutual funds and Coin</a></li>
            <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Coin app</a></li>
            <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Coin web</a></li>
            <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>Transactions and reports</a></li>
            <li><a href="" style={{textDecoration:'none', color:'#387ed1'}}>National Pension Scheme (NPS)</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
