$('button').on('click', function() {
    var rand = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    var color = '#' + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)];

    $("<div />", { "class": "ball wrapper" + color }).css({
            backgroundColor: color,
        })
        .appendTo('.busket');
    $('.ball').on('click', function() {
        var element = $(this);
        element.css({
            backgroundColor: "red"
        })
    })

})