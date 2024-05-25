import styled from "styled-components";


export const RightChat = styled.div`
    width: fit-content;
    max-width: calc(50% - 40px);
    padding: 20px 20px 0px 20px;
    margin-right: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    background: #1F51FF;
    border-radius: 20px;
    margin-left: auto;
    color: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    word-break: break-word;
    h3{
        font-size: 25px;
    }

    ol{
        margin: 0;
        padding-left: 20px;
    }

    li, strong{
        font-size: 16px;
        font-weight: 100;
        color: #fff;
        margin: 5px 0px;
    }

    h4{
        margin: 0;
        padding: 0;
        font-weight: 500;
    }

    p{
        color: #fff;
        font-size: 16px;
        margin: 0px 0px 10px 0px;
    }
    span{
            padding: 0;
            margin: 15px 0px;
            font-size: 12px;
            color: #fff;
            font-weight: 100;
            text-align: right;
    }

        
`;