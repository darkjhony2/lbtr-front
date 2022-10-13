import { faFileExcel, faSearchPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Button, Col, Container, FormGroup, Input, Label, Row, Table } from "reactstrap"
import { CustomCover } from "../components"

export const MovementDetails = () => {

    const [movementDetails, setMovementDetails] = useState(
        [
            {
                operationDate: '21/08/2022',
                concept: 'C045',
                participating: 'BANCO DE COMERCIO',
                otherSideParticipating: 'BANCO CENTRAL DE RESERVA DEL PERU',
                charge: '10,000,000.00',
                payment: ''
            },
            {
                operationDate: '21/08/2022',
                concept: 'C045',
                participating: 'BANCO DE COMERCIO',
                otherSideParticipating: 'BANCO CENTRAL DE RESERVA DEL PERU',
                charge: '',
                payment: '60,000,000.00'
            },
            {
                operationDate: '21/08/2022',
                concept: 'C045',
                participating: 'BANCO DE COMERCIO',
                otherSideParticipating: 'BANCO CENTRAL DE RESERVA DEL PERU',
                charge: '10,000,000.00',
                payment: ''
            }
        ]);

    return (
        <Container fluid style={{ position: 'relative', paddingBottom: 60, minHeight: '100vh' }}>
            <CustomCover>
                <Container fluid className="p-3">
                    <Row>
                        <Col>
                            <span style={{ color: 'gray', borderBottom: '1px solid' }}>Consultas BCRP {">"} Saldos {">"} Detalles de Movimientos</span>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '2%' }}>
                        <Col sm="12" style={{ marginLeft: '1%' }}>
                            <Row>
                                <Col sm="4">
                                    <Row className="mt-2">
                                        <Col sm="4">
                                            <Label className="mt-2">Nro de Cuenta (*):</Label>
                                        </Col>
                                        <Col sm="8" >
                                            <Input type="select"><option>Seleccione</option></Input>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm="3">
                                    <Row className="mt-2">
                                        <Col sm="3">
                                            <Label className="mt-2">Fecha (*):</Label>
                                        </Col>
                                        <Col sm="6" style={{ paddingLeft: 0 }}>
                                            <Input type="date" style={{ paddingLeft: 0 }} />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm="3">
                                    <Row>
                                        <Col sm="4">
                                            <Button className="button" > <span style={{ padding: 20, paddingTop: 15, paddingBottom: 15 }}>Buscar</span></Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <FormGroup style={{ textAlign: 'center', marginTop: 25 }}>
                        <Row>
                            <Col sm="2" className="bg-red">
                                <Label className="label-white">Saldo Inicial</Label>
                            </Col>
                            <Col style={{ marginLeft: 8, textAlign: 'right' }} sm="3" className="bg-smoke">
                                <Label>1,500,000.60</Label>
                            </Col>
                        </Row>
                        <Row className="mt-1">
                            <Col sm="2" className="bg-red">
                                <Label className="label-white">Total Abonos</Label>
                            </Col>
                            <Col style={{ marginLeft: 8, textAlign: 'right' }} sm="3" className="bg-smoke">
                                <Label>1,500,000.60</Label>
                            </Col>
                        </Row>
                        <Row className="mt-1">
                            <Col sm="2" className="bg-red">
                                <Label className="label-white">Total Cargos</Label>
                            </Col>
                            <Col style={{ marginLeft: 8, textAlign: 'right' }} sm="3" className="bg-smoke">
                                <Label>1,500,000.60</Label>
                            </Col>
                        </Row>
                        <Row className="mt-1">
                            <Col sm="2" className="bg-red">
                                <Label className="label-white">Saldo Actual</Label>
                            </Col>
                            <Col style={{ marginLeft: 8, textAlign: 'right' }} sm="3" className="bg-smoke">
                                <Label>1,500,000.60</Label>
                            </Col>
                        </Row>
                        <Row className="mt-1">
                            <Col sm="2" className="bg-red">
                                <Label className="label-white">Sumatoria de Detalles</Label>
                            </Col>
                            <Col style={{ marginLeft: 8, textAlign: 'right' }} sm="3" className="bg-smoke">
                                <Label>1,500,000.60</Label>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Row style={{ marginTop: 50 }}>
                        <Button style={{ marginRight: 35, marginLeft: 'auto', maxWidth: 24 }} color="white"><FontAwesomeIcon size="2x" color="green" icon={faFileExcel} /></Button>
                    </Row>
                    <Row>
                        <Col sm="12">
                            <Table bordered responsive>
                                <thead>
                                    <tr className="lbtr-headrow">
                                        <th>Entidad</th>
                                        <th>Número de cuenta</th>
                                        <th>Saldo Inicial</th>
                                        <th>Saldo Actual</th>
                                        <th>Total Abonos</th>
                                        <th>Total Cargos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        movementDetails.map((md, idx) =>
                                            <tr key={idx} className="lbtr-bodyrow">
                                                <td>{md.operationDate}</td>
                                                <td>{md.concept}</td>
                                                <td>{md.participating}</td>
                                                <td>{md.otherSideParticipating}</td>
                                                <td>{md.charge}</td>
                                                <td>{md.payment}</td>
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
