const dn = {

	ellipse(posVec, size = 20) {
		ellipse(posVec.x, posVec.y, size);
	},
	line(a, b) {
		line(a.x, a.y, b.x, b.y);
	},
	p(pct) {
		return (CANVAS_SIZE * pct) / SUBDIVISIONS;
	},
	hslToHex(col) {
		console.log(col)
		let h = col.levels[0]
		let s = col.levels[1]
		let l = col.levels[2]
		l /= 100;
		const a = s * Math.min(l, 1 - l) / 100;
		const f = n => {
			const k = (n + h / 30) % 12;
			const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
			return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
		};
		return `#${f(0)}${f(8)}${f(4)}`;
	}
	
}
