import { makeAutoObservable } from "mobx";

class Store {
    user: any = {
        "username": '',
        "password": '',
    }
    newUser:any={
        "username":'',
        "password":'',
        'email':''
    }
    information:any={
        fullname:'',
        birthday:'',
        age:0,
        skill:[],
        position:''
    }
    constructor() {
        makeAutoObservable(this)
    }
}
const store = new Store()
export default store;