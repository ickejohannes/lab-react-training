import './App.css';
import IdCard from "./components/IdCard"
import Greetings from "./components/Greetings"
import Random from './components/Random';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John" 
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">Francois</Greetings>
      <Random min={1} max={6}></Random>
      <Random min={1} max={100}></Random>
    </div>
  );
}

export default App;
