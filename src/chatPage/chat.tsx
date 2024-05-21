import {Container, InputChat, LeftChat, MainPage, RightChat} from "./chat.styled";

export function ChatBot(){
    return(
        <MainPage>
            <Container>
            <LeftChat>
                <h4>Um monte de coisa a se falar</h4>
                <p>21 de Maio as 18:16</p>
            </LeftChat>
            <RightChat>
                <h4>Sim tenho bastante coisa para falar</h4>
                <p>21 de Maio as 18:16</p>
            </RightChat>
            <InputChat>
                <input type="text" placeholder="Type a message"></input>
                <img src="https://www.svgrepo.com/show/522268/send-email.svg"></img>
            </InputChat>
            </Container>
        </MainPage>
    )
}