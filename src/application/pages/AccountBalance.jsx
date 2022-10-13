import { useState } from "react"
import { Button, Col, Container, Input, Label, Row, Table } from "reactstrap"
import { CustomCover } from "../components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileExcel, faSearchPlus } from '@fortawesome/free-solid-svg-icons'

export const AccountBalance = () => {

    const [accountBalances, setAccountBalances] = useState(
        [
            {
                entity: '0023 - Banco de Comercio',
                accountNumber: '1100101000000010 - CTA ORDINARIA M/N',
                initialBalance: '1 900 000.00',
                currentBalance: '2 900 000.00',
                totalPayments: '2 000 000.00',
                totalCharges: '1 000 000.00'
            },
            {
                entity: '0023 - Banco de Comercio',
                accountNumber: '1100101000000010 - CTA ORDINARIA M/N',
                initialBalance: '1 900 000.00',
                currentBalance: '2 900 000.00',
                totalPayments: '2 000 000.00',
                totalCharges: '1 000 000.00'
            },
            {
                entity: '0023 - Banco de Comercio',
                accountNumber: '1100101000000010 - CTA ORDINARIA M/N',
                initialBalance: '1 900 000.00',
                currentBalance: '2 900 000.00',
                totalPayments: '2 000 000.00',
                totalCharges: '1 000 000.00'
            }
        ]);

    return (
        <Container fluid style={{ position: 'relative', paddingBottom: 60, minHeight: '100vh' }}>
            <CustomCover>
                <Container fluid className="p-3">
                    <Row>
                        <Col>
                            <span style={{ color: 'gray', borderBottom: '1px solid' }}>Consultas BCRP {">"} Saldos</span>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '3%' }}>
                        <Col sm="12" style={{ marginLeft: '3%' }}>
                            <Row>
                                <Col sm="3">
                                    <Row className="mt-2">
                                        <Col sm="4">
                                            <Label className="mt-2">Nro de Cuenta (*):</Label>
                                        </Col>
                                        <Col sm="6" >
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
                    <Row style={{ marginTop: 50 }}>
                        <Button style={{ marginRight: 35, marginLeft: 'auto', maxWidth: 24 }} color="white"><FontAwesomeIcon size="2x" color="green" icon={faFileExcel} /></Button>
                    </Row>
                    <Row >
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
                                        accountBalances.map((ab, idx) =>
                                            <tr key={idx} className="lbtr-bodyrow">
                                                <td>
                                                    <Row>
                                                        <Col sm="1">
                                                            <Button onClick={e => {window.location.href = "/consultasbcrp/saldos/detalles-movimientos"}} style={{ maxWidth: 24 }} color="white"><FontAwesomeIcon color="black" icon={faSearchPlus} /></Button>
                                                        </Col>
                                                        <Col sm="10" style={{ marginTop: 5 }}>
                                                            {ab.entity}
                                                        </Col>
                                                    </Row>
                                                </td>
                                                <td>{ab.accountNumber}</td>
                                                <td>{ab.initialBalance}</td>
                                                <td>{ab.currentBalance}</td>
                                                <td>{ab.totalPayments}</td>
                                                <td>{ab.totalCharges}</td>
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
