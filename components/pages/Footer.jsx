import Image from 'next/image'

export default function Footer(){
	return (
		<section className = 'py-5 bg-teal'>
			<div className = 'container'>
				<div className = 'row j-c-c'>
					<div className = 'text-center col-auto text-dark'>
						<img src = '/_codehub.png' alt = 'logo' className = 'mb-3 bg-white p-3 rounded-1x' width = '230' />
						<div className = 'half-bold'>
							All rights reserved &copy; {new Date().getFullYear()}. Codehub Technological Institute
							<sup>&reg;</sup>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
