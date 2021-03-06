var arrayList = [];
var index = 0;
var jSonCounter2;
/*function editMember() {
	var result = this.forename + ' ' + this.lastname + ' ' + this.address;
	return result;
}	*/
function Member(forename, lastname, address, zipcode, city, telephone, email) {
	this.forename = forename;
	this.lastname = lastname;
	this.address = address;
	this.zipcode = zipcode;
	this.city = city;
	this.telephone = telephone;
	this.email = email;
	//this.editMember = editMember;
}

function validate(flag) {
	if(flag==='add') {
		fail  = validateForename(forename.value);
		fail += validateLastname(lastname.value);
		fail += validateAddress(address.value);
		fail += validateZipcode(zipcode.value);
		fail += validateCity(city.value);
		fail += validateTelephone(telephone.value);
		fail += validateEmail(email.value);
	} else if(flag==='edit') {
		fail  = validateForename(forename1.value);
		fail += validateLastname(lastname1.value);
		fail += validateAddress(address1.value);
		fail += validateZipcode(zipcode1.value);
		fail += validateCity(city1.value);
		fail += validateTelephone(telephone1.value);
		fail += validateEmail(email1.value);
	}
	if (fail == "") {
		return true;
	} else { 
		alert(fail);
		return false;
	}
}
function validateForename(field) {
	return (field == "") ? "Geen voornaam ingevuld.\n" : "";
}
function validateLastname(field) {
	return (field == "") ? "Geen achternaam ingevuld.\n" : "";
}
function validateAddress(field) {
	if (field == "") {
		return "Geen adres ingevuld.\n";
	} else if (field.length < 5) {
		return "Adres moet zeker 5 karakters lang zijn.\n";
	} else if (/[^a-zA-Z0-9_ -]/.test(field)) {
		return "Alleen a-z, A-Z, 0-9, - en / zijn toegestaan in adres.\n";
	}
	return "";
}
function validateZipcode(field) {
	if (field == "") {
		return "Geen postcode ingevuld.\n";
	} else if (field.length < 6) {
		return "Postcode moet 6 karakters .\n";
	} else if (/[^a-zA-Z0-9]/.test(field)) {
		return "Alleen a-z, A-Z en 0-9 zijn toegestaan in postcode.\n";
	}
	return "";
}
function validateCity(field) {
	if (field == "") {
		return "Geen woonplaats ingevuld.\n";
	} else if (field.length < 4) {
		return "Woonplaats moet zeker 4 karakters lang zijn.\n";
	} else if (/[^a-zA-Z0-9_ -]/.test(field)) {
		return "Alleen a-z, A-Z, 0-9, - en / zijn toegestaan in adres.\n";
	}
	return "";
}
function validateTelephone(field) {
	if (field == "") {
		return "Geen telefoonnummer ingevuld.\n";
	} else if (isNaN(field)) {
		return "Telefoonnummer is geen nummer.\n";
	} else if (field.length < 10) {
		return "Telefoonnummer moet 10 karakters groot zijn.\n";
	}
	return "";
}
function validateEmail(field) {
	if (field == "") {
		return "Geen email ingevuld.\n";
	}	else if (!((field.indexOf(".") > 0) && (field.indexOf("@") > 0)) || /[^a-zA-Z0-9.@_-]/.test(field)) {
		return "Het email adres bestaat niet.\n";
	}
	return "";
}

