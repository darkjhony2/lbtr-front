import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export const CustomNavbar = () => {

    return (
        <div className="menu-bar">
            <ul>
                <li><a className="textWhite textBottomBorder" href="/">Incio</a></li>
                <li><a className="textWhite textBottomBorder" href="#">Configuración <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></a>
                    <div className="dropdown-menu">
                        <ul>
                            <li ><a href="#">Action</a></li>
                            <li ><a href="#">Another action</a></li>
                            <li ><a href="#">Something else here</a></li>
                        </ul>
                    </div>
                </li>
                <li><a className="textWhite textBottomBorder" href="#">Operación <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></a>
                    <div className="dropdown-menu">
                        <ul>
                            <li ><a href="/operacion/transferencias/nueva-transferencia">Nueva Transferencia</a></li>
                            <li >
                                <a href="#">Compra Moneda<i className="fas fa-caret-right"></i></a>
                                <div className="dropdown-menu-1">
                                    <ul>
                                        <li ><a href="/operacion/compra-moneda/nueva-compra">Nueva Compra</a></li>
                                        <li ><a href="/operacion/compra-moneda/consulta">Consultas</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li >
                                <a href="#">Venta Moneda<i className="fas fa-caret-right"></i></a>
                                <div className="dropdown-menu-1">
                                    <ul>
                                        <li ><a href="/operacion/venta-moneda/nueva-venta">Nueva Venta</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li >
                                <a href="#">Depósito Overnight<i className="fas fa-caret-right"></i></a>
                                <div className="dropdown-menu-1">
                                    <ul>
                                        <li ><a href="/operacion/deposito-overnight/nuevo-deposito">Nuevo Deposito</a></li>
                                        <li ><a href="/operacion/deposito-overnight/consulta-overnight">Consulta Overnight</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li >
                                <a href="#">Repo Overnight<i className="fas fa-caret-right"></i></a>
                                <div className="dropdown-menu-1">
                                    <ul>
                                        <li ><a href="/operacion/repo-overnight/nueva-repo">Nuevo Repo Overnight</a></li>
                                        <li ><a href="/operacion/repo-overnight/consulta-repo">Consulta Repo Overnight</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li >
                                <a href="#">Facilidad intradía<i className="fas fa-caret-right"></i></a>
                                <div className="dropdown-menu-1">
                                    <ul>
                                        <li ><a href="/operacion/facilidad-intradia/nueva-intradia">Nueva Intradía</a></li>
                                        <li ><a href="/operacion/facilidad-intradia/consulta-intradia">Consulta Intradía</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li >
                                <a href="#">Repo Intradía<i className="fas fa-caret-right"></i></a>
                                <div className="dropdown-menu-1">
                                    <ul>
                                        <li ><a href="/operacion/repo-intradia/nueva-repo">Nueva Repo Intradía</a></li>
                                        <li ><a href="/operacion/repo-intradia/consulta-repo">Consulta Repo Intradía</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li><a className="textWhite textBottomBorder" href="#">Consultas locales <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></a>
                    <div className="dropdown-menu">
                        <ul>
                            <li ><a href="/local-consults/balance-movements">Movimiento de Saldo</a></li>
                            <li ><a href="/local-consults/operations-consult">Consultar Operaciones</a></li>
                            <li ><a href="/local-consults/auditory">Auditoría</a></li>
                            <li ><a href="/local-consults/transaction-report">Reporte de transacciones</a></li>
                            <li ><a href="/local-consults/estadistic-report-by-date">Reporte Estadístico por Fecha</a></li>
                        </ul>
                    </div>
                </li>
                <li><a className="textWhite textBottomBorder" href="#">Administración <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></a>
                    <div className="dropdown-menu">
                        <ul>
                            <li ><a href="#">Action</a></li>
                            <li ><a href="#">Another action</a></li>
                            <li ><a href="#">Something else here</a></li>
                        </ul>
                    </div>
                </li>
                <li><a className="textWhite textBottomBorder" href="#">Consultas BCRP <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></a>
                    <div className="dropdown-menu">
                        <ul>
                            <li ><a href="/consultasbcrp/saldos">Saldos</a></li>
                            <li ><a href="#">Another action</a></li>
                            <li ><a href="#">Something else here</a></li>
                        </ul>
                    </div>
                </li>
                <li><a className="textWhite textBottomBorder" href="#">Reportes <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></a>
                    <div className="dropdown-menu">
                        <ul>
                            <li ><a href="#">Action</a></li>
                            <li ><a href="#">Another action</a></li>
                            <li ><a href="#">Something else here</a></li>
                        </ul>
                    </div>
                </li>
                <li><a className="textWhite textBottomBorder" href="#">Auditoría <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></a>
                    <div className="dropdown-menu">
                        <ul>
                            <li ><a href="#">Action</a></li>
                            <li ><a href="#">Another action</a></li>
                            <li ><a href="#">Something else here</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
            <ul style={{marginRight: 30}}>
                <li><a className="textWhite textBottomBorder" href="#">Interacción digital SAC <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></a>
                    <div className="dropdown-menu">
                        <ul>
                            <li ><a href="#">Action</a></li>
                            <li ><a href="#">Another action</a></li>
                            <li ><a href="#">Something else here</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}
