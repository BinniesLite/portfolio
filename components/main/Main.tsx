import React from 'react'
import styled from '@emotion/styled';

import Introduction from './Introduction';
import MansoryGrid from './MansoryGrid';

import classes from './Main.module.css';
const Wrapper = styled.div`
  ${({activeMenu}: {activeMenu: boolean}) => `  
    background-color: white; 

    width: 100vw;
    height: 100vh;

    position: relative;  
    z-index: 1;

    img {
      object-fit: cover;
    }
    
    display: flex;
    
    overflow: hidden;

    transition: transform 400ms cubic-bezier(.13,.53,.38,.97);
    transform: ${activeMenu && 'translateY(-50%)'}
  
  `}
`

interface Props {
  activeMenu: boolean;
}


const Main = ({activeMenu}: Props) => {
  
  return (
    <Wrapper style={{width: '100%'}} activeMenu={activeMenu} >
      <div className='flex flex-row gap-3 w-full'>
        <div
        className="w-full mr-[-50px] pr-[50px]"
        style={{ maxHeight: 'calc(100vh - 1rem)',
          overflowY: 'scroll', overflowX: 'hidden'}}
        >
          <MansoryGrid />
        </div>
          <Introduction />
      </div>
    </Wrapper>
  )
}

export default Main