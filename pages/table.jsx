import {useRef} from 'react'
import {useComponentVisible} from '/my_modules/component-visible'

export default function Table(){
	const component = useRef()

	useComponentVisible((visibility, element) => console.log(visibility), component)

	const columns1 = [
		{name: '', id: 'ph1', colSpan: 3},
		{name: 'Column header two', id: 'ph2', colSpan: 3},
		{name: 'Column header three', id: 'ph3', colSpan: 3},	
		{name: '', id: 'ph4', colSpan: 3},	
	]

	const columns2 = [
		{name: 'Column one', id: 'p1'},
		{name: 'Column two', id: 'p2'},
		{name: 'Column three', id: 'p3'},
		{name: 'Column four', id: 'p4'},
		{name: 'Column five', id: 'p5'},
		{name: 'Column six', id: 'p6'},
		{name: 'Column seven', id: 'p7'},
		{name: 'Column eight', id: 'p8'},
		{name: 'Column nine', id: 'p9'},
		{name: 'Column ten', id: 'p10'},
		{name: 'Column eleven', id: 'p11'},
		{name: 'Column twelve', id: 'p12'},
	]

	return (
		<section className = 'container py-5'>
			<table className = 'table text-center table-bordered table-dark table-hover vh-100'>
				<thead>
					<tr>{columns1.map(({name, id, colSpan}) => (
						<td key = {id} colSpan = {colSpan}>{name}</td>
					))}</tr>
					<tr>{columns2.map(({name, id}) => (
						<td key = {id}>{name}</td>
					))}</tr>
				</thead>
				<tbody>{Array(4).fill(1).map((_, index) => (
					<tr key = {index}>{Array(12).fill(6).map((_, index) => (
						<td key = {index}>Property {++index}</td>
					))}</tr>
				))}</tbody>
			</table>
			<div className = 'row a-i-c'>
				<div className = 'col-10'>
					<div ref = {component} className = 'p-5 bg-danger'></div>
				</div>
			</div>
			<div className = 'bg-warning vh-100'>
			</div>
		</section>
	)
}