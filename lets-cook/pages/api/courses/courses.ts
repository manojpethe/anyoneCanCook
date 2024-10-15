import  PgClient from "@/db/pgdb";

type Course = {
    id: number;
    title: string;
    description: string;
    price: number;
    imgPath: string;
  }

const addCourse =(course:Course)=>{
    const client = new PgClient();
    client.connect();
    const result = client.query(`insert into course(title,description,price,imgpath)
         values("${course.title}","${course.description}","${course.price}","${course.imgPath}")`);
    client.close();
    return result;
}

const getCourses =()=>{
    const client = new PgClient();
    client.connect();
    const result = client.query(`select * from courses`);
    client.close();
    return result;
}

export {getCourses, addCourse}