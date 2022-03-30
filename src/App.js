import './App.scss';

import { About, Footer, Header, Testimonial } from './container/index';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
