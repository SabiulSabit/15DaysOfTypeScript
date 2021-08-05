//import axios
import axios from "axios";

//api
const api = "https://jsonplaceholder.typicode.com/todos/1";

//make an interface for response data
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

//get data from api
axios.get(api).then(res => {

    //get data
    const { id, title, completed } = res.data as Todo;

    //print todo
    logTodo(id, title, completed);

}).catch(err => {
    console.log(err);
})

//print todo
const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
     Todo ID: ${id} 
     Todo Title: ${title}
     Is Completed: ${completed}
    `);
}