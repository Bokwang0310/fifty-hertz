# 50Hz

## TODO

- json에 `comment` 추가
- 유튜브 컨트롤 표시하려고 하면 에러 발생
- 메인 페이지 제작, 잘못된 url 핸들링
- react-player 자동 스크롤 안 되는 에러
- generating UI 제작
- lrc 파일 만들면 싱크 살짝 밀리는 거 조정 (전체 오프셋 조정 ID 태그 이용)
- 새로고침하는 로직 수정
- `SyncLyric.js`에서 useEffect 의존성 배열 확인
- 상태관리 라이브러리 쓸까 말까
- `/playlist/:name` 기능 구현

## JSON 구조

```json
{
  "musicName1": {
    "url": "https://www.youtube.com/embed/k6Ys3M5xNWQ",
    "lyric": " ... ",
    "themeColor": ["#000000", "#ffffff"],
    "textColor": "black",
    "activeColor": "white"
  },
  "musicName2": {
    "url": "https://soundcloud.com/zunhozoon/t-c-s",
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

## 새로 배운 것

[lesson.md](./lesson.md)

## 메모

[YT Iframe API](https://developers.google.com/youtube/iframe_api_reference?hl=ko)

[Lyric Font](https://fonts.google.com/specimen/Nanum+Myeongjo?query=Nanum)
