import { Bell, Calendar, Plus, User } from "lucide-react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import { formatDate } from '@fullcalendar/core';


const handleNovoAgendamento = () => {
    alert("abrir agendamento")
}

export default function Agenda() {

    // trata a situação de celular
    const isMobile = window.innerWidth < 768;

    // formatando o nome do dia da semana que fica no cabeçalho da agenda
    const customDayHeaderContent = (arg) => {

        // formata a data
        const formattedDate = arg.date.toLocaleDateString('pt-BR', {
            weekday: isMobile ? 'short' : 'long',
            day: '2-digit',
            month: '2-digit'
        });
        // Ajusta para ter apenas a primeira letra maiúscula
        const capitalizedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

        return (
            <div className="text-black">
                {capitalizedDate}
            </div>
        );
    };

    // dia atual
    const getCurrentTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

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
                    style={{ height: "750px" }}
                >
                    <FullCalendar
                        plugins={[timeGridPlugin]}
                        initialView="timeGridWeek"
                        weekends={true}
                        locale={"pt-BR"}
                        headerToolbar={{
                            left: 'prev, next today',
                            center: 'title',
                            right: 'timeGridWeek, timeGridDay',
                        }}
                        allDaySlot={false}
                        buttonText={{
                            today: 'Hoje',
                            week: 'Semana',
                            day: 'Dia'
                        }}
                        // customizações
                        dayHeaderContent={customDayHeaderContent}
                        dayHeaderClassNames={"text-black"}
                        // indicador do horário atual
                        nowIndicator={true}
                        // formatando a hora que fica na esquerda da agenda
                        slotLabelFormat={{ hour: '2-digit', minute: '2-digit', hour12: false }}
                        // ao carregar a pagina, posiciona a tela no horario atual
                        scrollTime={getCurrentTime}
                        height={"100%"}


                    />

                </Col>
            </Row>
        </Container>
    );
}