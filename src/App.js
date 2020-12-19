import { useState } from 'react';
import './App.css';
import Keyboard from './Keyboard';
import { playNote, stopNote } from './audio';

function App() {
	const [activeKeyList, setActiveKeyList] = useState([]);

	function handleKeyDown(e) {
		const keyCode = e.keyCode;
		const curList = [...activeKeyList];

		if (!curList.includes(keyCode)) {
			curList.push(keyCode);
			setActiveKeyList(curList);
			playNote(keyCode);
		}
	}

	function handleKeyUp(e) {
		const keyCode = e.keyCode;
		const curList = activeKeyList;

		if (curList.includes(keyCode)) {
			const newArr = curList.filter((cur) => cur !== keyCode);
			setActiveKeyList(newArr);
			stopNote(keyCode);
		}
	}

	return (
		<div
			className='App'
			onKeyDown={handleKeyDown}
			onKeyUp={handleKeyUp}
			tabIndex='0'>
			<Keyboard activeKeyList={activeKeyList} />
		</div>
	);
}

export default App;
