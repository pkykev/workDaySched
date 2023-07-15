// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let timeHeader = document.querySelector('#currentDay')
// function currTime(){
//   const currTime = dayjs()
//   timeHeader.textContent = currTime
//   console.log(currTime)
// }

// setInterval(currTime,1000)

$(function () {
  //current time function// figure out how to load without 1sec start up delay
  var currTimer;
  function currTime(){
    currTimer = dayjs()
    timeHeader.textContent = currTimer.format(`dddd, MMMM D`)
  }

  setInterval(currTime,1000)

  var bodyDivEl = $(`.container-lg`)
  var hourBlock;
    for(var i=8; i<17; i++){
      if (i < 12) {
        hourBlock=i+`AM`;
      }else if(i==12){
        hourBlock=i+`PM`;
      }else{
        hourBlock=i-12+`PM`;
      }

      currTimer;
      var everyHour = (
      `<div id="hour-${i}" class="row time-block ">
          <div class="col-2 col-md-1 hour text-center py-3">${hourBlock}</div>
          <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
          <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
          </button>
      </div>`
      )
      
      bodyDivEl.append(everyHour)
      
      let hourId = $(`div#hour-${i}`)
      
      console.log(hourId)

      if (dayjs().$H>i){
        hourId.removeClass(`future`,`present`)
        hourId.addClass(`past`)
        console.log(`past`)
      }else if(dayjs().$H<i){
        hourId.removeClass(`past`,`present`)
        hourId.addClass(`future`)
        console.log(`futu`)
      }else{
        hourId.removeClass(`future`,`past`)
        hourId.addClass(`present`)
        console.log(`pres`)
      }
  }

  let saveBtn = $(`.saveBtn`)
      saveBtn.on(`click`,function(){
      console.log(`sendhelp`)
      localStorage.setItem()
      })
      
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

      
});