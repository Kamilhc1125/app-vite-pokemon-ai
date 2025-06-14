import { Chat, Footer, Navbar, Pikachu } from "./components";

const App = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="mt-30">
          <Pikachu />
        </div>
        <Chat />
      </div>
      <Footer />
    </div>
  );
}

export default App;
