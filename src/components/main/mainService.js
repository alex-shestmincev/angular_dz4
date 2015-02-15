angular.module('dz4').factory('mainService',['$q',function($q){

  function New(name,surname,position){

    var new_employe = validateFields(0,name,surname,position);
    console.log(new_employe);
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
    console.log(employees);
    employee.id = employees.length;
    employees[employee.id] = employee;
    console.log(employee);

    var res = saveList(employees);
    console.log(employees.pop());
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
