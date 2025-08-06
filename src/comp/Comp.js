import React,{ Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
/*
생명주기 함수 constructor(props) 사용
- 생명주기 함수중에 가장 먼저 실행되며 처음 한번만 호출합니다
- 컴포넌트 내부에서 사용되는 변수(state)를 선언하고 
- 부모 객체에서 전달받은 변수(props)를 초기화 할때 사용합니다

*/

class Comp extends Component{
//
static getDerivedStateFromProps(props, state){//콘스트럭터 함수 다음에 실행
console.log('2. getgetDerivedStateFromProps call: ' + props.prop_value);
return{tmp_state:props.prop_value};
}

    //리액트 초기에 사용하던 클래스형 컴포넌트
//1) 생명주기 함수 => constructor(props)
constructor(props){//컴포넌트가 생성될때 처음으로 호출되는 메서드
  super(props);//부모클래스인 React.Component의 생성자 호출
  this.state = {};//컴포넌트의 초기 스테이트를 정의
  console.log('1. constructor Call');
  //개발자가 디버깅할수 있도록 로그를 찍음
}
//componentDidMount() 작성한 함수들중 가장 마지막으로 실행 렌더함수가 리턴되는 html형식의 코드를 화면에 그려준후 실행된다
//화면이 모드 그려진후 실행되는 이벤트 처리, 초기화 등 가장 많이 활용되는 함수
componentDidMount(){
  console.log('4. componentDidMount Call');
  console.log('5. tmp_state : ' + this.state.tmp_state);
}
    render(){

      console.log('render Call');
        return(
          <>
          <h1 className='mt-4 mb-2'>
            [THIS IS IMPORTED COMPONENT]</h1>
            <Container fluid>
              <Row>
                <Col>
                </Col>
              </Row>
            </Container>
          </>
            
        )
    }
}

export default Comp;
/*
컴포넌트는 특정 코드뭉치를 다른 부분에 이식하거나
재사용하기 위해 사용하는 코드블록 단위를 말한다
클래스형 컴포넌트
*/