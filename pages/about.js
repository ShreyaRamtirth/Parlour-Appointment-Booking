import React from 'react';
import Image from 'next/image';

export default function register() {
    return (
        <>
        <section className="page-section">
			<div className="container align-center">
				<div className="row mb-50">
					<div className="col-md-4 mb-md-20 news-right">
						<div className="news-item alt-2 small">
							<div className="news-media">
								<img src="/images/img-13.jpg" data-at2x="images/news/img-13@2x.jpg"  />
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="news-item alt-2">
							<div className="news-media">
								<img src="/images/img-14.jpg" data-at2x="images/news/img-14@2x.jpg"  />
							</div>
						</div>
					</div>
					<div className="col-md-4 news-left">
						<div className="news-item alt-2 small">
							<div className="news-media">
								<img src="/images/img-15.jpg" data-at2x="images/news/img-15@2x.jpg"  />
							</div>
						</div>
					</div>
				</div>

				<h3 className="section-title bottom-line long font-alt">Welcome To Relish<span>Loveliness Producers</span></h3>
				<div className="col-md-10 col-md-offset-1 mb-30">
					<p>A beauty salon is an establishment that offers a variety of cosmetic treatments and cosmetic services for men and women. Beauty salons may offer a variety of services including professional hair cutting and styling, manicures and pedicures, and often cosmetics, makeup and makeovers.
						
					</p>
				</div>
				<div className="title-under font-alt">
					<h3>Best For You</h3>
					<div className="img-line">
						<img src="/images/img-line-40.png" data-at2x="images/lines/img-line-26@2x.png"  />
					</div>
					<h3>Leading Experts</h3>
					<div className="img-line">
						<img src="/images/img-line-40.png" data-at2x="images/lines/img-line-26@2x.png"  />
					</div>
					<h3>Care About You</h3>
				</div>
			</div>
		</section>
        </>

    )

}
