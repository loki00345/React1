import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Місто Рівне</h1>
      </header>
      <main>
        <h2>Назва міста: Рівне</h2>
        <h3>Країна: Україна</h3>
        <h4>Рік заснування: 1283</h4>
        <div className="city-images">
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/14/a2/32/caption.jpg?w=600&h=400&s=1" alt="Рівне" />
          <img src="https://rivne-day.com/wp-content/uploads/2023/12/image_5aa57ead5dee96.16772917.jpg" alt="Центральний парк Рівне" />
        </div>
      </main>
    </div>
  );
}

export default App;
