import { faCaretLeft, faCaretRight, faEdit, faFileExcel, faSearchPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Button, Col, Container, Input, Label, Row, Table } from "reactstrap"
import { CustomCover } from "../../components"

export const BalanceMovements = () => {
    const [consultResults, setConsultResults] = useState(
        [
            {
                accountNumber: '',
                participant: '',
                currencyType: '',
                initialBalance: '',
                currentBalance: '',
            },
            {
                accountNumber: '',
                participant: '',
                currencyType: '',
                initialBalance: '',
                currentBalance: '',
            },
            {
                accountNumber: '',
                participant: '',
                currencyType: '',
                initialBalance: '',
                currentBalance: '',
            },
        ]
    )

    return (
        <Container fluid style={{ position: 'relative', paddingBottom: 60, minHeight: '100vh' }}>
            <CustomCover>
                <Container fluid className="p-3">
                    <Row>
                        <Col>
                            <span style={{ color: 'gray', borderBottom: '1px solid' }}>Consultas locales {">"} Saldos y Movimientos BCR</span>
                        </Col>
                    </Row>
                    <Container fluid className="p-4">
                        <Row style={{ marginTop: 20 }}>
                            <Col sm="12">
                                <Row>
                                    <Col sm="10">
                                        <Row>
                                            <Col sm="6">
                                                <Row>
                                                    <Col sm="3">
                                                        <Label>Fecha:</Label>
                                                    </Col>
                                                    <Col sm="9">
                                                        <Input type="date" />
                                                    </Col>
                                                </Row>
                                                <Row className="mt-2">
                                                    <Col sm="3">
                                                        <Label>Moneda:</Label>
                                                    </Col>
                                                    <Col sm="9">
                                                        <Input type="select"><option>Seleccione</option></Input>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col sm="6">
                                                <Row>
                                                    <Col sm="4">
                                                        <Label>Tipo Cuenta:</Label>
                                                    </Col>
                                                    <Col sm="8">
                                                        <Input type="select"><option>Seleccione</option></Input>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm="2">
                                        <Row style={{ padding: 0, marginTop: 12 }}>
                                            <Col sm={1} style={{ marginLeft: 60 }}>
                                                <Button className="button" > <span style={{ padding: 20, paddingTop: 15, paddingBottom: 15 }}>Buscar</span></Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    <Row style={{ marginTop: 30 }}>
                        <Col>
                            <Row>
                                <Button style={{ marginLeft: 'auto', maxWidth: 24, marginRight: 36 }} color="white"><FontAwesomeIcon size="2x" color="green" icon={faFileExcel} /></Button>
                                <div style={{ maxWidth: 60, maxHeight: 30, marginTop: 10, textAlign: 'center', color: 'white' }} className="bg-red"><p>Pág.</p></div>
                                <div style={{ maxWidth: 100, maxHeight: 30, marginTop: 10, textAlign: 'center', color: 'white', marginRight: 13 }} className="bg-smoke">
                                    <Row >
                                        <Col sm="12" style={{ padding: 0 }}>
                                            <Row>
                                                <Col sm="3">
                                                    <Button color="white"><FontAwesomeIcon color="black" icon={faCaretLeft} /></Button>
                                                </Col>
                                                <Col sm="4" style={{ paddingRight: 4 }}>
                                                    <Label style={{ color: 'black', minWidth: 10, minWidth: 45, marginTop: 5 }}>1 de 1</Label>
                                                </Col>
                                                <Col sm="3">
                                                    <Button color="white"><FontAwesomeIcon color="black" icon={faCaretRight} /></Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12">
                            <Table bordered responsive>
                                <thead>
                                    <tr className="lbtr-headrow">
                                        <th style={{ maxWidth: 40 }}>Ver detalle</th>
                                        <th>Nro. de Cuenta</th>
                                        <th>Participante</th>
                                        <th>Tipo Moneda</th>
                                        <th>Saldo Inicial</th>
                                        <th>Saldo Actual</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        consultResults.map((cr, idx) =>
                                            <tr key={idx} className="lbtr-bodyrow">
                                                <td><Button onClick={e => { window.location.href = "/consultasbcrp/saldos/detalles-movimientos" }} color="white"><FontAwesomeIcon color="black" icon={faSearchPlus} /></Button></td>
                                                <td>{cr.accountNumber}</td>
                                                <td>{cr.initialBalance}</td>
                                                <td>{cr.currentBalance}</td>
                                                <td>{cr.totalPayments}</td>
                                                <td>{cr.totalCharges}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </CustomCover>
        </Container>
    )
}
