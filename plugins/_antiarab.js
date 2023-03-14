let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin, isOwner, isROwner} ) {
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[conn.user.jid] || {}
if (isBotAdmin && chat.antiArab && !isAdmin && !isOwner && !isROwner && bot.restrict) {
		
if (m.sender.startsWith('212' || '212')) {
m.reply(`*[❗] РЕДКИЕ АРАБСКИЕ ЦЫФРЫ В ЭТОЙ ГРУППЕ ЗАПРЕЩЕНЫ,ПОЭТОМУ ВЫ БУДИТЕ УДАЛЕНЫ ИЗ ГРУППЫ*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'удалить')
if (responseb[0].status === "404") вернуть  
}
   
if (m.sender.startsWith('265' || '265')) {
m.reply(`*[❗] РЕДКИЕ АРАБСКИЕ ЦЫФРЫ В ЭТОЙ ГРУППЕ ЗАПРЕЩЕНЫ,ПОЭТОМУ ВЫ БУДИТЕ УДАЛЕНЫ ИЗ ГРУППЫ*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'удалить')
if (responseb[0].status === "404") вернуть   
} 
	
if (m.sender.startsWith('92' || '92')) {
m.reply(`*[❗] РЕДКИЕ АРАБСКИЕ ЦЫФРЫ В ЭТОЙ ГРУППЕ ЗАПРЕЩЕНЫ,ПОЭТОМУ ВЫ БУДИТЕ УДАЛЕНЫ ИЗ ГРУППЫ*`)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'удалить')
if (responseb[0].status === "404") вернуть    
} 	
   
}}
export default handler
