$(document).ready(function(){
	var mylist = $("#Achievement li");

	$(`<a href=\"${rootpath}/product/seo\"><span class=\"badge\">SEO</span></a>`).appendTo(mylist.filter($(".seo")));
	$(`<a href=\"${rootpath}/product/msword\"><span class=\"badge\">Office Programming</span></a>`).appendTo(mylist.filter($(".office")));
	$(`<span class=\"badge\">Security</span>`).appendTo(mylist.filter($(".security")));
	$(`<a href=\"${rootpath}/product/ir\"><span class=\"badge\">IR</span></a>`).appendTo(mylist.filter($(".ir")));
	$(`<a href=\"${rootpath}/product/nlp\"><span class=\"badge\">NLP</span></a>`).appendTo(mylist.filter($(".nlp")));
	$(`<a href=\"${rootpath}/product/mysql\"><span class=\"badge\">MySQL</span></a>`).appendTo(mylist.filter($(".mysql")));
	$(`<a href=\"${rootpath}/product/mssql\"><span class=\"badge\">MSSQL</span></a>`).appendTo(mylist.filter($(".mssql")));
	
	$(`<a href=\"${rootpath}/product/networking\"><span class=\"badge\">Networking</span></a>`).appendTo(mylist.filter($(".networking")));
	$(`<span class=\"badge\">React</span>`).appendTo(mylist.filter($(".react")));
	$(`<span class=\"badge\">ES6</span>`).appendTo(mylist.filter($(".es6")));
	$(`<span class=\"badge\">Node</span>`).appendTo(mylist.filter($(".node")));
	$(`<a href=\"${rootpath}/product/csharp\"><span class=\"badge\">C#</span></a>`).appendTo(mylist.filter($(".csharp")));
	$(`<a href=\"${rootpath}/product/aspnet\"><span class=\"badge\">ASP.NET</span></a>`).appendTo(mylist.filter($(".aspnet")));

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