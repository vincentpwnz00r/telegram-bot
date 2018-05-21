'use strict'

const Telegraf = require('telegraf')
const {Markup} = Telegraf

const app = new Telegraf('') 

app.command('start', ({reply}) => reply("Welcome!") )

//app.startPolling()
const {PORT = 3000} = process.env
app.startWebhook('/', null, PORT)
