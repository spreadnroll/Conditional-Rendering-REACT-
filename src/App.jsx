import { useState } from "react";
import { AlertClock } from "./Alertclock";
import { Clock } from "./Clock";
import { Color } from "./Color";
import { Colors } from "./Colors";
import { Container } from "./Container";
import { CounterDisplay } from "./CounterDisplay";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Message } from "./Message";
import { MouseClicker } from "./MouseClickerHANDLINGEVENTS";
import { ControlledForm2 } from "./ControlledForm2";
import { MyList } from "./MyList";
import { MyUncontrolledLogin } from "./MyUncontrolledLogin";
import { Todolist } from "./Todolist";
import { Todolist2 } from "./Todolist2";
import { Welcome } from "./Welcome";
import { LanguageContext } from "./LanguageContext";
import { GithubUser } from "./GithubUser";
import { GithubUsers } from "./GithubUsers";

export function App() {
  const [language, setLanguage] = useState("en");

  function handleSetLanguage(event) {
    setLanguage(event.target.value);
  }

  return (
    <div>
      <select onChange={handleSetLanguage} value={language}>
        <option value={"it"}>IT</option>
        <option value={"en"}>EN</option>
      </select>

      <Container title={<h1>My Page to try</h1>}>
        <LanguageContext.Provider value={language}>
          <Hello />
          <Message />
          <hr />
          <Welcome name="Greg" age={30} />
          <GithubUser username="spreadnroll" />
          <GithubUsers />
          <AlertClock />
          <CounterDisplay />
          <Clock />
          <MouseClicker />
          <InteractiveWelcome />
          <ControlledForm2 />
          <MyUncontrolledLogin />
          <MyList
            items={[
              { id: 1, name: "Jane", age: 20 },
              { id: 2, name: "Luke", age: 30 },
              { id: 3, name: "Saul", age: 40 },
              { id: 4, name: "Vince", age: 45 },
            ]}
          />
          <Colors
            colors={[
              { id: 1, name: "red" },
              { id: 2, name: "blue" },
              { id: 3, name: "white" },
              { id: 4, name: "yellow" },
            ]}
          />
          <Todolist initialTodos={["Cook", "Sleep", "Play Music", "Sport"]} />
          <Todolist2 />
        </LanguageContext.Provider>
      </Container>
    </div>
  );
}