import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginOut } from "../../store/slices/auth";

export const CustomNavbar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(loginOut());
    }

    return (
        <div className="menu-bar">
            <ul>
                <li><NavLink className="textWhite textBottomBorder" to="/home">Incio</NavLink></li>
                <li><NavLink className="textWhite textBottomBorder" to="#">Configuración <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></NavLink>
                    <div className="dropdown-menu">
                        <ul>
                            <li ><NavLink to="#">Action</NavLink></li>
                            <li ><NavLink to="#">Another action</NavLink></li>
                            <li ><NavLink to="#">Something else here</NavLink></li>
                        </ul>
                    </div>
                </li>
                <li><NavLink className="textWhite textBottomBorder" to="#">Operación <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></NavLink>
                    <div className="dropdown-menu">
                        <ul>
                            <li ><NavLink to="/operacion/transferencias/nueva-transferencia">Nueva Transferencia</NavLink></li>
                            <li >
                                <NavLink to="#">Compra Moneda<i className="fas fa-caret-right"></i></NavLink>
                                <div className="dropdown-menu-1">
                                    <ul>
                                        <li ><NavLink to="/operacion/compra-moneda/nueva-compra">Nueva Compra</NavLink></li>
                                        <li ><NavLink to="/operacion/compra-moneda/consulta">Consultas</NavLink></li>
                                    </ul>
                                </div>
                            </li>
                            <li >
                                <NavLink to="#">Venta Moneda<i className="fas fa-caret-right"></i></NavLink>
                                <div className="dropdown-menu-1">
                                    <ul>
                                        <li ><NavLink to="/operacion/venta-moneda/nueva-venta">Nueva Venta</NavLink></li>
                                    </ul>
                                </div>
                            </li>
                            <li >
                                <NavLink to="#">Depósito Overnight<i className="fas fa-caret-right"></i></NavLink>
                                <div className="dropdown-menu-1">
                                    <ul>
                                        <li ><NavLink to="/operacion/deposito-overnight/nuevo-deposito">Nuevo Deposito</NavLink></li>
                                        <li ><NavLink to="/operacion/deposito-overnight/consulta-overnight">Consulta Overnight</NavLink></li>
                                    </ul>
                                </div>
                            </li>
                            <li >
                                <NavLink to="#">Repo Overnight<i className="fas fa-caret-right"></i></NavLink>
                                <div className="dropdown-menu-1">
                                    <ul>
                                        <li ><NavLink to="/operacion/repo-overnight/nueva-repo">Nuevo Repo Overnight</NavLink></li>
                                        <li ><NavLink to="/operacion/repo-overnight/consulta-repo">Consulta Repo Overnight</NavLink></li>
                                    </ul>
                                </div>
                            </li>
                            <li >
                                <NavLink to="#">Facilidad intradía<i className="fas fa-caret-right"></i></NavLink>
                                <div className="dropdown-menu-1">
                                    <ul>
                                        <li ><NavLink to="/operacion/facilidad-intradia/nueva-intradia">Nueva Intradía</NavLink></li>
                                        <li ><NavLink to="/operacion/facilidad-intradia/consulta-intradia">Consulta Intradía</NavLink></li>
                                    </ul>
                                </div>
                            </li>
                            <li >
                                <NavLink to="#">Repo Intradía<i className="fas fa-caret-right"></i></NavLink>
                                <div className="dropdown-menu-1">
                                    <ul>
                                        <li ><NavLink to="/operacion/repo-intradia/nueva-repo">Nueva Repo Intradía</NavLink></li>
                                        <li ><NavLink to="/operacion/repo-intradia/consulta-repo">Consulta Repo Intradía</NavLink></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li><NavLink className="textWhite textBottomBorder" to="#">Consultas locales <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></NavLink>
                    <div className="dropdown-menu">
                        <ul>
                            <li ><NavLink to="/local-consults/balance-movements">Movimiento de Saldo</NavLink></li>
                            <li ><NavLink to="/local-consults/operations-consult">Consultar Operaciones</NavLink></li>
                            <li ><NavLink to="/local-consults/auditory">Auditoría</NavLink></li>
                            <li ><NavLink to="/local-consults/transaction-report">Reporte de transacciones</NavLink></li>
                            <li ><NavLink to="/local-consults/estadistic-report-by-date">Reporte Estadístico por Fecha</NavLink></li>
                        </ul>
                    </div>
                </li>
                <li><NavLink className="textWhite textBottomBorder" to="#">Administración <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></NavLink>
                    <div className="dropdown-menu">
                        <ul>
                            <li ><NavLink to="#">Action</NavLink></li>
                            <li ><NavLink to="#">Another action</NavLink></li>
                            <li ><NavLink to="#">Something else here</NavLink></li>
                        </ul>
                    </div>
                </li>
                <li><NavLink className="textWhite textBottomBorder" to="#">Consultas BCRP <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></NavLink>
                    <div className="dropdown-menu">
                        <ul>
                            <li ><NavLink to="/consultasbcrp/saldos">Saldos</NavLink></li>
                            <li ><NavLink to="#">Another action</NavLink></li>
                            <li ><NavLink to="#">Something else here</NavLink></li>
                        </ul>
                    </div>
                </li>
                <li><NavLink className="textWhite textBottomBorder" to="#">Reportes <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></NavLink>
                    <div className="dropdown-menu">
                        <ul>
                            <li ><NavLink to="#">Action</NavLink></li>
                            <li ><NavLink to="#">Another action</NavLink></li>
                            <li ><NavLink to="#">Something else here</NavLink></li>
                        </ul>
                    </div>
                </li>
                <li><NavLink className="textWhite textBottomBorder" to="#">Auditoría <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></NavLink>
                    <div className="dropdown-menu">
                        <ul>
                            <li ><NavLink to="#">Action</NavLink></li>
                            <li ><NavLink to="#">Another action</NavLink></li>
                            <li ><NavLink to="#">Something else here</NavLink></li>
                        </ul>
                    </div>
                </li>
            </ul>
            <ul style={{marginRight: 30}}>
                <li><NavLink className="textWhite textBottomBorder" to="#">Interacción digital SAC <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></NavLink>
                    <div className="dropdown-menu">
                        <ul>
                            <li ><NavLink to="#">Action</NavLink></li>
                            <li ><NavLink to="#">Another action</NavLink></li>
                            <li ><NavLink onClick={handleLogout} to={'/login'}>Cerrar Sesión</NavLink></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}
