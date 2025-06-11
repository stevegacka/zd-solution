# Solution

### Questions

Please provide your answers to the questions below:

---
**How long did you spend on this challenge?**

_Around 50 minutes, including setup/research time._

---

**How familiar were you with libs and tools used in this challenge? (Typescript, GraphQL, Apollo, Axios, SQL, Knex, etc)**

_Familiar with all except Knex, but I've used similar DB/ORM libraries. For GraphQL, I use an internal library which evolved from https://github.com/larsbs/graysql so schema/resolvers are generated from nicely organized config files/functions with their own conventions, but that's most useful in a much larger scope codebase to reduce boilerplate._

---

**If you had more time, what would you add or change in the codebase?**

_Break up the GraphQL structure to separate files/folders. Define queries/types/mutations in separate files for easier organization, then compose them into a generated singular schema._

---

**Do you have any constructive feedback that you would like to share with our team?**

_.gitignore could be expanded to include common IDE-related files. To be a truly full-stack challenge I'd expect to make data/API updates along with UX updates. Maybe some sort of simple page using apollo-client where I have to implement pagination and editing UX powered by the db/API updates I just made._
