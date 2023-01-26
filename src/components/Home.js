function Home() {
  return(
      <section>
        <div className="content" style={{  height: '30%', width: '40%',position: "absolute", marginTop: "5%", marginLeft: "2%", fontSize: "160px",color: "#fff", fontWeight: "600"}}>
             <h1 style={{ textAlign:'center',fontStyle: "italic", fontSize: "160px",fontWeight: "600"}}>FindEvents HuB</h1>
             <a style={{ textDecoration: "none",display: "inline-block", color: "#fff", fontSize: "24px", border: "2px solid #fff", padding: "14px 70px", borderRadius: "50px", marginTop: ""}} href="#">"Your vision.Our innovation: Events solutions"</a>
        </div>
        <div>
            <video autoPlay loop muted playsInline className="backVideo" style={{ position: 'absolute', right: '0', bottom: '0', zIndex: '-1' }}>
                <source src="./video.mp4" type="video/mp4" style={{ width: '100%', height: '100%' }} />
            </video>
        </div>
        <style jsx>
         {`
         h1:hover{-webkit-text-stroke:2px #fff;color:transparent;}
         `}
        </style>
      </section>
  )
}
 export default Home