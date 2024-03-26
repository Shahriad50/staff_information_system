import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Card from "./Card";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div>
        <Card title="Committee" />
        <Card title="Office" />
        <Card title="Department" />
      </div>
    </div>
  );
}

export default App;
