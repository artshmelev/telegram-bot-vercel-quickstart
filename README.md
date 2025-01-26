# How to use it

## Click and deploy it on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fartshmelev%2Ftelegram-bot-vercel-quickstart&env=BOT_TOKEN,WEBHOOK_TOKEN&envDescription=Telegram%20bot%20token%20and%20secret%20phrase%20for%20webhook%20validation&project-name=telegram-bot-vercel-quickstart&repository-name=telegram-bot-vercel-project)

## Update Telegram bot settings

Do it inside your repo:

1. Create **.env** file
```
BOT_TOKEN=<YOUR_BOT_TOKEN_HERE>
WEBHOOK_TOKEN=<YOUR_RANDOM_SECRET_PHRASE_HERE>
```
2. Set webhook for getting updates to your bot
```
pnpm set-webhook <YOUR_DEPLOYMENT_URL_HERE>
```
3. Set bot commands ( */start* command only by default)
```
pnpm set-commands
```
