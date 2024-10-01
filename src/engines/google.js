// const base = "https://translate.googleapis.com/translate_a/single";
const base = `https://translation.googleapis.com/language/translate/v2`;
export default {
  fetch: ({ key, from, to, text, format }) => [
    `${base}?key=${key}&source=${from}&target=${to}&format=${format}&q=${encodeURI(text)}`
  ],
  parse: res =>
    res.json().then(body => {
      body = body && body[0] && body[0][0] && body[0].map(s => s[0]).join("");
      if (!body) throw new Error("Translation not found");
      return body;
    })
};
