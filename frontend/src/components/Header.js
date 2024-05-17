import { Bell, Calendar, User } from "lucide-react";
import { Button, Col, Row } from "react-bootstrap";

export default function Header() {
    return (


        <Row className="justify-content-between p-2">
            <Col>
                logo
            </Col>
            <Col
                md="auto"
                className="d-flex gap-3"
            >
                <Button
                    variant="outline-light"
                >
                    <Calendar />
                </Button>
                <Button
                    variant="outline-light"
                >
                    <Bell />
                </Button>
                <Button
                    variant="outline-light"
                >
                    <User />
                </Button>
            </Col>

        </Row>


    )
}