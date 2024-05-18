import { Bell, Calendar, Plus, User } from "lucide-react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import { formatDate } from '@fullcalendar/core';

export default function Agenda() {

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
                <Col
                    md={12}
                >
                    <FullCalendar
                        plugins={[timeGridPlugin]}
                        initialView=""
                        weekends={true}
                        locale={"pt-BR"}
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'timeGridWeek,timeGridDay'
                        }}
                        allDaySlot={false}
                        buttonText={{
                            today: 'Hoje',
                            week: 'Semana',
                            day: 'Dia'
                        }}
                        day
                    />

                </Col>
            </Row>
        </Container>
    );
}