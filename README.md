# Typescript Practice <br><br>

### js to ts

javascript로 작성된 문법을 typescript로 변경해보기    
기본적인 변수명 타입 정의
***
### abstract class attribute

함수 내의 공통적인 요소들을 가져와 class로 구현
***
### abstract Mixin

1. 기존의 extends 방식의 상속 방법은 코드에 적시되어야 하는 상속 방법이다<br>
상속의 관계를 바꾸기 위해 코드 자체를 변경해야됨(관계를 유연하게 가져갈 수 없음)<br><br>
2. javascript & typescript의 'class extends' 문법은 다중상속 지원x<br><br>
**ex) 상위 클래스 1, 2, 3 여러 개의 상속 불가능**<br><br>
Mixin 같은 경우 코드로 만들어 놓은 테크닉으로 가능
***
### Type to Interface

typeAlias를 Interface로 변경해보기

ex)
```
type NewsFeed = News & {
  comments_count:number;
  read?:boolean;
  .
  .
  .
}
```
'='표기법이 사라지고 인터페이스에서는 타입알리아스에서 제공하는    
유니온타입을 지원하지 않기 때문에 글로 설명하듯 '&'가 'extends'로 변경됨
```
interface NewsFeed extends News {
  comments_count:number;
  read?:boolean;
  .
  .
  .
}
```
***
### classify files

하나의 파일로 작성된 app.ts를 공통적으로 쓰이는 **core**, 시각적인 요소를 담당하는 **page**, 변수들의 모임 **types**<br>
3가지로 크게 분류하여 파일을 세분화하고 import, export 문법과 전역변수에 대해 간단하게 
<<<<<<< HEAD
***
### global variable

window 전역 공간에 있던 객체를 제거하고 store를 관리하는 전문 class를 만들어 필요한 기능들을 공급해 주어<br>
사용하는 class 쪽에서 편리하게 사용하고 더 안전하게 사용할 수 있는 형태로 변경 작업
<br><br>
**Spread Operator** 관련 내용 <br>
```
var obj = {
  a: 10,
  b: 20
};
var newObj = {
  a: obj.a,
  b: obj.b
};
```

**Spread Operator** 적용 시

```
var obj = {
  a: 10,
  b: 20
};
var newObj = {...obj};
```

객체를 복사하는 경우, 새로운 객체인 *newObj* 에 새로운 속성들을 선언하고 각 속성에 *obj* 의 속성들을 일일이 접근해서 대입해줘야 한다.<br>
하지만, **Spread Operator** 를 사용할 경우 코드의 양이 확연히 줄어든다.

=======
>>>>>>> parent of cc8773f (Merge branch 'main' of https://github.com/kimdongmin96/TypeScript_Practice into main)
