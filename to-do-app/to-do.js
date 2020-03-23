angular.module("todoApp", [])
  .controller("addItemToDo", addItemToDo);

  function addItemToDo() {
    console.log("inside the addItemToDo controller");
    this.isEdit = false;
    this.todoList = [];
    this.todoList.push("Stay away from Corona");
    this.todoList.push("Eat");
    this.todoList.push("Sleep");

    this.editSelected = function(){
      console.log("inside editSelected");
      this.isEdit=!this.isEdit;
    }

    this.deleteSelected = function(index){
      console.log("inside deleteSelected");
      this.todoList.splice(index, 1);
    }

    this.addSelected = function(){
      console.log("inside addSelected");
      this.todoList.push(this.itemToAdd);
      this.itemToAdd = "";
    }

  }
