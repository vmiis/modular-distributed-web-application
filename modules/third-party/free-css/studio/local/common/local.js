$('#sandbox__ID').attr('src',url_frame);
//--------------------------------------------------------
$('#sandbox__ID').on('load',(function(){
	$vm.load_module_content(url_content,function(sandbox_content){
		var iframeWin = document.getElementById("sandbox__ID").contentWindow;
		iframeWin.postMessage({content:sandbox_content},'*');
	})
}));
//--------------------------------------------------------
window.addEventListener('message', function(e) {
	if(e.data.sandbox_id=='sandbox__ID'){
		if(e.data.cmd==1){
			$vm.nav_load_module('main_simple-static-content-module');
		}
		else if(e.data.cmd==2){
			//-------------------------------------
			var req={cmd:"add_record_anonymous",db_pid:'20011189',data:e.data.contact,dbv:{}};
			$VmAPI.request({data:req,callback:function(res){
				$vm.alert('Thank you for your message!');
				var iframeWin = document.getElementById("sandbox__ID").contentWindow;
				iframeWin.postMessage({res:res},'*');
			}});
			//-------------------------------------
		}
		else if(e.data.cmd==3){
			$vm.url_source(url_content);
		}
	}
}, false)
//--------------------------------------------------------
$('#s__ID').on('click',function(){$vm.url_source(url_content);})
//--------------------------------------------------------
