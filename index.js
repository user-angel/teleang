const { Telegraf } = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN)
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Yo boi!!'));

app.listen(port, () =>
	console.log(`Your app is listening to http://localhost:${port}`)
);
bot.start((ctx) => ctx.reply('Ты Лиза?')) // Команда /start отправляет сообщение с текстом "Ты Лиза?"

bot.on('text', (ctx) => { // Бот ожидает сообщение
  if (ctx.message.text.toLowerCase() === 'да') { // Если ответ "да"
    ctx.reply('Ну и динаху') // Отправляется сообщение "Ну и динаху"
  } else { // Если ответ "нет" или что-то другое
    ctx.reply('Все равно динаху') // Отправляется сообщение "Все равно динаху"
  }
})

bot.launch() // Запускаем бота
console.log("bot ready")
