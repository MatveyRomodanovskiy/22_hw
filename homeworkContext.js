//var-1
let group = {
      title:'Java 51',
      students: ['Diana', 'Galina', 'Lolita', 'Daria', 'Natalia', 'Anna'],

    showList: function ()  {
          const show = (name) => {
          console.log(`${this.title}: ${name}`)
        };
        this.students.forEach(show);
    }
}
//
group.showList();
const newGroup = group;
group = null;
console.log('===================================')
newGroup.showList();
//var-2
console.log('=============VAR 2 (немного трэша) ======================')
let group2 = {
    title: 'Java 51',
    students: ['Diana', 'Galina', 'Lolita', 'Daria', 'Natalia', 'Anna'],

    showList () {
        Array.prototype.printArray = function (title) {
            for (let i = 0; i < this.length; i++) {
                console.log(`${title}: ${this[i]}`);
            }

        }
        this.students.printArray(this.title)
    }
}
//
group2.showList();
const newGroup2 = group2;
group2 = null;
console.log('===================================')
newGroup2.showList();