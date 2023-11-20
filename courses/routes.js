import Databases from "../Databases/index.js";
function CourseRoutes(app) {
  app.get("/api/courses", (req, res) => {
    const courses = Databases.courses;
    res.send(courses);
  });

  app.post("/api/courses", (req, res) => {
    const course = { ...req.body,
      _id: new Date().getTime().toString() };
    Databases.courses.push(course);
    res.send(course);
  });

  app.delete("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    Databases.courses = Databases.courses
      .filter((c) => c._id !== id);
    res.sendStatus(204);
  });

  app.put("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const course = req.body;
    Databases.courses = Databases.courses.map((c) =>
      c._id === id ? course : c
    );
    res.sendStatus(204);
  });

  app.get("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const course = Databases.courses
      .find((c) => c._id === id);
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.send(course);
  });




}
export default CourseRoutes;
