import 'bootstrap/dist/css/bootstrap.min.css'
//app.js에 cdn선언
import Es6 from './comp/Es6';
import Jquery from './comp/Jquery';
import Sweet from './comp/Sweet';
import Fetch from './comp/Fetch';

import Comp from './comp/Comp';
//객체지향언어는 불필요한 코드에 반복을 줄이고 언제든 재활용 하세요
//Dont Repeat Your self
// 생명주기 컴포넌트의 생성, 변경, 소멸 과정을 뜻한다..
// render(), constructor(), componentDidMount() 
// 위에 아이들이 복잡하여 함수형 컴포넌트에 hook 등장

function App() {
  return (
<>
<h1>리액트 시작하기</h1>
<p>sass적용</p>
<Fetch/>
{/*<Sweet/>*/}
{/*<Jquery/>*/}
{/*<Comp/>*/}
{/*<Es6/>*/}
</>
  );
}

export default App;
