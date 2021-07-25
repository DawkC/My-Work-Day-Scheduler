$(".saveBtn").click(function() {
    // get task value and time
    var value = $(this).siblings("#value").val();
    var time = $(this).parent().attr("id");

    // save to local storage
    localStorage.setItem(time, value);

    hourClass();
});

// display current time on page
function displayDate() { 
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
};

// add classes based on time of day
function hourClass() {
    // pull current hour
    var currentHour = moment().hours();
    
    // loop over hours add classes
    $(".time-block").each(function() {
        var hourBlock = parseInt($(this).attr("id"));
        
        // past
        if (hourBlock < currentHour) {
            $(this).addClass("past");
        }
        // current
        else if (hourBlock === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        // future
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
};

// update interval
setInterval(function(){ 
    // re-class time blocks if needed
    hourClass();
    // display date if changed
    displayDate();
}, 60000);

// load saved tasks
function loadTasks() {
    $("#09am #value").val(localStorage.getItem("09am"));
    $("#10am #value").val(localStorage.getItem("10am"));
    $("#11am #value").val(localStorage.getItem("11am"));
    $("#12pm #value").val(localStorage.getItem("12pm"));
    $("#1pm #value").val(localStorage.getItem("1pm"));
    $("#2pm #value").val(localStorage.getItem("2pm"));
    $("#3pm #value").val(localStorage.getItem("3pm"));
    $("#4pm #value").val(localStorage.getItem("4pm"));
    $("#5pm #value").val(localStorage.getItem("5pm"));
};


hourClass();

displayDate();

loadTasks();