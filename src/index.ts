import chalk from "chalk";
import inquirer, { QuestionCollection } from "inquirer";

interface ToDoQuery {
  todo: string;
  addMore: boolean;
}

const todos:string[] = [];
const AskToDo = async (): Promise<ToDoQuery> => {
  const questions: QuestionCollection = [
    {
      message: "What's your name ?",
      type: "input",
      name: "name",
    },
    {
      message: "Add your TODO here :  ",
      type: "input",
      name: "todo",
    },
    {
      message: "Want to add more TODOs ? ",
      type: "confirm",
      name: "addMore",
    },
  ];
  return inquirer.prompt<ToDoQuery>(questions);
};

const ToDoApp = async () => {
  const answer: ToDoQuery = await AskToDo();
  todos.push(answer.todo);
  console.log("Here are your TODOs : ");
  console.table(chalk.blue.bold(todos));
  if (answer.addMore) {
    await ToDoApp();
  }
};

ToDoApp();