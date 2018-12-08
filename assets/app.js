//<script src="https://www.gstatic.com/firebasejs/5.7.0/firebase.js" />;

// Initialize Firebase
var name, startDate, role, rate;
var config = {
 apiKey: "AIzaSyAlJwe-4Z7k2z6WRGSODZGrobDmwGwkUsY",
 authDomain: "timesheet-811b4.firebaseapp.com",
 databaseURL: "https://timesheet-811b4.firebaseio.com",
 projectId: "timesheet-811b4",
 storageBucket: "",
 messagingSenderId: "546230569713"
};
firebase.initializeApp(config);
$(document).ready(function() {
 database.ref().on("value", function(snapshot) {
   //load database
 });
 $("#submit").on("click", function() {
   event.preventDefault();

   // Grabbed values from text boxes
   name = $("#employeename")
     .val()
     .trim();
   startDate = $("#startdate")
     .val()
     .trim();
   role = $("#employeerole")
     .val()
     .trim();
   rate = $("#monthlyrate")
     .val()
     .trim();

   database.ref().push({
     name: name,
     start: startDate,
     role: role,
     rate: rate
   });
 });
});

database.ref().on("child_added", function(childSnapshot) {
 //Add item to list
 var nameTd = $("<td>").text(childSnapshot.val().name);
 var startTd = $("<td>").text(childSnapshot.val().startDate);
 var roleTd = $("<td>").text(childSnapshot.val().role);
 var rateTd = $("<td>").text(childSnapshot.val().rate);
 var newRow = $("<tr>")
   .append(nameTd)
   .append(startTd)
   .append(roleTd)
   .append(rateTd);
 $("#table1").append(newRow);
});