function add(array) { //test-functie
  arrayList = array;
	index = arrayList.length;
	arrayList.push(new Member("Matheus Marcus", "Baksteen", "Rofplein 11", "9876GG", "Harkema", "0614232314", "mm@theoffice.org"));
	arrayList.push(new Member("Gepkinus", "Brouwer", "Noorderbinnensingel 1", "6543XZ", "Groningen", "06666666666", "gepper@home.fl"));
	var row = "";
	for(index; index<arrayList.length; index++) {
		row += "<tr class='inner'>"+
		"	<td class='user_table_txt'>"+(index)+"</td>"+
		"	<td class='user_table_txt2'>"+ arrayList[index].forename +"</td>"+
		"	<td class='user_table_txt2'>"+ arrayList[index].lastname +"</td>"+
		"	<td class='user_table_txt'>"+ arrayList[index].address +"</td>"+
		"	<td class='user_table_txt'>"+ arrayList[index].zipcode +"</td>"+
		"	<td class='user_table_txt'>"+ arrayList[index].city +"</td>"+
		"	<td class='user_table_txt'>"+ arrayList[index].telephone +"</td>"+
		"	<td class='user_table_a'><a href='useradmin.php'>"+ arrayList[index].email +"</a></td>"+
		"	<td class='user_table_a'><a href='' onclick='event.preventDefault();"+
			"edit(arrayList["+index+"], "+(index)+")'>Wijzigen</a></td>"+
		"	<td class='user_table_a'><a href='' onclick='event.preventDefault();"+
			"del(arrayList["+index+"], "+(index)+")'>Verwijderen</a></td>"+
		"</tr>";
	}
  tablehelper.insertAdjacentHTML('beforeend', row);
}
function edit(member, pos) {
	$("#editdiv").hide();
	//$("#adddiv").animate({marginLeft: '-400px'},2000);TODO
	var html = '';
	var index = pos;
	html += "<div class='main'><span class='namefield'>&nbsp;</span><h3>Adres wijzigen</h3>"+
	"<div id='fieldspace'></div><span class='namefield'>Voornaam</span>"+
	"<input type='text' size='46' maxlength='40' name='forename1' id='forename1' value='"+member.forename+"' /><br />"+
	"<div id='fieldspace'></div><span class='namefield'>Achternaam</span>"+
	"<input type='text' size='46' maxlength='40' name='lastname1' id='lastname1' value='"+member.lastname+"' /><br />"+
	"<div id='fieldspace'></div><span class='namefield'>Adres</span>"+
	"<input type='text' size='46' maxlength='40' name='address1' id='address1' value='"+member.address+"' /><br />"+
	"<div id='fieldspace'></div><span class='namefield'>Postcode</span>"+
	"<input type='text' size='46' maxlength='7' name='zipcode1' id='zipcode1' value='"+member.zipcode+"' /><br />"+
	"<div id='fieldspace'></div><span class='namefield'>Woonplaats</span>"+
	"<input type='text' size='46' maxlength='40' name='city1' id='city1' value='"+member.city+"' /><br />"+
	"<div id='fieldspace'></div><span class='namefield'>Telefoon</span>"+
	"<input type='text' size='46' maxlength='10' name='telephone1' id='telephone1' value='"+member.telephone+"' /><br />"+
	"<div id='fieldspace'></div><span class='namefield'>Email</span>"+
	"<input type='text' size='46' maxlength='40' name='email1' id='email1' value='"+member.email+"' /><br />"+
	"<div id='fieldspace'></div><div id='fieldspace'></div>"+   
	"<span class='namefield'>&nbsp;</span>"+
	"<button id='edit' class='button'>Gegevens Wijzigen</button>"+
	"</div>";
	//document.getElementById("editdiv").innerHTML=html;
	$("#editdiv").html(html).slideDown(2000);
	addCSS();
	$("#edit").on("click", function() {
		 $(this).css({"color": "red", "border": "1px solid red"});
		var val1 = $("#forename1").val();
		var val2 = $("#lastname1").val();
		var val3 = $("#address1").val();
		var val4 = $("#zipcode1").val();
		var val5 = $("#city1").val();
		var val6 = $("#telephone1").val();
		var val7 = $("#email1").val();
		if(validate('edit')) {
			console.log(arrayList[index].forename + " gewijzigd!");
			arrayList.splice(index, 1, new Member(val1,val2,val3,val4,val5,val6,val7));
			createJsonFile(arrayList);
			var subelem1 = $("<td></td>").html("<a href='' onclick='event.preventDefault();'>"+ val7 +"</a>");
			var elem = $("<tr></tr>").addClass('inner');
			$(elem)
				.append("<td class='user_table_txt'>"+(index+1)+"</td>")
				.append("<td class='user_table_txt2'>"+val1+"</td>")
				.append("<td class='user_table_txt2'>"+val2+"</td>")
				.append("<td class='user_table_txt'>"+val3+"</td>")
				.append("<td class='user_table_txt'>"+val4+"</td>")
				.append("<td class='user_table_txt'>"+val5+"</td>")
				.append("<td class='user_table_txt'>"+val6+"</td>")
				//.append("<td>"+val7+"</td>").addClass('user_table_txt')
				.append(subelem1).addClass('user_table_a')  // a becomes the class!
				.append("<td class='user_table_a'><a href='' onclick='event.preventDefault();"+
				"edit(arrayList["+(arrayList.length-1)+"], "+(arrayList.length-1)+")'>Wijzigen</a></td>")
				.append("<td class='user_table_a'><a href='' onclick='event.preventDefault();"+
				"del(arrayList["+(arrayList.length-1)+"], "+(arrayList.length-1)+")'>Verwijderen</a></td>");
			$("#flextable > tbody > tr:nth-child("+(index+1)+")").after(elem);
			$("#flextable > tbody > tr:nth-child("+(index+1)+")").remove();
			//document.getElementById("editdiv").innerHTML='';
			$("#editdiv").slideUp(2000);
			//$("#adddiv").animate({marginRight: '400px'},2000);
		}/*end validate*/
	});
}

