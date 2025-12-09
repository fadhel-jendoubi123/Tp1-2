
import {User } from './models' ; 
import { VideoCourse, LiveCourse } from './courses';
import { UserRepository } from './repositories';


const student: User = {
  id: 1,
  name: "fadhel",
  role: "student",
  email: "fadhel@student.com"
};

const teacher: User = {
  id: 2,
  name: "Mr Lassoued ",
  role: "teacher",
  email: "MrLassoued@teacher.com"
};

const userRepository1 = new UserRepository();
userRepository1.add(student);

userRepository1.add(teacher);

const VideoCourse1 = new VideoCourse("Web et Multimedia", 60);

const LiveCourse1= new LiveCourse("Web et  Multimedia", new Date("2025-12-15T14:00:00"))


console.log("=== Descriptions des cours ===");
console.log(VideoCourse1.getDescription());
console.log(LiveCourse1.getDescription());


const allUsers = userRepository1.getAll();

allUsers.forEach(user => {
  console.log(`ID: ${user.id}, Nom: ${user.name}, Rôle: ${user.role}, Email: ${user.email}`);
});