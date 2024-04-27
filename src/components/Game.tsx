import { useEffect, useState } from 'react';

export const Game = () => {
	const [startTime, setStartTime] = useState(0);

	const [countReaction, setCountReaction] = useState(false);
	const [isResultReady, setIsResultReady] = useState(false);
	const [result, setResult] = useState(0);

	const randomTime = Math.ceil(Math.random() * 5000) + 1000;

	useEffect(() => {
		setTimeout(() => {
			setCountReaction(true);
			setStartTime(new Date().getTime());
		}, randomTime);
	}, []);

	const handleClick = () => {
		if (isResultReady) return;
		const endTime = new Date().getTime();
		const result = endTime - startTime;
		setResult(result);
		setIsResultReady(true);
	};
	const handleRestart = () => {
		setCountReaction(false);
		setIsResultReady(false);
		setResult(0);
		setTimeout(() => {
			setCountReaction(true);
			setStartTime(new Date().getTime());
		}, randomTime);
	};
	return (
		<>
			<div
				onClick={handleClick}
				className={`h-screen w-screen pt-10 text-center text-4xl bg-red-600 ${countReaction && 'bg-teal-900'}`}
			>
				{!countReaction && <h1>FOCUS</h1>}
				{countReaction && (
					<>
						<h1>click</h1>
						{isResultReady && (
							<div>
								<p className='pt-80 text-7xl'>{result} Miliseconds</p>
								<button
									onClick={handleRestart}
									className='mt-8 rounded-md border-4 border-black py-1.5 px-3'
								>
									try again
								</button>
							</div>
						)}
					</>
				)}
			</div>
		</>
	);
};
