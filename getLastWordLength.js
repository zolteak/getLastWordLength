const getLastWordLength = (text) => {
    let len = 0;

    for (let i = text.length - 1;  i >= 0; i -= 1) {
        if (text[i] === ' ') {
            break;
        }
        len += 1;
    };
    return len;
};

exports.getLastWordLength = getLastWordLength;