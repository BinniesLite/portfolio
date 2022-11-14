import React from 'react'
import styled from '@emotion/styled';

import Introduction from './Introduction';
import MansoryGrid from './MansoryGrid';

const Wrapper = styled.div`
  ${({activeMenu}: {activeMenu: boolean}) => `  
    background
    background-position:  center 0%;
    background-size: cover;
    background-color: white; 

    width: 100vw;
    height: 100vh;

    position: relative;  
    z-index: 1;

    img {
      object-fit: cover;
    }
    
    display: flex;
    

    transition: transform 500ms cubic-bezier(.13,.53,.38,.97);
    transform: ${activeMenu && 'translateY(-50%)'}
  
  `}
`

interface Props {
  activeMenu: boolean;
}


const Main = ({activeMenu}: Props) => {
  
  return (
    <Wrapper activeMenu={activeMenu} >
      <div className='flex flex-row gap-4'>
        <div
        style={{ maxHeight: 'calc(100vh - 1rem)',
          overflowY: 'scroll', overflowX: 'hidden'}}
        >
          <MansoryGrid />
        </div>
        <div
         style={{overflow: 'hidden'}}
         className='overflow-hidden'>
          <Introduction />
        </div>
      </div>
    </Wrapper>
  )
}

export default Main