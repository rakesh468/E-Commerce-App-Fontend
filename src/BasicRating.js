import React from "react";
import Rating from "@mui/material/Rating";
import { useState } from "react";

export function BasicRating() {
  const [value, setValue] = useState(0);
  return (
    <Rating
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
}
