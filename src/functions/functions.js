export const fillMentions = (editor, names, setContent) => {
  if (names && names.length > 0) {
    const string = editor.current.value;
    // search for the "key" or "key2" strings from "names" in the "string"
    const mentions1 = names.filter(name => string.includes(name.key));
    const mentions2 = names.filter(name => string.includes(name.key2));
    // if there are "mentions" in the "string"
    if (mentions1.length > 0 || mentions2.length > 0) {
      let mentions, lastMention, start, end;
      if (mentions1.length > 0) {
        mentions = mentions1;
        // get the last "mention" from the "string"
        lastMention = mentions[mentions.length - 1];
        // get the "start" and "end" indexes of the "lastMention" in the "string"
        start = string.indexOf(lastMention.key);
        end = start + lastMention.key.length;
      } else if (mentions2.length > 0) {
        mentions = mentions2;
        // get the last "mention" from the "string"
        lastMention = mentions[mentions.length - 1];
        // get the "start" and "end" indexes of the "lastMention" in the "string"
        start = string.indexOf(lastMention.key2);
        end = start + lastMention.key2.length;
      }
      // get the "value" of the "lastMention"
      const value = lastMention.value;
      // replace the "lastMention" in the "string" with the "value"
      const newString = string.substring(0, start) + value + string.substring(end);
      setContent(newString);
    }
  }
}

export const replaceSpanContent = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const spans = doc.querySelectorAll('span[data-value]');
  spans.forEach(span => {
    const icon = span.querySelector('i');
    if (icon) {
      icon.remove(); // Remove the icon temporarily
    }
    // Change the text content of the span without affecting the i element
    if (span.firstChild) {
      span.firstChild.nodeValue = '<' + span.getAttribute('data-value').slice(2, -2) + '>';
    }
    if (icon) {
      span.appendChild(icon); // Append the icon back to the span
    }
  });
  return doc.body.innerHTML;
}

export const restoreSpanContent = (html, names) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const spans = doc.querySelectorAll('span[data-value]');
  spans.forEach(span => {
    const dataValue = span.getAttribute('data-value');
    const nameObj = names.find(name => name.key === '@' + dataValue.slice(2, -2));
    if (nameObj) {
      const parser2 = new DOMParser();
      const doc2 = parser2.parseFromString(nameObj.value, 'text/html');
      const span2 = doc2.querySelector('span');
      span.innerHTML = span2.innerHTML;
    }
  });
  return doc.body.innerHTML;
}
