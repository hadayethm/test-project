import React from 'react';
import CountUp from 'react-countup';

 const About1 = () => {

    const homeOneAbObj = {
        imgsrc: "img/about-page-left.png",
        imgcount1:"img/counter-bg1.png",
        imgcount2:"img/counter-bg2.png",
        imgcount3:"img/counter-bg3.png",
        heading:"Organize your personal and social life",
        para:"Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperia meaque ipte tres quet",
        alt:"About Img"
      };
    return (
        <>
          <section id="about" className="about-area">
    <div className="container">
        <div className="row">
            <div className="col-12">

                <div className="about-wrapper">
                    <div className="about-left-side wow fadeInLeft">
                        <img src={homeOneAbObj.imgsrc} alt={homeOneAbObj.alt}/>
                    </div>

                    <div className="about-right-side">
                        <div className="section-title-area">
                            <h2 className="section-heading">A good decision can change your life forever</h2>
                            <p className="section-subheading">A bad training environment can quickly ruin a good workout, matter how committed you are to your training routine. Goals are great, we all want gains and the positives that come along with them.</p>
                        </div>

                        <div className="counter-area wow fadeInDown">
                            <div className="counter-box">
                                <img src={homeOneAbObj.imgcount1} alt={homeOneAbObj.alt} />
                                <div className="count-content"><CountUp 
                             start={0.0} 
                             end={1.2}
                             duration={2.75}
                             separator=" "
                             decimals={1}
                              decimal="." /> M</div>
                                <h5 className="count-text">Downloads</h5>
                            </div>

                            <div className="counter-box">
                            <img src={homeOneAbObj.imgcount2} alt={homeOneAbObj.alt} />
                            <div className="count-content">
                            <CountUp 
                             start={0.0} 
                             end={4.2}
                             duration={2.75}
                             separator=" "
                             decimals={1}
                              decimal="." />
                              </div>
                                <h5 className="count-text">Avg Rating</h5>
                            </div>

                            <div className="counter-box">
                            <img src={homeOneAbObj.imgcount3} alt={homeOneAbObj.alt} />
                                <div className="count-content"> <CountUp 
                             start={0.0} 
                             end={100}
                             duration={2.75}
                             separator=" "
                             decimals={0}
                              decimal="." /> K</div>
                                <h5 className="count-text">Reviews</h5>
                            </div>
                        </div>
                      
                    </div>

                </div>

            </div>
        </div>
    </div>
</section>  
        </>
    )
}
export default About1;