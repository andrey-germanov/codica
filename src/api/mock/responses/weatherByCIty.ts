export const mockWeatherByCity = (name: string, lat: number, lon: number) => {
  const mockWeather = {
    name,
    value: {
      coord: {
        lon,
        lat,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10d",
        },
      ],
      base: "stations",
      main: {
        temp: 999,
        feels_like: 999,
        temp_min: 999,
        temp_max: 999,
        pressure: 1015,
        humidity: 64,
        sea_level: 1015,
        grnd_level: 933,
      },
      visibility: 10000,
      wind: {
        speed: 0.62,
        deg: 349,
        gust: 1.18,
      },
      rain: {
        "1h": 3.16,
      },
      clouds: {
        all: 100,
      },
      dt: 1661870592,
      sys: {
        type: 2,
        id: 2075663,
        country: "IT",
        sunrise: 1661834187,
        sunset: 1661882248,
      },
      timezone: 7200,
      id: 3163858,
      name: "Zocca",
      cod: 200,
    },
  };
  return mockWeather;
};
