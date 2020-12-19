import { useEffect, useState } from 'react';
import './Keyboard.css';
import keyList from './keyList';

function Keyboard(props) {
	const { activeKeyList } = props;
	const [keyComponents, setKeyComponents] = useState([]);

	useEffect(() => {
		let newComponents = [];
		keyList.forEach((cur) => {
			const keyColor = cur.originalClasses.split(' ')[0];

			const activeClass = activeKeyList.includes(cur.keyCode)
				? `active${keyColor}`
				: '';

			newComponents.push(
				<li className={`${activeClass} ${cur.originalClasses}`}></li>
			);
		});
		setKeyComponents(newComponents);
	}, [activeKeyList]);

	return (
		<div className='background'>
			<div className='keyboardContainer'>
				<ul className='set'>{keyComponents}</ul>
			</div>
		</div>
	);
}

export default Keyboard;
