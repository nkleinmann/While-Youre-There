import React from "react";
// import JumboSection from "../components/jumbotron/Jumbotron.jsx";
import UserForm from "../components/form/UserForm.jsx";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";

function UserInfo() {
    return (
        <Container>
            {/* <JumboSection
                title="While You're There"
                imageSrc="https://static.thenounproject.com/png/1700380-200.png"
                altText="shopping cart"
            /> */}
            <Row >
                <Col sm="12">
                    <UserForm />
                </Col> 
            </Row>

        </Container>
    )
}

export default UserInfo;