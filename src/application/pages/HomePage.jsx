import React, { useState } from 'react'
import { CustomCover } from '../components';

export const HomePage = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <CustomCover>
      </CustomCover>
    </>
  )
}
