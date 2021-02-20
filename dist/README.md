# adorable/store

> Observable based state management Library. Action / Dispatch / On / Reducer + able

## What is adorable?

TC39 Observable을 기반으로 하는 상태관리 라이브러리 입니다. RxJS와 Redux에서 영감을 받아 작성하였습니다. 두 라이브러리 모두 엄청 강력한 라이브러리이나 학습 진입장벽과 verbose한 문법으로
인해 접근성이 떨어지는 부분을 보강하고 각각의 장점만을 결합할 수 있도록 하였습니다.

https://github.com/tc39/proposal-observable

https://rxjs-dev.firebaseapp.com/guide/overview

https://redux.js.org/

## Why adorable?

웹 서비스가 거대해 질 수록 프론트엔트는 복잡성이라는 문제를 맞이 하게 됩니다. DOM API이라는 문제는 10년이 넘도록 잘 발전해온 React, Vue, Angular, Svelte와 같은 웹 프레임워크라는
도구로 쉽게 제어가 가능해진 오늘날에도 상태관리와 비동기 처리라는 장벽은 남아 있습니다.

Redux와 RxJs는 현재 점유율을 잃어 가고 있는 상황이지만 그 문제인식과 해법은 여전히 훌륭한 해결책이며 다소 아쉬운 문법과 진입장벽을 최소화 할 수 있도록 API를 최대한 간소하게 재설계 하였습니다.

현재는 XState와 같은 유한 상태기계나 Recoil등의 family등의 최신 패러다임까지 흡수해 1) 상태관리 2) 비동기 3) 반응형 프로그래밍 4) 상태머신이라는 새로운 화두듣을 쉽게 사용할 수 있도록 패키지
해 나갈 예정입니다.

## What is direffent?

- Rxjs: Pipe method vs DotChain vs Pipeline operator (TBD)
- Redux: Why Reducer? Why Redux is verbose? What is benefit using Redux?
- Props Drill, Context API

## Read more (TBD)

- 프론트 엔드에서 상태관리란 무엇이며 왜 필요할까?
- 반응형 프로그래밍이란?

## Goals

> Write less, Do More!

---

## State Management (Basic)

### Simple Counter Example

```typescript

// store.ts
const _INCREARE = action("_INCREARE")
const _DECREARE = action("_DECREARE")
const _RESET = action("_RESET")

export const counter$ = reducer(0, "counter$", counter$ => {

  on(_INCREARE)
    .writeTo(counter$, () => count => count + 1)

  on(_DECREARE)
    .writeTo(counter$, () => count => count - 1)

  on(_RESET)
    .writeTo(counter$, 0)
})
```

```html

<script>
import {dispatch} from "adorable"
import {_INCREARE, _DECREARE, _RESET} from "./store"
import {counter$} from "./store"

const inc = () => dispatch(_INCREARE())
const dec = () => dispatch(_DECREARE())
const reset = () => dispatch(_RESET())
</script>

<div>count: {$counter$}</div>

<button on:click={inc}>inc</button>
<button on:click={dec}>dec</button>
<button on:click={reset}>reset</button>
```

### action

```typescript
const _INCREARE = action("_INCREARE")
const _DECREARE = action("_DECREARE")
```

### dispatch

```typescript
const on_inc_click = () => dispatch(_INCREARE())
const on_dec_click = () => dispatch(_DECREARE())
```

### on

```typescript
on(_INCREARE)
  .map(...)
  .filter(...)
  .writeTo()

on(_DECREARE)
  .map(...)
  .filter(...)
  .writeTo()

```

### reducer

```typescript
const counter$ = reducer(0, "counter$", counter$ => {

  on(_INCREARE)
    .writeTo(counter$, () => count => count + 1)

  on(_DECREARE)
    .writeTo(counter$, () => count => count - 1)
})
```

### ref

```typescript
const ref$ = ref(0)

ref$.set(10)
ref$.update(value => value + 1)
```

### effect

```typescript

on(_INCREARE)
  .tap(value => console.log("INCREASE!", value))
  .createEffect()

```

## State Management (Advanced)

### story

```typescript

story("counter log", () => {

  on(_INCREARE)
    .tap(value => console.log("INCREASE!", value))
    .createEffect()

...
})

```

### state/epic (TBD)

```typescript

const isHome$ = state(page_id$, (page_id) => page_id === "Home")
const isSignIn$ = state(account$, (account) => account && account.id)

const {reducer, story} = epic(isHome$)

const onlyAvailableInHome$ = reducer(false, "onlyAvailableInHome$", onlyAvailableInHome$ => {

...
})


```

### collection (TBD)

```typescript

const todos$$ = collection("todos", (todo) => todo.id, (todo, id) => todo.id = id)

todos$$("some id").set({title: "hello", completed: false})

todos$$("some id").set(undefined)

todos$$("some id222").update(todo => ({...todo, title: "xxxx"}))


```

### testCase (TBD)

```typescript

testCase("test for counter", ({given, when, then}) => {

  given(streamA$, 10)
  given(streamB$, "abc")
  given(streamC$, "def")

  when(_ACTION_A("abcdef"))

  then(() => {

    on(_ACTION_A.REQUEST)
      .exptectTo("abcdef")

    on(_ACTION_A.SUCCESS)
      .exptectTo(300)

    on(_ACTION_A.FAILTURE)
      .exptectTo(300)
  })

})

```

---

## Rx

- pipe method를 다시 dot chain Method로 만들고 실전에서 꼭 쓰이는 operator만을 골라 단순화하고 typescript를 붙였습니다.

### Observable

#### #static operator

- toPromise
- castAsync
- combineLatest
- concat
- defer
- EMPTY
- forkjoin
- fromEvent
- fromEventPattern
- fromPromise
- merge
- NEVER
- timer
- throwError

#### #operators

- bufferCount
- bufferTime
- concat
- count
- concatMap
- debounceTime
- delay
- distinctUntilChanged
- duration
- exhaustMap
- filter
- finalize
- ignoreElements
- initialize
- last
- map
- mapTo
- mergeAll
- mergeMap
- scan
- share
- shareReplay
- skip
- skipUntil
- startWith
- switchMap
- tap
- take
- takeLast
- takeUntil
- takeWhile
- throttle
- throttleTime
- timeout
- trace
- until
- waitFor