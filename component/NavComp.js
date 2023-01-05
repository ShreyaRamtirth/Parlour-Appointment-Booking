import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cookieCutter from 'cookie-cutter';
import { useRouter } from 'next/router';
function NavComp({isLoggedIn, username}) {
	const router = useRouter();
	console.log(isLoggedIn, "In Navbar");
	const handleLogout = (e) => {
		e.preventDefault();
		cookieCutter.set("jwt", "", {
			expires: new Date(new Date().toLocaleDateString()),
			path: "/",
		});
		cookieCutter.set("name", "", {
			expires: new Date(new Date().toLocaleDateString()),
			path: "/",
		});
		cookieCutter.set("role", "", {
			expires: new Date(new Date().toLocaleDateString()),
			path: "/",
		});
		router.push("/");
	};
	return (
		<div className="page" id="top">
			<header className='sticky-header js-stick top-fixed'>
				<div className="container">
					<nav className="main-nav">
						<div className="full-wrapper align-center">


							<div className="nav-logo-wrap-sticky">
								<a href="index.html" className="logo">
									<img src="/images/logo.png" data-at2x="images/logo@2x.png" alt />
								</a>
							</div>

							<div className="mobile-nav">
								<i className="fa fa-bars"></i>
							</div>

							<div className="inner-nav desktop-nav">
								<ul className="clearlist">
									<li>
										<Link href="/">
											<a className="nav-submenu active">Home</a></Link>
									</li>
									<li className="sep">
										<a>/</a>
									</li>
									<li>
										<Link href="/appointment">
											<a className="nav-submenu">Appointment</a></Link>

									</li>
									<li className="sep">
										<a>/</a>
									</li>
									<li>
										<Link href="/about">
											<a className="nav-submenu">About Us</a></Link>
									</li>

									<li className="nav-logo-wrap">
										<a href="index.html" className="logo">
											<img src="images/logo.png" data-at2x="images/logo@2x.png" alt />
										</a>
									</li>


									<li>
										<Link href="/offer"><a className="nav-submenu">Offers</a></Link>

									</li>
									<li className="sep">
										<a>/</a>
									</li>


									{!isLoggedIn &&
										<>
											<li>
												<Link href="/login">
													<a className="nav-submenu">Login</a></Link>
											</li>
											<li className="sep">
												<a>/</a>
											</li>
											<li>
												<Link href="/registration">
													<a>Registration</a></Link>
											</li> </>
									}{isLoggedIn &&
										<> {username}
											<li className="sep">
												<a>/</a>
											</li>
											<a onClick={handleLogout}> logout </a>
										</>
									}

								</ul>
								{/* <div className="menu-rect">
									<img src="/images/rectangle-1.png" data-at2x="images/lines/rectangle-1@2x.png" alt />
								</div> */}
							</div>
						</div>
					</nav>
				</div>
			</header>
			
		</div>
	)
}

export default NavComp; 