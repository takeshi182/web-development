function disemvowel(str) {
    const vowels = 'AaEeIiOoUu'
    for (var i = 0; i < vowels.length; i++)
        if (str.includes(vowels[i])) {
            str.replace(vowels[i], '');
        }
    return str;
}

disemvowel('this')