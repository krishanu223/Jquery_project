let dogdata = [];
$.ajax({
        url: "https://dog.ceo/api/breeds/list/all",
        method: "GET",
        data: { name: "kris", age: "25" }
    })
    .done(function(data) {
        dogdata = data.message;
        for (key in dogdata) {
            $('#breed').append("<option>" + key + "</option>")
        }

    })
var subbreed = [];
$('#breed').on('click', function() {
    var breed = $("select").val();
    $.ajax({
            url: "https://dog.ceo/api/breed/" + breed + "/list",
            method: "GET",
            data: { name: "kris", age: "25" }
        })
        .done(function(data) {
            subbreed = data.message;
            for (let i = 0; i < subbreed.length; i++) {
                $('#subbreed').append("<option >" + subbreed[i] + " </option>")
            }

        })
    console.log("clcick")
})
var subbredd = [];
$("button").on("click", function() {
    $("#breed-image").empty();
    $.ajax({
        url: "https://dog.ceo/api/breed/" + $("#breed").val() + "/" + $("#subbreed").val() + "/images",
        method: "GET",
        data: { name: "kris", age: "25" }
    }).done(function(data) {
        subbredd = data.message;
        for (let i = 0; i < subbredd.length; i++) {
            $("#breed-image").append("<img src=" + subbredd[i] + ">")
        }


    })
})