import Header from "./Header";
import Signin from "./Signin";
import { LoginsContext } from "./loginscontext";
import { logins } from "./Data/logins"

function App() {
  return (
    <div className="container">
      <LoginsContext.Provider value={logins}>
        <Header/>
        <Signin/>
      </LoginsContext.Provider>
    </div>
  );
}

export default App;