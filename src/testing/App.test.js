import { BrowserRouter, Routes, Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';
import Calculator from '../components/ButtonComponent';
import Quotes from '../components/Quotes';
import Home from '../components/Home';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <>
          <Navbar />
          <Routes>
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
