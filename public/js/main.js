var init = function()
{
    console.log("the party just started.");

    $("#eat-list").on("click", "li", eatFromTheListEvent)
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
        result = JSON.parse(result);
        if(result)
        {
            burger.appendTo(".devoured");
        }        
    })
}



