import { useEffect, useState } from "react";
import { Button, Col, Container, Input, Label, Row } from "reactstrap";
import { CustomCover } from "../../../components";
import { v4 as uuidv4 } from 'uuid';
import * as servAndConcepApi from '../../../../api/servicesAndConceptsApi';
import * as identificationApi from '../../../../api/identificationApi';
import * as bankApi from '../../../../api/banksApi';
import * as motherAccountApi from '../../../../api/motherAccountApi';
import * as transferApi from '../../../../api/transfersApi';
import { useDispatch, useSelector } from "react-redux";
import { getConcepts, getServices } from "../../../../store/slices/servicesAndConcepts";
import { getBanks } from "../../../../store/slices/banks";
import { selectTransfer } from '../../../../store/slices/transfers';
import { CustomDropdown } from "../../../../components/application/CustomDropdown";
import { getIdentificationTypes } from "../../../../store/slices/identifications/thunks";

export const NewTransfer = () => {

    const [transfer, setTransfer] = useState({
        settlementConceptCode: '-1',
        destinationBankCode: '-1',
        currencyCode: '-1',
        amount: 0,
        applyTaxes: false,
        observations: '',
        clientData: {},
        destinationClient: {
            accountNumber: '',
            clientName: '',
            address: '',
            documentType: '-1',
            documentNumber: ''
        },
        originClient: {
            accountNumber: '',
            clientName: '',
            address: '',
            documentType: '-1',
            documentNumber: ''
        }
    })
    const [currencyName, setCurrencyName] = useState('');
    const [motherAccount, setMotherAccount] = useState('');
    let banks = useSelector((state) => state.bank.banks);
    let concepts = useSelector((state) => state.serviceAndConcept.concepts);
    let identifications = useSelector((state) => state.identification.identificationTypes);
    const dispatch = useDispatch();
    console.log(transfer)


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

    function handleChange(e) {
        setTransfer({
            ...transfer,
            [e.target.name]: e.target.value,
        });
    };

    function handleBeneficiaryChange(e) {
        console.log(e.target.name)
        console.log(e.target.value)
        setTransfer({
            ...transfer,
            destinationClient: { ...transfer.destinationClient, [e.target.name]: e.target.value }
        })
    }

    function handleClientChange(e) {
        console.log(e.target.name)
        setTransfer({
            ...transfer,
            originClient: { ...transfer.originClient, [e.target.name]: e.target.value }
        })
    }

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

    const getDestinationAccount = async (destinationBankCode, currencyCode) => {
        let motherAccount = await motherAccountApi.getMotherAccounts(destinationBankCode, currencyCode);
        setMotherAccount(motherAccount.accountNumber)
    }

    const clear = () => {
        setTransfer({
            settlementConceptCode: '-1',
            destinationBankCode: '-1',
            currencyCode: '-1',
            amount: 0,
            applyTaxes: false,
            observations: '',
            identificationCode: '-1',
            clientData: {},
            destinationClient: {
                accountNumber: '',
                clientName: '',
                address: '',
                documentType: '',
                documentNumber: ''
            },
            originClient: {
                accountNumber: '',
                clientName: '',
                address: '',
                documentType: '',
                documentNumber: ''
            }
        })
        setCurrencyName('');
        setMotherAccount('');
    }

    const saveTransfer = async () => {
        let transferObj = {};
        transferObj.settlementConceptCode = transfer.settlementConceptCode;
        transferObj.destinationBankCode = transfer.destinationBankCode;
        transferObj.currencyCode = transfer.currencyCode;
        transferObj.amount = parseFloat(transfer.amount);
        transferObj.observations = transfer.observations;
        transferObj.destinationAccount = motherAccount;
        if (transfer.clientData !== {} && transfer.clientData.hasOriginClientData === false && transfer.clientData.hasDestinationClientData === false) {
            transferObj.applyTaxes = transfer.applyTaxes === "true" ? true : false;
            await transferApi.saveTransfer(transferObj, uuidv4());
            alert("Operación registrada correctamente.")
            clear();
            return;
        }
        if (transfer.clientData !== {} && transfer.clientData.hasDestinationClientData === true) {
            transferObj.destinationClient = transfer.destinationClient;
            transferObj.originClient = {};
        }
        if (transfer.clientData !== {} && transfer.clientData.hasOriginClientData === true) {
            transferObj.originClient = transfer.originClient;
        }
        await transferApi.saveTransferWithClientData(transferObj, uuidv4());
        alert("Operación registrada correctamente.")
        clear();
    }

    useEffect(() => {
        fetchServices();
        fetchConcepts();
        fetchIdentificationTypes();
        fetchBanks();
    }, [])

    useEffect(() => {
        if (transfer.destinationBankCode !== '-1' && transfer.currencyCode !== '-1') {
            getDestinationAccount(transfer.destinationBankCode, transfer.currencyCode)
        }
    }, [transfer.destinationBankCode, transfer.currencyCode])


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
                            <Button onClick={saveTransfer} className="button" > <span style={{ padding: 20, paddingTop: 15, paddingBottom: 15 }}>Guardar</span></Button>
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
                                            <Label>Código LBTR{transfer.clientData.hasOriginClientData === true || transfer.clientData.hasDestinationClientData === true ? <span style={{ color: 'red' }}> (*)</span> : ""}:</Label>
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
                                            <Input className="textField" value={currencyName !== '' ? transfer.currencyCode + ' - ' + currencyName : ''} disabled type="text" />
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
                                        transfer.clientData.hasOriginClientData === false && transfer.clientData.hasDestinationClientData === false ?
                                            <Row className="mt-2">
                                                <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                    <Label>Observaciones:</Label>
                                                </Col>
                                                <Col sm={8}>
                                                    <Input name="observations" onChange={e => handleChange(e)} value={transfer.observations} type="textarea" />
                                                </Col>
                                            </Row>
                                            :
                                            ""
                                    }
                                </Col>
                                <Col sm={6} style={{ paddingLeft: '5%', paddingTop: '2%', paddingBottom: '2%' }}>
                                    <Row className="mt-2">
                                        <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                            <Label>Participante Destino{transfer.clientData.hasOriginClientData === true || transfer.clientData.hasDestinationClientData === true ? <span style={{ color: 'red' }}> (*)</span> : ""}:</Label>
                                        </Col>
                                        <Col sm={8}>
                                            <CustomDropdown id={"destinationBankCode"} value={transfer.destinationBankCode} setValue={e => handleChange(e)} values={banks} />
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                            <Label>Monto{transfer.clientData.hasOriginClientData === true || transfer.clientData.hasDestinationClientData === true ? <span style={{ color: 'red' }}> (*)</span> : ""}:</Label>
                                        </Col>
                                        <Col sm={8}>
                                            <Input name="amount" value={transfer.amount} onChange={e => handleChange(e)} className="textField" type="number" />
                                        </Col>
                                    </Row>
                                    <Row className="mt-2">
                                        <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                            <Label>Cuenta Destino{transfer.clientData.hasOriginClientData === true || transfer.clientData.hasDestinationClientData === true ? <span style={{ color: 'red' }}> (*)</span> : ""}:</Label>
                                        </Col>
                                        <Col sm={8}>
                                            <Input value={motherAccount} className="textField" disabled type="text" />
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
                                                    <Input name="observations" onChange={e => handleChange(e)} value={transfer.observations} type="textarea" />
                                                </Col>
                                            </Row>
                                            :
                                            <Row className="mt-2">
                                                <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                    <Label>Afecto a ITF:</Label>
                                                </Col>
                                                <Col sm={4}>
                                                    <Input name="applyTaxes" onChange={e => handleChange(e)} className="textField" type="select">
                                                        <option value={false}>Seleccione</option>
                                                        <option value={true}>Si</option>
                                                        <option value={false}>No</option>
                                                    </Input>
                                                </Col>
                                            </Row>
                                    }
                                </Col>
                            </Row>
                        </div>
                        {
                            transfer.clientData != undefined && (transfer.clientData.hasOriginClientData === true || transfer.clientData.hasDestinationClientData === true) && transfer.settlementConceptCode !== '-1' ?
                                <>
                                    <br />
                                    <div className="custom">
                                        <h6 style={{ width: 220, backgroundColor: 'white', marginTop: '-12px', marginLeft: 40 }}><b style={{ marginLeft: 35 }}>DATOS DE CLIENTE</b></h6>

                                        <Row className="mt-2">
                                            {
                                                transfer.clientData != undefined && transfer.clientData.hasOriginClientData === true && transfer.settlementConceptCode !== '-1' ?
                                                    <Col sm={6} style={{ paddingLeft: '5%', paddingTop: '2%', paddingBottom: '2%' }}>
                                                        <Row className="bg-gray" style={{ maxWidth: '92%' }}>
                                                            <Label style={{ textAlign: "center" }}>CLIENTE</Label>
                                                        </Row>
                                                        <Row className="mt-2">
                                                            <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                                <Label>CCI:</Label>
                                                            </Col>
                                                            <Col sm={8}>
                                                                <Input className="textField" type="text" name={"accountNumber"} value={transfer.originClient.accountNumber}
                                                                    onChange={e => handleClientChange(e)} />
                                                            </Col>
                                                        </Row>
                                                        <Row className="mt-2">
                                                            <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                                <Label>Nombre:</Label>
                                                            </Col>
                                                            <Col sm={8}>
                                                                <Input className="textField" type="text" name={"clientName"} value={transfer.originClient.clientName}
                                                                    onChange={e => handleClientChange(e)} />
                                                            </Col>
                                                        </Row>
                                                        <Row className="mt-2">
                                                            <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                                <Label>Dirección:</Label>
                                                            </Col>
                                                            <Col sm={8}>
                                                                <Input className="textField" type="text" name={"address"} value={transfer.originClient.address}
                                                                    onChange={e => handleClientChange(e)} />
                                                            </Col>
                                                        </Row>
                                                        <Row className="mt-2">
                                                            <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                                <Label>Tipo Documento:</Label>
                                                            </Col>
                                                            <Col sm={8}>
                                                                <CustomDropdown id={"documentType"} value={transfer.originClient.documentType} setValue={e => handleClientChange(e)}
                                                                    values={identifications} />
                                                            </Col>
                                                        </Row>
                                                        <Row className="mt-2">
                                                            <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                                <Label>Nro Documento:</Label>
                                                            </Col>
                                                            <Col sm={8}>
                                                                <Input className="textField" type="text" name={"documentNumber"} value={transfer.originClient.documentNumber}
                                                                    onChange={e => handleClientChange(e)} />
                                                            </Col>
                                                        </Row>
                                                        <Row className="mt-2">
                                                            <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                                <Label>Afecto a ITF:</Label>
                                                            </Col>
                                                            <Col sm={4}>
                                                                <Input name="applyTaxes" onChange={e => handleChange(e)} className="textField" type="select">
                                                                    <option value={false}>Seleccione</option>
                                                                    <option value={true}>Si</option>
                                                                    <option value={false}>No</option>
                                                                </Input>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    :
                                                    ''
                                            }
                                            {
                                                transfer.clientData != undefined && transfer.clientData.hasDestinationClientData === true && transfer.settlementConceptCode !== '-1' ?
                                                    <Col sm={6} style={{ paddingLeft: '5%', paddingTop: '2%', paddingBottom: '2%' }}>
                                                        <Row className="bg-gray" style={{ maxWidth: '92%' }}>
                                                            <Label style={{ textAlign: "center" }}>BENEFICIARIO</Label>
                                                        </Row>
                                                        <Row className="mt-2">
                                                            <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                                <Label>CCI:</Label>
                                                            </Col>
                                                            <Col sm={8}>
                                                                <Input className="textField" type="text" name="accountNumber" value={transfer.destinationClient.accountNumber}
                                                                    onChange={e => handleBeneficiaryChange(e)} />
                                                            </Col>
                                                        </Row>
                                                        <Row className="mt-2">
                                                            <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                                <Label>Nombre:</Label>
                                                            </Col>
                                                            <Col sm={8}>
                                                                <Input className="textField" type="text" name="clientName" value={transfer.destinationClient.clientName}
                                                                    onChange={e => handleBeneficiaryChange(e)} />
                                                            </Col>
                                                        </Row>
                                                        <Row className="mt-2">
                                                            <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                                <Label>Tipo Documento:</Label>
                                                            </Col>
                                                            <Col sm={8}>
                                                                <CustomDropdown id={"documentType"} value={transfer.destinationClient.documentType} setValue={e => handleBeneficiaryChange(e)}
                                                                    values={identifications} />
                                                            </Col>
                                                        </Row>
                                                        <Row className="mt-2">
                                                            <Col style={{ paddingRight: 0, maxWidth: 200 }}>
                                                                <Label>Nro Documento:</Label>
                                                            </Col>
                                                            <Col sm={8}>
                                                                <Input className="textField" type="text" name="documentNumber" value={transfer.destinationClient.documentNumber}
                                                                    onChange={e => handleBeneficiaryChange(e)} />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    :
                                                    ''
                                            }
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
