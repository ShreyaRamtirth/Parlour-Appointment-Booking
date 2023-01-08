import React from 'react';
import Link from 'next/link';

const index = () => {
    return (
        <div className='bg-success p-2 text-dark bg-opacity-10' >
            
		<section className="small-section bg-section-color3 opacity-20" data-background="/images/section-bg-3.jpg">
			<div className="container">

		
            <h3 className="blog-title font-alt align-center mb-5">Admin Menus Click To Explore More</h3>
				<div className="row">
					<div className="col-lg-3 col-md-6 mb-lg-30">
						<div className="gift-item alt-1 font-alt">
							<div className="gift-wrapper">
								<div className="gift-media">
									<a href="#">
										<img src="/images/img4.jpg" data-at2x="images/gifts/img-1@2x.jpg" />
									</a>
									<div className="gift-inside">
										<div className="gift-title">
											<div className="img-line">
												<img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png"  />
											</div>
											{/* <span>Report</span> */}
											<div className="img-line">
												<img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png"  />
											</div>
                                            <Link href='admin/appointment_report'><h3>Reports</h3></Link>
										</div>
										
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 mb-lg-30">
						<div className="gift-item alt-1 font-alt">
							<div className="gift-wrapper">
								<div className="gift-media">
									<a href="#">
										<img src="/images/img-2.jpg" data-at2x="images/gifts/img-2@2x.jpg"  />
									</a>
									<div className="gift-inside">
										<div className="gift-title">
											<div className="img-line">
												<img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png"  />
											</div>
											<div className="img-line">
												<img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png"  />
											</div>
											<Link href='admin/add_services'><h3>Services</h3></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 mb-lg-30">
						<div className="gift-item alt-1 font-alt">
							<div className="gift-wrapper">
								<div className="gift-media">
									<a href="#">
										<img src="/images/img3.jpg" data-at2x="images/gifts/img-3@2x.jpg"  />
									</a>
									<div className="gift-inside">
										<div className="gift-title">
											<div className="img-line">
												<img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png"  />
											</div>
											
											<div className="img-line">
												<img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png"  />
											</div>
											<Link href='admin/acceptAppointment'><h3>Appointment</h3></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="gift-item alt-1 font-alt">
							<div className="gift-wrapper">
								<div className="gift-media">
									<a href="#">
										<img src="/images/img-4.jpg" data-at2x="images/gifts/img-4@2x.jpg"  />
									</a>
									<div className="gift-inside">
										<div className="gift-title">
											<div className="img-line">
												<img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png"  />
											</div>
											
											<div className="img-line">
												<img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png"  />
											</div>
                                            <Link href='admin/add_beautition'><h3>Beautician</h3></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="gift-item alt-1 font-alt">
							<div className="gift-wrapper">
								<div className="gift-media">
									<a href="#">
										<img src="/images/img-15.jpg" data-at2x="images/gifts/img-4@2x.jpg"  />
									</a>
									<div className="gift-inside">
										<div className="gift-title">
											<div className="img-line">
												<img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png"  />
											</div>
											
											<div className="img-line">
												<img src="/images/img-line-26.png" data-at2x="images/lines/img-line-26@2x.png"  />
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