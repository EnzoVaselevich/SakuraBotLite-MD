import translate from '@vitalets/google-translate-api';
import fetch from 'node-fetch';
const handler = async (m, {text, command, args, usedPrefix}) => {
  if (!text) throw `*✨🌵 𝖨𝗇𝗀𝗋𝖾𝗌𝖾 𝖴𝗇 𝖳𝖾𝗑𝗍𝗈 𝖯𝖺𝗋𝖺 𝖧𝖺𝖻𝗅𝖺𝗋 𝖢𝗈𝗇 𝖲𝗂𝗆𝗂 𝖮 𝖭𝗂𝗅𝗈𝗎*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾: ${usedPrefix}nilou Hola Bot*`;
  try {
    const api = await fetch('https://api.simsimi.net/v2/?text=' + text + '&lc=es');
    const resSimi = await api.json();
    m.reply(resSimi.success);
  } catch {
    try {
      if (text.includes('Hola')) text = text.replace('Hola', 'Hello');
      if (text.includes('hola')) text = text.replace('hola', 'Hello');
      if (text.includes('HOLA')) text = text.replace('HOLA', 'HELLO');
      const reis = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + text);
      const resu = await reis.json();
      const nama = m.pushName || '1';
      const api = await fetch('http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=' + nama + '&msg=' + resu[0][0][0]);
      const res = await api.json();
      const reis2 = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=' + res.cnt);
      const resu2 = await reis2.json();
      m.reply(resu2[0][0][0]);
    } catch {
      throw `*[❗] 𝙴𝚁𝚁𝙾𝚁, 𝚅𝚄𝙴𝙻𝚅𝙴 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*`;
    }
  }
};
handler.help = ['simi', 'bot'].map((v) => v + ' <teks>');
handler.tags = ['fun'];
handler.command = /^((sim)?simi|sakura|alexa|bot)$/i;
export default handler;
