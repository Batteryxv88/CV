import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { store } from './app/store';
import Header from './widgets/Header/Header';
import Footer from './widgets/Footer/Footer';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import ErrorCodes from './pages/ErrorCodes/ErrorCodes';
import { useEffect, useSelector } from 'react-redux';
import './index.css';

function AppContent() {
  const theme = useSelector((state) => state.theme.value);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/error-codes" element={<ErrorCodes />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
