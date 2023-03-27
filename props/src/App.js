import logo from './logo.svg';
import './App.css';
import Profile from './profil/Profile';

function App() {
const don = {
  fullName: 'sana ell',
  bio: 'bioengrais',
  profession: 'Comptable',
};

const handleName=(name)=> alert (`${name}`);

  return (
    <div className="App">
     <Profile test={don} fun={handleName} >
     <img src='https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg' />

     
      </Profile> 
     
    </div>
  );
}

export default App;
