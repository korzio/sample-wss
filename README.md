# sample-wss

Simple Secure WebSocket Server on NodeJS using [ws](https://www.npmjs.com/package/ws).
Try `wss` protocol locally.

## install

```bash
npm i
```

## start

```bash
npm start
```

## test

```gherkin
Given wss server running
When go to https://www.websocket.org/echo.html
When insert location wss://localhost:8443
When push connect & send
Then log should output connected & responded messages
Then browser inspector should show wss frames communication
```
