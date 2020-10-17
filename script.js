// display current date 
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
var CurrentDay = moment().format();

function getLocalStorage(key) {
    let value = localStorage.getItem(key);
    if (value) {
        console.log('about to update', key, 'with this from local S', value)
        $(`#text${key}`).text(value);
    }
}
// create the page
$(document).ready(function () {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    console.log('current time hour!!', moment().hours())
    var currentHour = moment().hours()
    // test hour coloring
    // var currentHour = 9
    for (let i = 9; i <= 18; i++) {
        var row = $(`<div data-time=${i} id='${i}' class="row time-block"></div>`);
        if ( i == 9 ) {
        var col1 = $('<div class="col-sm-2 hour">' + "0" + i  + "00" + '</div>');
        } else {
        var col1 = $('<div class="col-sm-2 hour">' + i  + "00" + '</div>');
        }
        // create second column
        var col2 = $(`<textarea id=text${i} class="description col-sm-8" placeholder="Enter note here..."></textarea>`);
            //check the hour to add appropriate background
            if (i == currentHour) {
                col2.addClass("present");
            } else if (currentHour > i) {
              col2.addClass("past");
            } else if (currentHour < i) {
                col2.addClass('future')
            }

        // create third column which is the save button
        var col3 = $(`<button id=${i}  class="saveBtn col-sm-2 fas fa-save"></button>`)

        // combine the columns
        row.append(col1);
        row.append(col2);
        row.append(col3);

        // add to container
        $(".container").append(row);

        // get any existing notes
        getLocalStorage(i);
    }
    // save entry button
    var saveBtn = $('.saveBtn');
    saveBtn.on('click', function () {
        let eventId = $(this).attr('id');
        let eventText = $(this).siblings('.description').val();
        console.log('about to save tolocal storage!', eventId, eventText)
        localStorage.setItem(eventId, eventText);
    });
});
