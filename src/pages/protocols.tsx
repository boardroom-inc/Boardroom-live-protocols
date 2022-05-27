import { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import {
  Tag,
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
import Navbar from "../components/Navbar";
import SimpleNavbar from "../components/SimpleNavbar";

export default function Protocols() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.boardroom.info/v1/protocols")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  console.log(data);
  console.log(typeof data);
  return (
    <div>
      <SimpleNavbar/>
      <TableContainer>
        <Table variant="simple" colorScheme="blue">
          <TableCaption>All Boardroom Live Protocols</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Type</Th>
              <Th>Category</Th>
              <Th>Live?</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((ele) => {
              return (
                <Tr key={ele.cname}>
                  <Td>{ele.name}</Td>
                  <Td>{ele.type}</Td>
                  <Td>{ele.categories}</Td>
                  <Td>{ele.isEnabled ? <Tag colorScheme='green'>Enabled</Tag> : <Tag colorScheme='red'>Disabled</Tag>}</Td>
                </Tr>
              );
            })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Name</Th>
              <Th>Type</Th>
              <Th>Category</Th>
              <Th>Live?</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
}
