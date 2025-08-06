import React,{Component} from "react";
import Swal from 'sweetalert2';
import {Button} from 'react-bootstrap';

class Sweet extends Component{
//포지션이 수정되면 수정 됫다는 애니가 나옴
saveAlert = (flag, positionflag, e) => {
    Swal.fire({
        position: positionflag,
        icon : 'success',
        title: flag +'됐습니다',
        showConfirmButton: false,
        timer: 1500
    })
}


//동기 요청과 결과가 동시에 일어난다는 뜻, 
    /*componentDidMount(){
        Swal.fire('1. sweetAlert').then(result =>
        { alert('2. result.value : ' + result.value)}
        )
    }*/

    render(){
        return(
            <>
            <h1>sweetalert2</h1>
<Button onClick={e => this.saveAlert('저장', 'center')}>저장</Button>
<Button onClick={e => this.saveAlert('수정', 'bottom-end')}>수정</Button>
        </>
        )
    }
}

export default Sweet;