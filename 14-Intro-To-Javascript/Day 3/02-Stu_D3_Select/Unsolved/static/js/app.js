// The new student and grade to add to the table
var newGrade = ["Wash", 79];

// Use D3 to select the table
var tstripe = d3.select(".grades").attr("class", "grades table table-striped");
console.log(tstripe);
// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped

// Use D3 to select the table body
var foo = d3.select("tbody");
console.log(foo);
// Append one table row `tr` to the table body
var bar = foo.append("tr");
console.log(bar);
// Append one cell for the student name
bar.append("td").text(newGrade[0]);
// Append one cell for the student grade
bar.append("td").text(newGrade[1]);