import Postgres from "@/db/pgdb";
import { NextApiResponse } from "next";

type Course = {
    id: number;
    title: string;
    description: string;
    price: number;
    imgpath: string;
    scheduledate: Date;
    duration: number;
    meetinglink: string;
    fbgrouplink: string;
    published?: boolean;
    bestseller?: boolean;
}

const addCourse = async (course: Course, res: NextApiResponse<unknown>) => {
    const client = new Postgres();
    const sqlAddCourse = `
        INSERT INTO courses(
            title,
            description,
            price,
            imgpath,
            date,
            duration,
            meetinglink,
            fbgrouplink,
            published,
            bestseller
        )
        VALUES(
            '${course.title}',
            '${course.description}',
            ${course.price},
            '${course.imgpath}',
            '${course.scheduledate}',
            '${course.duration}',
            '${course.meetinglink}',
            '${course.fbgrouplink}',
            ${course.published},
            ${course?.bestseller||false}
        )`;
    client.query(sqlAddCourse)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then(data => {
            res.status(200).json({ message: "success" });
        })
        .catch(error => {
            res.status(503).json(error);
        });;
}

const updateCourse = async (course: Course, res: NextApiResponse<unknown>) => {
    if (course.id) {
        res.status(404).json({ message: "Invalid id" });
    }
    const client = new Postgres();
    const sqlUpdateCourse = `
        UPDATE courses
        SET
        title='${course.title}',
        description='${course.description}',
        price=${course.price},
        imgpath='${course.imgpath}',
        scheduledate='${course.scheduledate}',
        duratoin='${course.duration}',
        meetinglink='${course.meetinglink}',
        fbgrouplink='${course.fbgrouplink}',
        published=${course.published},
        bestseller=${course.bestseller},
        WHERE id=${course.id} 
        `;
    client.query(sqlUpdateCourse)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then(data => {
            res.status(200).json({ message: "success" });
        })
        .catch(error => {
            res.status(503).json(error);
        });;

}

const getCourses = async (res: NextApiResponse<unknown>) => {
    const client = new Postgres();
    const sqlGetAllPublishedCourses = `select * from courses where published = true`;
    client.query(sqlGetAllPublishedCourses)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then(data => {
            res.status(200).json(data.rows);
        })
        .catch(error => {
            res.status(503).json(error);
        });

}

const getCourseById = async (id: unknown, res: NextApiResponse<unknown>) => {
    const client = new Postgres();
    const sqlGetCourseById = `select * from courses where id = ${id}`;
    client.query(sqlGetCourseById)
        .then(data => {
            res.status(200).json(data.rows);
        })
        .catch(error => {
            res.status(503).json(error);
        });
}



export { getCourses, addCourse, getCourseById, updateCourse }