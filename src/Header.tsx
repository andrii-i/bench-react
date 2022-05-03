import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './style.css';
import Figure from 'react-bootstrap/Figure';

export function Header() {
  return <div className='App'>
    <div className="px-1 pt-1 mt-1 text-center">
      <Figure className="d-block mx-auto">
        <Figure.Image
          width={200}
          alt="Bench Engine"
          src="https://i.ibb.co/gMXfGfS/bench-engine.png" />
      </Figure>
      <h1 className="display-6 fw-light">Bench Engine</h1>
    </div>
  </div>;
}
