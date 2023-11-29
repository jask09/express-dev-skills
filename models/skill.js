const todos = [
  {id: 125223, skill: 'Write', done: true},
  {id: 127904, skill: 'Walk', done: false},
  {id: 139608, skill: 'Read', done: false}
];

module.exports = {
  getAll
  getOne,
  create,
  deleteOne,
  update
};

function getAll() {
  return skills;
}

function getone(id) {
    id= parseInt(id);
    return skills.find(skill=> skill,id === id);
  }

  function create (skill) {
    skill.id = Date.now() % 1000000;
    skills.push(skill);
  }

  function deleteOne(id) {
id =parseInt(id);
const idx = skills.findIndex(skill => skill.id ===id);
skills.splice(idx,1);
  }

  function update (id, updateSkill) {
id = parseInt(id);
const skill = skills.find(skill => skill.id ===id);
Object.assign(skill,updateSkill);

  }