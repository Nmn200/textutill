
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';

function App() {
  return (
      <>
<Navbar title="TextUtils"></Navbar>
<div className='container my-2'>
  <TextForm heading="Enter the text to analyse" />
</div>
{/*<About />*/}

    </>
  );
}

export default App;
