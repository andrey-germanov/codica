import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Divider, ListItemText, ListItem, List } from "@mui/material";
import { weatherSelector } from "../../store/selectors";

export const WeatherCity = () => {
  const { name } = useParams<string>();
  const weather = useSelector(weatherSelector);

  const filtered = weather.filter((city) => city.name === name);
  return (
    <div id="#WeatherCity">
      {filtered.map((city, key) => {
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
