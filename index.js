const { Telegraf } = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN) // Используем переменную окружения для токена

bot.start((ctx) => ctx.reply('Ты Лиза?')) // Команда /start отправляет сообщение с текстом "Ты Лиза?"

bot.on('text', (ctx) => { // Бот ожидает сообщение
  if (ctx.message.text.toLowerCase() === 'да') { // Если ответ "да"
    ctx.reply('Ну и динаху') // Отправляется сообщение "Ну и динаху"
  } else { // Если ответ "нет" или что-то другое
    ctx.reply('Все равно динаху') // Отправляется сообщение "Все равно динаху"
  }
})

bot.launch({ webhook: { domain: process.env.CYCLIC_APP_URL, hookPath: '/webhook' } }) // Запускаем бота с вебхуком
console.log("bot ready")
