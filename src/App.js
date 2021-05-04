import Header from "./components/Header";
import Footer from "./components/Footer";
import FontApp from "./components/FontApp";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="container min-vh-100">
        <FontApp />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
