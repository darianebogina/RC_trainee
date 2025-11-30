import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// import {useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
function App() {
    // const [count, setCount] = useState(0)
    return (_jsxs(_Fragment, { children: [_jsx(NewTaskForm, {}), _jsx(TasksList, { tasks: ["Three", "Four"] })] }));
}
const NewTaskForm = () => {
    return (_jsxs("div", { children: [_jsx("h1", { children: "ToDo List" }), _jsxs("div", { children: [_jsx("input", { type: "text", placeholder: "Add task" }), _jsx("button", { children: "Add" })] })] }));
};
const TasksList = ({ tasks }) => {
    return (_jsx("div", { children: _jsxs("ul", { children: [_jsx("li", { children: _jsx(TaskRow, { task: tasks[0] }) }), _jsx("li", { children: _jsx(TaskRow, { task: tasks[1] }) })] }) }));
};
const TaskRow = ({ task }) => {
    return (_jsxs(_Fragment, { children: [_jsx("p", { children: task }), _jsx("button", { children: "Delete" })] }));
};
export default App;
//# sourceMappingURL=App.js.map