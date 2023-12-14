const fs=require('fs');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'))
const users=data.users;

exports.createUsers=(req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.json(req.body)
}

exports.getAllUsers=(req, res) => {

    res.json(users);
    // res.json({type:'GET2'})
}

exports.getUsers=(req, res) => {
    const id = +req.params.id;
    const user = users.find(p => p.id === id)
    res.json(users)
}

exports.deleteUsers=(req, res) => {
    const id = +req.params.id;
    const usersIndex = users.findIndex(p => p.id === id);
    const users=users[productIndex]
    users.splice(usersIndex,1)
    res.status(201).json(users);
}

//PUT
exports.updateUsers= (req, res) => {
    const id = +req.params.id;
    const usersIndex = users.findIndex(p => p.id === id)
    users.splice(usersIndex,1,{...req.body,id:id})
    res.status(201).json();
}