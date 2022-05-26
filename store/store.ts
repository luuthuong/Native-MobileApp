import { makeAutoObservable } from "mobx";

class Store{
    user:any ={
        name:'',
        password:'',
    }
    constructor(){
        makeAutoObservable(this)
    }
    setSignin(username:string,pass:string){
        user={
           ...this.user,
           name:username,
           pass:pass
       }
    }
}
const store=new Store()
export default store;