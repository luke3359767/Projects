const express = require('express')
const router=express.Router()

router.get("/", (req, res, next) => {
  console.log(req.query.name)
  res.send("User List");
});
router.get("/new", (req, res, next) => {
  res.render("users/new",{firstname:"Test"})
});

router.post('/',(req, res, next)=>{
  const isValid=true
  if(isValid){
    users.push({firstname:req.body.firstName})
    res.redirect(`/users/${users.length-1}`)
  }else{
    console.log("error")
    res.render('users/new',{firstName:res.body.firstName})
  }
  console.log(req.body.firstName)
  res.send('Create User Hi')
})


 /* router.get('/:id',(req, res, next)=>{
  res.send(`Get User with ID ${req.params.id}`)
})
router.put('/:id',(req, res, next)=>{
  res.send(`Put User with ID ${req.params.id}`)
})
router.delete('/:id',(req, res, next)=>{
  res.send(`Delete User with ID ${req.params.id}`)
}) */

router
  .route("/:id")
  .get((req, res, next) => {
    console.log(req.user)
    res.send(`Get User with ID ${req.params.id}`)
  })
  .put((req, res, next) => {
    res.send(`Put User with ID ${req.params.id}`)
  })
  .delete((req, res, next) => {
    res.send(`Delete User with ID ${req.params.id}`)
  });

const users=[{name:"Luke"},{name:"Liu"}]
router.param('id',(req, res, next,id)=>{
  req.user=users[id]
  console.log(id)
  next()
})

module.exports=router