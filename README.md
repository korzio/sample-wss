# sample-wss

Simple WSS Server on NodeJS using [ws](https://www.npmjs.com/package/ws)

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
When go to [Echo Test@websocket.org](https://www.websocket.org/echo.html)
When insert location `wss://localhost:8443`
When push connect & send
Then log should output connected & responded messages
Then browser inspector should show ws frames communication
```
