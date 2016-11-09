$(function(){
		var audio=$("#audio").get(0);
		var play=$(".bf-ks");
		var progress=$(".bf-jd")
		var duration=$(".bf-zsc");
		var current=$(".bf-sc");
		var pi=$(".bf-jds");
		var vi=$("#v-i");
		var volume=$("#volum");
		var mute=$("#mute");
		
//		$(audio).on("canplaythrough", function () {
//          alert('音频文件已经准备好，随时待命');
//      });
// 修改事件方式，秒变为分;
		function format(v){
			v=Math.floor(v);
			var s=v%60;
			s=(s<10)?("0"+s):s;
			var m=Math.floor(v/60);
			return m+":"+s;
		}
		$(audio).on("canplay",function(){
			duration.html(format(audio.duration));
		})
		
// 点击播放暂停
		play.on("click",function(){
			if (audio.paused) {
				audio.play();
			}else{
				audio.pause();
			}
		})
		$(audio).on("play",function(){
			play.html("&#xe6cb;");
		})
		$(audio).on("pause",function(){
			play.html("&#xe609;");
		})
// 获取以播放的 长度
		progress.on("click",function(e){
			audio.currentTime=e.offsetX/progress.width()*audio.duration;
		})
// 播放的时候执行的函数
		$(audio).on("timeupdate",function(){
			current.html(format(audio.currentTime));
			var left=progress.width()*audio.currentTime/audio.duration;
			pi.css("width",left);
		})
// 调节音量
		volume.on("click",function(e){
			audio.volume=e.offsetX/volume.width();
			mute.removeAttr("data-v");
		})

// 变为静音
		mute.on("click",function(){
			if($(this).attr("data-v")){
				audio.volume=$(this).attr("data-v");
				$(this).removeAttr("data-v");
			}else{
				$(this).attr("data-v",audio.volume);
				audio.volume=0;
			}
		})
// 音量事件驱动
		$(audio).on("volumechange",function(){
			vi.css("left",volume.width()*audio.volume-vi.width()/2)
		})
// 进度条，音量， 阻止冒泡事件
		pi.on("click",false);
		vi.on("click",false);
// 进度条滚动
//		pi.on("mousedown",function(e){
//			var r=pi.width()/2;
//			var start=r-e.offsetX;
//			$(document).on("mousemove",function(e){
//				var left=e.clientX-progress.position().left+start-20;
//				var c=left/progress.width()*audio.duration;
//				if (c>=audio.duration||c<=0) {
//						return ;
//				}
//				audio.currentTime=c;
//			})
//			return false;
//		})
//		$(document).on("mouseup",function(){
//			$(document).off("mousemove");
//		})


progress.on("touchend",function(e){						//进度条点击
		show=0;
	    left=e.originalEvent.changedTouches[0].clientX-progress.offset().left;
		audio.currentTime=audio.duration* left/progress.width();
		return false;
	})
	
	pi.on("click",false)
	
//	pi.on("touchstart",function(e){							//进度条拖进
//		ox=e.originalEvent.changedTouches[0].clientX-pi.offset().left;
//		var start=pi.width()/2-ox;
//		$(document).on("touchmove",function(e){
//			var left=e.originalEvent.changedTouches[0].clientX-progress.offset().left+start;
//				if(left>=progress.width()||left1<=0){
//					return;	
//				}
//			audio.currentTime=left/progress.width()*audio.duration;
//			
//		})
//		return false;
//	})
//	pi.on("touchend",function(){
//		console.log(1)
//		$(document).off("touchmove")
//		return false;
//	})
// 音量拖拽问题
		vi.on("mousedown",function(e){
			var r=vi.width()/2;
			var start=r-e.offsetX;
			$(document).on("mousemove",function(e){
				var left=e.clientX-volume.position().left+start-20;
				var c=left/volume.width();
				if (c<0||c>1) {  /*边界问题*/
					return;
				}
				audio.volume=left/volume.width();
			})
			return false;
		})
		
	// 添加歌曲
	var currentIndex=0;
	var musics=[
		{
			name:"演员",
			author:"-薛之谦-",
			authors:"薛之谦",
			src:"music/薛之谦 - 演员.mp3",
			lyric:"[00:00.32]演员[00:01.00][00:01.61]作词：薛之谦[00:02.64]作曲：薛之谦[00:03.00]演唱：薛之谦[00:04.20][00:21.12]简单点说话的方式简单点[00:30.20]递进的情绪请省略[00:33.64]你又不是个演员[00:36.38]别设计那些情节[00:39.36][00:41.93]没意见我只想看看你怎么圆[00:51.54]你难过的太表面 像没天赋的演员[00:57.15]观众一眼能看见[01:00.19][01:02.22]该配合你演出的我演视而不见[01:07.68]在逼一个最爱你的人即兴表演[01:12.90]什么时候我们开始收起了底线[01:18.02]顺应时代的改变看那些拙劣的表演[01:23.42]可你曾经那么爱我干嘛演出细[01:28.63]我该变成什么样子才能延缓厌倦[01:33.87]原来当爱放下防备后的这些那些[01:39.37]才是考验[01:41.97][01:44.60]没意见你想怎样我都随便[01:54.53]你演技也有限[01:57.58]又不用说感言[02:00.15]分开就平淡些[02:02.99][02:05.00]该配合你演出的我演视而不见[02:10.53]别逼一个最爱你的人即兴表演[02:15.81]什么时候我们开始没有了底线[02:21.01]顺着别人的谎言被动就不显得可怜[02:26.43]可你曾经那么爱我干嘛演出细节[02:31.52]我该变成什么样子才能配合出演[02:36.72]原来当爱放下防备后的这些那些[02:41.86]都有个期限[02:44.60][02:47.56]其实台下的观众就我一个[02:53.04]其实我也看出你有点不舍[02:58.34]场景也习惯我们来回拉扯[03:02.93]还计较着什么[03:07.39][03:08.71]其实说分不开的也不见得[03:14.04]其实感情最怕的就是拖着[03:19.21]越演到重场戏越哭不出了[03:24.07]是否还值得[03:28.12][03:29.07]该配合你演出的我尽力在表演[03:34.39]像情感节目里的嘉宾任人挑选[03:39.68]如果还能看出我有爱你的那面[03:44.82]请剪掉那些情节让我看上去体面[03:50.04]可你曾经那么爱我干嘛演出细节[03:55.31]不在意的样子是我最后的表演[04:01.05]是因为爱你我才选择表演 这种成全"
		},
		{
			name:"绅士",
			author:"-薛之谦-",
			authors:"薛之谦",
			src:"music/薛之谦 - 绅士.mp3"
		},
		{
			name:"刚刚好",
			author:"-薛之谦-",
			authors:"薛之谦",
			src:"music/薛之谦 - 刚刚好.mp3"
		},
		{
			name:"燕归巢",
			author:"-许嵩-",
			authors:"许嵩",
			src:"music/许嵩 - 燕归巢.mp3"
		},
		{
			name:"那一年",
			author:"-许巍-",
			authors:"许巍",
			src:"music/许巍 - 那一年.mp3"
		}
		
	]
//定义函数
var ul=$(".songlist");
    function render(){
    	ul.empty();
    	$.each(musics,function(index,val){
    			var c=(index==currentIndex)? "active":"";
//              var now=index;
    			$("<li class='"+c+"'><span class='name'>"+musics[index].name+"</span><span class='author'>"+musics[index].authors+"</span></li>").appendTo(ul);
    	})
    }  
    render();
    ul.on("click","li",function(){
    	$("li").removeClass("active");
    	$(this).addClass("active");
    	$('.list').css('display','none')
    	$('.zhezhao').css('display','none')
    	currentIndex=$(this).index();
    	console.log(currentIndex);
    	audio.src=musics[currentIndex].src;
    	audio.play();
    })
    $('.bf-xia').on('touchend',function(){
    	$('.box').css('display','block')
    	$('.zhezhao').css('display','block')
    })
    var now=0;
    ul.on("touchend","li",function(){
		var index=$(this).index();
		if(index==now){
			if(audio.paused){
				audio.play();
			}
			else{
				audio.pause()
			}
			return;
		}
		now=index;
		console.log(now)
		return false;
	})
     $('.zhezhao').on('touchend',function(){
    	$('.list').css('display','none')
    	$('.zhezhao').css('display','none')
    })
// 下一首
   var next=$(".bf-xyq");
   next.on("click",function(){
   		currentIndex++;
   		now=now+1;
   		if(now>musics.length-1){
   		now=0;
   	}
   		if (currentIndex>musics.length-1) {
   			currentIndex=0;
   		}
   		$("li").removeClass("active");
		$("li").eq(currentIndex).addClass("active");
        $('.bf-gm').html(musics[now].name);
        $('.bf-gs').html(musics[now].author);
   		audio.src=musics[currentIndex].src;
    	audio.play();
   })
   // 上一首
    var pre=$(".bf-syq");
   pre.on("click",function(){
   	now=now-1;
   	if(now<0){
   		now=musics.length-1;
   	}
   		currentIndex--;
   		if (currentIndex<=0) {
   			currentIndex=musics.length-1;
   		}
   		$('.bf-gm').html(musics[now].name);
        $('.bf-gs').html(musics[now].author);
   		audio.src=musics[currentIndex].src;
    	audio.play();
   })	
	$(audio).on("canplay",function(){
		$('.bf-gm').html(musics[now].name);
        $('.bf-gs').html(musics[now].author);
//      $('.bf-gc').html(musics[now].lyric)
        lyric_ctrl();
	})
		
		function lyric_ctrl()
		{
			var lyricObj=musics[0].lyric;
			var temp=lyricObj.split("[");
			var html1="";
			for(var i=0;i<temp.length;i++)
			{
				var arr=temp[i].split("]");
				var text=(arr[1]);
				var time=arr[0].split(",");
				var temp2=time[0].split(".");
				var ms=temp2[1];//毫秒
				var temp3=temp2[0].split(":");			
				var s=temp3[1];//秒
				var m=temp3[0];//分
				var time2=m+":"+s;
				if(time2>=$(".bf-sc").html())
				{
					html1+="<p>"+text+"</p>";
				}	
			}
			console.log(text)
			$(".bf-gc").html(html1);
		}
	
	
	
	$(".ht-l").on("click",function(){
		   	   $(".box").css("display","block");
		   })
           $(".ht-r").on("click",function(){
		   	   $(".box").css("display","none");
		   })
           
           $(".b1").on("click",function(){
           	   $(".b1").css("background","url(images/xh1.png) no-repeat").css("background-size","1rem 1rem"
              ).css("background-position","0.2rem 0.2rem");
           })
           $(".b2").on("click",function(){
           	    $(".b2").css("background","url(images/lp1.png) no-repeat").css("background-size","1rem 1rem"
              ).css("background-position","0.2rem 0.2rem");
               $("#audio").css("loop");
           })
           
           
           
           
   	///////////////////////////////////////////////////播放列表
	//////////////////////////////////		第一页
	var songlist=$(".songlist")  //////播放列表显示
	var boxs=$(".boxs")
	var playlis=$(".playlist")
	var now1;
	render(musics,songlist);
	
	
	function deletesong(){
		if(now1==now){
			musics.splice(now1,1)
			localStorage.musics=JSON.stringify(musics);
			render(musics,songlist);
			render1(musics,playlist);
		}
		if(now1<now){
			now--;
			musics.splice(now1,1)
			localStorage.musics=JSON.stringify(musics);
			render(musics,songlist);
			render1(musics,playlist);
		}
		if(now1>now){
			musics.splice(now1,1)
			localStorage.musics=JSON.stringify(musics);
			render(musics,songlist);
			render1(musics,playlist);
		}
	}
	$('.delete').on('touchend',function(){
		var index=$(this).index();
		$('.songlist li').eq(index).hide();
	})
	//播放列表按动
	songlist.on("touchend","li",function(){			
		var index=$(this).index();
		if(index==now){
			if(audio.paused){
				audio.play();
			}
			else{
				audio.pause()
			}
			return;
		}
		now=index;
		show=0;
		render(musics,songlist);
		return false;
	})
	 //播放列表添加
	boxs.on("touchend",function(){				 
		
		var index=$(this).index();
		var music=JSON.parse($(this).attr("data-role"))
		musics.push(music)
		localStorage.musics=JSON.stringify(musics);
		render(musics,songlist);
		return false;
	})									
	
	
	
	
	
	})