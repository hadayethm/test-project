import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const homeVideoObj ={
    posterimg:"img/video-area-video-poster.jpg",
    para:"Fermentum magna non faucibus dignissim. Sed a venenatis mi, vel tempus neque. Fusce pharetra, diam in hendrerit facilisis, enim diam cursus augue."
}
 const Video = () => {

    return (
        <>
            <section id="video-area" className="video-area">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="video-wrapper">
                    <img src={homeVideoObj.posterimg} alt="Video" />
                    <a className="venobox play-button"><FontAwesomeIcon icon="user" /></a>
                </div>
                <p>{homeVideoObj.para}</p>
            </div>
        </div>
    </div>
</section>
        </>
    )
}

export default Video;



