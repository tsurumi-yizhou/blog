const limitation = 40;

export function cut(text: string) {
  if (text.length >= limitation) {
    return text.slice(0, limitation) + "......";
  } else {
    return text + " ".repeat(limitation - text.length);
  }
}

export function count(text: string) {
  var count = 0;
  for (const ch of text) {
    if (ch.match(/[\u4e00-\u9fa5]/)) {
      count++;
    } else if (ch.match(/[\u9FA6-\u9fcb]/)) {
      count++;
    }
  }
  const temp = text
    .replace(/[^\w-]/g, " ")
    .split(/\s+/)
    .filter((w) => {
      return ["", "-", "_"].indexOf(w.trim()) === -1;
    });
  count += temp.length;
  return count;
}
