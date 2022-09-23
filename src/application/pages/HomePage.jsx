import React, { useState } from 'react'
import { Row } from 'reactstrap'
import { CustomFooter, CustomNavbar } from '../components';

export const HomePage = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Row >
      <CustomNavbar />
      <CustomFooter />
    </Row>
  )
}
