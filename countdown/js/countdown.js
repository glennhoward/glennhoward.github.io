var dueDate;

$('#code').click(function() {
  $('#app-demo').hide("fast", function() {
    $('#demo').removeClass('active');
  });
  $('#gist-source').show("fast", function() {
    $('#code').addClass('active');
  });
})

$('#demo').click(function() {
  $('#app-demo').show("fast", function() {
    $('#demo').addClass('active');
  });
  $('#gist-source').hide("fast", function() {
    $('#code').removeClass('active');
  });
})

$('#due-date-input').datepicker();

$('#calculate-due-date').click(function() {
  if($('#due-date-input').val() == '') {
    $('.alert').slideDown();
    $('.alert').delay(2000).slideUp();
  }
  else {
    var formattedDate = new Date($('#due-date-input').val());
    var day = formattedDate.getDate();
    var month =  formattedDate.getMonth();
    var year = formattedDate.getFullYear();

    dueDate = [year, month, day];

    setTimeout(timeToDate, 1000);

    $('#due-details').show(function() {
      var weeks = calulateBabyWeek(dueDate);
      $('#current-week').html("You are " + weeks + " weeks pregnant.");
    });
  }
});

$('#reset-due-date').click(function() {
  $('#due-details').hide(function() {
    $('#due-date-input').val("");
  });
});

function timeToDate() {
  var now = moment();
  var due = moment(dueDate);

  var dueTime = due.diff(now, 'seconds');

  var dueDays = Math.floor(dueTime / 86400);
  secRemaining(dueTime,dueDays,86400);

  var dueHours = Math.floor(dueTime / 3600) % 24;
  secRemaining(dueTime,dueHours,3600);

  var dueMinutes = Math.floor(dueTime / 60) % 60;
  secRemaining(dueTime,dueMinutes,60);

  var dueSeconds = dueTime % 60;

  $("#main-due-date").html("You are due in "
  + dueDays + " days, "
  + dueHours + " hours, "
  + dueMinutes + " minutes, "
  + dueSeconds + " seconds.");

  setTimeout(timeToDate, 1000);

  function secRemaining(sec, seg, by) {
    return sec -= seg * by;
  }
}

function calulateBabyWeek(dDate) {
  var now = moment();
  var days = moment(dDate).diff(now, 'days');
  var weeks = Math.floor((280 - days) / 7);

  return weeks;
}
