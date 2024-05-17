import { Bell, Calendar, User } from "lucide-react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "./components/Header";


const handleNovoAgendamento = () => {
  alert("abrir agendamento")
}

export default function App() {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#1a1713" }}
    >
      <Header/>
    </Container>
  );
}
