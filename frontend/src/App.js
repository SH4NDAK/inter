import { Bell, Calendar, Plus, User } from "lucide-react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "./components/Header";

const handleNovoAgendamento = () => {
  alert("abrir agendamento")
}

export default function App() {
  return (
    <Container
      fluid
    >
      <Header />
      <Row className="justify-content-center">
        <Col md="auto">
          <h1>Agenda</h1>
        </Col>

      </Row>
      <Row className="p-2 justify-content-center">
        <Col md="auto">
          <Button
            variant="outline-dark"
            onClick={handleNovoAgendamento}
          >
            <Plus className="me-1" /> Novo agendamento
          </Button>
        </Col>
      </Row>
      <Row 
        className="justify-content-between"
      >
        <Col md={3}></Col>
        <Col 
          md={9}
          style={{backgroundColor: "#f2f2f0"}}
        >
          teste
        </Col>
      </Row>
    </Container>
  );
}
