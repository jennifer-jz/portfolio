$(document).ready(function(){
	var courseprj = $(".courseprj");

	var subelements = subject ? courseprj.find("." + subject) : [];
	if (subject && subelements.length) {
		courseprj.find("p").css("display", "none");
		subelements.css("display", "block");
	}

	courseprj.find("p.os").children("span").append(`<a href=\"${rootpath}/education/os\"><span class=\"badge\">OS</span></a>`);
	courseprj.find("p.nlp").children("span").append(`<a href=\"${rootpath}/education/nlp\"><span class=\"badge\">NLP</span></a>`);
	courseprj.find("p.hci").children("span").append(`<a href=\"${rootpath}/education/hci\"><span class=\"badge\">HCI</span></a>`);
	courseprj.find("p.ir").children("span").append(`<a href=\"${rootpath}/education/ir\"><span class=\"badge\">IR</span></a>`);
	courseprj.find("p.ml").children("span").append(`<a href=\"${rootpath}/education/ml\"><span class=\"badge\">ML</span></a>`);
	courseprj.find("p.algorithm").children("span").append(`<a href=\"${rootpath}/education/algorithm\"><span class=\"badge\">Algorithm</span></a>`);
	courseprj.find("p.web").children("span").append(`<a href=\"${rootpath}/education/web\"><span class=\"badge\">Web</span></a>`);
	courseprj.find("p.java").children("span").append(`<a href=\"${rootpath}/education/java\"><span class=\"badge\">Java</span></a>`);
	courseprj.find("p.php").children("span").append(`<a href=\"${rootpath}/education/php\"><span class=\"badge\">Php</span></a>`);
	courseprj.find("p.ajax").children("span").append(`<a href=\"${rootpath}/education/ajax\"><span class=\"badge\">Ajax</span></a>`);
	courseprj.find("p.jquery").children("span").append(`<a href=\"${rootpath}/education/jquery\"><span class=\"badge\">jQuery</span></a>`);
	courseprj.find("p.mysql").children("span").append(`<a href=\"${rootpath}/education/mysql\"><span class=\"badge\">MySQL</span></a>`);
	courseprj.find("p.html").children("span").append(`<a href=\"${rootpath}/education/html\"><span class=\"badge\">Html</span></a>`);
	courseprj.find("p.css").children("span").append(`<a href=\"${rootpath}/education/css\"><span class=\"badge\">Css</span></a>`);
	courseprj.find("p.android").children("span").append(`<a href=\"${rootpath}/education/android\"><span class=\"badge\">Android</span></a>`);
	courseprj.find("p.game").children("span").append(`<a href=\"${rootpath}/education/game\"><span class=\"badge\">Game</span></a>`);
	courseprj.find("p.bootstrap").children("span").append(`<a href=\"${rootpath}/education/bootstrap\"><span class=\"badge\">Bootstrap</span></a>`);
	courseprj.find("p.mean").children("span").append(`<a href=\"${rootpath}/education/mean\"><span class=\"badge\">Mean Stack</span></a>`);
	courseprj.find("p.rest").children("span").append(`<a href=\"${rootpath}/education/rest\"><span class=\"badge\">Restful API</span></a>`);
	courseprj.find("p.corenlp").children("span").append(`<a href=\"${rootpath}/education/corenlp\"><span class=\"badge\">Stanford CoreNLP</span></a>`);
});