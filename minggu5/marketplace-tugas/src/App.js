import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";

export default function NestingAuth() {

  return (
    <Router>
      <nav class="navbar navbar navbar-expand-lg navbar-dark bg-danger">
        <div class="container">
          <a class="navbar-brand" href="#">D&R Skincare</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <AuthButton />
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link">
                  <Link to="/home">HOME</Link>
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link to="/shop">SHOP BY BRANDS</Link>
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link to="/private">LOGIN</Link>
                  <span class="sr-only">(current)</span>
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <div style={{ background: 'salmon' }}>
        <br></br>
        <div class="text-center">
          <h4>SHOP BESTSELLERS</h4>
        </div>
        <hr />

        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <PrivateRoute path="/private">
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router >

  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();
  return fakeAuth.isAuthenticated ? (

    <p style={{ marginTop: '1000px' }}>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p></p>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function ProtectedPage() {
  return (
    <h3>Private</h3>
  )
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <center>
        <p>You must log in to view the page at {from.pathname}</p>
        <button type="button" class="btn btn-outline-success btn-sm" onClick={login}>Log in</button>
      </center>
    </div>
  )
}

function Home() {
  const isLoggedIn = fakeAuth.isAuthenticated;
  return (
    <div style={{ background: 'salmon' }}>
      <center>
        <div class="container">
          <img
            src="https://lh3.googleusercontent.com/rvP_jFjuCTnBOg4AwKAPfPFSveW8LxUpZRw3xOtIt-oATaacRS0Pf4QkwzHLNFwb-SgzRRie4djaOR_33siuexxYMHFBJcnZUr1clUeGDXwVZ67isTDwueEY2jin43VkXJ5k9Wkc"
            alt="content"
          />
          <br></br> <p> Hi Exabytes Friends! Seperti yang kita semua tahu kalau kulit glowing dan cerah adalah impian setiap wanita. Guys, apakah kamu berencana untuk belanja makeup dan skincare pada waktu dekat ini? Kalau iya, nggak ada salahnya nih kamu nengok dan intip-intip beauty E-Commerce yang banyak menjual produk skincare dan makeup dari produk lokal sampai produk impor. Apa aja sih rekomendasinya?</p>
        </div>
      </center>
    </div>
  );
}

function Shop() {
  let { path, url } = useRouteMatch();
  const isLoggedIn = fakeAuth.isAuthenticated;
  if (isLoggedIn == true) {
    return (
      <div>
        <center>
          <h5>Merk Skincare</h5>
          <div class="card card-group">
            <div class="card" >
              <img
                src="https://s1.bukalapak.com/bukalapak-kontenz-production/content_attachments/46536/w-744/Foto_Utama_Wardah_Crystallure.jpg"
                alt="wardah"
              /><br></br>
              <h6><Link to={`${url}/Crystallure Anti aging Harga Rp. 450.000`}>Wardah</Link></h6>
            </div>

            <div class="card">
              <img
                src="https://haigadis.com/wp-content/uploads/2020/09/Produk-The-Body-Shop-Tea-Tree-1280x720.jpg"
                alt="Teatree"
              /><br></br>
              <h6><Link to={`${url}/Anti Acne Harga Rp. 560.000`}>Tea Tree</Link></h6>
            </div>

            <div class="card">
              <img
                src="https://mlxfk1hrpidd.i.optimole.com/hEjwfas.-o4O~5b12d/w:auto/h:auto/q:auto/https://msglowjogja.com/wp-content/uploads/2020/09/paket-whitening-msglow-jogja-malang-beauty-skincare.jpg"
                alt="wardah"
              /><br></br>
              <h6><Link to={`${url}/Whitening basic series Harga Rp. 650.000`}>Ms Glow</Link></h6>
            </div>
          </div>

          <Switch>
            <Route exact path="{path}">
              <h3>Please Choose Your Goods!</h3>
            </Route>

            <Route path={`${path}/:barangId`}>
              <Barang />
            </Route>

          </Switch>
        </center>
      </div >
    );
  }
  return (
    <div>
      <center>
        <h2>Merk Skincare</h2>
      </center>
      <left>
        <p>You are not logged in</p>
      </left>
    </div>
  );
}

function Barang() {
  let { barangId } = useParams();

  return (
    <div>
      <h3>{barangId}</h3>
    </div>
  );
}