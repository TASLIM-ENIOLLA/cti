export default function Contact(){
	return (
		<div className = 'bg-white'>
			<section className = 'container py-5'>
				<div className = 'row'>
					<div className = 'col-12 my-5 text-center'>
						<h1 className = 'text-capitalize text-dark bold'>contact us</h1>
						<div className = 'text-sentence fo-s-15 text-muted col-lg-6 mx-auto p-0'>leave us a message and be sure to get a response!</div>
					</div>
					<div className = 'col-12'>
						<div className = 'row'>
							<div className = 'col-12 col-lg-4 mb-5 mb-lg-0'>
								<div className = 'container-fluid border-top-teal py-5'>
									<div className = 'row mb-4 text-center'>
										<div className = 'col-12 mb-3'>
											<img src = '/icons/placeholder.png' width = '25' />
										</div>
										<div className = 'col-12'>
											<address className = 'text-sentence'>No. 11, Ayedun street, Tanke Akata, Ilorin, Kwara state, Nigeria.</address>
										</div>
									</div>
									<div className = 'row mb-4 text-center'>
										<div className = 'col-12 mb-3'>
											<img src = '/icons/email.png' width = '25' />
										</div>
										<div className = 'col-12'>
											<div>
												<a className = 'text-cyan' href = 'mailto://codehubcti@gmail.com'>
													codehubcti@gmail.com
												</a>
											</div>
										</div>
									</div>
									<div className = 'row text-center'>
										<div className = 'col-12 mb-3'>
											<img src = '/icons/apple.png' width = '25' />
										</div>
										<div className = 'col-12'>
											<div className = 'mb-3'>
												<a className = 'text-cyan' href = 'tel://+234-(0)-810-3589-869'>
													+234-(0)-810-3589-869
												</a>
											</div>
											<div>
												<a className = 'text-cyan' href = 'tel://+234-(0)-708-4712-978'>
													+234-(0)-708-4712-978
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className = 'col-12 col-lg-8'>
								<div className = 'container-fluid border-top-teal py-5 px-3'>
									<div className = 'row'>
										<div className = 'col-12 mb-5'>
											<h2 className = 'text-capitalize text-center text-teal bold'>quick message</h2>
										</div>
										<div className = 'col-md-6 mb-4'>
											<p className = 'text-sentence bold mb-2'>name</p>
											<input type = 'name' className = 'd-block p-3 border rounded-lg w-100' />
										</div>
										<div className = 'col-md-6 mb-4'>
											<p className = 'text-sentence bold mb-2'>subject</p>
											<input type = 'subject' className = 'd-block p-3 border rounded-lg w-100' />
										</div>
										<div className = 'col-md-6 mb-4'>
											<p className = 'text-sentence bold mb-2'>email</p>
											<input type = 'email' className = 'd-block p-3 border rounded-lg w-100' />
										</div>
										<div className = 'col-md-6 mb-4'>
											<p className = 'text-sentence bold mb-2'>phone</p>
											<input type = 'phone' className = 'd-block p-3 border rounded-lg w-100' />
										</div>
										<div className = 'col-12 mb-5'>
											<p className = 'text-sentence bold mb-2'>message</p>
											<textarea className = 'd-block p-3 border rounded-lg w-100 resize-0' rows = '5'></textarea>
										</div>
										<div className = 'col-md-6'>
											<button className = 'd-block p-3 btn bg-teal text-white rounded-lg w-100 text-capitalize bold'>send message</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<style>{`
				.border-top-teal{
					border-top: 4px solid var(--teal);
				}
			`}</style>
		</div>
	)
}