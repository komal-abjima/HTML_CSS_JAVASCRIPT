$(document).ready(function (){
    $(".title").waypoint(function(){
        $(".title").addClass("animate__animated animate__fadeInLeft");
        //console.log("Reach to Top")
    }, {offset: "80%"})

    $("#intro").waypoint(function(){
        $("#intro").addClass("animate__animated animate__fadeInLeft");
        //console.log("Reach to Top")
    }, {offset: "80%"})

    $(".link1").waypoint(function(){
        $("link1").addClass("animate__animated animate__fadeInRight");
        //console.log("Reach to Top")
    }, {offset: "80%"})
    $(".link2").waypoint(function(){
        $("link2").addClass("animate__animated animate__fadeInRight");
        //console.log("Reach to Top")
    }, {offset: "80%"})
    $(".link3").waypoint(function(){
        $("link3").addClass("animate__animated animate__fadeInRight");
        //console.log("Reach to Top")
    }, {offset: "80%"})
})