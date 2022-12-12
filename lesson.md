> :warning: 이 문서는 프로젝트를 진행하며 새롭게 배운 것을 정리하는 곳으로 **잘못된 정보를 포함하고 있을 수 있습니다.**

# 인라인 스타일과 CSS-in-JS

```jsx
const styles = {
  myDiv: { width: "10px" },
};

function Comp() {
  return <div style={styles.myDiv} />;
}
```

인라인 스타일은 DOM에서 인라인 CSS로 들어가는데, 인라인 스타일은 구리다.

```jsx
const useStyles = createUseStyles({
  myDiv: { width: "10px" },
});

function Comp() {
  const styles = useStyles();
  return <div className={styles.myDiv} />;
}
```

JSS의 createUseStyles()는 `<style />` 안에 CSS를 작성하고 className을 이용해 해당 CSS를 적용할 컴포넌트에게 클래스를 부여한다. (MUI의 `makeStyles()`)

```jsx
const myDiv = styled("div")(() => ({ width: "10px" }));
// styled 함수의 명칭이나 구현은 라이브러리마다 다른 듯
// MUI는 emotion 사용

function Comp() {
  return <MyDiv />;
}
```

요즘은 다들 `styled` 함수를 사용하는 것 같다.

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

위와 같은 경고가 뜬다. 이때, `shouldForwardProp()`이 쓰인다.

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

이유는 모르겠지만 `styled()`에 첫번째 인자로 `"div"`를 넣으면 어떤 prop을 쓰던 경고가 발생하지 않지만 `Paper`와 같이 JSX를 직접 입력하는 경우 문제가 생긴다.

# React.StrictMode

StrictMode 쓰면 렌더링 두 번 된다.

# autoplay in chrome browser

크롬 브라우저에서는 보안 상의 이유로 소리 있는 영상의 자동 재생을 허용하지 않는다. 크롬 자동 재생 정책은 다음과 같다.

- Muted autoplay is always allowed.
- Autoplay with sound is allowed if:
  - The user has interacted with the domain (click, tap, etc.).
  - On desktop, the user's Media Engagement Index threshold has been crossed, meaning the user has previously played video with sound.
  - The user has added the site to their home screen on mobile or installed the PWA on desktop.
- Top frames can delegate autoplay permission to their iframes to allow autoplay with sound.

영상을 음소거 시킬 수는 없고..

생각해 보니까, 재생 페이지로 들어가기 전에 어차피 사용자 상호작용이 필요하니 빨리 초기 페이지를 만들자

# ref as an instance variable

리액트의 ref는 DOM을 선택하는 용도 외에도 어떤 컴포넌트의 변수로써 활용할 수 있다. state는 값이 변경될 때 마다 컴포넌트를 리렌더링 시키고, 컴포넌트 내에 변수를 직접 선언하면 변수가 계속 초기화 되기 때문에 이 두 가지를 원치 않는 값을 저장할 때 `ref`를 사용할 수 있다.

[관련 공식 문서](https://reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables)

클래스형 컴포넌트에서는 렌더링이 `render` 함수의 호출로 이루어지기 때문에 `this` 키워드를 이용해 렌더링과 관련 없는 변수를 관리할 수 있는데, 함수형 컴포넌트는 그럴 수 없다. 그래서 나온 게 `useRef` 훅

# ref with React.useCallback()

일반적으로 `React.useRef`를 사용하면 DOM에 ref를 attach/detach 할 때 컴포넌트가 그것을 인지하지 못한다. 그래서 ref를 attach/detach 할 때 어떤 함수를 실행시키고 싶다면 `React.useCallback`을 사용할 수 있다고 한다.

[관련 공식 문서](https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node)

그런데, 사실 `useCallback`보다는 함수를 전달한다는 개념이 더 핵심적인 내용 같다. 실제로 `useCallback`으로 감싸지 않고 컴포넌트의 `ref` 속성에 함수를 넘겨도 원하는 작업을 할 수 있다. 그런데 왜 굳이 `useCallback`으로 감싸는걸까. 단순히 최적화 문제?

공식 문서의 예시에서는 콜백 함수가 state에 관여하기 때문에 `useCallback`을 쓴 것 같다. 내 상황에서는 Music 컴포넌트가 state를 가지지도 않고 react-player 인스턴스를 `useRef`에 저장하고 있기 때문에 `useCallback` 없이 그냥 함수를 넘겨도 상관 없을 것 같지만 그냥 썼다.

# Nested route and props of `Outlet`

리액트 라우터에는 중첩 라우트 기능이 있다.

```jsx
function Comp() {
  return (
    <Routes>
      <Route path="/users" element={<Users />}>
        <Route path=":userId" element={<Profile />} />
      </Route>
    </Routes>
  );
}
```

이렇게 하면 `Users` 컴포넌트에서 `Profile` 컴포넌트를 `Outlet`으로 불러올 수 있다.

```jsx
// in Users.js
import { Outlet } from "react-router-dom";

function Users() {
  return (
    // ...
    <Outlet /> // <- 여기에 중첩된 라우트가 들어감
    // ...
  );
}
```

그런데, 중첩된 라우트에서 props를 받는 경우, `Outlet`에 props를 직접 전달하는 것은 불가능하고 `context` prop과 `useOutletContext` 훅을 이용해야 한다.

```jsx
// in Users.js
import { Outlet } from "react-router-dom";

function Users() {
  return (
    // ...
    <Outlet context={{ detail: "Hello" }} />
    // ...
  );
}
```

```jsx
// in Profile.js
import { useOutletContext } from "react-router-dom";

function Profile() {
  const { detail } = useOutletContext();
  return (
    // ...
  );
}
```

그러니까.. `Profile` 컴포넌트에서 props를 함수의 파라미터로 받던 것을 훅의 호출로 받는 것으로 바꿔야 한다. 너무 별론데

`Outlet` 없이 중첩 라우트가 가능하다.

```jsx
function Comp() {
  return (
    <Routes>
      <Route path="/users/*" element={<Users />}></Route>
    </Routes>
  );
}
```

```jsx
// in Users.js
function Users() {
  return (
    // ...
    <Routes>
      <Route path=":userId" element={<Profile detail="Hello" />} />
    </Routes>
    // ...
  );
}
```

이렇게 하면 `Profile` 컴포넌트를 그대로 사용할 수 있다. 이게 최선인지는 아직 모르겠다.
