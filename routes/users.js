var express = require('express');
var router = express.Router();

/* GET users listing. */

const users = [
  {
    id: 0,
    username: 'abc',
    email: 'abc@gmail.com'
  },
  {
    id: 1,
    username: 'lthuong',
    email: 'abc@gmail.com'
  },
  {
    id: 2,
    username: '123',
    email: 'abc@gmail.com'
  },
  {
    id: 3,
    username: '456',
    email: 'abc@gmail.com'
  },
]
router.get('/', function (req, res, next) {
  // const users=req.get('users')
  res.status(200).send({
    message: 'success',
    data: users
  });
});

router.get('/:id', function (req, res, next) {
  // const users=req.get('users')
  const user = users.filter((item) => item.id === parseInt(req.params.id))
  console.log(user)
  user.length>0 ? res.status(200).send({
    message: "success",
    data: user
  }) : res.status(400).send({
    message: "Not Found",
    data: 'null'
  })
});
router.put('/edit/:id',(req,res)=>{
  const [user] = users.filter((item) => item.id === parseInt(req.params.id))
  user.username=req.body.username
  user.email=req.body.email
  console.log('change user: ',req.body);
  // users.push(user)
  res.status(200).send({
    message: 'success',
    data: users
  });
})
router.post('/', (req, res) => {
  res.setHeader('content-type', 'application/json')
  const user = {
    id: users.length+1,
    ...req.body
  }
  try {
    users.push(user)
    res.send(user)
  }
  catch (err) {
    res.send(user)
    return res.status(500).send(user)
  }
})
module.exports = router;
