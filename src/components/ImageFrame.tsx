import React, { useEffect, useState, useRef } from "react";

// enum directions {
// 	left,
// 	right,
// 	up,
// 	down
// }

function ImageFrame() {
	const [ticks, setTicks] = useState(3000);
	const ticksInput = useRef<HTMLInputElement>(null);

	const handleChange = () => {
		if (ticksInput.current !== null) {
			const value = ticksInput.current.value;
			setTicks(Number(value) * 1000);
		}
	};

	const moves = ["<", ">", "^", "v"];
	const [moveID, setMoveID] = useState(0);

	const moveTypes = ["H", "F", "W", "L"];
	const [moveTypeID, setMoveTypeID] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setMoveID(Math.floor(Math.random() * moves.length));
			setMoveTypeID(Math.floor(Math.random() * moveTypes.length));
		}, ticks);
		return () => clearInterval(interval);
	}, [ticks, moves.length, moveTypes.length]);

	return (
		<>
			<p>Interval: {ticks / 1000} s</p>
			<input
				type="range"
				ref={ticksInput}
				min="1"
				max="10"
				value={ticks / 1000}
				onChange={() => handleChange()}
			/>

			<div
				style={{
					fontSize: "15em",
					display: "flex",
					width: "100%",
					flexDirection: "column"
				}}>
				<div style={{ height: "1em" }}>{moveTypes[moveTypeID]}</div>
				<div>{moves[moveID]}</div>

				{/* <div
					style={{
						display: "flex",
						justifyContent: "center",
						height: ".5em"
					}}>
					<>{moveID === directions.up && moves[moveID]}</>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						height: ".6em"
					}}>
					<>{moveID === directions.left && moves[moveID]}</>
					<>{moveTypes[moveTypeID]}</>
					<>{moveID === directions.right && moves[moveID]}</>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						height: ".5em"
					}}>
					<>{moveID === directions.down && moves[moveID]}</>
				</div> */}
			</div>
		</>
	);
}

export default ImageFrame;
