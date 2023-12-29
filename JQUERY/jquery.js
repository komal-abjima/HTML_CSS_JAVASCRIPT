console.log("Hello jquery")

//$("#second").hide();

//button click event
$(document).ready(function(){

    //ajax
    $(".output").load("jquery.txt", function(response, statusTxt, xhr) {

        // console.log(response);
        // console.log(statusTxt);
        // console.log(xhr);
        // if(statusTxt === "success") alert("Success!");
        // if(statusTxt === "error") alert("Error" +xhr.statusTxt);

        //get api
        $.get("https://jsonplaceholder.typicode.com/users", function(data, status){
            console.log(data, status);
        });

        //post api
        $.post("https://jsonplaceholder.typicode.com/posts", {title: "This is new titile", body: "This is new body"}, function(data, status){
            console.log(data, status);
        });
    })




    // $("#button").click(function() {
    //     $("#second").toggle(2000, function(){
    //         console.log("Task completed..")
    //     });
    // })
    
    // $("#button").click(function() {
    //     $("#second").fadeTo("slow", 0.2)
    // })

    // $("#button").click(function() {
    //     $("#second").slideToggle("slow")
    // })


//form events
        // $("input").focus(function(){
        //     $(this).css("background-color", "blue");
        // });
        // $("input").blur(function(){
        //     $(this).css("background-color", "");
        // });
        // $("input").change(function(){
        //     console.log($(this).val());
        // });

        // $("#button").submit(function(event){
        //     event.preventDefault();
        //     console.log("Form submitted..")
        // });



        // let color = $("div.box").css("background-color");
        // $("#third").css({"color": color});

        //$("#second").toggleClass("box");
        //$("#second").text("This is jquery");
        // console.log($("#second").text());
        // console.log($("#second").html());
            // $(".box").animate({
            //     width: "+=200px",
            //     height: "200px",
            //     fontSize: "20px",
            // }, "slow")
            
    


    //keydown event H- hide and S- show
    $("body").keydown(function(event){
        if(event.which === 72){
            $("#second").hide();
        }
        if(event.which === 83){
            $("#second").show();
        }
        
    });
})