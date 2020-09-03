import React from 'react'


const Banner1=() =>{
    const homeOneBanObj = {
        imgsrc: "img/hero-bg-effect.png",
        heading:"Organize your personal and social life",
        para:"Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperia meaque ipte tres quet",
        alt:"Banner Effect"
      };
    return (
        <>
    <div id="home" className="home-banner-area position-relative">
    <div className="particle-bg"><img src={homeOneBanObj.imgsrc} alt={homeOneBanObj.alt} /></div>
    <div className="container">
        <div className="row">
            <div className="col-12">

                <div className="hero-area-wrapper position-relative wow fadeInLeft">
                    <div className="hero-area-content">
                        <h1>{homeOneBanObj.heading}</h1>
                        <p>{homeOneBanObj.para}</p>
                        <div className="hero-button-box">
                            <a href="https://play.google.com/store/apps" className="theme-button"><i className="fab fa-google-play"></i>Play Store</a>
                            <a href="https://apps.apple.com/us/app/apple-store/id375380948" className="theme-button"><i className="fab fa-apple"></i>App Store</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default Banner1;