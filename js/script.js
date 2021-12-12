jQuery(function($){
    $('input[name=phone]').mask("+7 (999) 999-9999");
    $('form').submit(function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: ""
        })
    });
});
