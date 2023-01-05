import React from 'react';
import Link from 'next/link';

const index = () => {
    return (
        <div className='bg-success p-2 text-dark bg-opacity-10' >
            
		<section class="small-section bg-section-color3 opacity-20" data-background="/images/section-bg-3.jpg">
			<div class="container">

		
            <h3 class="blog-title font-alt align-center mb-5">Admin Menus Click To Explore More</h3>
				<div class="row">
					<div class="col-lg-3 col-md-6 mb-lg-30">
						<div class="gift-item alt-1 font-alt">
							<div class="gift-wrapper">
								<div class="gift-media">
									<a href="#">
										<img src="/images/img4.jpg" data-at2x="images/gifts/img-1@2x.jpg" alt />
									</a>
									<div class="gift-inside">
										<div class="gift-title">
											<div class="img-line">
												<img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png" alt />
											</div>
											{/* <span>Report</span> */}
											<div class="img-line">
												<img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png" alt />
											</div>
                                            <Link href='admin/appointment_report'><h3>Reports</h3></Link>
										</div>
										
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 mb-lg-30">
						<div class="gift-item alt-1 font-alt">
							<div class="gift-wrapper">
								<div class="gift-media">
									<a href="#">
										<img src="/images/img-2.jpg" data-at2x="images/gifts/img-2@2x.jpg" alt />
									</a>
									<div class="gift-inside">
										<div class="gift-title">
											<div class="img-line">
												<img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png" alt />
											</div>
											<div class="img-line">
												<img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png" alt />
											</div>
											<Link href='admin/add_services'><h3>Services</h3></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 mb-lg-30">
						<div class="gift-item alt-1 font-alt">
							<div class="gift-wrapper">
								<div class="gift-media">
									<a href="#">
										<img src="/images/img3.jpg" data-at2x="images/gifts/img-3@2x.jpg" alt />
									</a>
									<div class="gift-inside">
										<div class="gift-title">
											<div class="img-line">
												<img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png" alt />
											</div>
											
											<div class="img-line">
												<img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png" alt />
											</div>
											<Link href='admin/acceptAppointment'><h3>Appointment</h3></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6">
						<div class="gift-item alt-1 font-alt">
							<div class="gift-wrapper">
								<div class="gift-media">
									<a href="#">
										<img src="/images/img-4.jpg" data-at2x="images/gifts/img-4@2x.jpg" alt />
									</a>
									<div class="gift-inside">
										<div class="gift-title">
											<div class="img-line">
												<img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png" alt />
											</div>
											
											<div class="img-line">
												<img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png" alt />
											</div>
                                            <Link href='admin/add_beautition'><h3>Beautician</h3></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6">
						<div class="gift-item alt-1 font-alt">
							<div class="gift-wrapper">
								<div class="gift-media">
									<a href="#">
										<img src="/images/img-15.jpg" data-at2x="images/gifts/img-4@2x.jpg" alt />
									</a>
									<div class="gift-inside">
										<div class="gift-title">
											<div class="img-line">
												<img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png" alt />
											</div>
											
											<div class="img-line">
												<img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png" alt />
											</div>
                                            <Link href='admin/add_offers'><h3>Offers</h3></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

		

			</div>
		</section>
        </div>
    )
}

export default index