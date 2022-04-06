const checkContent = (content) => {
    const curseWords = ["shit", "fuck", "bitch", "ass", "nigga"];
    for (var word of curseWords) {
        content = content.replace(word, "*".repeat(word.length));
    }
    return content;
}

module.exports = checkContent;