function del(member, pos) {
	$("#editdiv").hide();
	var html = '';
	var index = pos;
	html += "<div class='main'><span class='namefield'>&nbsp;</span><h3>Adres verwijderen</h3>"+
	"<div id='fieldspace'></div><span class='namefield'>Voornaam</span>"+
	"<input type='text' size='46' maxlength='40' name='forename1' id='forename1' value='"+member.forename+"' readonly /><br />"+
	"<div id='fieldspace'></div><span class='namefield'>Achternaam</span>"+
	"<input type='text' size='46' maxlength='40' name='lastname1' id='lastname1' value='"+member.lastname+"' readonly /><br />"+
	"<div id='fieldspace'></div><span class='namefield'>Adres</span>"+
	"<input type='text' size='46' maxlength='40' name='address1' id='address1' value='"+member.address+"' readonly /><br />"+
	"<div id='fieldspace'></div><span class='namefield'>Postcode</span>"+
	"<input type='text' size='46' maxlength='7' name='zipcode1' id='zipcode1' value='"+member.zipcode+"' readonly /><br />"+
	"<div id='fieldspace'></div><span class='namefield'>Woonplaats</span>"+
	"<input type='text' size='46' maxlength='40' name='city1' id='city1' value='"+member.city+"' readonly /><br />"+
	"<div id='fieldspace'></div><span class='namefield'>Telefoon</span>"+
	"<input type='text' size='46' maxlength='10' name='telephone1' id='telephone1' value='"+member.telephone+"' readonly /><br />"+
	"<div id='fieldspace'></div><span class='namefield'>Email</span>"+
	"<input type='text' size='46' maxlength='40' name='email1' id='email1' value='"+member.email+"' readonly /><br />"+
	"<div id='fieldspace'></div>"+
	"<div id='fieldspace'></div>"+   
	"<span class='namefield'>&nbsp;</span>"+
	"<button id='delete' class='button'>Gegevens Verwijderen</button>"+
	"</div>";
	//document.getElementById("editdiv").innerHTML=html;
	$("#editdiv").html(html).slideDown(2000);
	addCSS();
	$("#delete").on("click", function() {
		console.log(arrayList[index].forename + " verwijderd!");
		arrayList.splice(index,1);
		createJsonFile(arrayList);
		$("#flextable > tbody > tr:nth-child("+(index+1)+")").remove();
		sortAddresses(arrayList);
		//document.getElementById("editdiv").innerHTML='';
		$("#editdiv").slideUp(2000);
	});
}

