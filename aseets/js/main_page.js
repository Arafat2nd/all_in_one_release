window.onload = function () {
    console.log("jhjhjhjhjh")
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:6464/AIO/All%20in%20One/server_files/php/start.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({}));
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            console.log(xhr.responseText)
            if (xhr.responseText.split(',')[0] === "exists") {
                document.querySelector("#containerd").remove();
                let user_info = document.querySelector("#user_info");
                console.log(xhr.responseText.split(',')[1]);
                user_info.textContent = xhr.responseText.split(',')[1];

            } else if (xhr.responseText == "ns") {
                window.location.href = "http://localhost:6464/AIO/All%20in%20One/aseets/html/login/login.html"
            }


        }
    };
}
 


