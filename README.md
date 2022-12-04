# 50Hz

**싱크가사**

LRC를 일단 만들면 하이라이팅 해주는 라이브러리 있으면 쓰고 없으면 만들고

player.getCurrentTime(); -> 현재 재생 시각 제공하는 yt API

**배경 사진**

속성 상속이 문제가 아니었다... 그냥 덮여버림

[틀린 질문](https://images.unsplash.com/photo-1604604178488-03a6e925991e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1187&q=80)

**TODO**

- 플레이어랑 가사 사이에 공백 주기 위해 각자 마진을 주고 있는데 좀 더 좋게 바꿔야
- 플레이어 안 보여도 상관 없으니까 가사 박스 세로 제한 없애고 페이지를 내릴 수 있게 하자
- json에 `backgroundImg`, `comment` 추가
- `/` 핸들링
- 유튜브 컨트롤을 표시하려고 하면 발생하는 에러 해결
- lrc 만드는 페이지 제작
- `Music` 컴포넌트 내부 완전 더러움 -> 변수 이름 고민 필요
- lrc 파일 그 자체로 쓰는 방법으로 바꾸기

**JSON 구조**

```json
{
  "musicName1": {
    "link": "1a2b3c",
    "lyric": " ... ",
    "themeColor": ["#000000", "#ffffff"],
    "textColor": "black"
  },
  "musicName2": {
    "link": "3c2b1a",
    "lyric": " ... ",
    "themeColor": ["#ffffff", "#000000"],
    "textColor": "white"
  }
}
```

**musicName 규칙**

띄어쓰기는 대쉬로, 모두 소문자, 최대한 영어를 사용하되 영어 부제 조차 없는 경우는 한국어로

**What I learned**

[lesson.md](./lesson.md)

**메모**

[YT Iframe API](https://developers.google.com/youtube/iframe_api_reference?hl=ko)

[Lyric Font](https://fonts.google.com/specimen/Nanum+Myeongjo?query=Nanum)
