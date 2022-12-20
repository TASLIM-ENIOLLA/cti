import Image from 'next/image'

export default function Footer(){
	return (
		<section className = 'py-5 bg-teal'>
			<div className = 'container'>
				<div className = 'row j-c-c'>
					<div className = 'text-center col-auto text-dark'>
						<Image src = '/vercel.svg' alt = 'logo' className = 'mb-4' width = '100' height = '23' />
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
