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
export const HeaderForm = styled.div`
    background: #29BE0E; 
`

export const PostsBackgroundColor = styled.div`
    background-color: #B4DFA4;

`
// Можно отдельно вынести стили для тегов ul и il
export const Navigate = styled.div`

    background-color: #247416;
    border: 2px solid #F0CC19;

    & li {
        float: left;
        list-style-type: none;
        display: block;
        padding: 10px 25px;
        margin-right: 10px;
        text-decoration: none;
        border-right: 2px solid #F0CC19;
    }

    & Button {
        color: #878787;
        background: #29BE0E;
    }

    // & li:last-child {
    //     border-right: none;
    // }

    &:after {
        content: " ";
        display: table;
        clear: both;
    }
  
    & ul {
        max-width: 1560px;
        margin: auto; 
    }
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
        font-weight: bold;
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

export const MainText = styled.span`
    color: #F0CC19;
    font-size: 24px;
`

export const TextLink = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: #F0CC19; 
    cursor: pointer;
`
export const TextHead = styled.span`
    color: #000;
    font-size: 24px;
`