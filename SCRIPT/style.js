var status = 0;

function toggle() {
    if (status == 0) {
        document.getElementById("aditional_info").style.display = "block";
        status = 1;
    } else {
        document.getElementById("aditional_info").style.display = "none";
        status = 0;
    }
}