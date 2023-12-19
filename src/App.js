import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Textform from "./components/Textform"


function App() {
  return (
    <>
      <Navbar title="Uzair capitali" contactfm="About Us"/>
      <Textform heading='small to capatilize'/>
      <Form/>

    </>
  );
}

export default App;
