import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { removeIncorrectCityAction } from "../../store/actions";
import { incorrectSelector } from "../../store/selectors";
import { IncorrectCityAlertComp } from "./comp";

export const IncorrectCityAlert = () => {
  const [showIncorrectCity, setShowIncorrectCity] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const incorrectCity = useSelector(incorrectSelector);

  useEffect(() => {
    if (!incorrectCity) return;
    setShowIncorrectCity(true);
    const timeId = setTimeout(() => {
      setShowIncorrectCity(false);
      dispatch(removeIncorrectCityAction());
    }, 2000);

    return () => {
      clearTimeout(timeId);
    };
  }, [incorrectCity]);

  if (!showIncorrectCity) return <></>;

  return <IncorrectCityAlertComp incorrectCity={incorrectCity} />;
};
