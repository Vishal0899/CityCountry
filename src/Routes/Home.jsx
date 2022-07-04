import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCity } from "../Redux/City-Country/action";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCity());
  }, []);
  const data = useSelector((state) => state.reducerStore.city);

  console.log(data);
  return (
    <div>
      <div>
        <Link to="add-city">
          <button>Add City</button>
        </Link>
        <Link to="add-country" >
          <button>Add Country</button>
        </Link>
      </div>
      <TableContainer>
        <Table variant="striped" colorScheme="red">
          <Thead>
            <Tr>
              <Th>id</Th>
              <Th>Country</Th>
              <Th>City</Th>
              <Th>Population</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((elem) => (
              <Tr>
                <Td>{elem.id}</Td>
                <Td>{elem.country}</Td>
                <Td>{elem.name}</Td>
                <Td>{elem.population}</Td>
                <Td>Edit</Td>
                <Td>Delete</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};
