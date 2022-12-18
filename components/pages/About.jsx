export default function About(){
	return (
		<section className = 'bg-white'>
			<div className = 'container py-5'>
				<div className = 'row a-i-c'>
					<div className = 'col-12 my-5 text-center'>
						<h1 className = 'text-capitalize text-dark bold'>about us</h1>
						<div className = 'text-sentence fo-s-15 text-muted col-lg-6 mx-auto p-0'>get to know who we are as a company</div>
					</div>
					<div className = 'col-lg-10 mx-auto'>
						<div className = 'row'>
							<div className = 'col-12 col-lg mb-lg-0 mb-5'>
								<div className = {`py-5 px-4 text-center bg-white rounded-2x shadow`}>
									<img src = '/icons/book.png' className = 'mb-4' width = '55' />
									<div className = 'fo-s-15 mb-4 bold text-capitalize one-line'>
										our story
									</div>
									<div className = 'text-muted text-sentence mb-4'>
										At CodeHub Technological Institute, we provide the best avenue for people to acqiure various IT skill and apply them to solve real life problems. We also empower people to allow them make a living by helping them become professionals who can deliver value-oriented services to clients.
									</div>
								</div>
							</div>
							<div className = 'col-12 col-lg'>
								<div className = {`py-5 px-4 text-center bg-white rounded-2x shadow`}>
									<img src = '/icons/visionary.png' className = 'mb-4' width = '55' />
									<div className = 'fo-s-15 mb-4 bold text-capitalize one-line'>
										our vission
									</div>
									<div className = 'text-muted text-sentence mb-4'>
										At CodeHub Technological Institute, we provide the best avenue for people to acqiure various IT skill and apply them to solve real life problems. We also empower people to allow them make a living by helping them become professionals who can deliver value-oriented services to clients.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}