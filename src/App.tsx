import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Links from './components/Links';

function App() {
  return (
    <>
      <main className="site-main">
        <Hero />
        <About />
        <Links />
      </main>
      <Footer />
    </>
  );
}

export default App;
