import { Vector2 } from 'three'
export const downkeys = new Map();
const ySpeed: number = 0.01
const xSpeed: number = 0.01

export function initializeInput() {
	document.addEventListener('keydown', (event) => {
		downkeys.set(event.key, true)
	})

	document.addEventListener('keyup', (event) => {
		downkeys.set(event.key, false)
	})
}

export function checkInputs(): Vector2 {

	var v: Vector2 = new Vector2(0, 0)
	if (downkeys.get('w') == true) {
		v.y += 1.0
	}
	if (downkeys.get('s') == true) {
		v.y += -1.0
	}
	if (downkeys.get('d') == true) {
		v.x += 1.0
	}
	if (downkeys.get('a') == true) {
		v.x += -1.0
	}
	
	return v
};
