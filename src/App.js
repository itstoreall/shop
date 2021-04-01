import Header from './components/Header';
import NavBar from './components/NavBar';
import Content from './components/Content';
import Footer from './components/Footer';
import useStyles from './AppStyles';

const App = () => {
  const s = useStyles();

  return (
    <div className={s.App}>
      <Header />
      <div className="container App">
        <NavBar />
        <main className={s.main}>
          <Content />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
