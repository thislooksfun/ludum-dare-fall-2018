"use strict";

const Person = require("../class/person");

const newPersonInterval = 5;
const startingPeople = 5;
const maxPeople = 10;

var people = [];

module.exports = {
  setup() {
    // TODO
    this._timer = setInterval(this.addNew.bind(this), newPersonInterval * 1000);
    
    for (var i = 0; i < startingPeople; i++) {
      this.addNew();
    }
  },
  
  teardown() {
    clearInterval(this._timer);
  },
  
  addNew() {
    if (people.length < maxPeople) {
      let newPerson = new Person();
      people.push(newPerson);
      $("#people").append(newPerson.asHTML());
    }
  },
  
  refresh() {
    $("#people").empty();
    
    for (let person of people) {
      $("#people").append(person.asHTML());
    }
  },
};