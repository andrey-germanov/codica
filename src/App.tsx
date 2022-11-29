import React from 'react';
import { WeatherList } from "./components/WeatherList";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { WeatherCity } from "./components/WeatherCity";

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WeatherList />} />
          <Route path="/:name" element={<WeatherCity />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
