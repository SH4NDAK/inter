import { Button, Col, Container, Row, Form } from "react-bootstrap";
import FormInput from "../components/FormInput";
import logo from "../img/logo.jpg";
import { DoorOpen, EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

export default function Cadastro() {

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Container fluid className="login-container d-flex justify-content-center align-items-center" style={{ backgroundColor: '#1a1814', height: '100vh' }}>
            <div className="login-box" style={{ backgroundColor: 'white', borderRadius: '15px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>
                <form>
                    <Row>
                        <Col md={"auto"} className="d-flex justify-content-center align-items-center">
                            <img src={logo} width={"75%"} height={"85%"} alt="logo" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div className="mb-3">
                                <FormInput
                                    label="Nome"
                                    obrigatorio={true}
                                    type="text"
                                    placeholder="digite seu nome"
                                />
                            </div>
                        
                            <div className="mb-3">
                                <FormInput
                                    label="Login"
                                    obrigatorio={true}
                                    type="text"
                                    placeholder="digite seu email ou número"
                                />
                            </div>

                            <div className="mb-3">
                                <FormInput
                                    label="Senha"
                                    obrigatorio={true}
                                    type={
                                        showPassword ? "text" : "password"
                                    }
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder="digite sua senha"
                                />
                                <Button variant="outline-dark" onClick={() => setShowPassword(prev => !prev)}>
                                    {showPassword ? <EyeIcon/> : <EyeOffIcon/>}
                                </Button>
                            </div>

                            <div className="mb-3">
                                <Button
                                    type="submit"
                                    variant="outline-dark"
                                    className="w-100"
                                >
                                    Entrar <DoorOpen />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </form>
            </div>
        </Container>
    );
}
