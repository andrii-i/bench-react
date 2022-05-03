import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './style.css';
import { Header } from './Header';
import { AudioBenchmarking } from './AudioBenchmarking';

function App() {
  return (
    <div>
      <Header />
      <AudioBenchmarking />
    </div>
  );
}
export default App;


