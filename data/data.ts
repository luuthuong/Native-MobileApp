// eslint-disable-next-line prettier/prettier
import store from './../store/store';
import { Alert } from 'react-native';
export const image = {
  uri: 'https://images.pexels.com/photos/1061623/pexels-photo-1061623.jpeg?cs=srgb&dl=pexels-vlad-bagacian-1061623.jpg&fm=jpg',
};

export const FormContent = {
  signIn: [
    {
    title: 'User name',
    action: (e:any) => store.user["username"]=e
    },
    {
    title:'Password',
    action:(e:any) => store.user["password"]=e
    }
  ],
  signUp:[
    {
    title: 'User name',
    action: (e:any) => store.newUser["username"]=e
    },
    {
    title:'Password',
    action:(e:any) => store.newUser["password"]=e
    },
    {
    title:'Email',
    action:(e:any) => store.newUser["email"]=e
    }
  ],
  information:[
    {
      value:(value:any)=>value.fullname,
      title:'Full Name',
      action:(e:any)=>store.information.fullname=e
    },
    {
      value:(value:any)=>value.birthday,
      title:'Birth Day',
      action:(e:any)=>store.information.birthday=e
    },
    {
      value:(value:any)=>value.age.toString(),
      title:'Age',
      action:(e:any)=>store.information.age=e
    },
    {
      value:(value:any)=>value.position,
      title:'Position',
      action:(e:any)=>store.information.position=e
    },
    {
      value:(value:any)=>(value.skill).join(" "),
      title:'Skill',
      action:(e:string)=>store.information.skill=e
    },
  ]
};

export const PopupContent = [
  {
    title: 'Overview',
    path: 'home'
  },
  {
    title: 'Edit Profile',
    path: 'profile'
  },
  {
    title: 'Sign Out',
    path: '/'
  },
]

export const HOST = "http://10.0.2.2:8080/api/";