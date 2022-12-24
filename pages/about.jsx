import Image from 'next/image'
import Header from '/components/pages/Header'
import Footer from '/components/pages/Footer'
import {Fragment, useState, useEffect} from 'react'

export default function About(){
	return (
		<Fragment>
			<Header />
			<section className = 'bg-white pb-5'>
				<div className = 'container'>
					<div className = 'row'>
						<div className = 'col-12 my-5 text-center'>
							<h1 className = 'text-capitalize text-dark bold'>about us</h1>
							<div className = 'text-sentence fo-s-15 text-muted col-lg-6 mx-auto p-0'>
								get to know who we are and what we do
							</div>
						</div>
						<div className = 'col-12 mb-5'>
							<div className = 'row'>
								<div className = 'col-12'>
									<div className = 'row'>
										<div className = 'col-lg-8'>
											<h5 className = 'text-capitalize bold'>our story</h5>
										</div>
										<div className = 'col-lg-4'>
											<Image alt = 'Our story image' src = '/icons/storyboard.png' className = 'mb-4' fill = {true} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</Fragment>
	)
}