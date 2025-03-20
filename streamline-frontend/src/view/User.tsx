
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Login from '../components/user/Login';

 function UserView() {


return ( 
    <div  className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 min-h-screen font-sans">
      <Header/>
      <Login/>
      <Footer />
    </div>
  )
}
export default UserView;
