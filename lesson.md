# 22.11.28

### 인라인 스타일과 CSS-in-JS

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

function Comp() {
  return <myDiv />;
}
```

> 반면, CSS-in-JS는 <style></style> 안에 CSS 작성
> styled() 가 아니라 createUseStyles() 같은 것도 있는데 귀찮아서 나중에 함
