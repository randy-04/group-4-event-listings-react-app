import React from "react";

import { Alert } from "react-bootstrap";



function Home() {
 return(
     <section>
      <Alert variant="dark">
                Welcome to EventHub! Go to the Events Page to see what we have for You 🥳
            </Alert>

      <video autoPlay loop muted playsInline className="backVideo">
        <source src="Home/Downloads/video.mp4" type="video/mp4"></source>
     </video>
       
        <div className="content" style={{  height: '30%', width: '40%',position: "absolute", marginTop: "5%", marginLeft: "2%", fontSize: "160px",color: "#fff", fontWeight: "600"}}>
            <h1 style={{ textAlign:'center',fontStyle: "italic", fontSize: "160px",fontWeight: "600"}}>FindEvents HuB</h1>
          <a style={{ textDecoration: "none",display: "inline-block", color: "#fff", fontSize: "24px", border: "2px solid #fff", padding: "14px 70px", borderRadius: "50px", marginTop: ""}} href="#">Explore</a>
           <p style={{ width: '100%', height: '30%', display: 'block', textAlign:"center", fontSize: "2rem"}}></p>

           </div>
           <img src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?cs=srgb&dl=pexels-teddy-yang-2263436.jpg&fm=jpg" alt="" style={{ width: '100%', height: '100%'}} />
        <div className="content">
       </div>
       
     </section>
       
    )

    
} 
export default Home