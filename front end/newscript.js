 function editReview(){
    const textarea = document.getElementById('userreview');
    let badwords = /cunt|bitch|shit|dick|asshole|doc/gi;
    let userreview1 = textarea.value;
    let userreview2 = userreview1.replace(badwords, '######');
    document.getElementById('userreview').value = userreview2;
}
document.getElementById('submittext').addEventListener('click', editReview)    
    