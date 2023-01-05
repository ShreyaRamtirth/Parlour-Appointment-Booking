import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import backend from '../config';


export default function offer() {
    return (
        <section class="page-section" id='#offers'>
        <div class="container align-center">
            <h3 class="section-title bottom-line long font-alt">Special Offers<span>Get Your Discount</span></h3>
            <div class="col-md-10 col-md-offset-1 mb-30">
                <p>Different types of offers available on every occasion</p>
            </div>
            <div class="mb-30">
                
                <div class="col-lg-3 col-md-6 mb-lg-30">
                    <div class="gift-item hover-alt alt-3 font-alt">
                        <div class="gift-wrapper">
                            <a href="shop-product-list.html">
                                <div class="gift-media">
                                    <img src="/images/img-9.jpg" data-at2x="images/gifts/img-9@2x.jpg" alt />
                                    <div class="gift-inside">
                                        <div class="gift-inside-1">
                                            <div class="gift-price">
                                                -10%
                                            </div>
                                            <div class="gift-inside-title">
                                                0n royal spa
                                            </div>
                                            <div class="img-line">
                                                <img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png" alt />
                                            </div>
                                            <span>this week</span>
                                        </div>
                                        <div class="gift-inside-2">
                                            Best Offer
                                        </div>
                                        <div class="gift-inside-2-white"></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-lg-30">
                    <div class="gift-item hover-alt alt-3 font-alt">
                        <div class="gift-wrapper">
                            <a href="shop-product-list.html">
                                <div class="gift-media">
                                    <img src="/images/img-10.jpg" data-at2x="images/gifts/img-10@2x.jpg" alt />
                                    <div class="gift-inside">
                                        <div class="gift-inside-1">
                                            <div class="gift-price">
                                                SALE
                                            </div>
                                            <div class="gift-inside-title">
                                                Up to 50% off
                                            </div>
                                            <div class="img-line">
                                                <img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png" alt />
                                            </div>
                                            <span>taste it</span>
                                        </div>
                                        <div class="gift-inside-2">
                                            Only today
                                        </div>
                                        <div class="gift-inside-2-white"></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-lg-30">
                    <div class="gift-item hover-alt alt-3 font-alt">
                        <div class="gift-wrapper">
                            <a href="shop-product-list.html">
                                <div class="gift-media">
                                    <img src="/images/img-15.jpg" data-at2x="images/gifts/img-11@2x.jpg" alt />
                                    <div class="gift-inside">
                                        <div class="gift-inside-1">
                                            <div class="gift-price">
                                                -25%
                                            </div>
                                            <div class="gift-inside-title">
                                                0n Any Message
                                            </div>
                                            <div class="img-line">
                                                <img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png" alt />
                                            </div>
                                            <span>this week</span>
                                        </div>
                                        <div class="gift-inside-2">
                                            Big Sale
                                        </div>
                                        <div class="gift-inside-2-white"></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-lg-30">
                    <div class="gift-item hover-alt alt-3 font-alt">
                        <div class="gift-wrapper">
                            <a href="shop-product-list.html">
                                <div class="gift-media">
                                    <img src="/images/img-13.jpg" data-at2x="images/gifts/img-12@2x.jpg" alt />
                                    <div class="gift-inside">
                                        <div class="gift-inside-1">
                                            <div class="gift-price">
                                                -50%
                                            </div>
                                            <div class="gift-inside-title">
                                                0n Facial
                                            </div>
                                            <div class="img-line">
                                                <img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png" alt />
                                            </div>
                                            <span>taste it</span>
                                        </div>
                                        <div class="gift-inside-2">
                                            Only today
                                        </div>
                                        <div class="gift-inside-2-white"></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                

            </div>
        </div>
    </section>
    )
}

// export async function getServerSideProps(context) {
//     const response = await fetch(`${backend}${allServices}`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
//     let data = await response.json();
//     return {
//         props: data,
//     }
// }
