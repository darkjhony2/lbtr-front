import { faCaretLeft, faCaretRight, faEdit, faFileExcel } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Button, Col, Container, Input, Label, Row, Table } from "reactstrap"
import { CustomCover } from "../../components"

export const CurrencyConsults = () => {

    const [consultResults, setConsultResults] = useState(
        [
            {
                hostReference: 'LQ00230233905183',
                date: '20/08/2022',
                destinationEntity: 'BANCO DE LA NACION',
                destinationAccount: '1102010018010000000',
                dollarAmount: '1000,000.00',
                exchangeRate: '3.10',
                solAmount: '310,000.00',
                observationDone: '',
                observationRecieved: '',
                status: 'Pendiente'
            },
            {
                hostReference: 'LQ00230233905183',
                date: '22/08/2022',
                destinationEntity: 'BANCO DE LA NACION',
                destinationAccount: '1102010018010000000',
                dollarAmount: '1000,000.00',
                exchangeRate: '3.10',
                solAmount: '310,000.00',
                observationDone: '',
                observationRecieved: '',
                status: 'Pendiente'
            },
            {
                hostReference: 'LQ00230233905183',
                date: '24/08/2022',
                destinationEntity: 'BANCO DE LA NACION',
                destinationAccount: '1102010018010000000',
                dollarAmount: '1000,000.00',
                exchangeRate: '3.10',
                solAmount: '310,000.00',
                observationDone: '',
                observationRecieved: '',
                status: 'Pendiente'
            }
        ]
    )

    return (
        <Container fluid style={{ position: 'relative', paddingBottom: 60, minHeight: '100vh' }}>
            <CustomCover>
                <Container fluid className="p-3">
                    <Row>
                        <Col>
                            <span style={{ color: 'gray', borderBottom: '1px solid' }}>Operación {">"} Compra de Moneda {">"} Consulta</span>
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
                                                        <Label>Estado:</Label>
                                                    </Col>
                                                    <Col sm="9">
                                                        <Input type="select"></Input>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-2">
                                                    <Col sm="3">
                                                        <Label>Fecha Inicio:</Label>
                                                    </Col>
                                                    <Col sm="9">
                                                        <Input type="date"></Input>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col sm="6">
                                                <Row>
                                                    <Col sm="4">
                                                        <Label>Num. Referencia HOST:</Label>
                                                    </Col>
                                                    <Col sm="8">
                                                        <Input type="select"></Input>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-2">
                                                    <Col sm="4">
                                                        <Label>Fecha Fin:</Label>
                                                    </Col>
                                                    <Col sm="8">
                                                        <Input type="date"></Input>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm="2">
                                        <Row style={{ padding: 0 }}>
                                            <Col sm={1} style={{ marginLeft: 60 }}>
                                                <Button className="button" > <span style={{ padding: 20, paddingTop: 15, paddingBottom: 15 }}>Guardar</span></Button>
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
                                                <Col sm="4" style={{paddingRight: 4}}>
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
                                        <th>Todos</th>
                                        <th>Referencia HOST</th>
                                        <th>Fecha</th>
                                        <th>Entidad Destino</th>
                                        <th>Cuenta Destino</th>
                                        <th>Monto Dólares</th>
                                        <th>Tipo Cambio</th>
                                        <th>Monto Soles</th>
                                        <th>Obs. Realizada</th>
                                        <th>Obs. Recibida</th>
                                        <th>Estado</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        consultResults.map((cr, idx) =>
                                            <tr key={idx} className="lbtr-bodyrow">
                                                <td align="center"><Input type="checkbox" /></td>
                                                <td>{cr.hostReference}</td>
                                                <td>{cr.date}</td>
                                                <td>{cr.destinationEntity}</td>
                                                <td>{cr.destinationAccount}</td>
                                                <td>{cr.dollarAmount}</td>
                                                <td>{cr.exchangeRate}</td>
                                                <td>{cr.solAmount}</td>
                                                <td>{cr.observationDone}</td>
                                                <td>{cr.observationRecieved}</td>
                                                <td>{cr.status}</td>
                                                <td align="center"><Button style={{ maxWidth: 24, marginRight: 8 }} color="white"><FontAwesomeIcon color="black" icon={faEdit} /></Button></td>
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
