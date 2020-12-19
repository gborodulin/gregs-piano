import React from 'react';
import noteIcon from './images/musical-note.svg';
import anime from 'animejs/lib/anime.es.js';

export default class RandomNoteLayer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			newNotes: [],
		};
	}

	componentDidUpdate(prevProps) {
		if (prevProps.activeKeyList < this.props.activeKeyList) {
			const randomClass =
				Math.random().toString(36).substring(2, 15) +
				Math.random().toString(36).substring(2, 15);

			console.log(typeof randomClass, 'type of', randomClass);

			const newNotesRaw = (
				<img
					className='lilNote'
					src={noteIcon}
					style={{
						height: '100px',
						position: 'absolute',
						top: `${Number((Math.random() * 60).toFixed(0))}%`,
						left: `${Number((Math.random() * 80 + 1).toFixed(0))}%`,
						opacity: '0',
					}}
					alt='note'
				/>
			);

			this.setState({ newNotes: newNotesRaw });

			anime({
				targets: '.lilNote',
				opacity: 1,
				duration: 500,
				direction: 'alternate',
				easing: 'easeInOutQuad',
				translateY: { value: -20 },
			});

			// anime({
			// 	targets: '.lilNote',
			// 	translateY: 300,
			// 	duration: 2000,
			// 	easing: 'easeInOutQuad',
			// 	direction: 'reverse',
			// });
		}
	}

	render() {
		return (
			<div
				className='randomNoteLayer'
				style={{
					background: 'transparent',
					position: 'fixed',
					top: '0',
					bottom: '0',
					left: '0',
					right: '0',
					zIndex: '100',
				}}>
				{this.state.newNotes}
			</div>
		);
	}
}
