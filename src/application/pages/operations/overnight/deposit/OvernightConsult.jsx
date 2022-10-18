import { faCaretLeft, faCaretRight, faEdit, faFileExcel } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Col, Container, Input, Label, Row, Table } from 'reactstrap'
import { CustomCover } from '../../../../components'

export const OvernightConsult = () => {

  const [consultResults, setConsultResults] = useState(
    [
      {
        operationNumber: '22',
        lbtrReference: 'SL20100148ME',
        concept: 'C095 Constitución de Depositos Overnight',
        date: '20/08/2022',
        currency: 'PEN',
        amount: '22,000.00',
        observationRecieved: '',
        status: 'Registrado'
      },
      {
        operationNumber: '21',
        lbtrReference: 'SL20100139ME',
        concept: 'C095 Constitución de Depositos Overnight',
        date: '22/08/2022',
        currency: 'USD',
        amount: '10,000.00',
        observationRecieved: '',
        status: 'Registrado por BCR'
      },
      {
        operationNumber: '20',
        lbtrReference: 'SL20100199ME',
        concept: 'C095 Constitución de Depositos Overnight',
        date: '24/08/2022',
        currency: 'PEN',
        amount: '31,000.00',
        observationRecieved: '',
        status: 'Anulado'
      }
    ]
  )

  return (
    <Container fluid style={{ position: 'relative', paddingBottom: 60, minHeight: '100vh' }}>
      <CustomCover>
        <Container fluid className="p-3">
          <Row>
            <Col>
              <span style={{ color: 'gray', borderBottom: '1px solid' }}>Operación {">"} Depósito Overnight {">"} Consulta</span>
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
                            <Label>Fecha de Inicio:</Label>
                          </Col>
                          <Col sm="9">
                            <Input type="date"/>
                          </Col>
                        </Row>
                        <Row className="mt-2">
                          <Col sm="3">
                            <Label>Concepto:</Label>
                          </Col>
                          <Col sm="9">
                            <Input type="select"><option>Seleccione</option></Input>
                          </Col>
                        </Row>
                        <Row className="mt-2">
                          <Col sm="3">
                            <Label>Estado de Operación:</Label>
                          </Col>
                          <Col sm="9">
                            <Input type="select"><option>Seleccione</option></Input>
                          </Col>
                        </Row>
                      </Col>
                      <Col sm="6">
                        <Row>
                          <Col sm="4">
                            <Label>Fecha fin:</Label>
                          </Col>
                          <Col sm="8">
                            <Input type="date"/>
                          </Col>
                        </Row>
                        <Row className="mt-2">
                          <Col sm="4">
                            <Label>Moneda:</Label>
                          </Col>
                          <Col sm="8">
                            <Input type="select"><option>Seleccione</option></Input>
                          </Col>
                        </Row>
                        <Row className="mt-2">
                          <Col sm="4">
                            <Label>Núm. Referencia LBTR:</Label>
                          </Col>
                          <Col sm="8">
                            <Input type="text"/>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col sm="2">
                    <Row style={{ padding: 0, marginTop: 40 }}>
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
                    <th>Todos</th>
                    <th>Nro Op.</th>
                    <th>Referencia LBTR</th>
                    <th>Concepto</th>
                    <th>Fecha</th>
                    <th>Moneda</th>
                    <th>Monto</th>
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
                        <td>{cr.operationNumber}</td>
                        <td>{cr.lbtrReference}</td>
                        <td>{cr.concept}</td>
                        <td>{cr.date}</td>
                        <td>{cr.currency}</td>
                        <td>{cr.amount}</td>
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
