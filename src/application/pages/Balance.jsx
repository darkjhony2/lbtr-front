import { Col, Container, Input, Label, Row } from "reactstrap"
import { CustomCover } from "../components"

export const Balance = () => {
    return (
        <Container fluid style={{ position: 'relative', paddingBottom: 60, minHeight: '100vh' }}>
            <CustomCover>
                <Container fluid className="p-3">
                    <Row>
                        <Col>
                            <span style={{ color: 'gray', borderBottom: '1px solid' }}>Consultas BCRP {">"} Saldos</span>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '3%'}}>
                        <Col sm="1" style={{marginLeft: '3%'}}>
                            <Label>Nro de Cuenta (*):</Label>
                        </Col>
                        <Col sm="2">
                            <Input type="select" />
                        </Col>
                        <Col sm="1" style={{marginLeft: '3%'}}>
                            <Label>Fecha (*):</Label>
                        </Col>
                        <Col sm="2">
                            <Input type="date" />
                        </Col>
                    </Row>
                </Container>
            </CustomCover>
        </Container>
    )
}
