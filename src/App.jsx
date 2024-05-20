import { AlertClock } from "./Alertclock";
import { Clock } from "./Clock";
import { Color } from "./Color";
import { Colors } from "./Colors";
import { CounterDisplay } from "./CounterDisplay";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Message } from "./Message";
import { MouseClicker } from "./MouseClickerHANDLINGEVENTS";
import { MyControlledForm } from "./MyControlledForm";
import { MyList } from "./MyList";
import { MyUncontrolledLogin } from "./MyUncontrolledLogin";
import { Todolist } from "./Todolist";
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

      <MyList items={[
          { id: 1, name: "Jane", age: 20 },
          { id: 2, name: "Luke", age: 30 },
          { id: 3, name: "Saul", age: 40 },
          { id: 4, name: "Vince", age: 45 },
        ]} />

<Colors colors = {[
        {id: 1, name: 'red'},
        {id: 2, name: 'blue'},
        {id: 3, name: 'white'},
        {id: 4, name: 'yellow'},
      ]} />

      <Todolist initialTodos = {['Cook', 'Sleep', 'Play Music', 'Sport']} />
      
    </div>
  );
}
