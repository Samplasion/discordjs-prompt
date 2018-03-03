# discordjs-prompt

**discordjs-prompt** is a "prompter" for discord.js, which means it's made to ask prompts to the user.

## Usage
To install, use:

```$ npm install discordjs-prompt --save```

then require it in your project:

```js
const prompter = require("discordjs-prompt");
```

> **Please note**: this module is *directly dependant* from discord.js@12.0.0-dev.
To use this module, do the following:

```js
// <Message> is your message
let prompt = <Message>.prompt("Is this a prompt?");
let check = prompter.createReactionListener(client, prompt);
```

It should timeout in 20 seconds, if no answer was given.

# Alpha testing version
