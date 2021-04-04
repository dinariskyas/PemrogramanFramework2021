import React from 'react';
import './App.css';
import profile from './img.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Setrika from "./container/Setrika/SetrikaPost";
import Keranjang from "./container/Setrika/KeranjangPost";

function App() {
  return (
    <Router>
      <div>
        <ul className="menu">
          <li>
            <Link to="/"><span>Home</span></Link>
          </li>
          <li>
            <Link to="/listProduk"><span>List Produk</span></Link>
          </li>
          <li>
            <Link to="/keranjang"><span>Keranjang</span></Link>
          </li>
          <li>
            <Link to="/about"><span>About</span></Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/listProduk">
            <Produks />
          </Route>
          <Route path="/keranjang">
            <Keranjangs />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <div style={{ backgroundColor: '#20B2AA' }}>
        <br></br>
        <center><h2>Selamat Datang di Setrika Shop's</h2></center>
        <hr></hr><hr></hr>
      </div>
      <center>
        <div className="container">
          <table class="table-bordered" width="55%"><tr>
            <td>
              <img
                src="https://static.bmdstatic.com/pk/product/medium/5bea2f62b144a.jpg"
                width="200"
                alt="content" />
            </td>
            <td>
              <img
                src="https://media.pricebook.co.id/images/product/L/48114_L_1.jpg"
                width="200"
                alt="content" />
            </td>
            <td>
              <img
                src="https://ecs7.tokopedia.net/img/cache/300/product-1/2017/3/18/1018499/1018499_d4e58d70-fc6e-4bba-85a2-7ce95769b42c.jpg"
                width="200"
                alt="content" />
            </td>
          </tr></table>
          <table class="table-bordered" width="55%"><tr>
            <td>
              <img
                src="https://ecs7.tokopedia.net/img/cache/300/product-1/2019/3/12/19839786/19839786_f064c21c-7f78-4cf4-8003-be4ec5827c0e_1000_1000.jpg"
                width="200"
                alt="content" />
            </td>
            <td>
              <img
                src="https://images.philips.com/is/image/PhilipsConsumer/GC1418_02-IMS-id_ID?$jpglarge$&wid=1250"
                width="200"
                alt="content" />
            </td>
            <td>
              <img
                src="https://www.99.co/blog/indonesia/wp-content/uploads/2019/04/setrika-terbaik-4.jpg"
                width="200"
                alt="content" />
            </td>
          </tr></table>
        </div>
      </center>
    </div>
  );
}

const About = () => {
  return (
    <div>
      <div style={{ backgroundColor: '#20B2AA' }}>
        <br></br>
        <center><h2>Biodata</h2></center>
        <hr></hr><hr></hr>
      </div>
      <body>
        <div className="container">
          <div class="card kartu">
            <div class="row">
              <div class="col-md-4">
                <div class="foto">
                  <img
                    src={profile}
                    width="200"
                    height="auto"
                    class="img-thumbnail"
                    alt="profile" />
                </div>
              </div>
              <div class="col-md-8 kertas-biodata">
                <div class="biodata">
                  <table width="100%" border="0">
                    <tbody><tr>
                      <td valign="top">
                        <table border="0" width="100%">
                          <tbody class="biodata">
                            <tr>
                              <td width="25%" valign="top" class="textt">Nama</td>
                              <td width="2%">:</td>
                              <td class="style">Dina Risky Alin Saputri</td>
                            </tr>
                            <tr>
                              <td class="textt">Jenis Kelamin</td>
                              <td>:</td>
                              <td>Perempuan</td>
                            </tr>
                            <tr>
                              <td class="textt">Tempat Lahir</td>
                              <td>:</td>
                              <td>Malang</td>
                            </tr>
                            <tr>
                              <td class="textt">Tanggal Lahir</td>
                              <td>:</td>
                              <td>04/06/2000</td>
                            </tr>
                            <tr>
                              <td class="textt">Jurusan</td>
                              <td>:</td>
                              <td>Teknologi Informasi</td>
                            </tr>
                            <tr>
                              <td valign="top" class="textt">Prodi</td>
                              <td valign="top">:</td>
                              <td>DIV - Teknik Informatika</td>
                            </tr>
                          </tbody></table>
                      </td>
                    </tr>
                    </tbody></table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

function Produks() {
  return (
    <div>
      <Setrika />
    </div>
  )
}

function Keranjangs() {
  return (
    <div>
      <Keranjang />
    </div>
  )
}

export default App;
