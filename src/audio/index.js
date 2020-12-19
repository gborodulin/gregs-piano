import { Howl, Howler } from 'howler';
import allNotes from './allNotes.mp3';

var piano = new Howl({
	src: [allNotes],
	sprite: {
		65: [0, 10000],
		87: [10000, 10000],
		83: [20000, 10000],
		69: [30000, 10000],
		68: [40000, 10000],
		70: [50000, 10000],
		84: [60000, 10000],
		71: [70000, 10000],
		89: [80000, 10000],
		72: [90000, 10000],
		85: [100000, 10000],
		74: [110000, 10000],
		75: [120000, 10000],
	},
});

let activeNotes = {};

export function playNote(keyCode) {
	if (piano._sprite[keyCode]) {
		activeNotes[keyCode] = piano.play([keyCode]);
	}
}

export function stopNote(keyCode) {
	piano.fade(1, 0, 300, activeNotes[keyCode]);
}
