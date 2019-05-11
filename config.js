// ADRA 로딩화면 - 기본 버전
//
// ⓒ 2019. AlDeRAn All rights reserved.
// 저작자: AlDeRAn(https://steamcommunity.com/profiles/76561198128012369/)

//로고 설정
// images\logo 폴더에 이미지를 넣어주고 아래 파일명과 확장자를 적어주세요.
// 비활성화 방법: "" 공백 유지.
var logo = "logo.png";

// 음악 또는 영상 중 어떤 방법으로 재생할지 선택합니다.
// "v" 영상을 재생합니다.
// "a" 음악을 재생합니다.
// [기본 버전 미제공] ""(공백) 음악 또는 영상 중 랜덤으로 재생합니다.
var play_type = "a";

// 영상 리스트
// 영상은 webm 확장자만 지원합니다. (게리모드는 MP4를 거부합니다 ㅡㅅㅡ)
// 음악 리스트와 달리 영상 리스트는 기본값 .webm 로 정의 되어있어 파일 이름만 적어주시면 됩니다.
var video_list = [
    "video"
];

// 영상 볼륨
// 0에서 1사이 값
var video_volume = 0.2;

// 음악 리스트
// [기본 버전 미제공] EX. {file: "filename.ogg", name: "Song Name"}
// EX. "filename.ogg"
// 다중 추가시 끝에 ,(반점)을 추가하셔야 합니다. (마지막 줄은 해도 안해도 상관없지만 안하는 것이 원칙입니다.)
var audio_list = [
    "Diamond Eyes - Flutter.mp3",
    "Lost Sky - Dreams.mp3",
    "Tobu - Roots _NCS Release_.mp3",
    "Afterlife Ticket.ogg"
];

// 음악 볼륨
// 0에서 1사이 값
var audio_volume = 0.15;

// 사진 리스트
// 다중 추가시 끝에 ,(반점)을 추가하셔야 합니다. (마지막 줄은 해도 안해도 상관없지만 안하는 것이 원칙입니다.)
var img_list = [
    "background-biker-clouds-207171.jpg",
    "beach-dawn-desktop-backgrounds-1532771.jpg",
    "clouds-dawn-desktop-backgrounds-46253.jpg",
    "fall-colors-fall-foliage-forest-1563355.jpg",
    "asphalt-back-road-blurred-background-1546901.jpg"
];

// 사진 변경 시간
// 1000 = 1초
var img_duration = 7000;

// 사진 전환 시간
// 1000 = 1초
var img_fade = 3000;