import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCity } from "../Redux/City-Country/action";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCity());
  },[])
  const data = useSelector(state => state.reducerStore.city);
  
  console.log(data)
  return (
    <div>
      <div>
        <Link to="add-city">
          <button>Add City</button>
        </Link>
        <Link to="add-country">
          <button>Add Country</button>
        </Link>
      </div>
      <div>
          <table>
            <thead>
              <th>id</th>
              <th>Country</th>
              <th>City</th>
              <th>Population</th>
              <th>Edit</th>
              <th>Delete</th>
            </thead>
            <tbody></tbody>
          </table>
      </div>
    </div>
  );
};
