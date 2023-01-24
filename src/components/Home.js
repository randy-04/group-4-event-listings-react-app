import React from "react";


function Home() {


    return(
     <>
     <section style={{backgroundSize: 'cover'}}>
        <div className="leftBox" style={{ backgroundColor: 'pink', height: '100%', width: '40%'}}>
          <h1 style={{ textAlign:'center'}}>EVENTS AND SHOWS</h1>
           <p style={{ width: '100%', height: '30%', display: 'block', textAlign:"center"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
           </div>
           <img src="https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?cs=srgb&dl=pexels-teddy-yang-2263436.jpg&fm=jpg" alt="" style={{ width: '100%', height: '100%',}} />
        <div className="content">
       </div>
       </section>
       </>
    )

    
} 
export default Home
