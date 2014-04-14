
$.getJSON('data/data.json', function(data) {
  var headerTemplate = $('#headerTpl').html();
  var contentTemplate = $('#contentTpl').html();
  var aboutTemplate = $('#aboutTpl').html();
  var eduTemplate = $('#educationTpl').html();
  var workTemplate = $('#workTpl').html();
  var footerTemplate = $('#footerTpl').html();

  Mustache.parse(headerTemplate);
  Mustache.parse(contentTemplate);
  Mustache.parse(aboutTemplate);
  Mustache.parse(eduTemplate);
  Mustache.parse(workTemplate);
  Mustache.parse(footerTemplate);

  var headerHtml = Mustache.render(headerTemplate, data);
  var contentHtml = Mustache.render(contentTemplate, data);
  var aboutHtml = Mustache.render(aboutTemplate, data);
  var eduHtml = Mustache.render(eduTemplate, data);
  var workHtml = Mustache.render(workTemplate, data);
  var footerHtml = Mustache.render(footerTemplate, data);

  $('#header').html(headerHtml);
  $('#content').html(contentHtml);
  $('#aboutme').html(aboutHtml);
  $('#education').html(eduHtml);
  $('#employment').html(workHtml);
  $('#footer').html(footerHtml);
});

$( document ).ready(function() {
  $(".tasks-toggle").click(function(){
    $(this).siblings('.tasks').slideToggle('fast')
  });
});
