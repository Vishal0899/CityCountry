import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCountry } from "../Redux/City-Country/action";

export const AddCountry = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCountry({ name: name }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Country Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" value="Add Country" />
      </form>
    </div>
  );
};
