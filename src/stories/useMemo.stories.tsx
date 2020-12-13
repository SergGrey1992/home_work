import React, {useMemo, useState} from 'react';
import {Meta} from '@storybook/react/types-6-0';

export default {
	title: 'useMemo/useMemo',
} as Meta;
export const useMemoExample = () => {
	const [a, setA] = useState(5)
	const [b, setB] = useState(5)
	let resultA = 1
	let resultB = 1
	resultA = useMemo(() => {
		let tempResultA = 1
		for (let i = 1; i <= a; i++) {
			let fake = 0
			while (fake < 10000000) {
				debugger
				fake++
				const fakeValue = Math.random()
			}
			tempResultA = tempResultA * i
		}
		return tempResultA
	}, [a])
	for (let i = 1; i <= b; i++) {
		resultB = resultB * i
	}
	return <>
		<input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
		<input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
		<hr/>
		<div>Resault for a:{resultA}</div>
		<div>Resault for b:{resultB}</div>
	</>
}


const UserSecret = (props: { users: Array<string> }) => {
	console.log("USERS")
	return <div>
		{props.users.map((u, i) => <div key={i}>{u}</div>)}
	</div>
}
const Users = React.memo(UserSecret)

export const HelpsToReactMemoExample = () => {
	console.log("Example")
	const [counter, setCounter] = useState(0)
	const [users, setUsers] = useState(["Dimych", "Valera", "Artem", "Katya"])

	const newArray = useMemo( () => {
		return users.filter(u=> u.toLowerCase().indexOf("a") > -1) }, [users] )

	const addUser = () => {
		const newUser = [ ...users, "Sveta" + new Date().getTime() ]
		setUsers(newUser)
	}

	return <>
		<button onClick={() => setCounter(counter + 1)}>+</button>
		<button onClick={() => { addUser() }}>add user</button>
		{counter}
		<Users users={newArray}/>
	</>
}