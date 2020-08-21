class Member {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.lastName + this.firstName;
  }
}

var member = new Member('友也', '小坂');
console.log(member.getName());

var current = new Date();
var result = document.getElementById('result');
result.textContent = current.toLocaleString();