import React from 'react';
import noteIcon from './images/musical-note.svg';
import anime from 'animejs/lib/anime.es.js';

export default class RandomNoteLayer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			newNotes: [
				<img
					className={'lilNote'}
					src={noteIcon}
					style={{
						height: '100px',
						position: 'absolute',
						top: `${Number((Math.random() * 60).toFixed(0))}%`,
						left: `${Number((Math.random() * 80 + 1).toFixed(0))}%`,
						opacity: '0',
					}}
					alt='note'
				/>,
			],
		};
	}

	makeid(length) {
		var result = '';
		var characters =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for (var i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}

	componentDidUpdate(prevProps) {
		if (prevProps.activeKeyList < this.props.activeKeyList) {
			const randomClass = this.makeid(5);

			const lilNote = 'lilNote';

			const newNotesRaw = (
				<img
					className={lilNote}
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

			this.setState({ newNotes: [newNotesRaw] });

			anime({
				targets: `.${lilNote}`,
				opacity: [0, 1],
				duration: 300,
				direction: 'alternate',
				easing: 'easeInOutQuad',
				translateY: [0, -20],
			});
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
