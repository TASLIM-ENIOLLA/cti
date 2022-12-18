export default function handler(_, res){
	res.status(200).json([
		{
			title: 'HTML5',
			icon: '/icons/html5.png',
			query: 'html5'
		},
		{
			title: 'CSS3',
			icon: '/icons/css-3.png',
			query: 'css3'
		},
		{
			title: 'JavaScript',
			icon: '/icons/java-script.png',
			query: 'javascript'
		},
		{
			title: 'PHP',
			icon: '/icons/php.png',
			query: 'php'
		},
		{
			title: 'Node JS',
			icon: '/icons/node-js.png',
			query: 'node-js'
		},
		{
			title: 'python',
			icon: '/icons/python.png',
			query: 'python'
		},
		{
			title: 'figma',
			icon: '/icons/figma.png',
			query: 'figma'
		},
		{
			title: 'adobe XD',
			icon: '/icons/xd.png',
			query: 'adobe-xd'
		},
		{
			title: 'adobe photoshop',
			icon: '/icons/adobe-photoshop.png',
			query: 'adobe-photoshop'
		},
		{
			title: 'cisco packet tracer',
			icon: '/icons/cisco.png',
			query: 'cisco-packet-tracer'
		},
	])
}