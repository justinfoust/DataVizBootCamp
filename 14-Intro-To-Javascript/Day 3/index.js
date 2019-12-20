d3.selectAll("li").text("New Elements").style('color','blue')
d3.select("li").attr("class", "red")

d3.select("ul").append("li").text("Another new Element")