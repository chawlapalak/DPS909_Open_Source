const URL_REGEX = /(http|https)(:\/\/)([\w+\-&@`~#$%^*.=/?:]+)/gi;
const URL_INVALID = /[\n][^(#|http|https)].+$/gm;
const URL_IGNORE =  /(http|https)(:\/\/)([\w+\-&@`~#$%^*.=/?:]+)/gi;

module.exports = {
    URL_REGEX,
    URL_IGNORE,
    URL_INVALID,
}