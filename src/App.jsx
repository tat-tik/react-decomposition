import './App.css';
import Banner from "./components/Banner";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Search />
        <Banner />
        <Footer />
    </div>
  );
}

export default App;