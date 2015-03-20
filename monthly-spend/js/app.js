App = Ember.Application.create();

App.Router.map(function() {
  this.resource("about");
  this.resource("study");
  this.resource("jobs", function() {
    this.resource("job", { path: ":id" });
  });
  this.resource("code");
});
