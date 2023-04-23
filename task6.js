const tasks = [
  { id: 1, task: "Піти в магазин" },
  { id: 2, task: "Сходити в бібліотеку" },
  { id: 3, task: "Поприбирати" },
];
const completedTasks = [1];
const taskList = tasks.map((task) => {
  const completed = completedTasks.includes(task.id);
  return { task: task.task, completed };
});
console.log(taskList);
