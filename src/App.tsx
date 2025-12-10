
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-physio-bg font-sans">
      <Header />
      <main>
        <Hero />
        {/* You can add the previous Specialty Section here if desired */}
      </main>
    </div>
  );
}

export default App;