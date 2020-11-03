import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";

const query: IResolvers = {
    Query: {
        students(): any {
            return database.students;
        },
        student(__: void, { id }): any {
            const res = database.students.filter(
                (student) => student.id === id
            )[0];
            if (res === undefined) {
                return {
                    id: "-1",
                    name: `Uups! No students with id ${id} here`,
                    email: "",
                    courses: [],
                };
            } else {
                return res;
            }
        },
        courses(): any {
            return database.courses;
        },
        course(__: void, { id }): any {
            const res = database.courses.filter(
                (course) => course.id === id
            )[0];
            if (res === undefined) {
                return {
                    id: "-1",
                    title: `Uups! No classes with id ${id} here`,
                    description: "",
                    time: 0.0,
                    logo: "",
                    level: "TODOS",
                    path: "",
                    teacher: "",
                    reviews:[],
                    classes: -1
                };
            } else {
                return res;
            }
        },
    },
};

export default query;
