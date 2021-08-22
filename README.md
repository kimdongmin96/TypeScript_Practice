### Type-to-Interface

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
