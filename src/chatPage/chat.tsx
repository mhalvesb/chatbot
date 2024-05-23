import {Container, InputChat, LeftChat, MainPage} from "./chat.styled";
import {RightChatting} from "../components/RightChat";
import React, {useState, useEffect, useRef} from "react";
import {createRoot} from "react-dom/client";
import {createPortal} from "react-dom";
import date from "date-and-time";
import pt from "date-and-time/locale/pt";

export function ChatBot(){

    const [message, setMessage] = useState("");
    const [addComponent, setComponent] = useState<JSX.Element[]>([]);
    const [actualMessage, setActualMessage] = useState("");
    const [messageTime, setMessageTime] = useState<string>("");
    const containerRef = useRef<HTMLDivElement | null>(null);
    async function AddNewMessage (e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
         setMessage(actualMessage);
         const time = new Date();
         date.locale(pt);
        const messageDate = date.format(time, "DD de MMMM H:mm");
        setMessageTime(messageDate);
        
        setActualMessage("");
    
    }

    

    function debbugingInput(e: React.ChangeEvent<HTMLInputElement>){
        setActualMessage(e.target.value);
    }

   


    useEffect(() =>{
            if(containerRef.current){
                containerRef.current.scrollTop = containerRef.current.scrollHeight;
            }
            if(message){
                setComponent(prevComponent => [...prevComponent, <RightChatting msg={message} dateAndTime={messageTime}/>]);
            }
    }, [message, messageTime]);
    return(
        <MainPage>
            <Container ref={containerRef}>
            <LeftChat>
                <h4>Um monte de coisa a se falar</h4>
                <p>21 de Maio as 18:16</p>
            </LeftChat>
            
            
            {addComponent}
            
                <InputChat>
                    <form onSubmit={(e) => AddNewMessage(e)}>
                        <input type="text" placeholder="Type a message" value={actualMessage} onChange={(e) => debbugingInput(e)}></input>
                        <button type="submit"></button>
                    </form>
                </InputChat>
            </Container>
            
            
        </MainPage>
    )
}