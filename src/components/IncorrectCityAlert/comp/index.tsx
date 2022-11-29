import { Alert } from "@mui/material";
import React from "react";

type props = {
  incorrectCity: string;
};

export const IncorrectCityAlertComp = ({ incorrectCity }: props) => {
  return (
    <Alert
      severity="error"
      style={{
        position: "fixed",
        zIndex: "2",
      }}
    >
      incorrect city, it will not be added for your list cities:
      <b data-testid='incorrectCity'>{incorrectCity}</b>
    </Alert>
  );
};
