//This Code May Be Don't Support The Phone Device And Tablet Please Use PC All Copy Right Reserved 2017

function About() {
    document.getElementById('About-Table').style.display='block';
}
function Clos(){
    document.getElementById('About-Table').style.display='none';
}    
onload = function() {
    var nam = window.prompt("Enter your Name Please");
    var ma = 'You Must Enter Your Name';
    var First = "Hello "+nam+" This Code May Be Don't Support The Phone Device And Tablet Please Use PC. This Web It is BETA is Can't Work To Search.                                                                                                           All Copy Right Reserved 2017 ©";
    var Second = nam+" This Code Is Created From Google Search Site And I added Some Modifications But All Codec And Style Has been Created By Me.                   So Please Respect My Right --Thanks.";
    if (nam==='' || nam===' ' || nam===null) {
        alert(ma);
        window.location.reload();
    }
    else {
    alert(First);
    alert(Second);
    }
}; 
function Sop() {
    
}