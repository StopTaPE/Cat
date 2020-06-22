$(function() {
    $.ajax({
        type: "GET",
        url: "https://www.fxp.co.il",
        crossDomain: true,
        async: true,
        dataType: "html",
        success: function(data, status, xhr) {
            var token;
            var avatarPicture = $(data).find("img").filter(".avatar")[0];
            var avatarText = $(data).find("span").filter(".log_in6").find("a").find("b")[0];
            var avatarElement = document.getElementsByClassName("avatar")[0];
            var avatarTextElement = document.getElementsByClassName("avatar-text")[0];
            var arr = data.split("\n");
            for(var i = 0; i < arr.length; i++) {
                if(arr[i].includes("SECURITYTOKEN")) {
                    token = arr[i];
                    break;
                }
            }
            token = token.replace("var SECURITYTOKEN = ", "").replace('"', '').replace(";", "");
            token = token.replace(token[token.length - 1], "").replace(token[token.length - 2], "");
            avatarElement.src = avatarPicture.src;
            avatarTextElement.innerHTML = avatarText.innerHTML;
            $("#token").val(token);
        }
    });

    $("#copyBtn").click(function() {
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = $("#token").val();
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    });

    $("#testBtn").click(function() {
        /*$.ajax({
            type: "GET",
            url: "https://www.fxp.co.il/showthread.php?t=20344538",
            crossDomain: true,
            async: true,
            dataType: "html",
            success: function(data, status, xhr) {
                var likeElements = $(data).find("span");
                var arr = data.split("\n");
                for(var i = 0; i < likeElements.length; i++) {
                    if(likeElements[i].getAttribute("onclick") == "makelike(this.id);") {
                        likeElements[i].click();
                        console.log("Liked!");
                    }
                }
            }
        });*/
    });

    /*$.ajax({
        type: "POST",
        url: "https://pastebin.com/post.php",
        crossDomain: true,
        async: true,
        data: {
            submit_hidden: "submit_hidden",
            paste_code: "asdsadsadsa",
            paste_format: 1,
            paste_expire_date: "N",
            paste_private: 0,
            paste_name: ""
        },
        dataType: "html",
        success: function(data) {
            var texts = $(data).find("div").find("ol").find("li");
            console.log(data);
        }
    });*/
});

function testFunction() {
    var counter = 0;
    while(counter < 50) {
        console.log(Hello);
        counter++;
    }
}