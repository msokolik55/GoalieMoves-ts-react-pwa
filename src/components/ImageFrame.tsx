import { useEffect, useState, useRef } from "react";
import {
	MdNorth,
	MdSouth,
	MdEast,
	MdWest,
	MdNorthEast,
	MdNorthWest,
	MdSouthEast,
	MdSouthWest,
} from "react-icons/md";

function ImageFrame() {
	const [ticks, setTicks] = useState(3000);
	const ticksInput = useRef<HTMLInputElement>(null);

	const moves = [
		<MdNorth />,
		<MdSouth />,
		<MdEast />,
		<MdWest />,
		<MdNorthEast />,
		<MdNorthWest />,
		<MdSouthEast />,
		<MdSouthWest />,
	];
	const [moveID, setMoveID] = useState(0);

	const moveTypes = ["H", "F", "V", "L"];
	const [moveTypeID, setMoveTypeID] = useState(0);

	const randomID = (length: number) => {
		return Math.floor(Math.random() * length);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setMoveID(randomID(moves.length));
			setMoveTypeID(randomID(moveTypes.length));
		}, ticks);

		return () => clearInterval(interval);
	}, [ticks, moves.length, moveTypes.length]);

	const handleChange = () => {
		if (ticksInput.current === null) return;

		const value = ticksInput.current.value;
		setTicks(Number(value) * 1000);
	};

	return (
		<>
			<p>Interval: {ticks / 1000} s</p>
			<input
				type="range"
				ref={ticksInput}
				min="1"
				max="10"
				value={ticks / 1000}
				onChange={handleChange}
			/>

			<div className="flex-container">
				<div className="flex-child">
					<div className="flex-child-type">
						{moveTypes[moveTypeID]}
					</div>
				</div>
				<div className="flex-child">
					<div className="flex-child-direction">{moves[moveID]}</div>
				</div>
			</div>
		</>
	);
}

export default ImageFrame;
