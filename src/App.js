import './App.css';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import Explore from './Components/Explore';
import Footer from './Components/Footer';
import Menu from './Components/Menu';
import ReserveSeat from './Components/ReserveSeat';
import MyCart from './Components/MyCart';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import AdminNav from './Components/Admin/AdminNav';
import ItemAdd from './Components/Admin/ItemAdd';
import ItemView from './Components/Admin/ItemView';
import ItemExplore from './Components/Admin/ExploreAdd';
import Delivery from './Components/Delivery';
import UsersView from './Components/Admin/UsersView';
import ExploreView from './Components/Admin/ExploreView';
import TransactionView from './Components/Admin/TransactionView';
import ReservationConfirmation from './Components/Admin/ReservationConfirmation';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContextProvider from './contexts/contextAPI';
import Protected from './Components/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signin">
            <ContextProvider>
              <NavBar />
              <SignIn />
              <Footer />
            </ContextProvider>
          </Route>
          <Route path="/signup">
            <ContextProvider>
              <NavBar />
              <SignUp />
              <Footer />
            </ContextProvider>
          </Route>
          <Route path="/mycart">
            <ContextProvider>
              <NavBar />
              <MyCart />
              <Footer />
            </ContextProvider>
          </Route>
          <Route path="/delivery">
            <ContextProvider>
              <NavBar />
              <Delivery />
              <Footer />
            </ContextProvider>
          </Route>
          <Route path="/menu/:type">
            <ContextProvider>
              <NavBar />
              <Menu />
              <Footer />
            </ContextProvider>
          </Route>
          <Route path="/admin/addItem">
            <AdminNav />
            <Protected Cmp={ItemAdd} />
          </Route>
          <Route path="/admin/itemView">
            <AdminNav />
            <Protected Cmp={ItemView} />
          </Route>
          <Route path="/admin/addExplore">
            <AdminNav />
            <Protected Cmp={ItemExplore} />
          </Route>
          <Route path="/admin/viewExplore">
            <AdminNav />
            <Protected Cmp={ExploreView} />
          </Route>
          <Route path="/admin/paymentView">
            <AdminNav />
            <Protected Cmp={TransactionView} />
          </Route>
          <Route path="/admin/usersView">
            <AdminNav />
            <Protected Cmp={UsersView} />
          </Route>
          <Route path="/admin/reservationView">
            <AdminNav />
            <Protected Cmp={ReservationConfirmation} />
          </Route>
          <Route path="/admin">
            <AdminNav />
          </Route>
          <Route path="/">
            <ContextProvider>
              <NavBar />
              <Banner />
              <Explore />
              <ReserveSeat />
              <Footer />
            </ContextProvider>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
