function UrlExists(url, cb){
	jQuery.ajax({
		url:      url,
		dataType: 'text',
		type:     'GET',
		complete:  function(xhr){
			 console.log(xhr.status+" "+url)
		}
	});
}
//--------------------------------------------------------
var N=0;
$('#panel__ID li').each(function(){
	var m=$(this).attr('module');
	if(m!=undefined){
		if($vm.module_list[group+m]==undefined){alert(group+m +" is not in the module list");return false;}N++;
	}
})
alert(N);
//--------------------------------------------------------
var N=0;
$('#panel__ID li').each(function(){
	var m=$(this).attr('module');
	if(m!=undefined){
		if($vm.module_list[group+m].url==undefined){alert(group+m +" url is not set");return false;}N++;
	}
})
alert(N);
//--------------------------------------------------------
$('#panel__ID li').each(function(){
	var m=$(this).attr('module');
	if(m!=undefined){
		var url=$vm.module_list[group+m].url;
		if(url[0]=='/') url=$vm.hosting_path+url;
		UrlExists(url)
	}
})
//--------------------------------------------------------
