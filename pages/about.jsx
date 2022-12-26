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
								<div className = 'col-12 mb-5'>
									<div className = 'row a-i-c'>
										<div className = 'col-lg-4'>
											<img alt = 'Our story image' src = '/icons/storyboard.png' className = 'd-block w-100 mb-4 mx-auto' style = {{maxWidth: '450px'}} />
										</div>
										<div className = 'col-lg-8'>
											<h5 className = 'text-uppercase text-teal bold'>our story</h5>
											<div className = 'fo-s-15 text-muted text-sentence'>
												At CodeHub Technological Institute, we provide the best avenue for people to acqiure various IT skill and apply them to solve real life problems. We also empower people to allow them make a living by helping them become professionals who can deliver value-oriented services to clients.
											</div>
										</div>
									</div>
								</div>
								<div className = 'col-12 mb-5'>
									<div className = 'row a-i-c flex-row-reverse'>
										<div className = 'col-lg-4'>
											<img alt = 'Our story image' src = '/icons/vision-statement.png' className = 'd-block w-100 mb-4 mx-auto' style = {{maxWidth: '450px'}} />
										</div>
										<div className = 'col-lg-8'>
											<h5 className = 'text-uppercase text-teal bold'>our vision</h5>
											<div className = 'fo-s-15 text-muted text-sentence'>
												As the world is a global village, we want to ensure that everyone becomes employable through the acquisition of IT skills irrespective of location. We also hope to make the world a better place by empowering people with IT skills and putting their skills to good use.
											</div>
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