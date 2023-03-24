import Login from "./Login"
import Senha from "./Senha"
import { logins } from "./Data/logins"
import { LoginsContext } from "./loginscontext";
import { useContext } from "react";


function Checklogin(){
    const [login, senha] = useContext(LoginsContext)

    if (login === logins.senha && senha === logins.senha){
        return true
    }
    else return false

}

export default function Signin(){
    return(
        <div className="text-center">
            <Login/>
            <Senha/>
            <button type="search" class="btn btn-primary" className="my-3" onClick={Checklogin()}>Entrar</button>
        </div>
    );
}