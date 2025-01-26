import { Bot } from "grammy";

const token = process.env.BOT_TOKEN;
if (!token) throw new Error("BOT_TOKEN is not found");

const bot = new Bot(token);

(async () => {
  const result = await bot.api.setMyCommands([
    { command: "start", description: "Start the bot" },
  ]);
  console.log(`result: success=${result}`);

  const info = await bot.api.getMyCommands();
  console.log("current commands info:");
  console.log(info);
})();
