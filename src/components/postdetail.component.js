import React, { Component } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import Login from "./login.component";
import SignUp from "./signup.component";

export default class PostDetail extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>
              ABC
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="show-detail" style={{padding: '100px 0px 0 200px'}} >
                <div className="Header-post">
                    <h2>Phòng tiện nghi có gác, dt 30m, giá 3.6tr, ngay đầm sen</h2>
                    <h3>Thông tin chung</h3>
                </div>

				<table>
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Price</th>
                    <th>Phone</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>35 Quan Thu Duc</td>
                    <td>100$</td>
                    <td>035124238</td>
                </tr>
            </table>
            
            <div className="decription" style={{margin: '0 20px 0 20px'}}>
                <h3 style={{margin: '15px 0px 0px 0px'}}>Thông tin mô tả</h3>
                <p>Cho thuê Phòng trọ tiện nghi có mới xây có GÁC trung tâm quận Tân Phú, giáp Quận 11, Q.10, Q.6, Tân Bình</p>
                <p>
                    Địa chỉ: hẽm 341 Đường Khuôn Việt, P. Phú Trung, Q. Tân Phú. (ngay đường hòa bình đối diện nhà hàng Thủy Tạ Đầm Sen có đường Khuôn Việt vào 20m là tới)
                </p>
                    Vị trị: Thuận lợi đi các quận 11, 10, 6, Tân Bình....
                <p>
                    + Đối diện nhà hàng Thủy Tạ
                </p>
                <p>
                    + Cách Đầm Sen 50m
                    </p>
                <p>
                    + Cách đại học Hồng Bàng, Nhà Hàng tiệc cưới Nam Bộ 100m, Gần Đường Lũy Bán Bích
                    </p>
                <p>
                    - Tiện nghi đi kèm:
                    </p>
                <p>
                    + Máy lạnh 1HP
                    </p>
                <p>
                    + Máy giặt dùng chung 2 cái
                    </p>
                <p>
                    + Tủ Quần Áo gỗ cao cấp
                    </p>
                <p>
                    + Bàn ghế gỗ mới
                    </p>
                <p>
                    + Có kệ bếp, hộc tủ hiện đại
                    </p>
                <p>
                    + Nệm cao su
                    </p>
                <p>
                    # Tolet thiết kế hiện tại, đẹp mắt
                    </p>
                <p>
                    # Nhà mới xây đẹp, thoáng mát,
                    </p>
                <p>
                    # Ban công phơi đồ thoải mái
                    </p>
                <p>
                    # Chỗ để xe rộng rãi
                    </p>
                <p>
                    - Có đội thợ chuyên nghiệp, xử lý sự cố nhanh
                    </p>
                <p>
                    - Ra vào bằng vân tay nên rất an toàn
                    </p>
                <p>
                    - Dọn vệ sinh 3 lần/ tuần
                    </p>
                <p>
                    - Giờ giấc tự do, không chung chủ, chìa khóa trao tay
                    </p>
                <p>
                    ---------------------------------------------</p>
                <p>
                ☎️ Điện thoại liên hệ: 0902817961</p>
                    
                    <img src="https://static123.com/phongtro123/uploads/images/thumbs/900x600/fit/2020/05/27/img-20200519-003648_1590552309.jpg" />
                    <img src="https://static123.com/phongtro123/uploads/images/thumbs/900x600/fit/2020/05/27/img-20200519-003732_1590552312.jpg" />
                    <img src="https://static123.com/phongtro123/uploads/images/thumbs/900x600/fit/2020/05/27/img-20200519-003727_1590552326.jpg" />
            </div>




        </div>
      </div>
    );
  }
}

{
  /* <div className="auth-wrapper">
  <div className="auth-inner">
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/sign-in" component={Login} />
      <Route path="/sign-up" component={SignUp} />
    </Switch>
  </div>
</div> */
}
