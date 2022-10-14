import { Button, Col, Container, Input, Label, Row } from "reactstrap"
import { CustomCover } from "../components"

export const NewCurrencyBuy = () => {
    return (
        <Container fluid style={{ position: 'relative', paddingBottom: 60, minHeight: '100vh' }}>
            <CustomCover>
                <Container fluid className="p-3">
                    <Row>
                        <Col>
                            <span style={{ color: 'gray', borderBottom: '1px solid' }}>Operación {">"} Compra de Moneda {">"} Nueva Compra</span>
                        </Col>
                    </Row>
                    <Row style={{ padding: 0 }}>
                        <Col sm={1} style={{ marginLeft: 'auto', marginRight: 20, padding: 0 }}>
                            <Button className="button" > <span style={{ padding: 20, paddingTop: 15, paddingBottom: 15 }}>Guardar</span></Button>
                        </Col>
                    </Row>
                    <Container fluid className="p-4" style={{marginTop: 40}}>
                        <div className="custom">
                            <h6 style={{ width: 220, backgroundColor: 'white', marginTop: '-12px', marginLeft: 40 }}><b style={{ marginLeft: 25 }}>REGISTRO DE COMPRA</b></h6>
                            <Row>
                                <Col sm={6} style={{ paddingLeft: '5%', paddingTop: '2%', paddingBottom: '2%' }}>
                                    <Row className="mt-2">
                                        <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                            <Label>Fecha de Operación:</Label>
                                        </Col>
                                        <Col sm={8}>
                                            <Input className="textField" value={'24/08/2022'} disabled type="text"/>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                            <Label>Entidad Origen:</Label>
                                        </Col>
                                        <Col sm={8}>
                                            <Input className="textField" value={'0023 BANCO DE COMERCIO'} disabled type="text"/>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                            <Label>Entidad Destino<span style={{ color: 'red' }}> (*)</span>:</Label>
                                        </Col>
                                        <Col sm={8}>
                                            <Input className="textField" type="select"><option>Seleccione</option></Input>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                            <Label>Monto Dólares<span style={{ color: 'red' }}> (*)</span>:</Label>
                                        </Col>
                                        <Col sm={8}>
                                            <Input className="textField" type="text"/>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                            <Label>Tipo de Cambio<span style={{ color: 'red' }}> (*)</span>:</Label>
                                        </Col>
                                        <Col sm={8}>
                                            <Input className="textField" type="text"/>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                            <Label>Nro de Operación HOST:</Label>
                                        </Col>
                                        <Col sm={8}>
                                            <Input className="textField" disabled type="text"/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={6} style={{ paddingLeft: '5%', paddingTop: '2%', paddingBottom: '2%' }}>
                                    <Row className="mt-2">
                                        <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                            <Label>Estado:</Label>
                                        </Col>
                                        <Col sm={8}>
                                            <Input className="textField" disabled value={'Pendiente'} type="text"/>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                            <Label>Cuenta Origen:</Label>
                                        </Col>
                                        <Col sm={8}>
                                            <Input className="textField" disabled type="text"/>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                            <Label>Cuenta Destino:</Label>
                                        </Col>
                                        <Col sm={8}>
                                            <Input className="textField" disabled type="text"/>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                            <Label>Monto Soles:</Label>
                                        </Col>
                                        <Col sm={8}>
                                            <Input className="textField" disabled type="text"/>
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                            <Label>Observaciones:</Label>
                                        </Col>
                                        <Col sm={8}>
                                            <Input className="textField" type="textarea"/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </Container>
            </CustomCover>
        </Container>
    )
}
