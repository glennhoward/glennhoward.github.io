$.getJSON('data/data.json', function(data) {
    var headerTemplate = $('#headerTpl').html();
    var contentTemplate = $('#contentTpl').html();
    var aboutTemplate = $('#aboutTpl').html();
    var eduTemplate = $('#educationTpl').html();
    var workTemplate = $('#workTpl').html();
    var footerTemplate = $('#footerTpl').html();

    var headerHtml = Mustache.to_html(headerTemplate, data);
    var contentHtml = Mustache.to_html(contentTemplate, data);
    var aboutHtml = Mustache.to_html(aboutTemplate, data);
    var eduHtml = Mustache.to_html(eduTemplate, data);
    var workHtml = Mustache.to_html(workTemplate, data);
    var footerHtml = Mustache.to_html(footerTemplate, data);

    $('#header').html(headerHtml);
    $('#content').html(contentHtml);
    $('#aboutme').html(aboutHtml);
    $('#education').html(eduHtml);
    $('#employment').html(workHtml);
    $('#footer').html(footerHtml);
});
