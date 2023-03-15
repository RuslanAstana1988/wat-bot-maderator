let handler = async (m, { conn, text, command, usedPrefix }) => {
if (m.mentionedJid.includes(conn.user.jid)) return	
let pp = './src/warn.jpg'
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
let bot = global.db.data.settings[conn.user.jid] || {}
let warntext = `*[❗] ОТМЕТИТЬ ЧЕЛОВЕКА,ОТВЕЧАЮЩЕГО НА СООБЩЕНИЯ В ГРУППЕ ЧТОБЫ ЕГО ПРЕДУПРЕДИТЬ*\n\n*—◉ ПОЛЬЗОВАТЕЛЬ:*\n*${usedPrefix + command} @${global.suittag}*`
if (!who) throw m.reply(warntext, m.chat, { mentions: conn.parseMention(warntext)}) 
user.warn += 1
  
await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`} ПОЛУЧЕНО ПРЕДУПРЕЖДЕНИЯ В ЭТОЙ ГРУППЕ!`, `*ADVERTENCIAS ${user.warn}/3*\n\n${wm}`, pp, [['📋 СПИСОК 📋', '#listwarn']], m, { mentions: [who] })
	
if (user.warn >= 3) {
if (!bot.restrict) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] ВЛАДЕЛЕЦ БОТА НЕ ИМЕЕТ ВКЛЮЧЁННЫХ ОГРАНИЧЕНИЙ (#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) СВЯЖИТЕСЬ С НИМ ЧТОБЫ ВКЛЮЧИТЬ ИХ*')        
user.warn = 0
await m.reply(`ПРЕДУПРЕЖДАЛ ВАС НЕСКОЛЬКО РАЗ!!\n*@${who.split`@`[0]}* У ВАС БЫЛО *3* ПРЕДУПРЕЖДЕНИЯ,ТЕПЕРЬ ВЫ БУДЕТЕ УДАЛЕНЫ 👽`, null, { mentions: [who]})
//user.banned = true
await conn.groupParticipantsUpdate(m.chat, [who], 'удалить') 
} 
return !1
}
handler.command = /^(advertir|предупреждение|warn|warning)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
