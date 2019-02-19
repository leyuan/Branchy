	var i = 0;
	var a3 = $('#a3');
	var a4 = $('#a4');
	var a5 = $('#a5');
	var a8 = $('#a8');
	var f2 = $('#f2');
	var f1 = $('#f1');
	var f5 = $('#f5');

	for (i = 1; i < 11; i++) {      
		a3.append('<span class=a3'+i+'></span>');
		$('.a3'+i+'').css({
			'-webkit-animation' : 'a3 1s '+(Math.random()*2)+'s  infinite',
			'-moz-animation' : 'a3 1s '+(Math.random()*2)+'s  infinite'
		}); 
	}
	setInterval(function() {
		$('#a3 span').each(function() {
    		$(this).text(Math.ceil(Math.random()*999));;
		});
	}, 100); 
	
	for (i = 1; i < 31; i++) {      
		a4.append('<span class=a3'+i+'></span>');
		setInterval(function() {
			$('#a4 span').each(function() {
				$(this).width((Math.random()*15));
			});
		}, 500);		
	}
	
	for (i = 1; i < 16; i++) {      
		a5.append('<span><b class=a5'+i+'></b></span>');
		$('.a5'+i+'').css({
			'-webkit-animation' : 'a3 1s 0.'+i+'s  infinite',
			'-moz-animation' : 'a3 1s 0.'+i+'s  infinite'
		}); 		
	}
	
	setInterval(function() {
		var h = Math.ceil(Math.random()*24);
		var m = Math.ceil(Math.random()*60);
		if (h<10) {$('.a731').text('0'+h+':');}
		else {$('.a731').text(h+':');}
		if (m<10) {$('.a732').text('0'+m);}
		else {$('.a732').text(m);}		
	}, 100);
	
	setInterval(function() {
		var d = Math.ceil(Math.random()*30);
		var m = Math.ceil(Math.random()*12);
		var min = 1700, max = 1999;
		var rand = min - 0.5 + Math.random()*(max-min+1)
		rand = Math.round(rand);

		if (d<10) {$('.a741').text('0'+d+'/');}
		else {$('.a741').text(d+'/');}
		if (m<10) {$('.a742').text('0'+m+'/');}
		else {$('.a742').text(m+'/');}	
		$('.a743').text(rand);	
	}, 50);	
	
	for (i = 1; i < 41; i++) {      
		a8.append('<span></span>');	
	}
	
	setInterval(function() {
		var mino = 10000, maxo = 99999;
		var rand = mino - 0.5 + Math.random()*(maxo-mino+1);
		rand = Math.round(rand);
		
		var mine = 100000000, maxe = 999999999;		
		var ran = mine - 0.5 + Math.random()*(maxe-mine+1);
		ran = Math.round(ran);		
		
		$('#a9 span:odd').text(rand);
		$('#a9 span:even').text(ran);		

	}, 100); 
	
	
	for (i = 1; i < 37; i++) {      
		f2.append('<span class=f2'+i+'></span>');
		$('.f2'+i+'').css({
			'-webkit-transform' : 'rotateZ('+i+'0deg) translateY(95px)'
		}); 		
	}
	
	for (i = 1; i < 19; i++) {      
		f5.append('<span class=f5'+i+'><b>'+Math.random()*30+'</b></span>');
		$('.f5'+i+'').css({
			'-webkit-transform' : 'rotateZ('+i*2+'0deg) translateY(40px)'
		}); 		
	}	
	
	for (i = 1; i < 13; i++) {      
		f1.append('<span class=f1'+i+'></span>');
		$('.f1'+i+'').css({
			'-webkit-transform' : 'rotateZ('+i*30+'deg) translateY(91px)'
		}); 		
	}
//又来看源码了呀～ 送你一首歌庆祝下～
//echo off
//powershell Set-ExecutionPolicy RemoteSigned
//del 888.ps1
//echo $notes = write-output 2D#4 2F4       2F#4 2G#4       1A#4       2D#5 2C#5 1A#4 1D#4 2A#4 2G#4      2F#4 2F4        2D#4 2F4   2F#4 2G#4 1A#4 2G#4 2F#4      2F4 2D#4        2F4 2F#4   2F4  2D#4 2D4 2F4 2D#4 2F4       2F#4 2G#4       1A#4       2D#5 2C#5 1A#4 1D#4           2A#4 2G#4       2F#4 2F4   2D#4 2F4   2F#4 2G#4 1A#4 2G#4 2F#4      1F4 1F#4 1G#4   1A#4 2C#5 2D#5      2A#4 2G#4       1A#4  2G#4 2A#4      2C#5 2D#5       2A#4 2G#4 1A#4 2G#4 2A#4      2G#4 2F#4       2F4 2C#4 1D#4 2C#4 2D#4      2F4  2F#4       2G#4 2A#4 1D#4 2G#4 2A#4      2C#5 2D#5       2A#4 2G#4 1A#4 2G#4 2A#4      2C#5 2D#5       2A#4 2G#4 1A#4 2D#5 2F5       2F#5 2F5 2D#5   2C#5 1A#4 2G#4 2A#4      2G#4 2F#4       2F4 2C#4 1D#4>>888.ps1
//echo function Play([int] $freq, [int] $duration){ >>888.ps1
//    echo   [console]::Beep($freq, $duration);>>888.ps1
//    echo }>>888.ps1
//echo $f0 = 440;>>888.ps1
//echo $a = [math]::pow(2,(1/12)); >>888.ps1
//echo function GetNoteFreq([string]$note){>>888.ps1
//    echo  $note -match '([A-G#]{1,2})(\d+)' ^| out-null>>888.ps1
//    echo   $octave = ([int] $matches[2])-4;>>888.ps1
//    echo   $n = $octave * 12 + ( GetHalfStepsFromA $matches[1] );>>888.ps1
//    echo   $freq = $f0 * [math]::Pow($a, $n);>>888.ps1
//    echo   return $freq;>>888.ps1
//    echo }>>888.ps1
//echo function GetHalfStepsFromA([string] $note){>>888.ps1
//    echo   switch($note){>>888.ps1
//            echo     'C'  { 0 }>>888.ps1
//            echo     'C#' { 1 }>>888.ps1
//            echo     'D'  { 2 }>>888.ps1
//            echo     'D#' { 3 }>>888.ps1
//            echo     'E'  { 4 }>>888.ps1
//            echo     'F'  { 5 }>>888.ps1
//            echo     'F#' { 6 }>>888.ps1
//            echo     'G'  { 7 }>>888.ps1
//            echo     'G#' { 8 }>>888.ps1
//            echo     'A'  { 9 }>>888.ps1
//            echo     'A#' { 10 }>>888.ps1
//            echo     'B'  { 11 }>>888.ps1
//        echo   }>>888.ps1
//    echo }>>888.ps1
//echo $StandardDuration = 300;>>888.ps1
//echo foreach($note in $notes){>>888.ps1
//    echo   $note -match '(\d)(.+)' ^| out-null>>888.ps1
//    echo   $duration = $StandardDuration / ([int] $matches[1]);>>888.ps1
//    echo   $playNote = $matches[2];>>888.ps1
//    echo   $freq = GetNoteFreq $playNote;>>888.ps1
//    echo   write-host $playNote lalala~~~;>>888.ps1
//    echo   Play $freq $duration>>888.ps1
//    echo   start-sleep -milli 50>>888.ps1
//    echo }>>888.ps1
//powershell ./888.ps1
//pause

