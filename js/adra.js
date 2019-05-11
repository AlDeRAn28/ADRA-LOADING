// ADRA 로딩화면 - 기본 버전
//
// ⓒ 2019. AlDeRAn All rights reserved.
// 저작자: AlDeRAn(https://steamcommunity.com/profiles/76561198128012369/)
function SetStatusChanged ( status ) {
    if (status == "Starting Lua...") return $('status').html("다운로드 완료.. 접속시도중..");
    $('status').html(status);
}

var audio, video;
var a_i = 0, v_i = 0;

$(function() {
    $("body").attr('onload', 'onbody()');
    $("body").append("<audio id=\"l_audio\" onended=\"on_a_embed()\"></audio>");
    $("body").append("<video id=\"l_video\" onended=\"on_v_embed()\"></video>");
    $("body").append("<div id=\"overlay\"></div>");
    $("body").append("<div id=\"logo\"><img></div>");
});

function onbody() {
    if (play_type == "a") {
        img();
        audio = document.getElementById('l_audio');
        audio_list = random(audio_list);
        audio.setAttribute("src", "music/"+audio_list[a_i]);
        audio.play();
        audio.volume = audio_volume;
    } else if (play_type == "v") {
        video = document.getElementById('l_video');
        video_list = random(video_list);
        video.setAttribute("src", "video/"+video_list[v_i]+".webm");
        video.play();
        video.volume = video_volume;
    } else {
        play_type = 'a';
        onbody()
    }

    if (logo && logo != "") {
        $('#logo img').attr('src', "images/logo/"+logo);
    }
}

function on_a_embed() {
    if (a_i < audio_list.length - 1) {
        a_i++;
    } else {
        a_i = 0;
    }
    audio.setAttribute("src", "music/"+audio_list[a_i]);
    audio.play();
    audio.volume = audio_volume;
}

function on_v_embed() {
    if (v_i < video_list.length - 1) {
        v_i++;
    } else {
        v_i = 0;
    }
    video.setAttribute("src", "video/"+video_list[v_i]+".webm");
    video.play();
    video.volume = video_volume;
}

// 배열 랜덤 알고리즘
function random(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
}

function img() {
    for (var i = 0; i < img_list.length; i++) {
        img_list[i] = 'images/' + img_list[i];
    }
    img_list = random(img_list);
    $.backstretch(img_list, {fade: img_fade, duration: img_duration});
}