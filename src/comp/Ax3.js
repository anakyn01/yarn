import React, { Component } from 'react';

class Ax extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseFPList: null,
      append_FPList: '',
    };
  }

  componentDidMount() {
    this.loadMockData();
  }

  loadMockData = () => {
    fetch('/float_population.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          responseFPList: data,
          append_FPList: this.FloatPopulListAppend(data),
        });
      })
      .catch(error => {
        alert("데이터를 불러오는 중 오류 발생: " + error);
      });
  };

  FloatPopulListAppend = (FPList) => {
    let result = [];
    const json = FPList;

    if (!json || !json.entry) return [];

    for (let i = 0; i < json.entry.length; i++) {
      const data = json.entry[i];
      const idx = i + 1;
      result.push(
        <tr key={idx}>
          <td>{idx}</td>
          <td>{data.일자}</td>
          <td>{data.시간}</td>
          <td>{data.연령대}</td>
          <td>{data.성별}</td>
          <td>{data.시}</td>
          <td>{data.군구}</td>
          <td>{data.유동인구수}</td>
        </tr>
      );
    }
    return result;
  };

  render() {
    return (
      <section className="sub_wrap">
        <article className="s_cnt mp_pro_li ct1 mp_pro_li_admin">
          <div className="li_top">
            <h2 className="s_tit1">서울시 유동인구 데이터 - (예시)</h2>
          </div>
          <div className="list_cont list_cont_admin">
            <table className="table_ty1 fp_tlist">
              <thead>
                <tr>
                  <th>Row</th>
                  <th>일자</th>
                  <th>시간</th>
                  <th>연령대</th>
                  <th>성별</th>
                  <th>시</th>
                  <th>군구</th>
                  <th>유동인구수</th>
                </tr>
              </thead>
              <tbody>{this.state.append_FPList}</tbody>
            </table>
          </div>
        </article>
      </section>
    );
  }
}

export default Ax;
