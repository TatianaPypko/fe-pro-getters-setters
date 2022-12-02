function Student(name, grades) {
  this.name = name;
  this.grades = grades;

  Object.defineProperty(this, 'averageGrade', {
    get() {
      return this.grades.reduce((acc, curr) => acc + curr) / this.grades.length;
    },

  });
}
export const school = {
  students: {
    0: new Student('Maria', [45, 76, 45, 98, 90, 87, 56]),
    1: new Student('Dmytro', [67, 34, 87, 34, 98, 76]),
    2: new Student('Anton', [45, 34, 87, 34, 23, 76]),
    3: new Student('Olha', [67, 34, 34, 23, 98, 76]),
    4: new Student('Anna', [67, 34, 85, 34, 85, 76]),
    5: new Student('Bohdan', [67, 25, 87, 34, 25, 76]),
    6: new Student('Eugene', [97, 34, 78, 85, 98, 65]),
    7: new Student('Ivan', [76, 89, 78, 98, 98, 99, 89, 96]),
  },

  filterNames(maxNum, minNum, students) {
      let names = [];
      for (let key in students) {
        const {
          averageGrade,
          name
        } = this.students[key];
        if (averageGrade <= maxNum && averageGrade >= minNum) {
          names.push(name);
        }
      }
      return names.join(', ');
  },

  get aGradeStudents() {
    return this.filterNames(100, 90, this.students);
  },

  get bGradeStudents() {
    return this.filterNames(89, 75, this.students);
  },

  get cGradeStudents() {
    return this.filterNames(74, 60, this.students);
  },

  get dGradeStudents() {
    return this.filterNames(59, 0, this.students);
  },
};