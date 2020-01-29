$(document).ready(() => {
    var a = '';
    var operator = '';
    var b = '';
    var result;
    $('#clean').click(function () {
        $('#input-place').text('');
        $('#operations').text('');
        a = '';
        operator = '';
        b = '';
        result = '';
    });
    $('#one').click(function (event) {
        if ($('#input-place').text().length >= 15) {
            return event.preventDefault
        } else {
            $('#input-place').text($('#input-place').text() + '1');
        }
    });
    $('#two').click(function (event) {
        if ($('#input-place').text().length >= 15) {
            return event.preventDefault
        } else {
            $('#input-place').text($('#input-place').text() + '2');
        }
    });
    $('#three').click(function (event) {
        if ($('#input-place').text().length >= 15) {
            return event.preventDefault
        } else {
            $('#input-place').text($('#input-place').text() + '3');
        }
    });
    $('#four').click(function (event) {
        if ($('#input-place').text().length >= 15) {
            return event.preventDefault
        } else {
            $('#input-place').text($('#input-place').text() + '4');
        }
    });
    $('#five').click(function (event) {
        if ($('#input-place').text().length >= 15) {
            return event.preventDefault
        } else {
            $('#input-place').text($('#input-place').text() + '5');
        }
    });
    $('#six').click(function (event) {
        if ($('#input-place').text().length >= 15) {
            return event.preventDefault
        } else {
            $('#input-place').text($('#input-place').text() + '6');
        }
    });
    $('#seven').click(function (event) {
        if ($('#input-place').text().length >= 15) {
            return event.preventDefault
        } else {
            $('#input-place').text($('#input-place').text() + '7');
        }
    });
    $('#eight').click(function (event) {
        if ($('#input-place').text().length >= 15) {
            return event.preventDefault
        } else {
            $('#input-place').text($('#input-place').text() + '8');
        }
    });
    $('#nine').click(function (event) {
        if ($('#input-place').text().length >= 15) {
            return event.preventDefault
        } else {
            $('#input-place').text($('#input-place').text() + '9');
        }
    });
    $('#zero').click(function (event) {
        if ($('#input-place').text().length >= 15) {
            return event.preventDefault
        } else {
            $('#input-place').text($('#input-place').text() + '0');
        }
    });
    $('#dot').click(function (event) {
            if ($('#input-place').text().length === 0) {
                $('#input-place').text($('#input-place').text() + '0.');
            }
            if (($('#input-place').text().indexOf('.') >= 1) || ($('#input-place').text().length >= 15)) {
                return event.preventDefault
            } else {
                $('#input-place').text($('#input-place').text() + '.');
            }
        }
    );
    $('#slice').click(function () {
        $('#input-place').text($('#input-place').text().slice(0, -1));
    });
    $('#divide').click(function (event) {
        if ($('#input-place').text().length === 0 && $('#operations').text().length === 0) {
            return event.preventDefault()
        }
        if (operator === '') {
            a = parseFloat($('#input-place').text());
            operator = '/';
            $('#operations').text(a + ' ' + operator);
            $('#input-place').text('')
        } else if (operator !== '/') {
            operator = '/';
            $('#operations').text(a + ' ' + operator);
        } else {
            return event.preventDefault()
        }
    });
    $('#multiply').click(function (event) {
        if ($('#input-place').text().length === 0 && $('#operations').text().length === 0) {
            return event.preventDefault()
        }
        if (operator === '') {
            a = parseFloat($('#input-place').text());
            operator = '*';
            $('#operations').text(a + ' ' + operator);
            $('#input-place').text('')
        } else if (operator !== '*') {
            operator = '*';
            $('#operations').text(a + ' ' + operator);
        } else {
            event.preventDefault()
        }
    });
    $('#subtract').click(function (event) {
        if ($('#input-place').text().length === 0 && $('#operations').text().length === 0) {
            return event.preventDefault()
        }
        if (operator === '') {
            a = parseFloat($('#input-place').text());
            operator = '-';
            $('#operations').text(a + ' ' + operator);
            $('#input-place').text('')
        } else if (operator !== '-') {
            operator = '-';
            $('#operations').text(a + ' ' + operator);
        } else {
            event.preventDefault()
        }
    });
    $('#plus').click(function (event) {
        if ($('#input-place').text().length === 0 && $('#operations').text().length === 0) {
            return event.preventDefault()
        }
        if (operator === '') {
            a = parseFloat($('#input-place').text());
            operator = '+';
            $('#operations').text(a + ' ' + operator);
            $('#input-place').text('')
        } else if (operator !== '+') {
            operator = '+';
            $('#operations').text(a + ' ' + operator);
        } else {
            event.preventDefault()
        }

    });
    $('#result').click(function (event) {
        if (a === '' || $('#input-place').text().length === 0) {
            return event.preventDefault()
        }
        b = parseFloat($('#input-place').text());
        $('#operations').text($('#operations').text() + ' ' + b + ' ' + '=');
        if (operator === '/') {
            result = a / b;
            $('#input-place').text(result);
        } else if (operator === '*') {
            result = a * b;
            $('#input-place').text(result);
        } else if (operator === '-') {
            result = a - b;
            $('#input-place').text(result);
        } else if (operator === '+') {
            result = a + b;
            $('#input-place').text(result);
        }
        a = '';
        operator = '';
        b = '';
    });
});