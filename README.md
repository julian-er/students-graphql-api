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

##### Obtener datos de la lista de estudiandes :
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