import Header from './components/Header';
import NavBar from './components/NavBar';
import HomeView from './views/HomeView';
import Footer from './components/Footer';
import useStyles from './AppStyles';

const App = () => {
  const s = useStyles();

  return (
    <>
      <Header />
      <main className={s.main}>
        <NavBar />
        <h1>The Shop</h1>
        <HomeView />
      </main>
      <Footer />
    </>
  );
};

export default App;
