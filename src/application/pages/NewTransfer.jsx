import { useEffect, useState } from "react";
import { Button, Col, Container, Input, Label, Row } from "reactstrap"
import { CustomFooter, CustomNavbar } from "../components"

export const NewTransfer = () => {

    const [clientData] = useState(true);

    console.log(clientData)


    return (
        <Container fluid style={{ position: 'relative', paddingBottom: 60, minHeight: '100vh' }}>
            <Row >
                <CustomNavbar />
            </Row>
            <Container fluid className="p-3">
                <Row>
                    <Col>
                        <span style={{ color: 'gray', borderBottom: '1px solid' }}>Operación {">"} Transferencias {">"} Nueva Transferencia</span>
                    </Col>
                </Row>
                <Row style={{ padding: 0 }}>
                    <Col sm={1} style={{ marginLeft: 'auto', marginRight: 0, padding: 0 }}>
                        <Button className="button" > <span style={{ padding: 20, paddingTop: 15, paddingBottom: 15 }}>Guardar</span></Button>
                    </Col>
                </Row>
                <Row style={{ paddingLeft: '5%' }}>
                    <Label><b>DATOS DE LA OPERACIÓN</b></Label>
                </Row>
                <Container fluid className="p-4">
                    <Row className="roundedBorder">
                        <Col sm={6} style={{ paddingLeft: '5%', paddingTop: '2%', paddingBottom: '2%' }}>
                            <Row className="mt-2">
                                <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                    <Label>Participante Origen:</Label>
                                </Col>
                                <Col sm={8}>
                                    <Input className="textField" disabled type="text"></Input>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                    <Label>Fecha de operación:</Label>
                                </Col>
                                <Col sm={8}>
                                    <Input className="textField" disabled type="text"></Input>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                    <Label>Código LBTR{clientData === true ? <span style={{ color: 'red' }}> (*)</span> : ""}:</Label>
                                </Col>
                                <Col sm={8}>
                                    <Input className="textField" type="select"><option>Seleccione</option></Input>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                    <Label>Estado de Registro:</Label>
                                </Col>
                                <Col sm={8}>
                                    <Input className="textField" disabled type="text"></Input>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                    <Label>Moneda:</Label>
                                </Col>
                                <Col sm={8}>
                                    <Input className="textField" disabled type="text"></Input>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                    <Label>Cuenta ordinaria:</Label>
                                </Col>
                                <Col sm={8}>
                                    <Input className="textField" disabled type="text"></Input>
                                </Col>
                            </Row>
                            {
                                clientData === false ?
                                    <Row className="mt-2">
                                        <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                            <Label>Observaciones:</Label>
                                        </Col>
                                        <Col sm={8}>
                                            <Input type="textarea"></Input>
                                        </Col>
                                    </Row>
                                    :
                                    ""
                            }
                        </Col>
                        <Col sm={6} style={{ paddingLeft: '5%', paddingTop: '2%', paddingBottom: '2%' }}>
                            <Row className="mt-2">
                                <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                    <Label>Participante Destino{clientData === true ? <span style={{ color: 'red' }}> (*)</span> : ""}:</Label>
                                </Col>
                                <Col sm={8}>
                                    <Input className="textField" type="select"><option>Seleccione</option></Input>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                    <Label>Monto{clientData === true ? <span style={{ color: 'red' }}> (*)</span> : ""}:</Label>
                                </Col>
                                <Col sm={8}>
                                    <Input className="textField" type="text"></Input>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                    <Label>Cuenta Destino{clientData === true ? <span style={{ color: 'red' }}> (*)</span> : ""}:</Label>
                                </Col>
                                <Col sm={8}>
                                    <Input className="textField" disabled type="text"></Input>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                    <Label>Tipo de Cambio:</Label>
                                </Col>
                                <Col sm={8}>
                                    <Input className="textField" type="text"></Input>
                                </Col>
                            </Row>
                            {
                                clientData === true ?
                                    <Row className="mt-2">
                                        <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                            <Label>Observaciones:</Label>
                                        </Col>
                                        <Col sm={8}>
                                            <Input type="textarea"></Input>
                                        </Col>
                                    </Row>
                                    :
                                    <Row className="mt-2">
                                        <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                            <Label>Afecto a ITF:</Label>
                                        </Col>
                                        <Col sm={4}>
                                            <Input className="textField" type="select"><option>Seleccione</option></Input>
                                        </Col>
                                    </Row>
                            }

                        </Col>
                    </Row>
                    {
                        clientData === true ?
                            <>
                                <Row style={{ paddingLeft: '5%' }}>
                                    <Label><b>DATOS DE CLIENTE</b></Label>
                                </Row>
                                <Row className="roundedBorder mt-2">
                                    <Col sm={6} style={{ paddingLeft: '5%', paddingTop: '2%', paddingBottom: '2%' }}>
                                        <Row className="bg-gray" style={{ maxWidth: '92%' }}>
                                            <Label style={{ textAlign: "center" }}>CLIENTE</Label>
                                        </Row>
                                        <Row className="mt-2">
                                            <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                <Label>CCI:</Label>
                                            </Col>
                                            <Col sm={8}>
                                                <Input className="textField" type="text"></Input>
                                            </Col>
                                        </Row>
                                        <Row className="mt-2">
                                            <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                <Label>Nombre:</Label>
                                            </Col>
                                            <Col sm={8}>
                                                <Input className="textField" type="text"></Input>
                                            </Col>
                                        </Row>
                                        <Row className="mt-2">
                                            <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                <Label>Dirección:</Label>
                                            </Col>
                                            <Col sm={8}>
                                                <Input className="textField" type="text"></Input>
                                            </Col>
                                        </Row>
                                        <Row className="mt-2">
                                            <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                <Label>Tipo Documento:</Label>
                                            </Col>
                                            <Col sm={8}>
                                                <Input className="textField" type="text"></Input>
                                            </Col>
                                        </Row>
                                        <Row className="mt-2">
                                            <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                <Label>Nro Documento:</Label>
                                            </Col>
                                            <Col sm={8}>
                                                <Input className="textField" type="text"></Input>
                                            </Col>
                                        </Row>
                                        <Row className="mt-2">
                                            <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                <Label>Afecto a ITF:</Label>
                                            </Col>
                                            <Col sm={4}>
                                                <Input className="textField" type="select"><option>Seleccione</option></Input>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={6} style={{ paddingLeft: '5%', paddingTop: '2%', paddingBottom: '2%' }}>
                                        <Row className="bg-gray" style={{ maxWidth: '92%' }}>
                                            <Label style={{ textAlign: "center" }}>BENEFICIARIO</Label>
                                        </Row>
                                        <Row className="mt-2">
                                            <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                <Label>CCI:</Label>
                                            </Col>
                                            <Col sm={8}>
                                                <Input className="textField" type="text"></Input>
                                            </Col>
                                        </Row>
                                        <Row className="mt-2">
                                            <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                <Label>Nombre:</Label>
                                            </Col>
                                            <Col sm={8}>
                                                <Input className="textField" type="text"></Input>
                                            </Col>
                                        </Row>
                                        <Row className="mt-2">
                                            <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                <Label>Tipo Documento:</Label>
                                            </Col>
                                            <Col sm={8}>
                                                <Input className="textField" type="text"></Input>
                                            </Col>
                                        </Row>
                                        <Row className="mt-2">
                                            <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                <Label>Nro Documento:</Label>
                                            </Col>
                                            <Col sm={8}>
                                                <Input type="text"></Input>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </>
                            :
                            ""
                    }

                </Container>
            </Container>
            <Row>
                <CustomFooter />
            </Row>
        </Container>
    )
}
