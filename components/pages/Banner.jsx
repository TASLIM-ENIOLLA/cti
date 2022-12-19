import Image from 'next/image'

export default function Banner(){
	return (
		<section className = 'container py-5'>
			<div className = 'row a-i-c transit flex-row-reverse py-4'>
				<div className = 'col-lg-5'>
					<img alt = 'A developer coding on laptop' className = 'd-block w-100 max-width-450px mx-auto' src = '/icons/code-typing.png' />
				</div>
				<div className = 'col-lg-7 mb-5 mb-lg-0'>
					<div className = 'row'>
						<div className = 'col-12 mb-4'>
							<div className = 'fa-3x bold text-sentence'>become a full stack web developer in no time.</div>
						</div>
						<div className = 'col-12 mb-4'>
							<div className = 'text-dark fo-s-15 text-sentence'>with the right knowledge from well experienced tutors, you can become a professional web developer in no time</div>
						</div>
						<div className = 'col-12 mb-5 max-width-500px'>
							<BannerButtons />
						</div>
						<div className = 'col-12'>
							<div className = 'mb-4'>
								<BannerLists title = 'Acquisition of highly-sought IT skills' />
							</div>
							<div className = 'mb-4'>
								<BannerLists title = 'Tutilage with modern development frameworks' />
							</div>
							<div className = 'mb-4'>
								<BannerLists title = 'A federal government approved certificate' />
							</div>
							<div className = 'mb-4'>
								<BannerLists title = 'Free mentorship during and after the duration of the course' />
							</div>
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.max-width-500px{
					max-width: 500px;
				}
				.max-width-450px{
					max-width: 450px;
				}
			`}</style>
		</section>
	)
}

function BannerLists({title}){
	return (
		<div className = 'row'>
			<div className = 'col-12'>
				<div className = 'row'>
					<div className = 'col-auto'>
						<Image alt = 'Check mark image' src = '/icons/accept.png' width = '20' height = '20' />
					</div>
					<div className = 'col'>
						<div className = 'text-dark fo-s-15 text-sentence'>{title}</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function BannerButtons(){
	return (
		<div className = 'row a-i-c'>
			<div className = 'col-6'>
				<a href = '/register' className = 'd-block w-100 btn py-3 px-4 bg-teal text-capitalize text-white shadow'>get started</a>
			</div>
			<div className = 'col-6'>
				<a href = '/contact' className = 'd-block w-100 btn py-3 px-4 bg-clear border-dark border text-capitalize text-dark'>contact us</a>
			</div>
		</div>
	)
}