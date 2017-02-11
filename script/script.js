function updateOutput(){
	$("iframe").contents().find("html").html("<html><head><style type='text/css'>"+$("#cssPanel").val()+"</style>" + $("#htmlPanel").val()) +"</body></html>";
	document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
	
}
updateOutput();
$(".toggle-button").hover(function(){
	$(this).addClass("highlightedButton");
}, function(){

	$(this).removeClass("highlightedButton");
})
$(".toggle-button").click(function(){
	$(this).toggleClass("active");
	$(this).removeClass("highlightedButton");
	var panelID = $(this).attr("id")+"Panel";
	$("#"+panelID).toggleClass("hidden");
	var numberOfActivePanels = 4 - $('.hidden').length;
	$(".panel").width(($(window).width()/numberOfActivePanels) - 10);
})
$(".panel").height($(window).height()-$("#header").height()-35);
$(".panel").width(($(window).width()/2) - 10);
$("textarea").on('change keyup paste', function(){
	
	updateOutput();
})