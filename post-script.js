createHelpFile();
$('#textarea').hide();
$('#textarea1').hide();
$('#aas').hide();
$('#css').hide();
$('#js1').hide();
$('#js2').hide();
$('#uploaddiv').hide();
jSonCounter = 0;
var ourData;
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'adressen'+ jSonCounter +'.json');
ourRequest.onload = function() {
	if (ourRequest.status >= 200 && ourRequest.status < 400) {
		ourData = JSON.parse(ourRequest.responseText);
		addAddresses(ourData);
		//add(arrayList);
	} else {
		console.log("We connected to the server, but it returned an error.");
	}
};
ourRequest.onerror = function() {
	console.log("Connection error");
};
ourRequest.send();

jSonCounter2 = 1;
var ourData2;
var xadd = document.getElementById("xadd");
xadd.addEventListener("click", function() {
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'adressen'+ jSonCounter2+'.json');
	ourRequest.onload = function() {
		if (ourRequest.status >= 200 && ourRequest.status < 400) {
			ourData2 = JSON.parse(ourRequest.responseText);
			addAddresses(ourData2);
		} else {
			console.log("We connected to the server, but it returned an error.");
		}
	};
	ourRequest.onerror = function() {
		console.log("Connection error");
	};
	ourRequest.send();
	jSonCounter2++;
	if (jSonCounter2 > 3) {
		xadd.classList.add("hide-me");
		$(".hide").hide(2000);
	}
});
	
$(function() {
	$("#submit").on("click", function() {
		jSonObj = document.getElementById("textarea").value;
		filename = "addressen4.json";
		var blob = new Blob([jSonObj], {type: "application/json;charset=utf-8"});
		saveAs(blob, filename);
	}); //??
	$("#submit2").on("click", function() {
		jSonObj = document.getElementById("textarea").value;
		filename = "addressen4.json";
		var blob = new Blob([jSonObj], {type: "application/json;charset=utf-8"});
		saveAs(blob, filename);
	});
	//$("#json").on("click", function() { });
	//var xdel = document.getElementById("xdel");
	//xdel.addEventListener("click", function() { });
	$("#xdel").on("click", function() {
		var index = arrayList.length;
		arrayList.splice(0,index);
		createJsonFile(arrayList);
		sortAddresses(arrayList);
		jSonCounter2 = 0;
		xadd.classList.remove("hide-me");
		$(".hide").show(2000);
	});
	$("#sort1").on("click", function() {
		sortAddresses(arrayList,1);
	});
	$("#sort2").on("click", function() {
		sortAddresses(arrayList,2);
	});
	$("#add").on("click", function() {
		var val1 = $("#forename").val();
		var val2 = $("#lastname").val();
		var val3 = $("#address").val();
		var val4 = $("#zipcode").val();
		var val5 = $("#city").val();
		var val6 = $("#telephone").val();
		var val7 = $("#email").val();
		if(validate('add')) {
			arrayList.push(new Member(val1, val2, val3, val4, val5, val6, val7));
			index = arrayList.length;
			console.log(arrayList.length);
			createJsonFile(arrayList);
			var subelem1 = $("<td></td>").html("<a href='' onclick='event.preventDefault();'>"+ val7 +"</a>");
			var elem = $("<tr></tr>").addClass('inner');
			$(elem).append("<td class='user_table_txt'>"+(index)+"</td>")
						 .append("<td class='user_table_txt2'>"+val1+"</td>")
						 .append("<td class='user_table_txt2'>"+val2+"</td>")
						 .append("<td class='user_table_txt'>"+val3+"</td>")
						 .append("<td class='user_table_txt'>"+val4+"</td>")
						 .append("<td class='user_table_txt'>"+val5+"</td>")
						 .append("<td class='user_table_txt'>"+val6+"</td>")
						 //.append("<td>"+val7+"</td>").addClass('user_table_txt')
						 .append(subelem1).addClass('user_table_a')  // a becomes the class!
						 .append("<td class='user_table_a'><a href='' onclick='event.preventDefault();"+
							"edit(arrayList["+(index-1)+"], "+(index-1)+")'>Wijzigen</a></td>")
						 .append("<td class='user_table_a'><a href='' onclick='event.preventDefault();"+
							"del(arrayList["+(index-1)+"], "+(index-1)+")'>Verwijderen</a></td>");
			$("#tablehelper").append(elem); //$("#tablehelper2").append(elem);
			$("#forename").val("");
			$("#lastname").val("");
			$("#address").val("");
			$("#zipcode").val("");
			$("#city").val("");
			$("#telephone").val("");
			$("#email").val("");
			//$(".remove").on("click", function() { $(this).parentsUntil("tbody").remove(); });
		}
	});
	$("#reset").on("click", function() {
		$("#forename").val("");
		$("#lastname").val("");
		$("#address").val("");
		$("#zipcode").val("");
		$("#city").val("");
		$("#telephone").val("");
		$("#email").val("");
	});
});
addCSS();
createJsonFile(arrayList);