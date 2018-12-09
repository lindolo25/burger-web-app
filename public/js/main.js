var init = function()
{
    console.log("the party just started.");

    $("#eat-list").on("click", "li", eatFromTheListEvent)
    $("#burger-form").on("submit", addNewBurger);
}

var eatFromTheListEvent = function()
{
    var burger = $(this);
    var index = burger.attr("data-index");
    var options = {
        contentType: "application/json",
        method: "PUT",
        data: JSON.stringify({ devoured: true })
    }

    $.ajax("/api/burgers/" + index, options).then(function(result) 
    {
        //result = JSON.parse(result);
        if(result)
        {
            burger.appendTo(".devoured");
        }        
    })
}

var addNewBurger = function(event)
{
    event.preventDefault()
    console.log("New burger here it comes")

    var burger = $("#burger-name").val();
    var options = {
        contentType: "application/json",
        method: "POST",
        data: JSON.stringify({ newBurger: burger })
    }

    $.ajax("/api/burgers", options).then(function(result) 
    {
        //result = JSON.parse(result);
        if(result)
        {
            var newBurger = $("<li>");
            newBurger.text(burger);
            newBurger.attr("data-index", result.insertId);
            newBurger.appendTo("#eat-list");
        }        
    })
}



