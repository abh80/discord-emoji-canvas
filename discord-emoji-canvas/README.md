# discord-emoji-canvas
An easy to use module for canvas which supports custom emojis of discord!!
# Installing
```bash
npm i discord-emoji-canvas
```
# Getting Started
- Typescript
```ts
import {Canvas,fillWithEmoji} from 'discord-emoji-canvas'
const canvas = Canvas.CreateCanvas(200,200) // creating a canvas
const ctx = canvas.getContext('2d') //context
ctx.fillStyle = '#ffffff' //selecting any color, i can only remember the hex of white x)
await fillWithEmoji(ctx,"hello",20,20) //context,text(supports emoji),x,y
const buffer = canvas.toBuffer()
```
- Javascript
```js
const {Canvas,fillWithEmoji} = require('discord-emoji-canvas')
const canvas = Canvas.CreateCanvas(200,200) // creating a canvas
const ctx = canvas.getContext('2d') //context
ctx.fillStyle = '#ffffff' //selecting any color, i can only remember the hex of white x)
await fillWithEmoji(ctx,"hello",20,20) //context,text(supports emoji),x,y
const buffer = canvas.toBuffer()
```

