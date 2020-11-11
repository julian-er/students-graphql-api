# Students GraphQL API 

**Spa.**

Esta API, fue creada con el fin de aprender a utilizar GraphQL desde 0. <br>
En el transcurso de mi aprendizaje fuí descubriendo que era un Schema y cómo definirlo ya que éste definirá las operaciones y tipos que
expondrá nuestra API. GraphQL cambia la filosofía de RESTful y podemos decir que nos olvidamos de los endpoints.<br>
El código a continuación muestra una fracción del schema.graphql utilizado en ésta práctica con el fin de mostrar lo expresado anteriormente :
```
type Query {
  "Students list"
  students: [Students!]!
}

type Mutation {
  newCourse(course: CourseInput!): Course!
  modifyCourse(course: CourseInput!): Course!
  deleteCourse(id: ID!): Course!
}

```
En éste código podrás encontrar distintos tipos de queries para interactuar con una "base de datos" expuesta en un archivo .JSON <br>
### Query: se definen consultas a tu base de datos

<<<<<<< HEAD
=======
[Colección en postman](Students-GraphQL.postman_collection.json) - no recomendado, ya que, tanto en graphiQL como en ApolloServer podemos ver la documentación de cómo funciona cada query

>>>>>>> 2a3605234efea36f6638ecf80d35d3c56485d722
##### Obtener datos de la lista de estudiantes :
```
query students {
  students {
    name
    courses {
      id
    }
  }
}
```
##### Obtener datos de un estudiante en concreto : 
```
query student {
  student(id: 7) {
    name
  }
}
```
##### Obtener datos de la lista de cursos :
```
query courses {
  courses {
    id
    title
    description
  }
}
```
##### Obtener datos un curso específico :
```
query course {
  course(id: 2) {
    title
    students {
      name
    }
  }
}
```

### Mutation: se definen modificaciones

##### Eliminar un curso : 
```
mutation Delete {
  deleteCourse(id: 2) {
    id
    title
  }
}
```
##### Modificar un curso, en este caso debemos enviar además los datos que van a ingresarse :
> Query
```
mutation modifyCourse($course: CourseInputMod!) {
  modifyCourse(course: $course) {
    id
    title
    description
  }
}
```
> Variable 
```
{
  "course": {
    "id": 1,
    "title": "This was modify",
    "description": "Some things were changed here",
    "classes": 2,
    "time": 50.5,
    "logo": "someImg.jpg",
    "path": "/course",
    "teacher": "JR"
  }
}
```
##### Crear un curso nuevo, como en el caso anterior debemos enviar datos para el nuevo curso : 
> Query
```
mutation createCourse($course: CourseInput!) {
  newCourse(course: $course) {
    id
  }
}
```
> Variable
```
{
  "course": {
    "title": "This is a new course",
    "description": "Some things was added here",
    "classes": 50,
    "time": 80,
    "logo": "someImg.jpg",
    "path": "/course",
    "teacher": "JR"
  }
}
```
Aclaración : podemos utilizar tanto GraphiQL como ApolloServer en éste proyecto, si te apetece podés cambiar de rama a graphiQL para utilizar éste motor ya que en la rama main utilicé ApolloServer para el desarrollo


**Eng.**

This API was created in order to learn to use GraphQL from 0. <br>
In the course of my learning I discovered what a Schema was and how to define it since it will define the operations and types that
will expose our API. GraphQL changes the philosophy of RESTful and we can say that we forgot about endpoints. <br>
The code below shows a fraction of the schema.graphql used in this practice in order to show what was expressed above:

```
type Query {
  "Students list"
  students: [Students!]!
}

type Mutation {
  newCourse(course: CourseInput!): Course!
  modifyCourse(course: CourseInput!): Course!
  deleteCourse(id: ID!): Course!
}

```
In this code you can find different types of queries to interact with a "database" exposed in a .JSON file <br>

<<<<<<< HEAD
=======
### Query: queries are defined to your database

[Collection in postman](Students-GraphQL.postman_collection.json) - not recommended, since, both in graphQL and ApolloServer we can see the documentation of how each query works

>>>>>>> 2a3605234efea36f6638ecf80d35d3c56485d722
##### Get data from student list:
```
query students {
  students {
    name
    courses {
      id
    }
  }
}
```
##### Get data from a specific student : 
```
query student {
  student(id: 7) {
    name
  }
}
```
##### Get data from courses list :
```
query courses {
  courses {
    id
    title
    description
  }
}
```
##### Get data from a specific course :
```
query course {
  course(id: 2) {
    title
    students {
      name
    }
  }
}
```

### Mutation: modifications are defined

##### Delete a course : 
```
mutation Delete {
  deleteCourse(id: 2) {
    id
    title
  }
}
```
##### Modify a course, in this case we must also send the data to be entered :
> Query
```
mutation modifyCourse($course: CourseInputMod!) {
  modifyCourse(course: $course) {
    id
    title
    description
  }
}
```
> Variable 
```
{
  "course": {
    "id": 1,
    "title": "This was modify",
    "description": "Some things were changed here",
    "classes": 2,
    "time": 50.5,
    "logo": "someImg.jpg",
    "path": "/course",
    "teacher": "JR"
  }
}
```
##### Create a new course, as in the previous case we must send data for the new course : 
> Query
```
mutation createCourse($course: CourseInput!) {
  newCourse(course: $course) {
    id
  }
}
```
> Variable
```
{
  "course": {
    "title": "This is a new course",
    "description": "Some things was added here",
    "classes": 50,
    "time": 80,
    "logo": "someImg.jpg",
    "path": "/course",
    "teacher": "JR"
  }
}
```
Clarification: we can use both GraphiQL and ApolloServer in this project, if you feel like you can switch from branch to graphiQL to use this engine since in the main branch I used ApolloServer for development
