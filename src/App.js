import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Title from "./components/Title";
import { data, data2 } from "./data";

function App() {
  return (
    <div>
      {data.map((d) => {
        return (
          <div style={{ margin: 100 }}>
            <Title name={d.name} color={d.color} />
            <Title name={d.name} color={d.color} />
            <Title name={d.name} color={d.color} />
          </div>
        );
      })}

      {data2.map((d) => {
        return (
          <div style={{ margin: 100 }}>
            <Title name={d.name} color={d.color} />
            <Title name={d.name} color={d.color} />
            <Title name={d.name} color={d.color} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
