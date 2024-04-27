import { useState } from 'react';
import { Game } from './components/Game';

function App() {
	const [gameOn, setGameOn] = useState(false);

	return (
		<>
			{!gameOn && (
				<div className='h-screen w-screen bg-gray-700 flex flex-col justify-center items-center '>
					<h1 className='text-red-600 text-3xl '>reaction time test</h1>
					<button className='mt-6 text-6xl' onClick={() => setGameOn(true)}>start</button>
				</div>
			)}
			{gameOn && <Game />}
		</>
	);
}

export default App;