function createJsonFile(array) {
	var row = '[' ;
	var i;
	for(i = 0; i<array.length; i++) {
		row += '{\n';
		row += '"forename": "'+ array[i].forename +'",\n';
		row += '"lastname": "'+ array[i].lastname +'",\n';
		row += '"address": "'+ array[i].address +'",\n';
		row += '"zipcode": "'+ array[i].zipcode +'",\n';
		row += '"city": "'+ array[i].city +'",\n';
		row += '"telephone": "'+ array[i].telephone +'",\n';
		row += '"email": "'+ array[i].email +'"\n';
		if(i===array.length-1) {
			row += '}';
		} else {
			row += '},\n';
		}
	}
	row += ']';
	document.getElementById("textarea").value = row;
}	
function uploadJsonFile(){
	var x = document.getElementById("myFile");
	var txt = "";
	if ('files' in x) {
		if (x.files.length == 0) {
			txt = "Select one or more files.";
		} else {
			for (var i = 0; i < x.files.length; i++) {
				txt += "<br><strong>" + (i+1) + ". file</strong><br>";
				var file = x.files[i];
				if ('name' in file) {
					txt += "name: " + file.name + "<br>";
				}
				if ('size' in file) {
					txt += "size: " + file.size + " bytes <br>";
				}
				document.getElementById("demo").innerHTML = txt;
				var ourData;
				var ourRequest = new XMLHttpRequest();
				//ourRequest.overrideMimeType("application/json");
				ourRequest.open('GET', file.name);
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
			}
		}
	} else {
		if (x.value == "") {
			txt += "Select one or more files.";
		} else {
			txt += "The files property is not supported by your browser!";
			txt  += "<br>The path of the selected file: " + x.value;
		}
	}
}

function createHelpFile() {
	var txt = "Het programma :\n"+
	"leest een '.json file' in,\n"+
	"stopt die gegevens in objecten,\n"+
	"propt de objecten in een array,\n"+
	"laat de array zien in een tabel.\n"+
	"(laat de gegevens ook zien als json file met de 'jSon Bekijken' knop.)\n\n"+
	"Hoe werkt het:\n\n"+
	"open de browser\n"+
	"Surf naar https://lieuwe-jelle.nl/CodeGorilla/AddressApp/addressapp.html \n\n"+
	"De applicatie start met een klein voorbeeld.\n"+
	"Gebruik de 'Adresssenbestand toevoegen' en 'Alle gegevens verwijderen' links voor groepen records in\n"+
	"combinatie met 'Gegevens Toevoegen' knop en 'Wijzigen' en 'Verwijderen' links voor individuele records\n"+
	"om te oefenen.\n\n"+
	"Sla het juiste resultaat op op je computer als een '.json file' met de 'alle gegevens opslaan' knop.\n"+
	"Weet waar je het opslaat!\n"+
	"Sluit de browser.\n\n"+
	"Open de browser.\n"+
	"Surf naar https://lieuwe-jelle.nl/CodeGorilla/AddressApp/addressapp.html \n"+
	"Druk op de 'Alle gegevens verwijderen' link.\n"+
	"Lees het bestand weer in via de 'jSon Uploaden' knop en voila. . .\n";
	document.getElementById("textarea1").value = txt;
}

