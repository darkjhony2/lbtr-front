import { useState } from "react";
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarToggler, NavItem, Row, UncontrolledDropdown } from "reactstrap"
import { HomePage } from "../pages/HomePage";

export const CustomNavbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [urlRoot, setUrlRoot] = useState("")

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Row style={{padding: 0, margin: 0}}>
            <Navbar className='ps-3 pe-3 navbar'
                expand="md"
                light>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav
                        className="me-auto"
                        navbar>
                        <NavItem>
                            <span onClick={e => window.location.href = "/"} style={{ color: 'rgb(238, 232, 232)', marginRight: 10, cursor: 'pointer', marginLeft: 15 }} className="navbar-item-border mt-2">Inicio</span>
                        </NavItem>
                        <NavItem>
                            <UncontrolledDropdown
                                inNavbar
                                nav>
                                <DropdownToggle
                                    style={{ color: 'rgb(238, 232, 232)' }}
                                    caret
                                    nav>
                                    <span className="navbar-item-border">Configuración</span>
                                </DropdownToggle>
                                <DropdownMenu end>
                                    <DropdownItem href={urlRoot + '/subjects'}>
                                        <span>Opción 1</span>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </NavItem>
                        <NavItem>
                            <UncontrolledDropdown
                                inNavbar
                                nav>
                                <DropdownToggle
                                    style={{ color: 'rgb(238, 232, 232)' }}
                                    caret
                                    nav>
                                    <span className="navbar-item-border">Operación</span>
                                </DropdownToggle>
                                <DropdownMenu end>
                                    <DropdownItem>
                                        <DropdownItem href={urlRoot + '/transferencias/nueva-transferencia'}>
                                            <span>Nueva Transferencia</span>
                                        </DropdownItem>
                                    </DropdownItem>
                                </DropdownMenu>

                            </UncontrolledDropdown>
                        </NavItem>
                        <NavItem>
                            <UncontrolledDropdown
                                inNavbar
                                nav>
                                <DropdownToggle
                                    style={{ color: 'rgb(238, 232, 232)' }}
                                    caret
                                    nav>
                                    <span className="navbar-item-border">Consultas locales</span>
                                </DropdownToggle>
                                <DropdownMenu end>
                                    <DropdownItem href={urlRoot + '/subjects'}>
                                        <span>Opción 1</span>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </NavItem>
                        <NavItem>
                            <UncontrolledDropdown
                                inNavbar
                                nav>
                                <DropdownToggle
                                    style={{ color: 'rgb(238, 232, 232)' }}
                                    caret
                                    nav>
                                    <span className="navbar-item-border">Administración</span>
                                </DropdownToggle>
                                <DropdownMenu end>
                                    <DropdownItem href={urlRoot + '/subjects'}>
                                        <span>Opción 1</span>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </NavItem>
                        <NavItem>
                            <UncontrolledDropdown
                                inNavbar
                                nav>
                                <DropdownToggle
                                    style={{ color: 'rgb(238, 232, 232)' }}
                                    caret
                                    nav>
                                    <span className="navbar-item-border">Consultas BCRP</span>
                                </DropdownToggle>
                                <DropdownMenu end>
                                    <DropdownItem href={urlRoot + '/subjects'}>
                                        <span>Opción 1</span>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </NavItem>
                        <NavItem>
                            <UncontrolledDropdown
                                inNavbar
                                nav>
                                <DropdownToggle
                                    style={{ color: 'rgb(238, 232, 232)' }}
                                    caret
                                    nav>
                                    <span className="navbar-item-border">Reportes</span>
                                </DropdownToggle>
                                <DropdownMenu end>
                                    <DropdownItem href={urlRoot + '/subjects'}>
                                        <span>Opción 1</span>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </NavItem>
                        <NavItem>
                            <UncontrolledDropdown
                                inNavbar
                                nav>
                                <DropdownToggle
                                    style={{ color: 'rgb(238, 232, 232)' }}
                                    caret
                                    nav>
                                    <span className="navbar-item-border">Auditoría</span>
                                </DropdownToggle>
                                <DropdownMenu end>
                                    <DropdownItem href={urlRoot + '/subjects'}>
                                        <span>Opción 1</span>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </NavItem>
                        <NavItem style={{ marginLeft: '40%' }}>
                            <UncontrolledDropdown
                                inNavbar
                                nav>
                                <DropdownToggle
                                    style={{ color: 'rgb(238, 232, 232)' }}
                                    caret
                                    nav>
                                    <span className="navbar-item-border">Interacción digital SAC</span>
                                </DropdownToggle>
                                <DropdownMenu end>
                                    <DropdownItem>
                                        <span>Opción 1</span>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Row>
    )
}