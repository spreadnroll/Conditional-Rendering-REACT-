import { Hello } from './Hello'
import { Message } from './Message'
import { Welcome } from './Welcome'

export function App() {
	return (
		<div>
			<Hello />
			<Message />
			<hr />
			<Welcome name="Greg" age={30} />
			
		</div>
	)
}