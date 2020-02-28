import React from "react";
import styled from "@emotion/styled";

import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  const App = styled.div`
    margin: 0 auto;
    color: white;
  `;
  return (
    <App>
      <WeatherCard temp={30} />
      <WeatherCard temp={20} />
      <WeatherCard temp={-20} />
    </App>
  );
}

export default App;
