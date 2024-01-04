import Hello from "./components/Hello";
import '../src/css/index.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init(
      {
        offset:200,
        duration:500
      }
    );
  }, []);
  return (
    <Hello/>
  );
}

export default App;
