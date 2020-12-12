import React, {useState} from "react";

export default {
	title: "React.memo demo"
}
const NewMessageCounter = (props: {count: number} ) => {
	return <div>{props.count}</div>
}
const UsersSecret  = (props: { users: Array<string> }) => {
	return <div>
		{props.users.map((u, i) => <div key={i} >{u}</div>)}
	</div>
}

const Users = React.memo(UsersSecret) //передаём компоненту и React.memo отдаёт нам новую компоненту

export const Example1 = () => {
	const [counter, setCounter] = useState(0)
	const [users, setUsers] = useState(["Dimych", "Valera", "Artem", "Katya"])

	const addUser = () => {
		const newUser = [ ...users, "Sveta" + new Date().getTime() ]
		setUsers(newUser)
	}


	return <>
		<button onClick={() => setCounter(counter+1) } >+</button>
		<button onClick={addUser} >add user</button>
		<NewMessageCounter count={counter}/>
		<Users users={users}/>
		</>
		}