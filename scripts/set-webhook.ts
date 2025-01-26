import { Bot } from "grammy";

const token = process.env.BOT_TOKEN;
if (!token) throw new Error("BOT_TOKEN is not found");

const bot = new Bot(token);

(async () => {
  const url = process.argv[2];
  if (!url) throw new Error("Usage: tsx scripts/set-webhook.ts <URL>");

  const result = await bot.api.setWebhook(url, {
    allowed_updates: ["message"],
    secret_token: process.env.WEBHOOK_TOKEN,
  });
  console.log(`result: success=${result}`);

  const info = await bot.api.getWebhookInfo();
  console.log("current webhook info:");
  console.log(info);
})();
