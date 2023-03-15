let linkRegex = /https:/i
export async function before(m, { isAdmin, isBotAdmin, text }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
if (chat.antiLink2 && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
const linkThisGroup2 = `https://www.youtube.com/`
const linkThisGroup3 = `https://youtu.be/`
if (m.text.includes(linkThisGroup)) return !0
if (m.text.includes(linkThisGroup2)) return !0
if (m.text.includes(linkThisGroup3)) return !0
}    
await conn.sendButton(m.chat, `*「 АНТИ ССЫЛКА 」*\n*СКУЧАТЬ НЕ БУДЕМ 👋, ${await this.getName(m.sender)} ТЫ НАРУШИЛ ПРАВИЛА ГРУППЫ , ТЫ БУДЕШЬ УНИЧТОЖЕН...!!*${isBotAdmin ? '' : '\n\n*[❗ИНФО❗] БОТ НЕ АДМИН, ОН НЕ МОЖЕТ ИСКЛЮЧАТЬ ЛЮДЕЙ*'}`, author, ['ОТКЛЮЧИТЬ АНТИССЫЛКИ', '/отключить антиссылки'], m)    
if (isBotAdmin && bot.restrict) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return
} else if (!bot.restrict) return m.reply('*[❗ИНФО❗] ВЛАДЕЛЕЦ БОТА НЕ ИМЕЕТ ВКЛЮЧЁННЫХ ОГРАНИЧЕНИИ (#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) СВЯЖИТЕСЬ С НИМ ЧТОБЫ ВКЛЮЧИТЬ ЕГО*')
}
return !0
}
