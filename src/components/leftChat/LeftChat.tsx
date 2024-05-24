import { LeftChat } from "./LeftChat.styled"


interface LeftProps{
    responses: string;
    dateAndTime: string;
}

export function LeftChatting(props: LeftProps){
    return(
        <LeftChat>
            <h4>{props.responses}</h4>
            <p>21 de Maio as 18:16</p>
        </LeftChat>
    )
}