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

export const RightChat = styled.div`
    width: fit-content;
    padding: 20px 25px 5px 15px;
    margin-right: 20px;
    margin-top: 20px;
    background: #1F51FF;
    border-radius: 20px;
    margin-left: auto;
    color: #fff;

        h4{
                margin: 0;
                padding: 0;
                font-weight: 500;
        }


        p{
            margin: 10px 0px;
            padding: 0;
            font-size: 12px;
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

    img{
        position: absolute;
        right: 10px;
        width: 30px;
        cursor: pointer;
    }
`;
