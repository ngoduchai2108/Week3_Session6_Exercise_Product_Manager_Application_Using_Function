let app = new function () {
    this.studentID = document.getElementById('students');
    this.students = ['Hai','Hung','Chinh','Dinh','Trung'];
    this.birthdays = ['21/08/1996', '21/08/1996', '21/08/1996', '21/08/1996', '21/08/1996'];

    this.count = function (data) {
        let countID = document.getElementById('counter')
        let name = 'student';
        if (data){
            if (data > 1){
                name = 'students';
            }
            countID.innerHTML = data + ''+name;
        }else {
            countID.innerHTML = 'NO '+ name;
        }
    };

    this.display = function () {
        let data = '';
        for (let i=0; i<this.students.length; i++){
            data += '<tr>';
            data += '<td>'+this.students[i]+'<td/>';
            data += '<td>'+this.birthdays[i]+'<td/>';
            data += '<td><button onclick="app.edit('+i+')">Edit</button><td/>';
            data += '<td><button onclick="app.delete('+i+')">Delete</button><td/>';
            data += '<tr/>';
        }
        this.count(this.students.length);
        return this.studentID.innerHTML = data;
    };
    this.add = function () {
      let addNameID = document.getElementById('add_name');
      let addBirthdayID = document.getElementById('add_birthday');
      let student = addNameID.value;
      let birthday = addBirthdayID.value;
      if (student && birthday){
          this.students.push(student.trim());
          this.birthdays.push(birthday.trim());
          addNameID.value = '';
          addBirthdayID.value = '';
          this.display();
      }
    };
    this.edit = function (data) {
        let editNameID = document.getElementById('edit_name');
        let editBirthdayID = document.getElementById('edit_birthday');
        editNameID.value = this.students[data];
        editBirthdayID.value = this.birthdays[data];
        document.getElementById('tableEdit').style.display = 'block';
        let that = this;
        document.getElementById('saveEdit').onsubmit = function () {
            let student = editNameID.value;
            let birthday = editBirthdayID.value;
            if (student && birthday){
                that.students.splice(data,1,student.trim());
                that.birthdays.splice(data,1,birthday.trim());
                that.display();
            }
        }
    };
    this.delete = function (data) {
        this.students.splice(data,1);
        this.birthdays.splice(data,1);
        this.display();
    }
};
app.display();
function closeTableEdit() {
    document.getElementById('tableEdit').style.display = 'none';
}