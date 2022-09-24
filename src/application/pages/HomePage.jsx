import React, { useState } from 'react'
import { Container, Row } from 'reactstrap'
import { CustomFooter, CustomNavbar } from '../components';

export const HomePage = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Row >
        <CustomNavbar />
      </Row>
      <Row>
        <CustomFooter />
      </Row>
    </>
  )
}
