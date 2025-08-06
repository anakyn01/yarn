import React, {Component} from "react";

class Es6 extends Component {

    //생성자
    constructor(props){
        super(props);
        this.state = {};
    }

    //렌더링후 마운트
    componentDidMount(){
        var jsString1 = '수업외에 목적으로'
        var jsString2 = '사용하면 \n police에서 meet'
        console.log(jsString1 + ' what? ' + jsString2 + '~' );

        var Es6String1 = '주님에 자식을 건드렸기에'
        var Es6String2 = '넌 벌받을거다'
        console.log(`${Es6String1} 문자열 ${Es6String2} !! ____ 다음 줄입니다`);

        var LongString = "학생들이란 그쌤에 반사 문제가 잇다면 끄쌤이 문제";
        console.log('startswith : ' + LongString.startsWith("skaxktakfrh sjskwkfgo"));
        console.log('endswith : ' + LongString.startsWith("na na jal hae"));
        console.log('includes : ' + LongString.includes("추가된 스트링"));
    }

    render() {
        return(
            <>
            <h2>[최원경 학생이 아니라..]</h2>
            </>
        )
    }

}

export default Es6;