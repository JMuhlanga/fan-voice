import React, { useState }  from 'react';

function ContactUs(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    

    

    function handleSubmit(e) {
        e.preventDefault();
              
        fetch("https://fan-voice-api-production-2957.up.railway.app/contacts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email            
          })
        });
      }


    return(
        <>
            <div className="container">
            <div className="album py-5 bg-light"></div>
                <div className="reg-form">
                    <h3>Kindly leave your details for us to contact you</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" value={name} onChange={(e) => setName(e.target.value)} />
                            <div id="emailHelp" className="form-text">We'll not display your Name</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <div className='album py-5'></div>
                </div>
            </div>
        </>
    )
}

export default ContactUs;