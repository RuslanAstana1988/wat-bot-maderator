let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐎𝐏𝐂𝐈𝐎𝐍𝐄𝐒`,
rows: [
{title: "✨ | ПРИВЕТСТВИЕ", description: "ВКЛЮЧИТЬ ИЛИ ВЫКЛЮЧИТЬ", rowId: `${usedPrefix + command} приветствие`},
{title: "🌎 | ПУБЛИЧНЫЙ", description: "БОТ СТАНОВИТСЯ ПУБЛИЧНЫМ ИЛИ ЧАСТНЫМ ИСПОЛЬЗОВАНИЕМ", rowId: `${usedPrefix + command} публичный`},
{title: "🥵 | МЕДИО 18+", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ +𝟷𝟾", rowId: `${usedPrefix + command} медио+18`},
{title: "🔗 | АНТИ ССЫЛКА", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} антиссылка`},   
{title: "🔗 | АНТИ ССЫЛКА 𝟸", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} антиссылка2`},    
{title: "🔎 | ОБНАРУЖИТЬ", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} обнаружить`},      
{title: "❗ | ОГРАНИЧИТЬ", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} ограничить`},    
{title: "☑️ | АВТО ЧТЕНИЕ", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} авточтение`},
{title: "🔊 | АУДИО", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} аудио`},
{title: "👾 | АВТО СТИКЕР", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} авто стикер`},
{title: "💬 | БЛОК", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} блок`},
{title: "🏢 | ТОЛЬКО ГРУППЫ", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} толькогруппы`},
{title: "❌ | АНТИВИДЕНЬЕ", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} антивиденье`},
{title: "📵 | ПРОТИВОУГОННЫЙ", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} противоугонный`},
{title: "💬 | ЧАСТНЫЙ", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} частный`},
{title: "🤬 | АНТИ ТОКСИЧНЫЙ", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} антитоксичный`},
{title: "🕸️ | АНТИТРАБА", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} антитраба`},
{title: "👎🏻 | АНТИ ИНДУС", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} антииндус`}, 
{title: "🤖 | МОДЕ БОТ", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} модебот`}, 
{title: "👑 | ТОЛЬКО АДМИН", description: "ВКЛЮЧИТЬ ИЛИ ОТКЛЮЧИТЬ", rowId: `${usedPrefix + command} толькоадмин`},    
]}, ]
//let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `┏━━━━━━━━━━━━━┓
┣ ඬ⃟ℹ️ _${usedPrefix}включить *приветствие*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *приветствие*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *публичный*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *публичный*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *медио+18*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *медио+18*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *антиссылка*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антиссылка*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *антиссылка2*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антиссылка2*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *обнаружить*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *обнаружить*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *ограничить*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *ограничить*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *блок*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *блок*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *толькогруппа*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *толькогруппа*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *авточтение*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *авточтение*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *аудио*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *аудио*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *антивиденье*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антивиденье*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *автостикер*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *автостикер*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *частный*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *частный*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *протвоугонный*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *противоугонный*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *антитоксичный*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антитоксичный*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *антитраба*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антитраба*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *антиарабик*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антиарабик*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *модебот*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *модебот*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *толькоадмин*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *толькоадмин*_
┗━━━━━━━━━━━━━┛`,
title: null,
buttonText: "𝐒𝐄𝐋𝐄𝐂𝐂𝐈𝐎𝐍𝐄 𝐀𝐐𝐔𝐢",
sections }

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'приветствие':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!(isAdmin || isOwner || isROwner)) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiviewonce = isEnable 
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'modoadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
case 'anticall':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
case 'antiprivado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
case 'modejadibot':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.modejadibot = isEnable
break        
case 'antitoxic':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiToxic = isEnable
break
case 'antitraba':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break
case 'antiarabes':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiArab = isEnable  
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
conn.sendButton(m.chat, `🗂️ 𝐎𝐏𝐂𝐈𝐎𝐍: ${type} 
🎚️ 𝐄𝐒𝐓𝐀𝐃𝐎: ${isEnable ? '𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾' : '𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾'}
📣 𝐏𝐀𝐑𝐀: ${isAll ? '𝙴𝚂𝚃𝙴 𝙱𝙾𝚃' : isUser ? '' : '𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃'}`, wm2, null, [[`${isEnable ? '✖️ 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 ✖️' : '✔️ 𝙰𝙲𝚃𝙸𝚅𝙰𝚁 ✔️'}`, `${isEnable ? `#disable ${type}` : `#enable ${type}`}`]], m)}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?[01])$/i
export default handler
