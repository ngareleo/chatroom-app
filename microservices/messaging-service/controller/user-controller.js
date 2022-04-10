const checkContent = (content) => {
    const curseWords = require("./cuss-words.json")["CussWords"];
    for (var word of curseWords) {
        let re = new RegExp(word, "gi");
        content = content.replace(re, "*".repeat(word.length));
    }
    return content;
}

module.exports = checkContent;