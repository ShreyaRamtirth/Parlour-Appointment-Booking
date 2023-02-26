import React ,{useRef, useState, useEffect} from 'react';
import Link from 'next/link';

const index = () => {
    return (
        <div className='bg-success p-2 text-dark bg-opacity-10' >
		<section className="small-section bg-section-color3 opacity-20" data-background="/images/section-bg-3.jpg">
			<div className="container-fluid mt-20">	
            <h3 className="blog-title font-alt align-center mb-5">Admin Menus Click To Explore More</h3>
			<iframe
			width={1400}
			height={1000}
			src="https://charts.mongodb.com/charts-project-0-nlfkj/embed/dashboards?id=63e609c8-6c3f-4966-8b03-bc22405376db&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed">
			</iframe>
			</div>
		</section>
        </div>
    )
}

export default index