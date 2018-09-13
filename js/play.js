function togglePaly(){
	var music=document.getElementById("music"); 
	var playbtn=document.getElementById("play");
	if(music.paused||music.ended){
		music.play();
		playbtn.innerHTML='<i class="iconfont icon-bofangqizanting"></i>';

	}
	else
	{
        music.pause();
        playbtn.innerHTML='<i class="iconfont icon-player-play"></i>';

	}

}
function togglejingyin(){
	var music=document.getElementById("music"); 
	var jybtn=document.getElementById("jingyin");
	if(music.muted==true)
	{
		music.muted=false;
        jybtn.innerHTML='<i class="iconfont icon-laba"></i>'
	}
else
	{
        music.muted=true;
        jybtn.innerHTML='<i class="iconfont icon-labajingyin"></i>'
	}

}
function sevVolume(){
    var music=document.getElementById("music"); 
	var lybtn=document.getElementById("yinliang");
	music.volume =lybtn.value;

}