import { useState } from "react";

export const CustomNavbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [urlRoot, setUrlRoot] = useState("")

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active textWhite" aria-current="page" href="/">Incio</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Configuración
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li style={{paddingLeft: 0}}><a className="dropdown-item" href="#">Action</a></li>
                                    <li style={{paddingLeft: 0}}><a className="dropdown-item" href="#">Another action</a></li>
                                    <li style={{paddingLeft: 0}}><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Operación
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li style={{paddingLeft: 0}}><a className="dropdown-item" href="/operacion/transferencias/nueva-transferencia">Nueva Transferencia</a></li>
                                    <li style={{paddingLeft: 0}}><a className="dropdown-item" href="/operacion/compra-moneda/nueva-compra">Nueva Compra</a></li>
                                    <li style={{paddingLeft: 0}}><a className="dropdown-item" href="/operacion/venta-moneda/nueva-venta">Nueva Venta</a></li>
                                    <li style={{paddingLeft: 0}}><a className="dropdown-item" href="/operacion/compra-moneda/consulta">Consultas</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Consultas locales
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li style={{paddingLeft: 0}}><a className="dropdown-item" href="#">Action</a></li>
                                    <li style={{paddingLeft: 0}}><a className="dropdown-item" href="#">Another action</a></li>
                                    <li style={{paddingLeft: 0}}><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Administración
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li style={{paddingLeft: 0}}><a className="dropdown-item" href="#">Action</a></li>
                                    <li style={{paddingLeft: 0}}><a className="dropdown-item" href="#">Another action</a></li>
                                    <li style={{paddingLeft: 0}}><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Consultas BCRP
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li style={{paddingLeft: 0}}><a className="dropdown-item" href="/consultasbcrp/saldos">Saldos</a></li>
                                    <li style={{paddingLeft: 0}}><a className="dropdown-item" href="#">Another action</a></li>
                                    <li style={{paddingLeft: 0}}><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Reportes
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li style={{paddingLeft: 0}}><a className="dropdown-item" href="#">Action</a></li>
                                    <li style={{paddingLeft: 0}}><a className="dropdown-item" href="#">Another action</a></li>
                                    <li style={{paddingLeft: 0}}><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Auditoría
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li style={{paddingLeft: 0}}><a className="dropdown-item" href="#">Action</a></li>
                                    <li style={{paddingLeft: 0}}><a className="dropdown-item" href="#">Another action</a></li>
                                    <li style={{paddingLeft: 0}}><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <nav>
                    <div className="container-fluid" style={{marginRight: 30}}>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Interacción digital SAC
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li style={{paddingLeft: 0}}><a className="dropdown-item" href="#">Action</a></li>
                                        <li style={{paddingLeft: 0}}><a className="dropdown-item" href="#">Another action</a></li>
                                        <li style={{paddingLeft: 0}}><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </nav>
        </>
    )
}
