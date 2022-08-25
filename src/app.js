const express = require('express');
const app = express();
app.use(express.json());
//app.get('/home',(request,response) => response.status(200).json({message: 'Olá Mundo'}));
app.get('/teams',(request,response)=> response.status(200).json({teams}));
app.post('/teams',(request, response)=>{
  const newTeam = {...request.body};
  teams.push(newTeam);
  response.status(201).json({team:newTeam});
});

app.put('/teams/id',(request,response)=>{
const {id} = request.params;
const {name,initials} = request.body;
let updateTeam;
for(let i = 0; i < teams.length; i+=1){
  if(team.id === Number(id)){
  team.name = name;
  team.initials = initials;
  updateTeam = team;
  }
}
response.status(200).json({updateTeam});
});

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

// ...
module.exports = app;