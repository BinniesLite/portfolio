import React from 'react'

import styled from '@emotion/styled';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    background-color: #f2efe6;
    
    align-items: start;
    justify-content: center;

    h1 {
        font-size: 2.8rem; 
        font-weight: 600;
        
        margin-left: 1.8rem; 
    }

`

const Introduction = () => {
  return (
    <Wrapper>
        <div className='mb-[10rem]'>
            <h1>I</h1>
            <p></p><h1>&nbsp;&nbsp;&nbsp;Build Stuff</h1>
            <h1>With Love & Magic</h1>
        </div>
    </Wrapper>
  )
}

export default Introduction