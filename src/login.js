import React from 'react';
import { Link } from 'react-router-dom';
import './assets/css/app.css';
import main_logo from './assets/images/img_main_logo.png';

const Login = () => {
    return(
<div className="login_area">
<div className="cont">
    <div className="login_text">
        <h1>
            <img src={main_logo} alt="X-LOG" />에<br/>오신 것을 환영합니다.
        </h1>
        <p>실시간 동기화, 양방향 동기화, 이기종 동기화 지원 등<br/>핵심 원천 기술 보유를 통한 안정적 제품관리</p>
    </div>
    <div className="login_form">
        <div>
            <h3>Login</h3>
            <div className="round_input">
                <input type="text" placeholder="아이디를 입력해주세요" title="아이디"/>
            </div>
            <div className="round_input">
                <input type="password" placeholder="비밀번호를 입력해주세요" title="비밀번호"/>
            </div>

            <div className="info_area">
                <Link to ='/main' className="btn_txt">아이디/비밀번호 찾기</Link>
                <div className="round_chk">
                    <input type="checkbox" id="chk1"/>
                    <label for="chk1">로그인 상태 유지</label>
                </div>
            </div>

            <div className="btn_area">
            <Link to ='/main' ><button className="btn">로그인</button></Link>  
            </div>
        </div>
    </div>
</div>

<p className="copy">Copyright Ⓒ 2019 R2B Solution Co., Ltd. All right reserved. 우편번호 06248 (주)알투비솔루션 서울시 강남구 논현로71길 21 보사빌딩 4F TEL: 070-5015-3517 FAX: 070-4032-2017</p>
</div>
);
};

export default Login;