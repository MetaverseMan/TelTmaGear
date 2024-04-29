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
import TelegramLoginButton from 'react-telegram-login';
import React, { useEffect } from 'react';
import ComingSoon from "./components/ComingSoon/comingsoon";
import { flexible } from 'amfe-flexible';



export const TelegramLogin = () => {
  const handleTelegramResponse = (response: { first_name: any; last_name: any; id: any; username: string; }) => {
    // 处理Telegram登录回调的逻辑
    alert(
      `Logged in as ${response.first_name} ${response.last_name} (${response.id}${
        response.username ? ', @' + response.username : ''
      })`
    );
  };

  return (
    <div>
      <TelegramLoginButton
        dataOnauth={handleTelegramResponse}
        botName="telbrella_bot"
        size="large"
        requestAccess="write"
      />
    </div>
  );
};

// export const TGLogin = () => {
//   return <>
//   <Script async src='https://telegram.org/js/telegram-widget.js?22' data-telegram-login='<你的机器人用户名>' data-request-access='write' data-size='large' data-radius='10' data-onauth='onTelegramAuth(user)'></Script>
//   <div id="my-special-div" onClick={() => {
//     window.location.href = 'https://oauth.telegram.org/auth?bot_id=6889929762&origin=https%3A%2F%2Fwww.telegramloveai.com&embed=1&request_access=write&return_to=https%3A%2F%2Fwww.telegramloveai.com%2Fen%2Flogin'
//   }}>
//     LOGIN
//   </div>
//   </>;
// };

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
// function handleClick(){
//     // alert('hello ')
//     // 创建 <script> 元素
//   const scriptElement = document.createElement('script');
//   scriptElement.src = 'https://telegram.org/js/telegram-widget.js?14';
//   scriptElement.async = true;
//   scriptElement.setAttribute('data-telegram-login', 'lifetifulBot');
//   scriptElement.setAttribute('data-size', 'large');
//   scriptElement.setAttribute('data-onauth', 'onTelegramAuth(user)');
//   scriptElement.setAttribute('data-request-access', 'write');

//   // 将 <script> 元素添加到文档的 <body> 元素中
//   document.body.appendChild(scriptElement);

//     // <script async src="https://telegram.org/js/telegram-widget.js?14"
//     // data-telegram-login="lifetifulBot"
//     // data-size="large"
//     // data-onauth="onTelegramAuth(user)"
//     // data-request-access="write">
//     // </script>
// }

// export const TelegramLogin = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://telegram.org/js/telegram-widget.js?22';
//     script.setAttribute('data-telegram-login', 'samplebot');
//     script.setAttribute('data-size', 'large');
//     script.setAttribute('data-onauth', 'onTelegramAuth(user)');
//     script.setAttribute('data-request-access', 'write');
//     document.head.appendChild(script);

//     // 定义回调函数
//     window.onTelegramAuth = (user: { first_name: any; last_name: any; id: any; username: string; }) => {
//       alert(
//         `Logged in as ${user.first_name} ${user.last_name} (${user.id}${
//           user.username ? ', @' + user.username : ''
//         })`
//       );
//     };

//     return () => {
//       // 在组件卸载时移除脚本
//       document.head.removeChild(script);
//       delete window.onTelegramAuth;
//     };
//   }, []);

//   return <div>{/* 组件内容 */}</div>;
// };

function App() {
  const { network } = useTonConnect();


  return (
    <StyledApp>
      {/* <AppContainer> */}
        {/* <FlexBoxCol> */}
          {/* <FlexBoxRow> */}
            {/* <TonConnectButton /> */}
            {/* <TelegramLogin /> */}
            {/* <Button>
              {network 
                ? network === CHAIN.MAINNET
                  ? "mainnet"
                  : "testnet"
                : "N/A"}
            </Button> */}
            {/* <Button onClick={TelegramLogin}>
             Login with Telegram
            </Button> */}
       
          {/* </FlexBoxRow> */}
          {/* <Counter />
          <TransferTon /> */}
          {/* <Jetton /> */}
        {/* </FlexBoxCol> */}
        <ComingSoon />
      {/* </AppContainer> */}
    </StyledApp>

  );
}

export default App;
