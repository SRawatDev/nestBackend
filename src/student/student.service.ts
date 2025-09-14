import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private student = [
        {
            id: 1,
            name: "sumit rawat"
        },
        {
            id: 2,
            name: "keshav gaur"
        },
        {
            id: 3,
            name: "karan rawat"
        },
        {
            id: 4,
            name: "sakshi"
        },
        {
            id: 5,
            name: "disha sharma"
        }
    ]
    getStudent() {
        return this.student
    }
    postStudent(name: string) {
        this.student.push({
            id: this.student[this.student.length - 1]?.id+1,
            name: name
        })
        return this.student;
    }
    updateStudent(data:{id:number,name:string}){
        const studentData=this.student.find((item)=>(item.id===data?.id))
        if(!studentData){
             throw new NotFoundException("student with this given id not found")
        }else{
            studentData.name=data.name
            return this.student
        }
    }

}
