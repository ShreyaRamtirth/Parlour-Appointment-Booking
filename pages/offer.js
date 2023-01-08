import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import backend from '../config';

import {offers} from "../routes";
const images = [
    '/images/img-9.jpg',
    '/images/img-10.jpg',
    '/images/img-15.jpg',
    '/images/img-13.jpg',
    '/images/img-1.jpg',
    '/images/img-2.jpg',
    '/images/img-4.jpg',
];


export default function offer(props) {
   

    return (
        <section className="page-section" id='#offers'>
        <div className="container align-center">
            <h3 className="section-title bottom-line long font-alt">Special Offers<span>Get Your Discount</span></h3>
            <div className="col-md-10 col-md-offset-1 mb-30">
                <p>Different types of offers available on every occasion</p>
            </div>
            <div className="mb-30">
            { props.offers.map((offer, index) => {
                var date = new Date(offer.validTill);
                var formattedDate = date.toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                })
                var randomNumber = Math.floor(Math.random() * images.length);
                // console.log(images[randomNumber], img1);
               return( offer.isActive ? 
               <div className="col-lg-3 col-md-6 mb-lg-30" key={index}>
                    <div className="gift-item hover-alt alt-3 font-alt">
                        <div className="gift-wrapper">
                            <a href="shop-product-list.html">
                                <div className="gift-media " >
                                    <img src={images[randomNumber]} data-at2x="/images/gifts/img-9@2x.jpg" layout='fill' style={{borderRadius: '255px', overflow: 'hidden'}}   />
                                    <div className="gift-inside">
                                        <div className="gift-inside-1">
                                            <div className="gift-price">
                                                -{offer.off}%
                                            </div>
                                            <div className="gift-inside-title">
                                                {offer.name}
                                            </div>
                                            <div className="img-line">
                                                <img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png"  />
                                            </div>
                                            <span>{formattedDate}</span>
                                        </div>
                                        <div className="gift-inside-2">
                                            Limited Offer
                                        </div>
                                        <div className="gift-inside-2-white"></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div> : <div key={index}></div>);

            })}
                {/* <div className="col-lg-3 col-md-6 mb-lg-30">
                    <div className="gift-item hover-alt alt-3 font-alt">
                        <div className="gift-wrapper">
                            <a href="shop-product-list.html">
                                <div className="gift-media">
                                    <img src={img2} data-at2x="images/gifts/img-10@2x.jpg"  />
                                    <div className="gift-inside">
                                        <div className="gift-inside-1">
                                            <div className="gift-price">
                                                SALE
                                            </div>
                                            <div className="gift-inside-title">
                                                Up to 50% off
                                            </div>
                                            <div className="img-line">
                                                <img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png"  />
                                            </div>
                                            <span>taste it</span>
                                        </div>
                                        <div className="gift-inside-2">
                                            Only today
                                        </div>
                                        <div className="gift-inside-2-white"></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div> */}
                {/* <div className="col-lg-3 col-md-6 mb-lg-30">
                    <div className="gift-item hover-alt alt-3 font-alt">
                        <div className="gift-wrapper">
                            <a href="shop-product-list.html">
                                <div className="gift-media">
                                    <img src="/images/img-15.jpg" data-at2x="images/gifts/img-11@2x.jpg"  />
                                    <div className="gift-inside">
                                        <div className="gift-inside-1">
                                            <div className="gift-price">
                                                -25%
                                            </div>
                                            <div className="gift-inside-title">
                                                0n Any Message
                                            </div>
                                            <div className="img-line">
                                                <img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png"  />
                                            </div>
                                            <span>this week</span>
                                        </div>
                                        <div className="gift-inside-2">
                                            Big Sale
                                        </div>
                                        <div className="gift-inside-2-white"></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div> */}
                {/* <div className="col-lg-3 col-md-6 mb-lg-30">
                    <div className="gift-item hover-alt alt-3 font-alt">
                        <div className="gift-wrapper">
                            <a href="shop-product-list.html">
                                <div className="gift-media">
                                    <img src="/images/img-13.jpg" data-at2x="images/gifts/img-12@2x.jpg"  />
                                    <div className="gift-inside">
                                        <div className="gift-inside-1">
                                            <div className="gift-price">
                                                -50%
                                            </div>
                                            <div className="gift-inside-title">
                                                0n Facial
                                            </div>
                                            <div className="img-line">
                                                <img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png"  />
                                            </div>
                                            <span>taste it</span>
                                        </div>
                                        <div className="gift-inside-2">
                                            Only today
                                        </div>
                                        <div className="gift-inside-2-white"></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div> */}

                

            </div>
        </div>
    </section>
    )
}

export async function getServerSideProps(context) {
    const response = await fetch(`${backend}${offers}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let data = await response.json();
    return {
        props: data,
    }
}
