<script>
	import { Link,Route,Router } from "svelte-navigator";
	import TodolistCreation from './pages/TodoListCreation.svelte';
	import TodoListDetail from './pages/TodoListDetail.svelte';
	import TodoListList from "./pages/TodoListList.svelte";
	import ListIcon from './svg/list.svg';
	import PlusIcon from './svg/plus.svg';
</script>

<Router>
	<header class="container">
		<Link to="/" class="logo">TodoList</Link>
		<nav>
			
			<Link class="icon" to="createTodoList"><PlusIcon/></Link>
			<Link class="icon" to="/"><ListIcon/></Link>
		</nav>
	</header>
	<main>
		<Route path="/" component={TodoListList} />
		<Route path="/createTodoList" component={TodolistCreation} />
		<Route path="/todoDetail/:id" let:params >
		  <TodoListDetail id={params.id}/>
		</Route>
	</main>
</Router>
