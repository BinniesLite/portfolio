import { Dispatch, SetStateAction } from 'react'
import styled from '@emotion/styled';
import {ImCross} from 'react-icons/im'

interface Props {
    activeMenu: boolean,
    setActiveMenu: Dispatch<SetStateAction<boolean>>,
}

const Button = styled.div`${(props) =>
    `
        height: 5rem;
        width: 5rem;
        position: fixed;
        z-index: 4;
        left: 50%;
        bottom: 3rem;
        transform: translateX(-50%);
        background-color: rgb(182, 142, 113);
        border: none;
        border-radius: 5rem;
        outline: none;
        box-shadow: 0rem 0rem 4rem rgba(0 0 0 / 35%);
        cursor: pointer;
        transition: transform, background-color;
        transition-timing-function: ease;
        transition-duration: 400ms;

        &:hover {
            transform: translateX(-50%) scale(1.08);
        }

        font-size: 10rem;
`}   
`;

const NavButton = ({ activeMenu, setActiveMenu }: Props) => {
    return (
        <Button
            style={{
                backgroundColor: `${activeMenu ? '#548295' : '#c38133'}`,
            }}
            onClick={() => setActiveMenu(prev => !prev)}>
                
        </Button>
    )
}

export default NavButton