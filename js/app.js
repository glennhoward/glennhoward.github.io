App = Ember.Application.create();

App.Router.map(function() {
  this.resource("about");
  this.resource("study");
  this.resource("jobs", function() {
    this.resource("job", { path: ":id" });
  });
  this.resource("code");
});

App.AboutRoute = Ember.Route.extend({
  model: function() {
    return $.getJSON('data/data.json').then(function(data) {
      return data.about;
    });
  }
});

App.StudyRoute = Ember.Route.extend({
  model: function() {
    return $.getJSON('data/data.json').then(function(data) {
      return data.education;
    });
  }
});

App.JobsRoute = Ember.Route.extend({
  model: function() {
    return $.getJSON('data/data.json').then(function(data) {
      jobs = data.employers;
      return jobs;
    });
  }
});

App.JobRoute = Ember.Route.extend({
  model: function(params) {
    return jobs.findBy('id', params.id);
  }
});
