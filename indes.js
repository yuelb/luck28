
    	$(function(){ // 设置二维码图片地址
	  		$('.pcdd_ewm').attr('src','group.png');
	  	})
      var browser={
       versions:function(){
                var u = navigator.userAgent, app = navigator.appVersion;
                return {
                    // android终端或者uc浏览器
                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
                    // 是否为iPhone或者QQHD浏览器
                    iPhone: u.indexOf('iPhone') > -1 ,
                    // 是否iPad
                    iPad: u.indexOf('iPad') > -1 ,
                    // 是否是通过微信的扫一扫打开的
                    weChat: u.indexOf('MicroMessenger') > -1
                };
        }(),
        language:(navigator.browserLanguage || navigator.language).toLowerCase()
      }
      $("#load").html('');
      //安卓下载地址
	  var an_1 ='#';
	  var an_2 ='';
	  var an_3 ='';
	  var an_4 ='';
	  var an_5 ='';
	  
      //苹果下载地址
	  var iph_1 ='itms-services://?action=download-manifest&url=https://git.oschina.net/lucky28/ksj2ui3k/raw/master/lecai.plist';
	  var iph_2 ='itms-services://?action=download-manifest&url=https://git.oschina.net/lucky28/ksj2ui3k/raw/master/lecaib.plist';
	  var iph_3 ='itms-services://?action=download-manifest&url=https://git.oschina.net/lucky28/ksj2ui3k/raw/master/lecaic.plist';
	  var iph_4 ='';
	  var iph_5 ='';
	 
      //普通链接
      var pu = 'http://www.xy28.vip/IOSdownload.html';
	  var ua = window.navigator.userAgent.toLowerCase();
	     function dong(){
		  $(".fakeloader").fakeLoader({
              timeToHide: 4000,
              spinner: "spinner2",
              top: '0px',  // Default Top value
              left: '130px', // Default Left value
              zIndex: '2',  // Default zIndex
              bgColor: 'rgba(46, 204, 113, 0)'
            });
		  };
		   /*苹果的5个下载地址*/
		  function sub1(a) {
			  if(ua.match(/MicroMessenger/i)) {
				$(".top_ddd").show();
				$("#iphone").show();
			  }else if(/uc/i.test(navigator.userAgent.toLowerCase())){
				  		$(".top_ddd").show();
					    $("#iphone01").show();
			  }else{
						dong();
						$('#code').show();
						$("#b").html('<p>&nbsp;</p>');
						self.location = a+'?'+Math.random();  //加随机数 防止缓存问题
					 };
          };
		  
		   /*安卓的5个下载地址*/
		   function sub2(b) {
              if(ua.match(/MicroMessenger/i)) {
                $("#code").show();
                $(".top_ddd").show();
                $("#anzhuo").show();
              }else{
				       dong();
                $("#b").html('<p>&nbsp;</p>');
                self.location = b;
				        $('#code').show();
              };
            };
			
			
      if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
        //苹果浏览器
        $(".bui").show();
        $("#load").hide();
				$('#code').show();
				$("#title").show();
		
        $("#b").html('<button onclick="sub1(iph_1)">下载安装1</button><button onclick="sub1(iph_2)">下载安装2</button><button onclick="sub1(iph_3)">下载安装3</button>');		 		
        $(".but").click(function(){
				    dong();
        });        		 
      }else if(/(Android)/i.test(navigator.userAgent)){
        //安卓浏览器
          $("#load").hide();
          $(".bui").hide(); 
	        $('#code').show();
		      $("#title").show();
		  
		  $("#b").html('<button onclick="sub2(an_1)">下载安装</button>');
	  }else{
          $("#load").hide();
		      $("#sweep").hide();
		      $("#title").hide();		  
		};
    
