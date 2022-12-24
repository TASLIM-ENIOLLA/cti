export default function Loaddeer({className, title, otherProps}){
	return (
		<div className = {`text-center ${className}`} {...otherProps}>
			<div className = 'd-inline-block rotor'></div>
			<div className = 'd-block text-muted mt-3 text-sentence'>{title || 'loading'}...</div>
			<style jsx>{`
				.rotor{
					width: 70px;
					height: 70px;
					border: 5px solid var(--teal);
					border-radius: 50%;
					border-left-color: transparent;
					border-right-color: transparent;
					animation: spin 1s linear infinite;
				}
				@keyframes spin{
					from{
						transform: rotate(0deg)
					}
					to{
						transform: rotate(360deg)
					}
				}
			`}</style>
		</div>
	)
}