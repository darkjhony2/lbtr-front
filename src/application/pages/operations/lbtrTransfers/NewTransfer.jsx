import { useEffect, useState } from "react";
import { Button, Col, Container, Input, Label, Row } from "reactstrap";
import { CustomCover } from "../../../components";
import * as servAndConcepApi from '../../../../api/servicesAndConceptsApi';
import * as identificationApi from '../../../../api/identificationApi';
import * as bankApi from '../../../../api/banksApi'
import { useDispatch, useSelector } from "react-redux";
import { getConcepts, getServices } from "../../../../store/slices/servicesAndConcepts";
import { getBanks } from "../../../../store/slices/banks";
import { selectTransfer } from '../../../../store/slices/transfers'
import { CustomDropdown } from "../../../../components/application/CustomDropdown";
import { getIdentificationTypes } from "../../../../store/slices/identifications/thunks";

export const NewTransfer = () => {


    const [transfer, setTransfer] = useState({
        settlementConceptCode: '-1',
        destinationBankCode: '-1',
        currencyCode: '-1',
        amount: 0,
        applyTaxes: false,
        observations: '-1',
        identificationCode: '-1',
        clientData: {}
    })
    const [currencyName, setCurrencyName] = useState('');
    let banks = useSelector((state) => state.bank.banks);
    let concepts = useSelector((state) => state.serviceAndConcept.concepts);
    let identifications = useSelector((state) => state.identification.identificationTypes)
    const dispatch = useDispatch();


    const fetchServices = async () => {
        let services = await servAndConcepApi.getServices();
        dispatch(getServices(services));
    }

    const fetchConcepts = async () => {
        let concepts = await servAndConcepApi.getConcepts();
        dispatch(getConcepts(concepts));
    }

    const fetchIdentificationTypes = async () => {
        let identificationTypes = await identificationApi.getIdentificationTypes();
        dispatch(getIdentificationTypes(identificationTypes));
    }

    const fetchBanks = async () => {
        let banks = await bankApi.getBanks("name");
        dispatch(getBanks(banks));
    }

    const handleChange = (e) => {
        setTransfer({
            ...transfer,
            [e.target.name]: e.target.value,
        });
    };

    const getClientData = async (settlementConceptCode) => {
        let clientData = await servAndConcepApi.getClientData(settlementConceptCode);
        let { currency } = concepts.filter(x => x.code === settlementConceptCode)[0]
        setTransfer({ ...transfer, clientData, currencyCode: currency.code })
        setCurrencyName(currency.description)
    }

    useEffect(() => {
        if (transfer.settlementConceptCode !== "-1") {
            getClientData(transfer.settlementConceptCode)

        } else {
            setTransfer({ ...transfer, clientData: {}, currencyCode: {} })
        }
    }, [transfer.settlementConceptCode])


    useEffect(() => {
        fetchServices();
        fetchConcepts();
        fetchIdentificationTypes();
        fetchBanks();
    }, [])



    return (
        <Container fluid style={{ position: 'relative', paddingBottom: 60, minHeight: '100vh' }}>
            <CustomCover>
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
                    <Container fluid className="p-4">
                        <div className="custom">
                            <h6 style={{ width: 220, backgroundColor: 'white', marginTop: '-12px', marginLeft: 40 }}><b style={{ marginLeft: 12 }}>DATOS DE LA OPERACIÓN</b></h6>
                            <Row>
                                <Col sm={6} style={{ paddingLeft: '5%', paddingTop: '2%', paddingBottom: '2%' }}>
                                    <Row className="mt-2">
                                        <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                            <Label>Participante Origen:</Label>
                                        </Col>
                                        <Col sm={8}>
                                            <Input className="textField" value={'0023 BANCO DE COMERCIO'} disabled type="text" />
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                            <Label>Fecha de operación:</Label>
                                        </Col>
                                        <Col sm={8}>
                                            <Input className="textField" value={'22/08/2022'} disabled type="text" />
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                            <Label>Código LBTR{transfer.clientData === true ? <span style={{ color: 'red' }}> (*)</span> : ""}:</Label>
                                        </Col>
                                        <Col sm={8}>
                                            <CustomDropdown id={"settlementConceptCode"} value={transfer.settlementConceptCode} setValue={e => handleChange(e)} values={concepts} />
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                            <Label>Estado de Registro:</Label>
                                        </Col>
                                        <Col sm={8}>
                                            <Input className="textField" value={'Pendiente'} disabled type="text" />
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                            <Label>Moneda:</Label>
                                        </Col>
                                        <Col sm={8}>
                                            <Input className="textField" value={transfer.currencyCode + ' - ' + currencyName} disabled type="text" />
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                            <Label>Cuenta ordinaria:</Label>
                                        </Col>
                                        <Col sm={8}>
                                            <Input className="textField" value={'1207010023010000003'} disabled type="text" />
                                        </Col>
                                    </Row>
                                    {
                                        transfer.clientData.hasOriginClientData === false || transfer.clientData.hasDestinationClientData === false ?
                                            <Row className="mt-2">
                                                <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                    <Label>Observaciones:</Label>
                                                </Col>
                                                <Col sm={8}>
                                                    <Input type="textarea" />
                                                </Col>
                                            </Row>
                                            :
                                            ""
                                    }
                                </Col>
                                <Col sm={6} style={{ paddingLeft: '5%', paddingTop: '2%', paddingBottom: '2%' }}>
                                    <Row className="mt-2">
                                        <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                            <Label>Participante Destino{transfer.clientData === true ? <span style={{ color: 'red' }}> (*)</span> : ""}:</Label>
                                        </Col>
                                        <Col sm={8}>
                                            <CustomDropdown id={"destinationBankCode"} value={transfer.destinationBankCode} setValue={e => handleChange(e)} values={banks} />
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                            <Label>Monto{transfer.clientData === true ? <span style={{ color: 'red' }}> (*)</span> : ""}:</Label>
                                        </Col>
                                        <Col sm={8}>
                                            <Input className="textField" type="text" />
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                            <Label>Cuenta Destino{transfer.clientData === true ? <span style={{ color: 'red' }}> (*)</span> : ""}:</Label>
                                        </Col>
                                        <Col sm={8}>
                                            <Input className="textField" disabled type="text" />
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                            <Label>Tipo de Cambio:</Label>
                                        </Col>
                                        <Col sm={8}>
                                            <Input className="textField" type="text" />
                                        </Col>
                                    </Row>
                                    {
                                        transfer.clientData != undefined && (transfer.clientData.hasOriginClientData === true || transfer.clientData.hasDestinationClientData === true) ?
                                            <Row className="mt-2">
                                                <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                    <Label>Observaciones:</Label>
                                                </Col>
                                                <Col sm={8}>
                                                    <Input type="textarea" />
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
                        </div>
                        {
                            transfer.clientData != undefined && (transfer.clientData.hasDestinationClientData === true || transfer.clientData.hasDestinationClientData === true) && transfer.settlementConceptCode !== '-1' ?
                                <>
                                    <br />
                                    <div className="custom">
                                        <h6 style={{ width: 220, backgroundColor: 'white', marginTop: '-12px', marginLeft: 40 }}><b style={{ marginLeft: 35 }}>DATOS DE CLIENTE</b></h6>

                                        <Row className="mt-2">
                                            <Col sm={6} style={{ paddingLeft: '5%', paddingTop: '2%', paddingBottom: '2%' }}>
                                                <Row className="bg-gray" style={{ maxWidth: '92%' }}>
                                                    <Label style={{ textAlign: "center" }}>CLIENTE</Label>
                                                </Row>
                                                <Row className="mt-2">
                                                    <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                        <Label>CCI:</Label>
                                                    </Col>
                                                    <Col sm={8}>
                                                        <Input className="textField" type="text" />
                                                    </Col>
                                                </Row>
                                                <Row className="mt-2">
                                                    <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                        <Label>Nombre:</Label>
                                                    </Col>
                                                    <Col sm={8}>
                                                        <Input className="textField" type="text" />
                                                    </Col>
                                                </Row>
                                                <Row className="mt-2">
                                                    <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                        <Label>Dirección:</Label>
                                                    </Col>
                                                    <Col sm={8}>
                                                        <Input className="textField" type="text" />
                                                    </Col>
                                                </Row>
                                                <Row className="mt-2">
                                                    <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                        <Label>Tipo Documento:</Label>
                                                    </Col>
                                                    <Col sm={8}>
                                                        <CustomDropdown id={"identificationTypeCode"} value={transfer.identificationCode} setValue={e => handleChange(e)}
                                                            values={identifications} />
                                                    </Col>
                                                </Row>
                                                <Row className="mt-2">
                                                    <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                        <Label>Nro Documento:</Label>
                                                    </Col>
                                                    <Col sm={8}>
                                                        <Input className="textField" type="text" />
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
                                                        <Input className="textField" type="text" />
                                                    </Col>
                                                </Row>
                                                <Row className="mt-2">
                                                    <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                        <Label>Nombre:</Label>
                                                    </Col>
                                                    <Col sm={8}>
                                                        <Input className="textField" type="text" />
                                                    </Col>
                                                </Row>
                                                <Row className="mt-2">
                                                    <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                        <Label>Tipo Documento:</Label>
                                                    </Col>
                                                    <Col sm={8}>
                                                        <Input className="textField" type="text" />
                                                    </Col>
                                                </Row>
                                                <Row className="mt-2">
                                                    <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                        <Label>Nro Documento:</Label>
                                                    </Col>
                                                    <Col sm={8}>
                                                        <Input type="text" />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </>
                                :
                                ""
                        }
                    </Container>
                </Container>
            </CustomCover>
        </Container>
    )
}
