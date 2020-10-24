module.exports = function check(str, bracketsConfig) {
    for (var i = 0; i < str.length - 1; i++) {
        for (var j = 0; j < bracketsConfig.length; j++) {
            if (
                str[i] == bracketsConfig[j][0] &&
                str[i + 1] == bracketsConfig[j][1]
            ) {
                str = str.substr(0, i) + str.substr(i + 2, str.length - 1);
                i -= 2;
            }
        }
    }
    return str.length > 0 ? false : true;
};
