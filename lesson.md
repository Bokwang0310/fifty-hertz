# 주의

> :warning: 본 문서는 해당 프로젝트를 진행하면서 새롭게 배운 짤막한 지식을 정리한 것으로 **잘못된 정보를 포함하고 있을 수 있음.**

# 인라인 스타일과 CSS-in-JS

```jsx
const styles = {
  myDiv: { width: "10px" },
};

function Comp() {
  return <div style={styles.myDiv} />;
}
```

인라인 스타일은 DOM에서 인라인 CSS로 들어감

```jsx
const myDiv = styled("div")(() => ({ width: "10px" }));
// styled 함수의 명칭이나 구체적인 구현은 라이브러리마다 다른 듯
// MUI는 emotion 사용

function Comp() {
  return <MyDiv />;
}
```

반면, CSS-in-JS는 `<style />` 안에 CSS 작성

```jsx
const useStyles = createUseStyles({
  myDiv: { width: "10px" },
});

function Comp() {
  const styles = useStyles();
  return <div className={styles.myDiv} />;
}
```

JSS의 createUseStyles()

MUI의 경우, v4까지는 JSS 기반의 `makeStyles()`를 쓰다가 여러 이유로 v5부터는 emotion으로 넘어간 듯 [관련 글](https://hoontae24.github.io/19)

# styled()의 옵션 객체에서의 shouldForwardProp 메소드

`styled()`를 이용하여 만든 컴포넌트에 props를 사용하고 싶을 때 다음과 같은 방법을 직관적으로 생각할 수 있다.

```jsx
const MyDiv = styled("div")(({ color }) => ({
  color: color,
}));

function Comp() {
  return <MyDiv color="red">Hello</MyDiv>;
}
```

이 경우 실제로 문제가 되지 않는다. 왜냐하면 내부적으로 emotion은 우리가 만든 prop인 `color`를 실제 DOM 요소인 div의 속성으로 삽입하는데, `color`는 원래 div의 속성이기 때문에 아무 문제가 되지 않는다. 하지만 다음과 같은 경우에는 문제가 발생한다.

```jsx
const MyDiv = styled("div")(({ bgColor }) => ({
  backgroundColor: bgColor,
}));

function Comp() {
  return <MyDiv bgColor="red">Hello</MyDiv>;
}
```

방금 확인해 봤는데 이 경우도 문제가 되지 않는다.. 뭐지 아니 원래 문제가 돼야 하는데 문제가 안 된다. 원래 div에 `bgColor`라는 속성은 없기 때문에

> Warning: React does not recognize the `bgColor` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `bgColor` instead. If you accidentally passed it from a parent component, remove it from the DOM element.

위와 같은 경고가 뜬다. 내용으로 보아 prop을 모두 소문자로 적으면 임시방편으로 해결할 수 있는 것 처럼 보이지만 뭔가 찜찜하다. 이때, `shouldForwardProp()`이 쓰인다.

```jsx
const MyDiv = styled("div", {
  shouldForwardProp: (propName) => propName !== "bgColor",
})(({ bgColor }) => ({
  backgroundColor: bgColor,
}));

function Comp() {
  return <MyDiv bgColor="red">Hello</MyDiv>;
}
```

이처럼 `styled()`의 두 번째 인자인 옵션 객체에 `shouldForwardProp()`을 추가해서 prop이 `bgColor`일 때는 forward 하지 않게 만들 수 있다.

**추가**

이유는 모르겠지만 `styled()`에 첫번째 인자로 `"div"`를 넣으면 어떤 prop을 쓰던 경고가 발생하지 않지만 `Paper`와 같이 컴포넌트를 직접 함수의 입력값으로 이용하는 경우 문제가 생긴다.

# React.StrictMode

StrictMode 쓰면 렌더링 두 번 된다.

# 다음 주제
