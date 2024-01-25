let photo = [];
let pag = 1;
$('#geti').on('click', function() {
    console.log("call1")
    $("#nextp").on("click", function() {

        pag = pag + 1;
        $('#nasa-images').empty();
        let sol = $('.sol').val();
        let page = pag;
        let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" + sol + "&page=" + page + "&api_key=NBlCLhD21Eud5RxMy1TjZoeJedDa1c1qbsnLMIG2";
        if (sol) {
            console.log("call")
            $.ajax({
                    url: url,
                    method: "GET",
                    data: { apikey: "NBlCLhD21Eud5RxMy1TjZoeJedDa1c1qbsnLMIG2" }
                })
                .done(function(data) {
                    console.log(data.photos)
                    photo = data.photos;
                    for (let i = 0; i < photo.length; i++) {
                        $('#nasa-images').append("<img src=" + photo[i].img_src +
                            ">")
                    }
                })
        } else {
            alert("Fill required value")
        }
    })
    $('#nasa-images').empty();
    let sol = $('.sol').val();
    let page = pag;
    let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" + sol + "&page=" + page + "&api_key=NBlCLhD21Eud5RxMy1TjZoeJedDa1c1qbsnLMIG2";
    if (sol) {
        console.log("call")
        $.ajax({
                url: url,
                method: "GET",
                data: { apikey: "NBlCLhD21Eud5RxMy1TjZoeJedDa1c1qbsnLMIG2" }
            })
            .done(function(data) {
                console.log(data.photos)
                photo = data.photos;
                for (let i = 0; i < photo.length; i++) {
                    $('#nasa-images').append("<img src=" + photo[i].img_src +
                        ">")
                }
            })
    } else {
        alert("Fill required value")
    }

})