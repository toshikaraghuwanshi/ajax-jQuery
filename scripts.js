$(document).ready(function() {
    var responseText = $(".receive-box");                        
    $('.button').click(function(event) {
        event.preventDefault(); 
        $.ajax({
            url : "https://onlinetask.lancemontana.com.au/api/random.php",
            type: "POST",
            data : 'Random data',
            success: function(data, textStatus, jqXHR)
            {
                switch(JSON.parse(jqXHR.responseText).status) {
                    case 'warning':
                        responseText.css("background-color", "yellow").text(jqXHR.responseText);
                        break;
                    case 'success':
                        responseText.text(jqXHR.responseText).css("background-color", "green");
                        break;
                    case 'error':
                        responseText.text(jqXHR.responseText).css("background-color", "red");
                        break;
                }
            },
            error: function (jqXHR, textStatus, errorThrown)
            {
                console.log("error")
            }
        });  
     
    });
});