import styled from "styled-components";




export const MainPage = styled.div`
width: 100vw;
height: 100vh;
background-color: #000;
`;

export const Container = styled.div`
    width: 75vw;
    height: 75vh;
    margin: auto;
    background-color: #f5f5f5;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;


export const LeftChat = styled.div`
    width: fit-content;
    padding: 20px 25px 5px 15px;
    margin-left: 20px;
    margin-top: 20px;
    background: #fff;
    border-radius: 20px;
    text-align: start;
    h4{
        margin: 0;
        padding: 0;
        font-weight: 500;
    }
    p{
            padding: 0;
            margin: 10px 0px;
            font-size: 12px;
            color: #A9A9A9;
    }
`;




export const InputChat = styled.div`
    width: calc(100% - 20px);
    height: 40px;
    position: absolute;
    bottom: 0;
    padding: 10px 10px;
    display: flex;
    align-items: center;
    background: #555;

    form{
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
    }
    input{
        width: calc(100% - 60px);
        font-size: 14px;
        font-weight: 200;
        color: #fff;
        height: 100%;
        padding: 0;
        padding-left: 20px;
        margin: 0;
        border: 0;
        outline: none;
        background-color: #888;
        border-radius: 10px;
    }

    button{
        background-image: url("https://www.svgrepo.com/show/522268/send-email.svg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-color: transparent;
        border: none;
        position: absolute;
        padding: 0;
        right: 10px;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
`;
