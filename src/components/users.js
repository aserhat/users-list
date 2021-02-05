import styled from "styled-components";
import { Row, Col } from "react-flexybox";
import ContactMailTwoToneIcon from "@material-ui/icons/ContactMailTwoTone";

const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  background-color: #ffffff;
  margin-bottom: 5px;
  height: 100%;
  line-height: 1.5;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
`;
const CardBody = styled.div`
  padding: 1.25rem;
`;
const CardTitle = styled.h5`
  margin-bottom: -0.275rem;
  margin-top: -0.275rem;
`;
const CardSubTitle = styled.h6`
  margin-top: -0.275rem;
  margin-bottom: -0.275rem;
  font-weight: 500;
  font-size: 1rem;
`;
const Users = ({ data }) => {
  return (
    <Row fill={true}>
      {data.map((user) => (
        <Col flex={4} sm={6} xs={12} key={user.id}>
          <Card>
            <CardBody className="card-body">
              <CardTitle>
                <ContactMailTwoToneIcon></ContactMailTwoToneIcon>
              </CardTitle>
              <CardSubTitle>Name: {user.name}</CardSubTitle>
              <CardSubTitle>Username: {user.username}</CardSubTitle>
              <CardSubTitle>Email: {user.email}</CardSubTitle>
              <CardSubTitle>Phone: {user.phone}</CardSubTitle>
              <CardSubTitle>Website: {user.website}</CardSubTitle>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Users;
