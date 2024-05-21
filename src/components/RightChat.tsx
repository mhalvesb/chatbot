import { RightChat } from "./RightChat.styled";


interface ChatProps{
    msg: string;
}

export function RightChatting(props: ChatProps){
    return(
        <RightChat>
            <h4>{props.msg}</h4>
            <p>21 de Maio as 18:16</p>
        </RightChat>
    )
}