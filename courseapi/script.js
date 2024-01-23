var course = [];

$('#fetchcourse').on('click', function() {
    $('.container').empty()
    $.ajax({
            url: "https://api.codingninjas.in/api/v3/courses",
            method: "GET",
            data: { name: "kris", age: "25" },

        })
        .done(function(data) {
            imgdogdata = data.data.courses;
            course = imgdogdata;
            console.log(course)
            for (let i = 0; i < course.length; i++) {
                if (course[i].preview_image_url) {
                    $('.container').append('<div class="card" style="width: 15rem;"><img src=' + course[i].preview_image_url + ' class="card-img-top" alt=""><div class="card-body"><h5 class="card-title">' + course[i].title + '</h5><p class="card-text">Welcome to ' + course[i].title + ' </p><a  class="btn btn-primary">Start Learing</a></div></div>')
                }

            }


        });
})