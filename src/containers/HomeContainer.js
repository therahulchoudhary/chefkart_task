import React from 'react';
import '../css/HomeContainerStyle.css';
import ImageCard from '../components/ImageCard';
import FeatureSection from '../components/FeatureSection';
import CovetLogo from '../assets/covet.png';
import MainTemplateImage from '../assets/main_background.png';
import { Button, Image } from 'react-bootstrap';
import { features, testimonial } from '../constant';

const HomeContainer = () => {
    return (
        <>
            <div className="container">
                <section id="home" className="my-5 pt-5">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <Button variant="outline-light" className="py-2 px-3"><Image src={CovetLogo} /></Button>
                            <h1 className="font-weight-bold mt-4 mb-3">Web app for Covet</h1>
                            <p className="w-50 mb-5 mx-auto h6 font-weight-normal">Create custom landing pages with Omega that converts more visitors than any website. </p>
                        </div>
                        <div className="col-md-12 mt-5">
                            <Image src={MainTemplateImage} width="100%" />
                        </div>
                    </div>
                </section>
                <section id="features" className="pb-5">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            {features.slice(0, 2).map((element, index) => (<FeatureSection key={"firstfeature#" + index} title={element.title} description={element.description} />))}
                        </div>
                    </div>
                    <div className="row my-4 pb-5">
                        <div className="col-md-6">
                            <Image src={MainTemplateImage} width="100%" />
                        </div>
                        <div className="col-md-6">
                            <Image src={MainTemplateImage} width="100%" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            {features.slice(2, 4).map((element, index) => (
                                <div key={"feature#" + index}>
                                    <FeatureSection title={element.title} description={element.description} />
                                    {index === 0 && <div>
                                        <ul>
                                            <li className="py-1" style={{ fontSize: 14, color: 'grey' }}>This role will work with stakeholders and other developers to design and implement.</li>
                                            <li className="py-1" style={{ fontSize: 14, color: 'grey' }}>Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page without any design or custom coding.</li>
                                            <li className="py-1" style={{ fontSize: 14, color: 'grey' }}>You might be surprised to know that not only do we run some of the biggest websites in the world; we’re also growing really fast! We have close to 600 staff and contractors worldwide, adding more than 100 people to the business, which grows year on year, since 2017.</li>
                                        </ul>
                                    </div>}
                                </div>
                            ))}
                            <button className="primary_button py-2 px-3" variant="danger">Check live website</button>
                        </div>
                    </div>
                </section>
                <hr className="mt-5"></hr>
                <section id="testimonial">
                    <div className="row mb-5">
                        <div className="col-md-12 text-center my-5">
                            <h1 className="font-weight-bold">More Case studies</h1>
                        </div>
                        {testimonial.map((element, index) => (
                            <div key={"testimonial#" + index} className="col-md-4">
                                <ImageCard />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}

export default HomeContainer;