nameofstudentarray = [];
function submit() {
    var displaystudentarray = [];
    for (var i = 1; i <= 4; i++) {
        var nameofthestudent = document.getElementById("name_of_the_student_"+i).value;
        console.log(nameofthestudent);
        nameofstudentarray.push(nameofthestudent);

    } 
    console.log(nameofstudentarray);
    var lengthofmainarray = nameofstudentarray.length;
    console.log(lengthofmainarray);
    for (var j = 0; j < lengthofmainarray; j++) {
        displaystudentarray.push("<h4>NAME - "+ nameofstudentarray[j]+"</h4>");
        console.log(displaystudentarray);
    }    
    console.log(displaystudentarray);
    var removecommas = displaystudentarray.join(" ");
    console.log(removecommas);
    document.getElementById("display_name_without_commas").innerHTML = removecommas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting() {
    nameofstudentarray.sort();
    console.log(nameofstudentarray);
    var displayarraysorted = [];
    var lengthofstudentarray = nameofstudentarray.length;
    console.log(lengthofstudentarray);
    for (var k = 0; k < lengthofstudentarray; k++) {
        displayarraysorted.push("<h4> NAME - "+nameofstudentarray[k]+"</h4>");
        console.log(displayarraysorted);

    }
    var removecommas = displayarraysorted.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = removecommas;
    
}

