var elements = $(".text, .img").toArray();

function scrollFunc() {
    elements.forEach(function (item) {
        if ($(this).scrollTop() >= $(item).offset().top - 400) {
            $(item).addClass("reveal");
        }
    });
}

$(window).scroll(() => scrollFunc());

scrollFunc();



















