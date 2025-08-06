import React,{Component} from "react";
import $ from 'jquery';
import {Container, Row, Col, Button} from 'react-bootstrap';

class Jquery extends Component{
 
    //스크립트를 여기다 실행
    input_alert = (e) => {
        var input_val = $('#inputId').val();
        alert(input_val);
    }

    render(){
        return(
            <>
            <Container>
                <Row>
                    <Col>
<div className="input-group">
<input id="inputId" name="inputName" className="form-control" />   
<Button variant="outline-success" onClick={e => this.input_alert(e)}>
jquery Button
</Button>
</div>                    
                    </Col>
                </Row>
            </Container>
            </>
        )
    }

}
export default Jquery;