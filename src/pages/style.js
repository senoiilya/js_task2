import styled from "styled-components";

export const MainLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #247416; 
`

export const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 300px;
    border: 2px solid #F0CC19; 
    border-radius: 8px;
    margin: 15px; 
    background-color: #29BE0E
`

export const Input = styled.input`
    width: 300px;
    height: 20px;
    padding: 6px 16px;
    border: 2px solid #F0CC19;
    border-radius: 8px;
    background: transparent;
    color: #fff; 
    outline: none;
`

export const Button = styled.button`
    width: 336px;
    height: 36px;
    padding: 8px 16px;
    background: #247416;
    border-radius: 8px;
    border: 2px solid #F0CC19;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {           
        color: #fff;
        background: #F88A30; 
    }

    &:active {
        color: #fff;
        background: #F88A30;
    }

    &:disabled {
        color: #878787;
        background: #F0CC19;
    }
`

export const H1 = styled.span`
    color: #fff;
    font-size: 20px;
    margin-bottom: 15px;
`
export const Text = styled.span`
    color: #fff;
    font-size: 14px;
`
export const TextLink = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: #F0CC19; 
    cursor: pointer;
`