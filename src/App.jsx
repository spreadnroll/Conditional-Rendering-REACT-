import { AlertClock } from "./Alertclock";
import { Clock } from "./Clock";
import { CounterDisplay } from "./CounterDisplay";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Message } from "./Message";
import { MouseClicker } from "./MouseClicker";
import { MyForm } from "./MyForm";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Hello />
      <Message />
      <hr />
      <Welcome name="Greg" age={30} />

      <AlertClock />

      <CounterDisplay />

      <Clock />
      <MouseClicker />


      <InteractiveWelcome />

      <MyForm />

      
    </div>
  );
}
