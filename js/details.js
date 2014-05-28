$( document ).ready(function() {
  $(".tasks-toggle").click(function(){
    $(this).siblings('.tasks').slideToggle('fast')
  });
});
