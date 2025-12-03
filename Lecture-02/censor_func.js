function censorWord(sentence, wordToCensor) {
    const regex = new RegExp(wordToCensor, 'gi');
    const censorText = sentence.replace(regex, '***');
    return censorText;
}

const originalPost = "JavaScript is fun, but sometimes javascript can be tricky"
const censorPost = censorWord(originalPost, "JavaScript")
console.log(censorPost)