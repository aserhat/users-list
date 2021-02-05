import getUsers from "./hooks/getUsers";
import Users from "./components/users";
import { useState } from "react";
import { Container, Row, Col } from "react-flexybox";
import styled from "styled-components";

const SearchLabel = styled.label`
  margin-right: 5px;
`;

const ColorBar = styled.div`
  background-color: #7f0000;
  height: 15px;
`;

const PageHeader = styled.div`
  background-color: #b71c1c;
  display: flex;
`;
const PageTitle = styled.h1`
  width: 100%;
  text-align: center;
  color: #ffffff;
`;

export default function DataLoader(props) {
  const [filter, setFilter] = useState("");
  const { filterUsers, firstNames, lastNames } = getUsers(
    "https://jsonplaceholder.typicode.com/users",
    filter
  );

  const handleSearch = (event) => {
    if (event.target.value === "Select a name") {
      setFilter("");
    } else {
      setFilter(event.target.value);
    }
  };

  return (
    <Container fluid={true}>
      <Row>
        <Col flex={12}>
          <ColorBar></ColorBar>
        </Col>
      </Row>

      <Row center={true}>
        <Col flex={12} alignSelf="center">
          <PageHeader>
            <PageTitle>User List</PageTitle>
          </PageHeader>
        </Col>
      </Row>

      <Row center={true} gutter="5">
        <Col flex={4} md={6} xs={12}>
          <center>
            <SearchLabel htmlFor="search">Search by Name: </SearchLabel>
            <input
              name="search"
              width="100%"
              value={filter}
              onChange={handleSearch}
            />
          </center>
        </Col>
        <Col flex={4} md={6} xs={12}>
          <center>
            <SearchLabel htmlFor="firstNames">By First Name: </SearchLabel>
            <select name="firstNames" onChange={handleSearch} value={filter}>
              <option>Select a name</option>
              {firstNames.map((firstName) => (
                <option key={firstName}>{firstName}</option>
              ))}
            </select>
          </center>
        </Col>
        <Col flex={4} md={6} xs={12}>
          <center>
            <SearchLabel htmlFor="lastNames">By Last Name: </SearchLabel>
            <select name="lastNames" onChange={handleSearch} value={filter}>
              <option>Select a name</option>
              {lastNames.map((lastName) => (
                <option key={lastName}>{lastName}</option>
              ))}
            </select>
          </center>
        </Col>
      </Row>

      <Users data={filterUsers} />
    </Container>
  );
}
