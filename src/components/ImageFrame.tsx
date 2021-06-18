import React, { useEffect, useState, useRef } from "react";
import {
	North,
	South,
	East,
	West,
	NorthEast,
	NorthWest,
	SouthEast,
	SouthWest
} from "@material-ui/icons";

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

	const moves = [
		<North />,
		<South />,
		<East />,
		<West />,
		<NorthEast />,
		<NorthWest />,
		<SouthEast />,
		<SouthWest />
	];
	const [moveID, setMoveID] = useState(0);

	const moveTypes = ["H", "F", "V", "L"];
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

			<div className="flex-container">
				<div className="flex-child">
					<div className="flex-child-type">{moveTypes[moveTypeID]}</div>
				</div>
				<div className="flex-child">
					<div className="flex-child-direction">{moves[moveID]}</div>
				</div>

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
