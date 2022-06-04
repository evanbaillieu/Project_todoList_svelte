import { get } from "svelte/store";
import { todoLists } from "../stores";

/**
 * find by **id**
 *
 * this function get one todo by id
 *
 * @param {string} id
 * @returns {{id: string, title: string, content: ISousTache}}
 */
export const findById = (id) => {
  let contentTodoList = get(todoLists);
  let todo = contentTodoList.find((item) => item.id === id);
  return todo;
};

/**
 * add **Tache**
 *
 * this function update todolist in all list for add the new tache
 *
 * @param {string} id
 * @param {{id: string, title: string, content: ISousTache}} newTache
 */
export const addTask = (id, newTache) => {
  todoLists.update((state) => {
    let newState = state.map((obj) => {
      if (obj.id === id) {
        return { ...obj, content: [...obj.content, newTache] };
      }

      return obj;
    });

    console.log(newState);

    return newState;
  });
};

export const delTask = (idList, idTask) => {
  todoLists.update((state) => {
    let newState = state.map((obj) => {
      if (obj.id === idList) {
        return { ...obj, content: obj.content.filter((t) => t.id !== idTask) };
      }
      return obj;
    });

    return newState;
  });
};

export const toggleTaskStatus = (idList, idTask) => {
  todoLists.update((state) => {
    let newState = state.map((obj) => {
      if (obj.id === idList) {
        return {
          ...obj,
          content: obj.content.map((t) => (t.id === idTask ? { ...t, isCheck: !t.isCheck } : t)),
        };
      }
      return obj;
    });

    return newState;
  });
};

export const addSubTask = (ListId, taskId, subTask) => {
  todoLists.update((state) => {
    let newState = state.map((todoList) => {
      if (todoList.id === ListId) {
        return {
          ...todoList,
          content: todoList.content.map((task) => {
            if (task.id == taskId) {
              return { ...task, content: [subTask, ...task.content] };
            } else {
              return task;
            }
          }),
        };
      } else {
        return todoList;
      }
    });

    return newState;
  });
};

export const delSubTask = (ListId, taskId, subTaskId) => {
  todoLists.update((state) => {
    let newState = state.map((todoList) => {
      if (todoList.id === ListId) {
        return {
          ...todoList,
          content: todoList.content.map((task) => {
            if (task.id == taskId) {
              return { ...task, content: task.content.filter((st) => st.id !== subTaskId) };
            } else {
              return task;
            }
          }),
        };
      } else {
        return todoList;
      }
    });

    return newState;
  });
};

export const toggleSubTaskStatus = (ListId, taskId, subTaskId) => {
  todoLists.update((state) => {
    let newState = state.map((todoList) => {
      if (todoList.id === ListId) {
        return {
          ...todoList,
          content: todoList.content.map((task) => {
            if (task.id == taskId) {
              return {
                ...task,
                content: task.content.map((st) =>
                  st.id === subTaskId ? { ...st, isCheck: !st.isCheck } : st
                ),
              };
            } else {
              return task;
            }
          }),
        };
      } else {
        return todoList;
      }
    });

    return newState;
  });
};

export const deleteList = (id) => {
  todoLists.update((state) => {
    return state.filter((t) => t.id !== id);
  });
};
