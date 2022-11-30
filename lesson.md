# 22.11.28

## 인라인 스타일과 CSS-in-JS

```jsx
const styles = {
  myDiv: { width: "10px" },
};

function Comp() {
  return <div style={styles.myDiv} />;
}
```

> 인라인 스타일은 DOM에서 인라인 CSS로 들어감

```jsx
const myDiv = styled("div")(() => ({ width: "10px" }));
// styled 함수의 명칭이나 구체적인 구현은 라이브러리마다 다른 듯
// MUI는 emotion 사용

function Comp() {
  return <myDiv />;
}
```

> 반면, CSS-in-JS는 `<style />` 안에 CSS 작성

```jsx
const useStyles = createUseStyles({
  myDiv: { width: "10px" },
});

function Comp() {
  const styles = useStyles();
  return <div className={styles.myDiv} />;
}
```

> JSS의 createUseStyles()

MUI는 v4까지 JSS 기반의 `makeStyles()` 쓰다가 여러 이유로 v5부터는 emotion으로 넘어간 듯 [관련 글](https://hoontae24.github.io/19)
