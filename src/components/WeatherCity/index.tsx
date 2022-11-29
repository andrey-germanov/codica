import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Divider, ListItemText, ListItem, List } from "@mui/material";
import axios from "axios";
import { IWeatherCity } from "../../store/typeStore";

export const WeatherCity = () => {
  const { name } = useParams<string>();

  const [city, setCity] = useState<IWeatherCity[]>();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    if (!name) return;
    const apiKey = "5a808fd62f78702c87130a6f46054a30";

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`,
        { signal }
      )
      .then((res) => {
        const data = [{ name: name, value: res.data }]
        setCity(data);
      })
      .catch((err) => console.log(err));
    return () => {
      controller.abort();
    };
  }, [name]);

  return (
    <div data-testid="WeatherCity">
      {city && city.map((city, key) => {
        return (
          <List
            sx={{
              width: "100%",
              bgcolor: "#99c3f8",
            }}
            key={key}
          >
            <ListItem>
              <ListItemText
                primary={`City: ${city.name}ºС`}
                secondary={`Temperature: ${city.value.main.temp}ºС `}
              />
              <img
                width={60}
                src={`http://openweathermap.org/img/wn/${city.value.weather[0].icon}@2x.png`}
                alt={city.value.weather[0].description}
              />
            </ListItem>
            <Divider />

            <ListItem>
              <ListItemText
                primary={city.value.weather[0].main}
                secondary={city.value.weather[0].description}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary={`Feels like: ${city.value.main.feels_like}ºС`}
                secondary={`Min: ${city.value.main.temp_min}ºС Max:
                    ${city.value.main.temp_max}ºС`}
              />
            </ListItem>
            <Divider />

            <ListItem>
              <ListItemText
                primary={`Humidity: ${city.value.main.humidity}%`}
              />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary={`Pressure: ${city.value.main.pressure}`} />
            </ListItem>
          </List>
        );
      })}
    </div>
  );
};
