import mock from "./mock"
import real from "./real"

export const api = 
process.env.REACT_APP_API_MODE === "mock" ? mock : real;
