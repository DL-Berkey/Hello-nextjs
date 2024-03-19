# Note

## 라이브러리 VS 프레임워크

-   내 코드에서 라이브러리를 호출,
    프레임워크가 내 코드를 호출
-   React는 라이브러리, Next는 프레임워크

## Route

```javascript
// Page.tsx

export default function Page() {
    return <div>내용</div>;
}
```

-   app 폴더는 root segment
-   폴더 이름은 경로, page.tsx(jsx)로 페이지를 정의
-   폴더 내부에 경로와 상관없는 폴더(ex: components)도 존재할 수 있음 (공식문서에서도 존재함)

## Not Found Route

-   app/not-found.tsx 로 잘못된 경로일때의 페이지를 정의

## SSR

-   NextJS는 SSR 프레임워크로 "use client" 이더라도 서버에서 렌더링 후 결과물인 HTML을 브라우저로 전송한다.
-   "use client"를 가진 컴포넌트는 서버에서 렌더링 후 브라우저에서 hydration 되어서 interactive해진다.
-   Hydration === HTML 문서에서 React Application이 되는 것

## Route Group

-   ( ... ) 를 사용해서 라우트끼리 묶을 수 있음

## Metadata

-   서버 컴포넌트에만 있을 수 있음
-   Metadata는 병합되어짐

## Parameter | QueryString

-   경로에 해당하는 폴더의 이름을 [ ... ]로 지정
-   Page 컴포넌트의 Props로 전달되어짐

## Asynchronous Component

-   서버 컴포넌트를 비동기 함수로 정의하면 useEffect를 사용하지않고 API에서 바로 데이터를 페칭할 수 있음
-   서버에서 데이터를 페칭함으로서 보안성이 증진됨(API 비노출등의 이점)

## loading.tsx

-   서버 컴포넌트가 비동기일 경우 settle 상태 전까지 nextjs가 대신해서 렌더링함

## fetch API

-   nextjs의 서버 컴포넌트에서 fetch로 GET한 데이터는 캐싱됨

## error

-   error.tsx를 만들어 두면 가까운 page.tsx에서 에러가 발생시 대신해서 렌더링함
