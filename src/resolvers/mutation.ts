import { IResolvers } from "graphql-tools";
import { database } from "../data/data.store";
import _ from "lodash";

const mutation: IResolvers = {
  Mutation: {
    newCourse(__: void, { course }): any {
      const courseItem = {
        id: String(database.courses.length + 1),
        title: course.title,
        description: course.description,
        classes: course.classes,
        time: course.time,
        level: course.level,
        logo: course.logo,
        path: course.path,
        teacher: course.teacher,
        reviews: [],
      };
      if (
        database.courses.filter((x) => x.title === courseItem.title).length ===
        0
      ) {
        database.courses.push(courseItem);
        return courseItem;
      }

      return {
        id: "-1",
        title: "The course already exists",
        description: "",
        classes: 0,
        time: 0.0,
        level: "",
        logo: "",
        path: "",
        teacher: "0",
        reviews: [],
      };
    },
    modifyCourse(__: void, { course }): any {
      const elementExist = _.findIndex(database.courses, function (o) {
        return o.id === course.id;
      });
      if (elementExist > -1) {
        const reviews = database.courses[elementExist].reviews;
        course.reviews = reviews;
        database.courses[elementExist] = course;
        return course;
      }
      return {
        id: "-1",
        title: "The course you are looking for doesn't exist",
        description: "",
        classes: 0,
        time: 0.0,
        level: "",
        logo: "",
        path: "",
        teacher: "0",
        reviews: [],
      };
    },
    deleteCourse(__: void, { id }): any{
        const deleteC = _.remove(database.courses, function(course) {
            return course.id === id
        });

        if(deleteC[0] === undefined){
            return {
                id: "-1",
                title: "Whoops! The course does not exist, so we cannot delete it.",
                description: "",
                classes: 0,
                time: 0.0,
                level: "",
                logo: "",
                path: "",
                teacher: "0",
                reviews: [],
              }; 
        }
        return deleteC[0]
    }
  },
};

export default mutation;
