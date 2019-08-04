// Check off specific todo By clicking
$(document).ready(function(){
$("ul").on('click', 'li' ,function(){
 $(this).toggleClass("completed")
});
})
//click to X to delete
$(document).ready(function(){
    $('ul').on('click', 'span' , function(event){
        $(this).parent().fadeOut(500 , function(){
            $(this).remove();
        });
     event.stopPropagation();    //to stop bubble i.e stop calling the parents , ends on span...
    });
})

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing the value from input
        var todolist = $(this).val();
        $(this).val('');
        //create a new li add to ul
        $('ul').append("<li><span><i class='fa fa-trash'></i></span>" +todolist+ '</li>')
    }
})
$('.fa-plus').on('click', function(){
    $("input[type = 'text']").fadeToggle();
})