import Header from "./components/Header";
import Footer from "./components/Footer";
import FontApp from "./components/FontApp";
import DarkMode from "./components/darkMode";

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <DarkMode>
        <div className="container min-vh-100">
          <FontApp />
        </div>
        <footer>
          <Footer />
        </footer>
      </DarkMode>
    </>
  );
};

export default App;
