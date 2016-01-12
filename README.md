# javascript

- 재사용 스크립트 모음



# com

##### [util/Btnchoice.js](#Btnchoice)
##### [loader/Jsonload.js](#Jsonload)


## <a name='Btnchoice'>Btnchoice</a>


- 객체 생성
```javascript
var btnchoice = new Btnchoice('.listArea ul li>a', '.listArea .obj')
```
- n 번째 활성화
```javascript
btnchoice.setMenu(Number(1));
```


**[⬆ back to top](#table-of-contents)**


## <a name='Jsonload'>Jsonload</a>

- 객체 생성
```javascript
var jsonData = new Jsonload();
```
- 데이터 url , callbackName 셋팅
```javascript
jsonData.setUrl("gnavi.json" , "navi");
```
- 로드완료
```javascript
jsonData.dataLoadComplete = function(data){
    console.debug("result -- > " , data)
};
```
**[⬆ back to top](#table-of-contents)**






