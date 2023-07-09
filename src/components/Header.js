import { eventWrapper } from '@testing-library/user-event/dist/utils'
import React from 'react'

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='main-info'>
        <h1>Testing</h1>
      </div>
    </div>
  )
};

export default Header