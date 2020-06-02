
function btnClicked() {
	if(checkDataAndAlert()) {
		resetForm();
		sendData();
	}
}
function sendData() {
	alert('This is a fake send-data function');
}

function setText(id, str) {
	document.getElementById(id).innerHTML = str;
}

function resetForm() {
	setText("msglab", '*Message:');
	setText("fnamelab", '*First name:');
	setText("reasonlab", '*You are contacting me because:');

}

function checkDataAndAlert() {
	var correct = true;
	if(!checkMsg()) { //campi obbligatori vuoti
		setText("msglab", '*Message:      <span style="color: red">Fields marked with a (*) are required!</span>');
		correct = false;
	}
	if(!checkName()) {
		setText("fnamelab", '*First name:      <span style="color: red">Fields marked with a (*) are required!</span>');
		correct = false;
	}
	if(!checkReason()) {
		setText("reasonlab", '*You are contacting me because:      <span style="color: red">Fields marked with a (*) are required!</span>');
		correct = false;
	}

	if(!checkEmail()) {
		alert("Error! Please insert a valid email address!");
		correct = false;
	}

	return correct;
}

function checkMsg() {
	return document.form.msg.value != "";
}
function checkName() {
	return document.form.fname.value != "";
}
function checkReason() {
	return document.form.reason.value != "";
}


function checkEmail() {
	var mail = document.form.email;
	return mail.value.includes("@") || mail.value == "";
}

