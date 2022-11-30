# 50Hz

#### 돌아보니 남아있는 건 이뿐이네

- 음악은 유튜브로 (iframe + yt API)
- 싱크가사
- 곡 설명
- 코멘트
- 배경 사진

[YT Iframe API](https://developers.google.com/youtube/iframe_api_reference?hl=ko)
[Lyric Font](https://fonts.google.com/specimen/Nanum+Myeongjo?query=Nanum)

틀린 질문

**싱크가사**

LRC를 일단 만들면 하이라이팅 해주는 라이브러리 있으면 쓰고 없으면 만들고

player.getCurrentTime(); -> 현재 재생 시각 제공

**배경 사진**

속성 상속이 문제가 아니었다... 그냥 덮여버림

**TODO**

- 플레이어랑 가사 사이에 공백 주기 위해 각자 마진을 주고 있는데 좀 더 좋게 바꿔야
- 리액트 라우터 추가해서 쿼리스트링으로 무슨 곡인지 받아오자
- 플레이어 안 보여도 상관 없으니까 가사 박스 세로 제한 없애고 페이지를 내릴 수 있게 하자
- 동그라미 favicon

**JSON 구조**

```json
{
  "musicName1": { "link": "11md9a", "lyric": " ... " },
  "musicName2": { "link": "aldk91m", "lyric": " ... " }
}
```

> `themeColor`, `comment` 추가 예정

**musicName 규칙**

띄어쓰기는 대쉬로, 모두 소문자, 최대한 영어를 사용하되 영어 부제 조차 없는 경우는 한국어로
