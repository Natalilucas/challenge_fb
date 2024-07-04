import { $ } from '@wdio/globals'
import Page from './page';

class RegisterPage extends Page {

    private username: string;
    private email: string;
    private password: string;

    public set setName(username: string){
        this.username = username;
    } 

    public set setEmail(email: string){
        this.email = email;
    }

    public set setPassword(password:string){
        this.password = password;
    }

    public async register( username: string, email: string, password: string){
        
    }

   
    
} 
export default new RegisterPage();