function addAddresses(jsObj) {
	index = arrayList.length;
	var row = "";
	for(var i = 0; i<jsObj.length; i++) {
		arrayList.push(new Member(jsObj[i].forename, jsObj[i].lastname, jsObj[i].address, jsObj[i].zipcode,
		jsObj[i].city, jsObj[i].telephone, jsObj[i].email));
		row += "<tr class='inner'>"+
		"	<td class='user_table_txt'>"+(++index)+"</td>"+
		"	<td class='user_table_txt2'>"+ jsObj[i].forename +"</td>"+
		"	<td class='user_table_txt2'>"+ jsObj[i].lastname +"</td>"+
		"	<td class='user_table_txt'>"+ jsObj[i].address +"</td>"+
		"	<td class='user_table_txt'>"+ jsObj[i].zipcode +"</td>"+
		"	<td class='user_table_txt'>"+ jsObj[i].city +"</td>"+
		"	<td class='user_table_txt'>"+ jsObj[i].telephone +"</td>"+
		"	<td class='user_table_a'><a href='' onclick='event.preventDefault();'"+
			">"+ jsObj[i].email +"</a></td>"+
		"	<td class='user_table_a'><a href='' onclick='event.preventDefault();"+
			"edit(arrayList["+(index-1)+"],"+(index-1)+")'>Wijzigen</a></td>"+
		"	<td class='user_table_a'><a href='' onclick='event.preventDefault();"+
			"del(arrayList["+(index-1)+"],"+(index-1)+")'>Verwijderen</a></td>"+
		"</tr>";
	}
	//document.getElementById("tablehelper").innerHTML='';
  tablehelper.insertAdjacentHTML('beforeend', row);
	createJsonFile(arrayList);
	for(var i = 0; i<jsObj.length; i++) {
		console.log(arrayList[i]);
	}
}
function sortAddresses(array, col) {
	if(col===1) {
		array.sort(function(a, b){
			var x = a.forename.toLowerCase();
			var y = b.forename.toLowerCase();
			if (x < y) {return -1;}
			if (x > y) {return 1;}
			return 0;
		});
	} else if (col===2) {
		array.sort(function(a, b){
			var x = a.lastname.toLowerCase();
			var y = b.lastname.toLowerCase();
			if (x < y) {return -1;}
			if (x > y) {return 1;}
			return 0;
		});
	}
	index = array.length;
	var row = "";
	for(var i = 0; i<array.length; i++) {
		row += "<tr class='inner'>"+
		"	<td class='user_table_txt'>"+(i+1)+"</td>"+
		"	<td class='user_table_txt2'>"+ array[i].forename +"</td>"+
		"	<td class='user_table_txt2'>"+ array[i].lastname +"</td>"+
		"	<td class='user_table_txt'>"+ array[i].address +"</td>"+
		"	<td class='user_table_txt'>"+ array[i].zipcode +"</td>"+
		"	<td class='user_table_txt'>"+ array[i].city +"</td>"+
		"	<td class='user_table_txt'>"+ array[i].telephone +"</td>"+
		"	<td class='user_table_a'><a href='' onclick='event.preventDefault();'>"+ array[i].email +"</a></td>"+
		"	<td class='user_table_a'><a href='' onclick='event.preventDefault();edit(arrayList["+(i)+"],"+i+")'>Wijzigen</a></td>"+
		"	<td class='user_table_a'><a href='' onclick='event.preventDefault();del(arrayList["+(i)+"],"+i+")'>Verwijderen</a></td>"+
		"</tr>";
	}
	document.getElementById("tablehelper").innerHTML=row; //TODO
  //tablehelper.insertAdjacentHTML('beforeend', row);
}
function addCSS() {
  $(".button")
		.css("font-size", "12pt")
		.css("padding", "4px 12px")
		.css("border", "1px solid #ac0000")
		.css("color", "#ac0000")
		.width(160); 
	$(".button").hover(function(){
		$(this).css("font-weight", "bold");
		$(this).css("border", "1px solid #A8015C");
		$(this).css("color", "#A8015C");
		//$(this).css("background-color", "yellow");
		}, function(){ // AND restore!
		 $(this).css("font-weight", "normal");    
		 $(this).css("border", "1px solid #ac0000");
		 $(this).css("color", "#ac0000");
		//$(this).css("background-color", "pink");
	});
}