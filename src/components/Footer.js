import React from 'react';

function Footer(){
    return(
        <>
        <div className="container">
        <footer className="text-center text-lg-start bg-light text-muted">

            <div class="row">
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h3>EMAIL US</h3>
                    <p>info@fanvoice.co.ke</p>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h3>CALL US</h3>
                    <p>(+254) 11-377-1641</p>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h3>FIND US</h3>
                    <p>Nairobi, Kenya</p>
                </div>
            </div>


            <div class="text-center p-4">
            © 2022 Copyright:Jose Kupeka Muhlanga                    
            </div>                
        </footer>

        </div>
            
        </>
    )
}

export default Footer;