//UFO-level-1

//1. * Using the UFO dataset provided in the form of an array of JavaScript objects, 
//write code that appends a table to your web page and then adds new rows of data for each UFO sighting.


// Create tavleData referncing data.js
var tableData = data;

// Console.log the data from data.js
console.log(tableData);

// Get a reference to the table body.
var tbody = d3.select("tbody");




// Use forEach to update each cell's text with
// UFO report values (date, city, state, country, shape, duration, comments).
tableData.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");

  Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the UFO report object.
    var cell = row.append("td");
    cell.text(value);
  });
});




// 2. Use a date form in your HTML document and write JavaScript code that will 
// listen for events and search through the `date/time` column to find rows that match user input.


// Select the button referencing filter-bin in the html.
var button = d3.select("#filter-btn");


// Use button.on to create an event handler when the button is clicked.
button.on("click", function() {

// Use tbody in the html as a receptacle for the input value.
    tbody.html("");

    // Use d3.select to select the input date referenced in the input class in the html code.
    var eventDate = d3.select("#datetime");
    

    // Get the property of the value data (city, state, shape, etc.).
    var eventData = eventDate.property("value");
    

    // Show the event data.
    console.log(eventData);
    

    // Contain the filtered data whose date will equal the date input in the input class.
    var indivDate = tableData.filter(function (event){
      return event.datetime === eventData
      });

    // Show the filtered data.
    console.log(indivDate);

// Create a function to show the filtered data by appending it in the allotted places on the html code.
    indivDate.forEach(function(ufofiltered) {

    console.log(ufofiltered);

// Add table rows `tr` for each object in the filtered dataset.
    var row = tbody.append("tr");

// Use d3 to update each cell's text with
// UFO report the filtered values (date, city, state, country, shape, duration, comments).
    Object.entries(ufofiltered).forEach(function([key, value]) {
        console.log(key, value);
    
    // Append a cell to the row for each value
    // in the UFO report object.
        var cell = row.append("td");
        cell.text(value);
    });
});
});



















