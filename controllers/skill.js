const Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
 
};

function index(req,res) {
  res.render('skills/index',{
    skills:Skill.getAll(),
    title:'Skill Details'
  });
}

function show(req,res) {
  res.render('skills/show',{
    skills:Skill.getAll(req.params.id),
    title:'All Skills'
  })
}


function newSkill(req,res) {
  res.render('skills/new', {
    title:'Add a Skill'
  });
}

function create(req,res) {
  Skill.create(req.body);
  res.redirect('/skills');
}

function deleteSkill(req,res) {
  Skill.deleteOne(req.params.id);
  res.redirect ('/skills');
};
    