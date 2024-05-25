import styled from "styled-components";




export const MainPage = styled.div`
width: 100vw;
height: 100vh;
background-color: #383a45;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;



    header{
        background-color: #20222c;
        color: #fff;
        width: 75vw;
        text-align: center;
        height: 100px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 50px;
        margin-top: 50px;

        @media(max-width: 800px){
        width: 90vw;
        }
        @media (max-width: 500px){
        width: 100vw;
        margin-top: 0px;
    }
    }

    p{
        margin: 0;
        padding: 0;
    }

    hr{
        width: calc(95% - 20px);
        border: 1px solid #767a88;
        z-index: 2;
        margin: 0;
        padding: 0;
    }
`;

export const Container = styled.div`
    width: 75vw;
    height: 75vh;
    border-radius: 0px 0px 10px 10px;
    
    background-color: #20222c;
    overflow-y: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;

    
    &::-webkit-scrollbar {
    background: #767a88;   
    width: 8px;
    border-radius: 0px 0px 10px 0px;
    }
    &::-webkit-scrollbar-thumb{
        background: #212444; 
        border-radius: 20px;
    }

    @media (max-width: 800px){
        width: 90vw;
    }

    @media (max-width: 500px){
        width: 100vw;
        height: 100vh;
    }
`;







export const InputChat = styled.div`
    width: calc(95% - 20px);
    border-radius: 20px;
    margin: auto;
    margin-top: auto;
    margin-bottom: 20px;
    height: 40px;
    position: sticky;
    bottom: 0;
    padding: 10px 10px;
    display: flex;
    align-items: center;
    background: #161823;

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
        background-color: #161823;
        border-radius: 10px;
    }

    button{
        background: #1F51FF;
        border: none;
        padding: 0;
        width: 80px;
        height: 40px;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
    }
`;



