import { faCaretLeft, faCaretRight, faFileExcel, faSearchPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Button, Col, Container, Input, Label, Row, Table } from "reactstrap"
import { CustomCover } from "../../components"

export const Auditory = () => {
    const [consultResults, setConsultResults] = useState(
        [
            {
                usareName: '',
                completeName: '',
                operationType: '',
                operationNumber: '',
                operationDate: '',
                hour: '',
                currency: '',
                action: '',
                observation: '',
            },
            {
                usareName: '',
                completeName: '',
                operationType: '',
                operationNumber: '',
                operationDate: '',
                hour: '',
                currency: '',
                action: '',
                observation: '',
            },
            {
                usareName: '',
                completeName: '',
                operationType: '',
                operationNumber: '',
                operationDate: '',
                hour: '',
                currency: '',
                action: '',
                observation: '',
            }
        ]
    )

    return (
        <Container fluid style={{ position: 'relative', paddingBottom: 60, minHeight: '100vh' }}>
            <CustomCover>
                <Container fluid className="p-3">
                    <Row>
                        <Col>
                            <span style={{ color: 'gray', borderBottom: '1px solid' }}>Consultas locales {">"} Auditoría</span>
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
                                                        <Label>Fecha Inicio:</Label>
                                                    </Col>
                                                    <Col sm="9">
                                                        <Input type="date" />
                                                    </Col>
                                                </Row>
                                                <Row className="mt-2">
                                                    <Col sm="3">
                                                        <Label>Tipo:</Label>
                                                    </Col>
                                                    <Col sm="9">
                                                        <Input type="select"><option>Seleccione</option></Input>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col sm="6">
                                                <Row>
                                                    <Col sm="4">
                                                        <Label>Fecha Fin:</Label>
                                                    </Col>
                                                    <Col sm="8">
                                                        <Input type="date"/>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-2">
                                                    <Col sm="4">
                                                        <Label>Usuario:</Label>
                                                    </Col>
                                                    <Col sm="8">
                                                        <Input type="text"/>
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
                                        <th>Usare Name</th>
                                        <th>Nombre Completo</th>
                                        <th>Tipo de Operación</th>
                                        <th>Nro. Operación</th>
                                        <th>Fecha Operación</th>
                                        <th>Hora</th>
                                        <th>Moneda</th>
                                        <th>Acción</th>
                                        <th>Observación</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        consultResults.map((cr, idx) =>
                                            <tr key={idx} className="lbtr-bodyrow">
                                                <td>{cr.usareName}</td>
                                                <td>{cr.completeName}</td>
                                                <td>{cr.operationType}</td>
                                                <td>{cr.operationNumber}</td>
                                                <td>{cr.operationDate}</td>
                                                <td>{cr.hour}</td>
                                                <td>{cr.currency}</td>
                                                <td>{cr.action}</td>
                                                <td>{cr.observation}</td>
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
