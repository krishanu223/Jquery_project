var dogdata = [];
var data1;
var imgdogdata = [];
$.ajax({
        url: "https://dog.ceo/api/breeds/list/all",
        method: "GET",
        data: { name: "kris", age: "25" }
    })
    .done(function(data) {
        dogdata = data.message;
        for (let key in dogdata) {
            console.log(key);
            $('#dog-names').append('<option >' + key + '</option>');
            data1 = $('#dog-names').find(":selected").val();

        }

    })
$('.but').on('click', function() {
    console.log(data1)
    $.ajax({
            url: "https://dog.ceo/api/breed/" + data1 + "/images/random",
            method: "GET",
            data: { name: "kris", age: "25" },

        })
        .done(function(data) {
            imgdogdata = data.message;
            console.log(imgdogdata)
            $('.dogimg').html("<img src=" + imgdogdata + ">")
        });
})
$('#dog-names').on('click', function() {
    data1 = $('#dog-names').find(":selected").val();

});