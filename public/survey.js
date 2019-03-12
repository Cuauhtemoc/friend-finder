$(document).ready(function(){


var formData = {};
//collecting the survey data
function getFormData(){
        formData.name = $("#name").val().trim();
        formData.photo = $("#photo").val().trim();
        formData.scores = [];
        formData.scores.push($("#question-1").val())
        formData.scores.push($("#question-2").val())
        formData.scores.push($("#question-3").val())
        formData.scores.push($("#question-4").val())
        formData.scores.push($("#question-5").val())
        formData.scores.push($("#question-6").val())
        formData.scores.push($("#question-7").val())
        formData.scores.push($("#question-8").val())
        formData.scores.push($("#question-9").val())
        formData.scores.push($("#question-10").val())
    //send out post req and data    
    $.post("/api/friends", formData, function(data){
        $("#match-name").append("<p>" + data.name + "</p>");
        $("#match-image").attr("src", data.photo);
        $("#myModal").modal("toggle");
        console.log(data);

    })
}
//checking to see if anything was left empty
function validateForm(){
    var formValidated = true;
    $(".required").each(function(){
        if ($(this).val() === "")
        {
            formValidated = false;
        }
    })
    return formValidated;
    
}
//When submit button is hit run functions
$(document).on("click","#submit", function(event){
    event.preventDefault();
    if(validateForm())
    {
        getFormData();
    }
    else alert("Please fill out all fields")
})


});