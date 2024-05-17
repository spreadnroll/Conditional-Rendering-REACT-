import { AlertClock } from "./Alertclock";
import { Clock } from "./Clock";
import { CounterDisplay } from "./CounterDisplay";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Message } from "./Message";
import { MouseClicker } from "./MouseClickerHANDLINGEVENTS";
import { MyControlledForm } from "./MyControlledForm";
import { MyUncontrolledLogin } from "./MyUncontrolledLogin";
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

      <MyControlledForm />

      <MyUncontrolledLogin />

      
    </div>
  );
}
