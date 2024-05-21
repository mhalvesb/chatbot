import {Container, InputChat, LeftChat, MainPage} from "./chat.styled";
import {RightChatting} from "../components/RightChat";
import React, {useState} from "react";

export function ChatBot(){

    const [message, setMessage] = useState<string[]>([]);


    function AddNewMessage(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const newMessage = (e.target as HTMLFormElement).elements[0] as HTMLInputElement;
        setMessage(prevMessages => [...prevMessages, newMessage.value]);
        newMessage.value = "";
    }
    return(
        <MainPage>
            <Container>
            <LeftChat>
                <h4>Um monte de coisa a se falar</h4>
                <p>21 de Maio as 18:16</p>
            </LeftChat>
            
            {message.map((msg, index) =>{
                return <RightChatting msg={msg} key={index}/>
            })}
            
            <InputChat>

            <form onSubmit={(e) => AddNewMessage(e)}>
                <input type="text" placeholder="Type a message"></input>
                <button type="submit"></button>
            </form>
                 
            </InputChat>
            </Container>
        </MainPage>
    )
}