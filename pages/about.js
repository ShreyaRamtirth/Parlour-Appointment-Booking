import React from 'react';
import Image from 'next/image';

export default function register() {
    return (
        <>
        <section class="page-section">
			<div class="container align-center">
				<div class="row mb-50">
					<div class="col-md-4 mb-md-20 news-right">
						<div class="news-item alt-2 small">
							<div class="news-media">
								<img src="/images/img-13.jpg" data-at2x="images/news/img-13@2x.jpg" alt />
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="news-item alt-2">
							<div class="news-media">
								<img src="/images/img-14.jpg" data-at2x="images/news/img-14@2x.jpg" alt />
							</div>
						</div>
					</div>
					<div class="col-md-4 news-left">
						<div class="news-item alt-2 small">
							<div class="news-media">
								<img src="/images/img-15.jpg" data-at2x="images/news/img-15@2x.jpg" alt />
							</div>
						</div>
					</div>
				</div>

				<h3 class="section-title bottom-line long font-alt">Welcome To Relish<span>Loveliness Producers</span></h3>
				<div class="col-md-10 col-md-offset-1 mb-30">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate ante vitae lacus dignissim condimentum vitae at . Sednonde magna pulvinar, sollicitudin turpis quis, elementum massa. Vivamus ut accumsan massa, mollis viverra est. Aliquam blandit non nulla ac dignissim. Integer venenatis</p>
				</div>
				<div class="title-under font-alt">
					<h3>Best For You</h3>
					<div class="img-line">
						<img src="/images/img-line-40.png" data-at2x="images/lines/img-line-26@2x.png" alt />
					</div>
					<h3>Leading Experts</h3>
					<div class="img-line">
						<img src="/images/img-line-40.png" data-at2x="images/lines/img-line-26@2x.png" alt />
					</div>
					<h3>Care About You</h3>
				</div>
			</div>
		</section>
        </>

    )

}
