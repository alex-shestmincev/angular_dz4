angular.module('dz4').factory('mainService',['$q',function($q){

  function New(name,surname,position){

    var new_employe = validateFields(0,name,surname,position);

    if (new_employe){
      return saveNew(new_employe);
    }else{
      console.log("Bad fields " + name,surname,position);
    }


  }

  function Update(id,name,surname,position){

    var employe = validateFields(id,name,surname,position);
    if (employe){
      return updateExists(employe);
    }else{
      console.log("Bad fields " + name,surname,position);
    }
  }

  function getEmployee(id){
    var employees = List();
    return employees[id];
  }

  function List(){

    return localStorage.getItem('employees') ? JSON.parse(localStorage.getItem('employees')) : [];
  }

  function Remove(idx){
    var employees = List();
    employees.splice(idx, 1);
    saveList(employees);
  }


  // Private methods
  function saveList(list){
    
    return localStorage.setItem('employees',JSON.stringify(list));
  }

  function saveNew(employee){
    var employees = List();

    employee.id = (employees.length > 0) ? (employees[employees.length-1].id+1) : 0;

    console.log(employees);
    employees[employee.id] = employee;

    var res = saveList(employees);
    return employee.id;
  }

  function updateExists(employee){
    var employees = List();
    employees[employee.id] = employee;

    var res = saveList(employees);
    return employee.id;
  }

  function trimText(value){
    return value.trim();
  }

  function validInt(value){
    return parseInt(value);
  }

  function validateFields(id,name,surname,position){

    var id = validInt(id);
    var name = trimText(name);
    var surname = trimText(surname);
    var position = trimText(position);

    if (name.length > 0 && surname.length > 0 && position.length > 0){
      return {
        id:id,
        name: name,
        surname: surname,
        position: position
      };
    }else{
      return false;
    }
  }

  // Private methods


  return {
    New : New,
    Update: Update,
    List: List,
    Remove: Remove,
    getEmployee: getEmployee
  }

}]);
