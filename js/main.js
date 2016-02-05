(function() {
    "use strict";
    var name = $('#inputName')[0];
    $('button').click(function() {
        $('#inputName').tooltip('destroy');
        $('#inputIp').tooltip('destroy');
        $('#inputEmail').tooltip('destroy');
        $('#inputDate').tooltip('destroy');
        // Validation name
        if (name.value.length < 5 || name.value.length > 30) {
            $('#inputName').parent().parent().addClass('has-error').removeClass('has-success');
            $('#inputName').tooltip({
                trigger: 'manual',
                placement: 'right',
                title: 'input text from 5 to 30 characters'
            }).tooltip('show');
        } else {
            $('#name').addClass('has-success').removeClass('has-error');
        }
        // validation ip
        var ip = $('#inputIp')[0];
        var ipRule = new RegExp('^\\d+\\.\\d+\\.\\d+\\.\\d+$');
        if (!ipRule.test(ip.value)) {
            $('#inputIp').parent().parent().addClass('has-error').removeClass('has-success');
            $('#inputIp').tooltip({
                trigger: 'manual',
                placement: 'right',
                title: 'input ip, exemple: 65.65.65.255'
            }).tooltip('show');
        } else {
            $('#inputIp').parent().parent().addClass('has-success').removeClass('has-error');
        }
        // validation email
        var mail = $('#inputEmail')[0];
        var mailRule = new RegExp('@');
        if (!mailRule.test(mail.value)) {
            $('#inputEmail').parent().parent().addClass('has-error').removeClass('has-success');
            $('#inputEmail').tooltip({
                trigger: 'manual',
                placement: 'right',
                title: 'input real email'
            }).tooltip('show');
        } else {
            $('#inputEmail').parent().parent().addClass('has-success').removeClass('has-error');
        }
        // validation date
        var date = $('#inputDate')[0],
            dateRule = new RegExp('^\\d+\\/\\d+\\/\\d+$');
        if (!dateRule.test(date.value)) {
            $('#inputDate').parent().parent().addClass('has-error').removeClass('has-success');
            $('#inputDate').tooltip({
                trigger: 'manual',
                placement: 'right',
                title: 'input date exemple 24/04/1984'
            }).tooltip('show');
        } else {
            $('#inputDate').parent().parent().addClass('has-success').removeClass('has-error');
        }
        return false;
    });
}());