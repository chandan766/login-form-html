
function myfunction(){
    var usr = document.getElementById("usr").value;
    var password = document.getElementById("password").value;
    alert(usr+"\n"+password);
    document.getElementById("usr").value='';
    document.getElementById("password").value='';
}

function lock(){
    var lock = document.getElementById('lock');
    // lock.innerHTML('<i class="fa-solid fa-lock-open"></i>');



}