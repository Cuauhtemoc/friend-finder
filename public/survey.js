$(document).ready(function(){


var formData = {};

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
    $.post("/api/friends", formData, function(data){
        $("#match-name").append("<p>" + data.name + "</p>");
        $("#match-image").attr("src", data.photo);
        $("#myModal").modal("toggle");
        console.log(data);

    })
}
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
$(document).on("click","#submit", function(event){
    event.preventDefault();
    if(validateForm())
    {
        getFormData();
    }
    else alert("Please fill out all fields")
})


});