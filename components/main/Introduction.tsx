import React from 'react'

import styled from '@emotion/styled';

import classes from './Introduction.module.css';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    background-color: #f2efe6;
    
    align-items: start;
    justify-content: center;

    h1 {
        font-size: clamp(2.5rem, 3rem, 3rem + 25px); 
        font-weight: 600;    
        margin-left: 1.8rem; 
    }

    height: 100%;
    width: 100%;


`

const Introduction = () => {
  return (
    <Wrapper className={classes.intro}>
        <div >
            <div className={classes.box}>
              <h1 className={classes.heading_1}>Made with</h1>
            </div>
            <div className={classes.box}>
              <h1 className={classes.heading_2}>Love and Passion</h1>
            </div>
            <div className={classes.box}>
              <h1 className={classes.heading_3}>Quan Le</h1>
            </div>
        </div>
    </Wrapper>
  )
}

export default Introduction