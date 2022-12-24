export default function handler(_, res){
	res.status(200).json([
		{
			title: 'app development',
			subtitle: 'Discover the latest app development tools, platform updates, training, and documentation for developers across every Android, iOS and Window device.',
			icon: '/icons/app-development.png',
			query: 'app-development'
		},
		{
			title: 'cloud computing',
			subtitle: 'Manage your data across cloud platforms like AWS with the help of our certified engineers either with or instead of on-premises storage',
			icon: '/icons/cloud-data.png',
			query: 'cloud-data'
		},
		{
			title: 'computer networking',
			subtitle: ' We help make interconnected computers at a private or public level of organization work together seamlessly by effective optimization',
			icon: '/icons/computer-networks.png',
			query: 'computer-networks'
		},
		{
			title: 'graphic design',
			subtitle: 'Creativity is never far from our reach, let us help bring your colorful imagination to live in the most artistic way possible',
			icon: '/icons/graphic-designer.png',
			query: 'graphic-designer'
		},
		{
			title: 'web development',
			subtitle: 'Our team of tech savvys help educated and instill good programming knowledge and ethics in our tutees',
			icon: '/icons/web-development.png',
			query: 'web-development'
		},
	])
}