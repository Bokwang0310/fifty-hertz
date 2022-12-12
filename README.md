# 50Hz

## TODO

- json에 `comment` 추가
- 유튜브 컨트롤을 표시하려고 하면 에러 발생
- 메인 페이지 만들기
- 잘못된 url 핸들링
- react-player 자동 스크롤 에러 해결
- `/:name/generator`에서 `clickCount` 늘릴 때 마다 Line 앞에 표시 해주기
- generating UI 만들기
- lrc 만들면 싱크 살짝 밀리는 거 미세조정 (전체 오프셋 조정 ID 태그 이용)

## JSON 구조

```json
{
  "musicName1": {
    "url": "1a2b3c",
    "lyric": " ... ",
    "themeColor": ["#000000", "#ffffff"],
    "textColor": "black",
    "activeColor": "white"
  },
  "musicName2": {
    "url": "3c2b1a",
    "lyric": " ... ",
    "themeColor": ["#ffffff", "#000000"],
    "textColor": "white",
    "activeColor": "black"
  }
}
```

## musicName 규칙

- 띄어쓰기 -> 대쉬
- 소문자
- 영어 부제도 없는 경우는 한국어

## What I learned

[lesson.md](./lesson.md)

## 메모

[YT Iframe API](https://developers.google.com/youtube/iframe_api_reference?hl=ko)

[Lyric Font](https://fonts.google.com/specimen/Nanum+Myeongjo?query=Nanum)
