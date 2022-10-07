import { Row } from "reactstrap"
import { CustomFooter, CustomNavbar } from '../components';


export const CustomCover = ({ children }) => {
    return (
        <>
            <Row >
                <CustomNavbar />
            </Row>
            {children}
            <Row>
                <CustomFooter />
            </Row>
        </>
    )
}
