var text1 = d3.select(".text1").text();
console.log(text1);

var text2 = d3.select("#text2").text();
console.log('This text says', text2);

d3.select(".text1").text("This is a new text D3 added");

d3.select("#text2").text("Anotther change made by D3");

var myLink = d3.select(".my-link").html();
console.log("myLink: ", myLink);

var myLinkAnchor = d3.select(".my-link>a");
console.log(myLinkAnchor);

var myLinkAnchorAttr = myLinkAnchor.attr("href");
console.log("href :", myLinkAnchorAttr);

myLinkAnchor.attr("href", "http://www.python.org");

d3.select(".my-link>a").attr("href", "www.amazon.com");

var li1 = d3.select("li").style("color", "red");

var lis = d3.selectAll("li").style("color", "green");

li1.text("Making a change to an item");

lis.text("Making a full change");