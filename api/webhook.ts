export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

import { Bot, webhookCallback } from "grammy";

const token = process.env.BOT_TOKEN;
if (!token) throw new Error("BOT_TOKEN is not found");

const bot = new Bot(token);

bot.command("start", async (ctx) => ctx.reply("Hello! I am a bot"));
bot.on("message:text", async (ctx) => ctx.reply("I got your message"));

export const POST = webhookCallback(bot, "std/http", {
  secretToken: process.env.WEBHOOK_TOKEN,
});
