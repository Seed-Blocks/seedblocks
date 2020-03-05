import { system } from "../parser";

const theme = {
	colors: {
		primary: "rebeccapurple",
		secondary: "papayawhip"
	},
	fontSize: [0, 4, 8, 16]
};

const parser = system({
	color: {
		property: "color",
		scale: "colors"
	},
	fontSize: true
});

test("uses default breakpoints", () => {
	const styles = parser({
		theme,
		fontSize: [1, 2, 3],
		color: ["primary", null, "secondary"]
	});
	expect(styles).toEqual({
		color: "rebeccapurple",
		fontSize: 4,
		"@media screen and (min-width: 576px)": {
			fontSize: 8
		},
		"@media screen and (min-width: 768px)": {
			fontSize: 16,
			color: "papayawhip"
		}
	});
});

// Per default, we expect it to be impossible to override breakpoints
test("does *not* use dynamically changed breakpoints", () => {
	const styles = parser({
		theme: { ...theme, breakpoints: ["500px", "700px", "900px", "1100px"] },
		fontSize: [1, 2, 3],
		color: ["primary", null, "secondary"]
	});
	expect(styles).toEqual({
		color: "rebeccapurple",
		fontSize: 4,
		"@media screen and (min-width: 576px)": {
			fontSize: 8
		},
		"@media screen and (min-width: 768px)": {
			fontSize: 16,
			color: "papayawhip"
		}
	});
});

// With caching disabled, we expect it to be possible to change breakpoints
test("uses dynamically changed breakpoints", () => {
	const firstStyles = parser({
		theme: {
			...theme,
			breakpoints: ["11em", "22em", "33em"],
			disableStyledSystemCache: true
		},
		fontSize: [1, 2, 3],
		color: ["primary", null, "secondary"]
	});
	expect(firstStyles).toEqual({
		color: "rebeccapurple",
		fontSize: 4,
		"@media screen and (min-width: 11em)": {
			fontSize: 8
		},
		"@media screen and (min-width: 22em)": {
			fontSize: 16,
			color: "papayawhip"
		}
	});

	const secondStyles = parser({
		theme: {
			...theme,
			breakpoints: ["9em", "8em", "7em"],
			disableStyledSystemCache: true
		},
		fontSize: [1, 2, 3],
		color: ["primary", null, "secondary"]
	});
	expect(secondStyles).toEqual({
		color: "rebeccapurple",
		fontSize: 4,
		"@media screen and (min-width: 9em)": {
			fontSize: 8
		},
		"@media screen and (min-width: 8em)": {
			fontSize: 16,
			color: "papayawhip"
		}
	});

	const thirdStyles = parser({
		theme,
		fontSize: [1, 2, 3],
		color: ["primary", null, "secondary"]
	});
	expect(thirdStyles).toEqual({
		color: "rebeccapurple",
		fontSize: 4,
		"@media screen and (min-width: 9em)": {
			fontSize: 8
		},
		"@media screen and (min-width: 8em)": {
			fontSize: 16,
			color: "papayawhip"
		}
	});
});
