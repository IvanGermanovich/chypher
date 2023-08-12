let usersDB = JSON.parse(localStorage.getItem('usersDB')) || [];
let alphabet = [];
for (let i = 97; i <= 122; i++) {
    alphabet.push(String.fromCharCode(i));
}
console.log(alphabet);



function chypherPassword(password, n) {
    let newPassword = '';
    for (let el of password) {
        let currentIndex = alphabet.indexOf(el)
        if (currentIndex + n <= alphabet.length) {
            newPassword += alphabet[currentIndex + n];
        } else {
            newPassword += alphabet[n - (alphabet.length - currentIndex)];
        }

    }
    console.log(newPassword);
}


chypherPassword('fsgza', 5);



function dechupherPassword(password, n) {
    let newPassword = '';
    for (let el of password) {
        let currentIndex = alphabet.indexOf(el);
        if (currentIndex - n >= 0) {
            newPassword += alphabet[currentIndex - n];
        } else {
            let bl = n - currentIndex;
            let ol = alphabet.length - bl;
            newPassword += alphabet[ol];
        }
    }
    console.log(newPassword);
}

dechupherPassword('kxlef', 5);

$('#clean').click(function() {
    $('#firstInput').val('');
    $('#secondInput').val('');
})

$('#shypher').click(function() {
    let inputText = $('#firstInput').val();
    let pushTo = parseInt($('select').val());
    let shypheredPassword = chypherPassword(inputText, pushTo);
    $('#secondInput').val(shypheredPassword);
});

$('#deshypher').click(function() {
    let inputText = $('#secondInput').val();
    let pushTo = parseInt($('select').val());
    let deshypheredPassword = dechupherPassword(inputText, pushTo);
    $('#firstInput').val(deshypheredPassword);
});