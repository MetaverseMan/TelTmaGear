import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Counter } from "./components/Counter";
import { Jetton } from "./components/Jetton";
import { TransferTon } from "./components/TransferTon";
import styled from "styled-components";
import { Button, FlexBoxCol, FlexBoxRow } from "./components/styled/styled";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";

const StyledApp = styled.div`
  background-color: #e8e8e8;
  color: black;

  @media (prefers-color-scheme: dark) {
    background-color: #222;
    color: white;
  }
  min-height: 100vh;
  padding: 20px 20px;
`;

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;
function handleClick(){
    alert('hello ')
    // 创建 <script> 元素
  const scriptElement = document.createElement('script');
  scriptElement.src = 'https://telegram.org/js/telegram-widget.js?14';
  scriptElement.async = true;
  scriptElement.setAttribute('data-telegram-login', 'lifetifulBot');
  scriptElement.setAttribute('data-size', 'large');
  scriptElement.setAttribute('data-onauth', 'onTelegramAuth(user)');
  scriptElement.setAttribute('data-request-access', 'write');

  // 将 <script> 元素添加到文档的 <body> 元素中
  document.body.appendChild(scriptElement);

    // <script async src="https://telegram.org/js/telegram-widget.js?14"
    // data-telegram-login="lifetifulBot"
    // data-size="large"
    // data-onauth="onTelegramAuth(user)"
    // data-request-access="write">
    // </script>
}
function App() {
  const { network } = useTonConnect();


  return (
    <StyledApp>
      <AppContainer>
        <FlexBoxCol>
          <FlexBoxRow>
            <TonConnectButton />
            <Button>
              {network 
                ? network === CHAIN.MAINNET
                  ? "mainnet"
                  : "testnet"
                : "N/A"}
            </Button>
            <Button onClick={handleClick}>
             Login with Telegram
            </Button>
          </FlexBoxRow>
          <Counter />
          <TransferTon />
          <Jetton />
        </FlexBoxCol>
      </AppContainer>
    </StyledApp>
  );
}

export default App;
