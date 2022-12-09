# 50Hz

## TODO

- json에 `comment` 추가
- `/` 핸들링
- 유튜브 컨트롤을 표시하려고 하면 발생하는 에러 해결
- lrc 만드는 페이지 제작
- `Music` 컴포넌트 내부 완전 더러움 -> 변수 이름 고민 필요
- lrc 파일 그 자체로 쓰는 방법으로 바꾸기
- `Generator.js`에서 `Music.js` 재사용하기

## JSON 구조

```json
{
  "musicName1": {
    "link": "1a2b3c",
    "lyric": " ... ",
    "themeColor": ["#000000", "#ffffff"],
    "textColor": "black",
    "highligtingColor": "white"
  },
  "musicName2": {
    "link": "3c2b1a",
    "lyric": " ... ",
    "themeColor": ["#ffffff", "#000000"],
    "textColor": "white",
    "highligtingColor": "black"
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
