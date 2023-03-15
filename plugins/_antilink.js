let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*ЭЭЙ!! АНТИССЫЛКА АКТИВНА, НО ТЫ АДМИН 😎, Я ТЕБЯ ПРОЩАЮ!*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.sendButton(m.chat, `*「 АНТИ ССЫЛКА 」*\n*ПРОЩАЙ,СПАМЕРЮГА 👋, ${await this.getName(m.sender)} ТЫ НАРУШИЛ ПРАВИЛА ГРУППЫ , ТЫ БУДЕШЬ УНИЧТОЖЕН...!!*${isBotAdmin ? '' : '\n\n*[❗ИНФО❗] БОТ НЕ АДМИН, ОН НЕ МОЖЕТ ИСКЛЮЧАТЬ ЛЮДЕЙ*'}`, author, ['ОТКЛЮЧИТЬ АНТИССЫЛКИ', '/отключить антиссылки'], m)    
if (isBotAdmin && bot.restrict) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} else if (!bot.restrict) return m.reply('*[❗ИНФО❗] ВЛАДЕЛЕЦ БОТА НЕ ИМЕЕТ ВКЛЮЧЁННЫХ ОГРАНИЧЕНИИ (#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) СВЯЖИТЕСЬ С НИМ ЧТОБЫ ВКЛЮЧИТЬ ЕГО*')
}
return !0
}
