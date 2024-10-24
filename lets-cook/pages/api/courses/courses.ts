import Postgres from "@/db/pgdb";
import { NextApiRequest, NextApiResponse } from "next";

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
            scheduledate,
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
            ${course?.bestseller || false}
        )`;
    client.query(sqlAddCourse)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then(data => {
            res.status(200).json({ message: "success" });
            res.end();
        })
        .catch(error => {
            res.status(503).json(error);
            res.end();
        });;
}

const updateCourse = async (course: Course, res: NextApiResponse<unknown>) => {
    const client = new Postgres();
    const sqlUpdateCourse = `
        UPDATE courses
        SET
        title='${course.title}',
        description='${course.description}',
        price=${course.price},
        imgpath='${course.imgpath}',
        scheduledate='${course.scheduledate}',
        duration='${course.duration}',
        meetinglink='${course.meetinglink}',
        fbgrouplink='${course.fbgrouplink}',
        published=${course.published},
        bestseller=${course.bestseller}
        WHERE id=${course.id} 
        `;
        console.log(sqlUpdateCourse);
    client.query(sqlUpdateCourse)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then(data => {
            res.status(200).json({ message: "success" });
            res.end();
        })
        .catch(error => {
            res.status(503).json(error);
            res.end();
        });;
}

const getCourses = async (req: NextApiRequest, res: NextApiResponse<unknown>) => {
    // console.info("Request Query Object---->", req.query.type);
    const client = new Postgres();
    let sqlGetAllPublishedCourses = `select * from courses where published = true `;

    switch (req.query.type) {
        case 'upcoming':
            sqlGetAllPublishedCourses = sqlGetAllPublishedCourses + ` and scheduledate >= CURRENT_DATE`;
            console.log(sqlGetAllPublishedCourses);
            break;
        case 'bestseller':
            sqlGetAllPublishedCourses = sqlGetAllPublishedCourses + ` and bestseller = true`;
            break;
        case 'all':
            sqlGetAllPublishedCourses = `select * from courses`;
            break;
        case 'subscribed':
            sqlGetAllPublishedCourses = sqlGetAllPublishedCourses + ``;
            break;
    }

    client.query(sqlGetAllPublishedCourses)
        .then(data => {
            // console.log("---------------->",data.rows);
            // res.statusCode = 200;
            // res.json(data.rows);
            // res.end();
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Cache-Control', 'max-age=180000');
            res.end(JSON.stringify(data.rows));
        })
        .catch(error => {
            res.status(503).json(error);
            res.end();
        });

}

const getCourseById = async (id: unknown, res: NextApiResponse<unknown>) => {
    const client = new Postgres();
    const sqlGetCourseById = `select * from courses where id = ${id}`;
    client.query(sqlGetCourseById)
        .then(data => {
            if(data.rows.length === 0){
                res.status(404).json({message:"Course not found"});
                res.end();
            }
            res.json(data.rows[0]);
            res.status(200).end();
        })
        .catch(error => {
            res.status(503).json(error);
            res.end();
        });
}

export { getCourses, addCourse, getCourseById, updateCourse }