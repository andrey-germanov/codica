import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { IncorrectCityAlert } from "../../IncorrectCityAlert";
import { IWeatherCity } from "../../../store/typeStore";

interface IProps {
  weather?: IWeatherCity[];
  RefreshWeather: (lat: number, lon: number, name: string) => void;
  RemoveCity: (name: string) => void;
  AddCity: (name: string) => void;
}

export const WeatherListComp = ({
  weather,
  RefreshWeather,
  RemoveCity,
  AddCity,
}: IProps) => {
  const [inputNewCity, setInputNewCity] = useState("");
  const [typeError, setTypeError] = useState(false);

  const addCity = () => {
    if (inputNewCity.length <= 2) return;

    const validation: RegExpMatchArray | null =
      inputNewCity.match(/^[А-Яа-яЁё -]+$/g);
    if (validation !== null) return setTypeError(true);

    setTypeError(false);
    AddCity(inputNewCity); // 1
    setInputNewCity("");
  };
  const handlerInputNewCity = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputNewCity(e.target.value);

  const handlerRefreshWeather = (
    lat: number,
    lon: number,
    name: string,
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    RefreshWeather(lat, lon, name);
  };

  const handlerRemoveCity = (
    name: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    RemoveCity(name);
  };
  return (
    <div id="WeatherListComp">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          padding: "20px 0",
        }}
      >
        <IncorrectCityAlert />
        <TextField
          error={typeError}
          id="outlined-basic"
          label="Type City"
          variant="outlined"
          value={inputNewCity}
          onChange={handlerInputNewCity}
        />
        <Button id="addCity" variant="contained" size="large" onClick={addCity}>
          add city
        </Button>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          {process.env.REACT_APP_API_MODE === "mock"
            ? "mock data"
            : "real data"}
        </Typography>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {weather && weather.map((city, key) => {
          if (!city.value) return;
          return (
            <Link
              to={`${city.name}`}
              style={{ textDecoration: "none" }}
              key={key}
              id={city.name}
            >
              <Card
                sx={{ minWidth: 275 }}
                style={{
                  backgroundColor: "#99c3f8",
                }}
                key={key}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 18 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {city.name}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {city.value.weather[0].main}
                  </Typography>
                  <Typography variant="body2">
                    Temperature: {city.value.main.temp}ºС
                  </Typography>
                  <Typography variant="body2">
                    Feels like: {city.value.main.feels_like}ºC
                  </Typography>
                  <img
                    src={`http://openweathermap.org/img/wn/${city.value.weather[0].icon}@2x.png`}
                    alt={city.value.weather[0].description}
                  />
                </CardContent>
                <CardActions
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    id="button"
                    variant="text"
                    onClick={(e) => handlerRemoveCity(city.name, e)}
                  >
                    delete city
                  </Button>
                  <RefreshIcon
                    onClick={(e) =>
                      handlerRefreshWeather(
                        city.value.coord.lat,
                        city.value.coord.lon,
                        city.name,
                        e
                      )
                    }
                    style={{ cursor: "pointer" }}
                  />
                </CardActions>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
