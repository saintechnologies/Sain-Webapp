import React from 'react';
import SeoTitle from '../Title/SeoTitle';
import Fade from 'react-reveal/Fade';

const Service = () => {
    return(
        <React.Fragment>
            <section className="seo_service_area sec_pad">
                <div className="container">
                    <SeoTitle Title='From idea – to code' TitleP='We bring together the brightest minds in emerging technologies to build awesome, real-world applications'/>
                    <div className="row seo_service_info">
                        <Fade bottom duration={500}>
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/icon1.png')} alt=""/>
                                    <a href=".#">
                                        <h4>
Blockchain Research</h4>
                                    </a>
                                    <p>Our team of experts work around the clock researching all elements of the blockchain space fulfililling any research inquires at an instituitonal-grade level</p>
                                    <a href=".#"><i className="arrow_right"></i></a>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom duration={700} >
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/icon2.png')} alt=""/>
                                    <a href=".#">
                                        <h4>
Blockchain Strategy & Development</h4>
                                    </a>
                                    <p>Delivering Enterprise Blockchain solutions and smart contract integration to help bring your company to the pinnacle of innovation</p>
                                    <a href=".#"><i className="arrow_right"></i></a>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom duration={1000}>
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/icon5.png')} alt=""/>
                                    <a href=".#">
                                        <h4>Marketing Strategy</h4>
                                    </a>
                                    <p>Using our proprietary marketing strategies as well as our industry network, we evaluate the Digital Asset Market and offer personalized and comprehensive results for your project.</p>
                                    <a href=".#"><i className="arrow_right"></i></a>
                                </div>
                            </div>
                        </Fade>
                        <div className="col-lg-12 text-center mt_40">
                            <a href=".#" className="seo_btn seo_btn_one btn_hover">All Features</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="seo_features_one sec_pad">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="seo_features_img">
                                <div className="round_circle"></div>
                                <div className="round_circle two"></div>
                                <img src={require('../../img/seo/features_img.png')} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Fade bottom cascade>
                                <div className="seo_features_content">
                                    <h2>What We Can Build For You. Any niche. In minutes.</h2>
                                    <p>Let us prepare you for your journey by planning a focused strategy, designing a fresh brand, developing an innovative technology solution, and deploying a successful MVP - freeing you to focus on your business and grow your platform.</p>
                                    <div className="media seo_features_item">
                                        <div className="icon"><img src={require('../../img/seo/icon4.png')} alt=""/></div>
                                        <div className="media-body">
                                            <h3>MVP Development</h3>
                                            <p>We can quickly create, develop, and deploy your minimum viable product (MVP) so you can start building a customer base and launch your business with maximum impact.</p>
                                        </div>
                                    </div>
                                    <div className="media seo_features_item">
                                        <div className="icon two"><img src={require('../../img/seo/icon3.png')} alt=""/></div>
                                        <div className="media-body">
                                            <h3>Software Consulting</h3>
                                            <p>Wondering why your app is slow? What is the best road-map to follow? How to set up a software architecture? We can help you determine which route to take and the most efficient way to get to where you want to be.
</p>
                                            <a href=".#" className="seo_btn seo_btn_one btn_hover wow fadeInUp">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default Service;
