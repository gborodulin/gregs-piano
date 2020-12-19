import React from 'react';
import noteIcon from './images/musical-note.svg';
import anime from 'animejs/lib/anime.es.js';

export default class RandomNoteLayer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			top: 0,
			left: 0,
		};
	}

	componentDidUpdate(prevProps) {
		if (prevProps.activeKeyList < this.props.activeKeyList) {
			this.setState({
				top: Number((Math.random() * 60).toFixed(0)),
				left: Number((Math.random() * 80 + 1).toFixed(0)),
			});

			anime({
				targets: '.lilNote',
				opacity: 1,
				duration: 700,
				direction: 'alternate',
				easing: 'easeInOutQuad',
			});

			anime({
				targets: '.lilNote',
				translateY: 300,
				duration: 2000,
				easing: 'easeInOutQuad',
				direction: 'reverse',
			});
		}
	}

	render() {
		console.log(this.state.top, this.state.left);
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
				<img
					className='lilNote'
					src={noteIcon}
					style={{
						height: '100px',
						position: 'absolute',

						top: `${this.state.top}%`,
						left: `${this.state.left}%`,
						opacity: '0',
					}}
					alt='note'
				/>
			</div>
		);
	}
}
