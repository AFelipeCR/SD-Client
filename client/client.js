$(document).ready(() => {
    $( "#buttonJquery" ).click(getContacts);
    getContacts();
});

getContacts= () =>{
    $.ajax({
        url: "http://localhost:3000/contacts",
        success: result => {
            $('#contact-list').html("");

            result.forEach(contact => {
                $("#contact-list").append('<tr><td>' + contact.name +'</td><td>' + contact.phone + '</td></tr>');
            });
        }
    });
}
var aaas;
sendFormData = ()=>{
    let form = $('#contact-form');
    $.ajax({
        url: "http://localhost:3000/contacts/add",
        type:'POST',
        data:form.serialize(),
        success: result => getContacts()
    });
}
