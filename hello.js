function escapeHtml(str) {
  if (!str) {
    return '';
  }
  str = str.replace(/&/g, '&amp;');
  str = str.replace(/</g, '&lt;');
  str = str.replace(/>/g, '&gt;');
  return str;
}

function e(templates, ...values) {
  let result = '';
  for (let i = 0, len = templates.length; i < len; i++) {
    result += templates[i] + escapeHtml(values[i]); // templates = `こんにちは、${name}さん！`
  }
  return result;
}

let name = '<"小坂と上野">'
console.log(e(`こんにちは、${name}さん!`));