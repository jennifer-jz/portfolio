$(document).ready(function(){
	var items = $(".demos .col-sm-3");

	items.filter($(".seo")).find(".tags").append(`<a href=\"${rootpath}/product/seo\"><span class=\"badge\">SEO</span></a>`);
	items.filter($(".csharp")).find(".tags").append(`<a href=\"${rootpath}/product/csharp\"><span class=\"badge\">C#</span></a>`);
	items.filter($(".aspnet")).find(".tags").append(`<a href=\"${rootpath}/product/aspnet\"><span class=\"badge\">ASP.NET</span></a>`);
	items.filter($(".mssql")).find(".tags").append(`<a href=\"${rootpath}/product/mssql\"><span class=\"badge\">MSSQL</span></a>`);
	items.filter($(".networking")).find(".tags").append(`<a href=\"${rootpath}/product/networking\"><span class=\"badge\">Networking</span></a>`);
	items.filter($(".nlp")).find(".tags").append(`<a href=\"${rootpath}/product/nlp\"><span class=\"badge\">NLP</span></a>`);
	items.filter($(".ir")).find(".tags").append(`<a href=\"${rootpath}/product/ir\"><span class=\"badge\">IR</span></a>`);
	items.filter($(".api")).find(".tags").append(`<a href=\"${rootpath}/product/api\"><span class=\"badge\">API</span></a>`);
	items.filter($(".bootstrap")).find(".tags").append(`<a href=\"${rootpath}/product/bootstrap\"><span class=\"badge\">Bootstrap</span></a>`);
	items.filter($(".canvas")).find(".tags").append(`<a href=\"${rootpath}/product/canvas\"><span class=\"badge\">Canvas</span></a>`);
	items.filter($(".php")).find(".tags").append(`<a href=\"${rootpath}/product/php\"><span class=\"badge\">Php</span></a>`);
	items.filter($(".mysql")).find(".tags").append(`<a href=\"${rootpath}/product/mysql\"><span class=\"badge\">mysql</span></a>`);
});

function filterSelection(thisevent, keyword){
	// alert('this');
	$("#myBtnContainer").find("a").attr("class", "btn btn-secondary");
	// thisevent.className += " active";
	// $("#"+keyword).className += " active";
	$("#"+keyword).attr("class", "btn btn-secondary active");
	$(".col-sm-3").css("display", "none");
	if (keyword) {
	  $("."+keyword).css("display", "block");
	}
	else {
	  $(".col-sm-3").css("display", "block");
	}
}