export default function handler(_, res){
	res.status(200).json([
		{
			title: 'app development',
			subtitle: 'our team of tech savvys help educated and instill good programming knowledge and ethics in our tutees',
			icon: '/icons/app-development.png',
			query: 'app-development'
		},
		{
			title: 'cloud data',
			subtitle: 'our team of tech savvys help educated and instill good programming knowledge and ethics in our tutees',
			icon: '/icons/cloud-data.png',
			query: 'cloud-data'
		},
		{
			title: 'computer networking',
			subtitle: 'our team of tech savvys help educated and instill good programming knowledge and ethics in our tutees',
			icon: '/icons/computer-networks.png',
			query: 'computer-networks'
		},
		{
			title: 'graphic designer',
			subtitle: 'our team of tech savvys help educated and instill good programming knowledge and ethics in our tutees',
			icon: '/icons/graphic-designer.png',
			query: 'graphic-designer'
		},
		{
			title: 'virtual class',
			subtitle: 'our team of tech savvys help educated and instill good programming knowledge and ethics in our tutees',
			icon: '/icons/virtual-class.png',
			query: 'virtual-class'
		},
		{
			title: 'web development',
			subtitle: 'our team of tech savvys help educated and instill good programming knowledge and ethics in our tutees',
			icon: '/icons/web-development.png',
			query: 'web-development'
		},
	])
}