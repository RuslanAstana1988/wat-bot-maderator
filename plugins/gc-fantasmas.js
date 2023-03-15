let handler = async (m, { conn, text, participants }) => {
let member = participants.map(u => u.id)
if(!text) {
var sum = member.length
} else {
var sum = text} 
var total = 0
var sider = []
for(let i = 0; i < sum; i++) {
let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
if((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
if (typeof global.db.data.users[member[i]] !== 'undefined'){
if(global.db.data.users[member[i]].whitelist == false){
total++
sider.push(member[i])}
}else {
total++
sider.push(member[i])}}}
if(total == 0) return conn.reply(m.chat, `*[❗] ЭТА ГРУППА АКТИВНА,В НЕЙ НЕТ МОНИТОРЩИКОВ :D*`, m) 
m.reply(`*[ ⚠ НЕ АКТИВНЫЙ ОБЗОР ⚠ ]*\n\n*ГРУППА:* ${await conn.getName(m.chat)}\n*УЧАСТНИК ГРУППЫ:* ${sum}\n\n*[ 👻 СПИСОК МОНИТОРЩИКОВ 👻 ]*\n${sider.map(v => '  👉🏻 @' + v.replace(/@.+/, '')).join('\n')}\n\n*ПРИМЕЧАНИЕ: ЭТО МОЖЕТ БЫТЬ НЕ ВЕРНО, БОТ НАЧИНАЕТ СЧИТАТЬ СООБЩЕНИЕ ПОСЛЕ АКТИВАЦИИ НОМЕРА*`, null, { упоменать: sider })}
handler.command = /^(verfantasmas|мониторщики|sider)$/i
handler.admin = true
handler.botAdmin = true
export default handler
