import { Bell, Calendar, CloudUpload, Plus, User, X } from "lucide-react";
import { Button, Col, Container, FormControl, InputGroup, Modal, Row } from "react-bootstrap";
import Header from "../components/Header";
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import { formatDate } from '@fullcalendar/core';
import { useState } from "react";
import Label from "../components/Label";
import { useForm } from "react-hook-form";
import FormInput from "../components/FormInput";
import FormTextarea from "../components/FormTextarea";


export default function Agenda() {
    const [abrirModalAgendamento, setAbrirModalAgendamento] = useState(false);

    const handleNovoAgendamento = () => {
        setAbrirModalAgendamento(true)
    }

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

    // função que realiza o agendamento
    const onSubmit = (data) => {
        console.log(data);
    }

    // página da agenda
    return (
        <>
            <Container
                fluid
            >
                <Header />
                {
                    abrirModalAgendamento && (
                        <ModalAgendamento

                        />
                    )
                }
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
        </>
    );


    // modal do agendamento
    function ModalAgendamento() {
        const { register, formState, handleSubmit, setValue } = useForm()

        return (
            <Modal
                show={abrirModalAgendamento}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Calendar className="me-1" /> Novo agendamento
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Row>
                            <Col>
                                <FormInput
                                    obrigatorio={true}
                                    label="Nome do cliente"
                                    type="text"
                                    placeholder="Informe o nome do cliente"
                                    {...register("nome_cliente", { required: "Campo obrigatório*" })}
                                    errors={formState.errors.nome_cliente}

                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormInput
                                    obrigatorio={true}
                                    monetario={true}
                                    label="Valor"
                                    type="text"
                                    placeholder="Selecione um serviço"
                                    {...register("valor", { required: "Campo obrigatório*" })}
                                    errors={formState.errors.valor}
                                    inputMode="numeric"
                                    onChange={(e) => {

                                        // formatando o valor em dinheiro
                                        //pegando o valor atual 
                                        let valor = e.currentTarget.value;

                                        // removendo os caracteres não numéricos
                                        valor = valor.replace(/\D/g, '');

                                        // pegando o valor digitado em inteiro (dividindo por 100 pra tratar os centavos)
                                        valor = parseInt(valor, 10) / 100;

                                        // se o valor não é valido (não é um numero)
                                        if (isNaN(valor)) {
                                            // seta ele como vazio e não continua o código
                                            valor = '';
                                            e.currentTarget.value = valor;
                                            return;
                                        }

                                        // se ta tudo certo, formata o valor
                                        valor = valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

                                        // atualizando o campo do input com o valor
                                        e.currentTarget.value = valor;

                                        // definindo o valor do input como o novo valor e validando no useForm
                                        setValue("valor", e.currentTarget.value, { shouldValidate: true });
                                    }}
                                />
                            </Col>
                            <Col md={6}>
                                <FormInput
                                    obrigatorio={true}
                                    unidadeMedida="min"
                                    label="Duração"
                                    type="text"
                                    placeholder="Selecione um serviço"
                                    {...register("duracao", { required: "Campo obrigatório*" })}
                                    errors={formState.errors.duracao}
                                    inputMode="numeric"
                                    onChange={(e) => {
                                        // formatando o valor em tempo
                                        //pegando o valor atual 
                                        let duracao = e.currentTarget.value;

                                        // removendo os caracteres não numéricos
                                        duracao = duracao.replace(/\D/g, '');

                                        // se o duracao não é valido (não é um numero)
                                        if (isNaN(duracao)) {
                                            // seta ele como vazio e não continua o código
                                            duracao = '';
                                            e.currentTarget.value = duracao;
                                            return;
                                        }

                                        // atualizando o campo do input com o duracao
                                        e.currentTarget.value = duracao;

                                        // definindo o duracao do input como o novo duracao e validando no useForm
                                        setValue("duracao", e.currentTarget.value, { shouldValidate: true });
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormTextarea
                                    label="Observação (opcional)"
                                    {...register("observacao", {
                                        validate: value => {
                                            if (!!value && value.length < 3) {
                                                return "Informe pelo menos 3 caracteres";
                                            }
                                            return true;
                                        }
                                    })}
                                    errors={formState.errors.observacao}
                                />
                            </Col>
                        </Row>
                        <Row className="mt-4 justify-content-end gap-1">
                            <Col md="auto" sm={12}>
                                <Button
                                    type="button"
                                    variant="outline-secondary"
                                    onClick={() => { setAbrirModalAgendamento(false) }}
                                    className="w-100"
                                >
                                    <X /> Abandonar
                                </Button>
                            </Col>
                            <Col md="auto">
                                <Button
                                    type="submit"
                                    variant="outline-dark"
                                    className="w-100"
                                >
                                    <CloudUpload /> Agendar
                                </Button>
                            </Col>
                        </Row>
                    </form>
                </Modal.Body>
                <Modal.Footer />
            </Modal>
        )
    }


}
