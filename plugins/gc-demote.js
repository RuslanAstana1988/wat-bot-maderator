let handler = async (m, { conn,usedPrefix, text }) => {
if(isNaN(text) && !text.match(/@/g)){
	
}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}
	
if(!text && !m.quoted) return conn.reply(m.chat, `*[❗] ИСПОЛЬЗОВАНИЕ*\n\n*┯┷*\n*┠≽ ${usedPrefix}АДМИН @номер*\n*┠≽ ${usedPrefix}АДМИН -> ответит на сообщение*\n*┷┯*`, m)
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `*[ ⚠️ ] Введён не верный номер,пожалуйста введите правельный номер*`, m)
  
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} 
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'понизить')
conn.reply(m.chat, `*[ ✅ ] ÓRDENES RECIBIDAS*`, m)
}}
handler.help = ['*593xxx*','*@usuario*','*responder chat*'].map(v => 'demote ' + v)
handler.tags = ['группа']
handler.command = /^(demote|quitarpoder|удаление администратора)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
