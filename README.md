# sample-wss
Sample WSS Server

## install

```bash
npm i
```

## start

```bash
npm start
```

## test

Given wss server running
When go to [Echo Test@websocket.org](https://www.websocket.org/echo.html)
When insert location `wss://echo.websocket.org`
When push connect & send
Then log should output connected & responded
Then browser inspector should show ws frames communication
