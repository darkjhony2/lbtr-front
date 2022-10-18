import { faFileExcel } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Col, Container, Input, Label, Row, Table } from "reactstrap"
import { CustomCover } from "../../components"


export const EstadisticReportByDate = () => {


    return (
        <Container fluid style={{ position: 'relative', paddingBottom: 60, minHeight: '100vh' }}>
            <CustomCover>
                <Container fluid className="p-3">
                    <Row>
                        <Col>
                            <span style={{ color: 'gray', borderBottom: '1px solid' }}>Consultas locales {">"} Reporte Estadístico</span>
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
                                                        <Label>Tipo de Fecha:</Label>
                                                    </Col>
                                                    <Col sm="9">
                                                        <Input type="select"><option>Seleccione</option></Input>
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
                                                <Row className="mt-2">
                                                    <Col sm="3">
                                                        <Label>Fecha Inicio:</Label>
                                                    </Col>
                                                    <Col sm="9">
                                                        <Input type="date" />
                                                    </Col>
                                                </Row>
                                                <Row className="mt-2">
                                                    <Col sm="3">
                                                        <Label>Fecha Fin:</Label>
                                                    </Col>
                                                    <Col sm="9">
                                                        <Input type="date" />
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
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12">
                            <Table bordered responsive>
                                <thead>
                                    <tr className="lbtr-headrow">
                                        <th></th>
                                        <th>Transferencias Interbancarias</th>
                                        <th>Liquidación de Compra</th>
                                        <th>Liquidación de Venta</th>
                                        <th>Facilidad Intradía</th>
                                        <th>Depósito Overnight</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="lbtr-bodyrow">
                                        <td>Transacciones Promedio</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr className="lbtr-bodyrow">
                                        <td>Monto Promedio por Transacción</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr className="lbtr-bodyrow">
                                        <td>Monto Mínimo</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr className="lbtr-bodyrow">
                                        <td>Monto Promedio Mínimo</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr className="lbtr-bodyrow">
                                        <td>Monto Máximo</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr className="lbtr-bodyrow">
                                        <td>Monto Promedio Máximo</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr className="lbtr-bodyrow">
                                        <td>Monto Total por Transacción</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </CustomCover>
        </Container>
    )
}
