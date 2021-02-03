import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-flexybox";

const CardWrapper = styled.div`
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: transparent;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  height: 100%;
`;
const Card = styled.div`
    border:1px solid rgba(0,0,0,.125);
    border-radius:.50rem-ms-flex-direction:column;
    border:1px solid rgba(0,0,0,.125);
    border-radius:.50rem;
    background-color: #ffffff;
    margin-bottom: 5px;
    height: 100%;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";
`;
const CardBody = styled.div`
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
`;
const CardTitle = styled.h5`
  margin-bottom: 0.5rem;
  margin-top: -0.275rem;
  font-family: inherit;
  font-weight: 500;
  color: inherit;
  font-size: 1.25rem;
`;
const CardSubTitle = styled.h6`
  margin-top: -0.275rem;
  margin-bottom: -0.275rem;
  font-family: inherit;
  font-weight: 500;
  color: inherit;
  font-size: 1rem;
`;
const Users = ({ data }) => {
  return (
    <Row fill={true}>
      {data.map((user) => (
        <Col flex={4} sm={6} xs={12} key={user.id}>
          <CardWrapper>
            <Card>
              <CardBody className="card-body">
                <CardTitle>Name: {user.name}</CardTitle>
                <CardSubTitle>Username: {user.username}</CardSubTitle>
                <CardSubTitle>Email: {user.email}</CardSubTitle>
              </CardBody>
            </Card>
          </CardWrapper>
        </Col>
      ))}
    </Row>
  );
};

export default Users;
