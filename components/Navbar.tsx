import React from 'react'


import { navLinks } from '../data/nav-links';

import styled from '@emotion/styled';

interface Props {
    activeMenu: boolean,    
}

const NavLinks = styled.div`${({activeMenu}: {activeMenu: boolean}) => 
    ` 
    display: flex;
    gap: clamp(1rem, 1.4rem, 1.7rem);
    color: white;
    font-style: capitalize;

    margin-top: clamp(2rem, 2vw, 3rem);
    padding: 5rem clamp(1rem, 2vw, 2rem); 
    
    transition: transform 500ms cubic-bezier(.13,.53,.38,.97);
    transform: ${activeMenu ? 'translateY(0) scale(1)' : 'translateY(120%) scale(0.9)'}; 
    overflow-x: sticky;

    img {
        object-fit: cover;
        border-radius: 1.5rem;
        width: max(60vw, 400px);
        aspect-ratio: 8 / 5;
        border-radius: 0.5rem;
        margin-top: 0.75rem;
        object-fit: cover;
    }

    `    
    }`;

const Wrapper = styled.div`${({activeMenu}:{activeMenu: boolean}) =>
`
    height: max(450px, 50vh);
    width: 100%;
    
    position: absolute;
    left: 0px;
    bottom: 0px;
    
    z-index: 2;
    overflow: hidden;

`
}
  
`;

const NavLink = styled.div`
    font-style: capitalize;   
    transition: transform ease 100ms;
    
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    cursor: pointer;

    img {
        
    }

`; 

const Span = styled.div`
    height: 1.3rem;
    width: 1.3rem; 
    background-color: #c38133; 
    border-radius: 50%; 
`


const Navbar = ({activeMenu}: Props) => {
    return (
        <Wrapper activeMenu={activeMenu}>
                <NavLinks activeMenu={activeMenu}>
                        <div className='flex gap-3 h-[50%]'>
                            {navLinks?.map((link, i) =>
                                (<NavLink key={i}>
                                    <div className='flex row gap-2 '>
                                        <Span />
                                        <h2 className='w-2 h-2'>{link.title}</h2>
                                    </div>
                                    <img src={link.image} alt={link.title} />
                            
                                </NavLink>)
                            )}
                        </div>
                    
                    
                </NavLinks>
        </Wrapper>
    )
}

export default Navbar