const checkContent = (content) => {
    const curseWords = ["shit"];

    for (var word in curseWords) {
        content = content.replace(word, "#".repeat(word.length));
    }
    return content;
}

module.exports = checkContent;