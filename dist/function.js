"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canvas_1 = require("canvas");
const twemoji_parser_1 = require("twemoji-parser");
const fillWithEmoji = async (ctx, text, x, y) => {
    if (!text)
        throw new Error('(discord-emoji-canvas) No Text was provided');
    if (!ctx)
        throw new Error(`(discord-emoji-canvas) No Context was provided`);
    if (!x)
        throw new Error(`(discord-emoji-canvas) No x axis was provided`);
    if (!y)
        throw new Error(`(discord-emoji-canvas) No y axis was provided`);
    // starting function from here
    let emojiPercent1 = 0.1;
    let emojiPercent2 = 0.1;
    let fontSize = parseInt(ctx.font);
    let emojiSideMargin = fontSize * emojiPercent1;
    let emojiUpMargin = fontSize * emojiPercent2;
    let entity = text.split(" ");
    const baseLine = ctx.measureText('').alphabeticBaseline;
    let currWidth = 0;
    for (let i = 0; i < entity.length; i++) { //starting loop
        const ent = entity[i]; //getting current word or emoji
        let parsed = twemoji_parser_1.parse(ent); //parsing to check later if emote is an twemoji
        if (ent.match(/<?(a:|:)\w*:(\d{17}|\d{18})>/)) { //checking if custom emote or not
            let matched = ent.match(/<?(a:|:)\w*:(\d{17}|\d{18})>/);
            let img = await canvas_1.loadImage(`https://cdn.discordapp.com/emojis/${matched[2]}.png`);
            ctx.drawImage(img, x + currWidth + emojiSideMargin, y + emojiUpMargin - fontSize - baseLine, fontSize, fontSize);
            currWidth += fontSize + (emojiSideMargin * 2) + fontSize / 5;
        }
        else if (parsed.length > 0) { //checking if twemoji or not
            let img = await canvas_1.loadImage(parsed[0].url);
            ctx.drawImage(img, x + currWidth + emojiSideMargin, y + emojiUpMargin - fontSize - baseLine, fontSize, fontSize);
            currWidth += fontSize + (emojiSideMargin * 2) + fontSize / 5;
        }
        else { //if string
            ctx.fillText(ent, x + currWidth, y);
            currWidth += ctx.measureText(ent).width + fontSize / 5;
        }
    }
};
exports.default = fillWithEmoji;
//# sourceMappingURL=function.js.map