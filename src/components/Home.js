import React from "react";
import { Alert } from "react-bootstrap";


function Home() {
 return(
     <section>
        <Alert variant="dark">
                Welcome to EventHub! Go to the Events Page to see what we have for You 🥳
            </Alert>
        <div className="leftBox" style={{ backgroundColor: 'pink', height: '30%', width: '40%',position: "absolute", marginTop: "2%", marginLeft: "2%"}}>
          <h1 style={{ textAlign:'center',fontStyle: "italic", fontSize: "4rem"}}>FindEvents HuB</h1>
           <p style={{ width: '100%', height: '30%', display: 'block', textAlign:"center", fontSize: "2rem"}}>"Your vision. Our innovation: Events solution"</p>
           </div>
           <img src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?cs=srgb&dl=pexels-teddy-yang-2263436.jpg&fm=jpg" alt="" style={{ width: '100%', height: '100%'}} />
        <div className="content">
       </div>
     </section>
       
    )

    
} 
export default Home
