<article>
          <h2>This is react app example that using Redux to manipulate data.</h2>
          <h5>Demo: https://gogn.github.io/react-Todo-app_Redux/</h5>
          <h4>How it works?</h4>
          <article>
            <p className='mt-2'>First of all, the main page is <strong>index.html</strong>. They have
              a div id=”root”</p>
            <p>A rendered JSX from <strong>index.js</strong> will be inserted to this
              block. <strong>index.js</strong> includes code from <strong>App.js</strong> component.</p>
            <p><strong>App.js</strong> uses <i>react-router-dom</i> that uses <i>React Router</i> to bind DOM.</p>
            <p><i>React Router</i> dynamically render component <strong>pages/Home</strong> where you are now.
              <i>(so the entire app doesn't reloading when a link is opens, only necessary elements refreshing)</i></p>
            <p><strong>Home.js</strong> component uses <strong>components/navbar.js</strong> to add navigation bar on
              the top of the app.</p>
            <p>The <strong>pages/Todos.js</strong> component placed on the /todo path, that can be reached by clicking
              to the link on the top right corner on navbar.</p>
            <hr/>
            <details>
              <summary><h5>The Local state</h5></summary>
              The Redux implementation of this app placed here: https://github.com/Gogn/react-Todo-app
              <details>
                <summary>Project tree</summary>
                .
                ├── App.js
                ├── components
                │ ├── navbar.js
                │ └── todo.js
                ├── index.css
                ├── index.js
                ├── pages
                │ ├── Home.js
                  └── Todos.js
              </details>
              <p><strong>Todos.js</strong> have a <i>local state</i> that have a array of objects.</p>
              <p><strong>Todos.js</strong> include list of todos from <strong>components/todo.js</strong> by mapping
                state.todos: this.state.todos.map((todo, id) => ( ... ),
                so every todo object from state.todos array will be shown from <strong>components/todo.js </strong>
                with
                parameters: 'todo={todo}, key={id}, doneTodo={this.doneTodo}, deleteTodo={event => this.deleteTodo(id)}'
              </p>
              <ul>
                <li><i>todo</i> - is the current state.todos[] object from <i>map</i> method</li>
                <li><i>key</i> - is necessary parameter for the <i>map</i> method</li>
                <li><i>doneTodo</i> - is the function for update state.todos.done parameter</li>
                <li><i>deleteTodo</i> - is the function to delete todo object from state.todos array</li>
              </ul>
              <p>So when you clicking on the todo element or delete button the <strong>components/todo.js</strong>
                calling function from props and action from <strong>pages/Todos.js</strong> is triggered</p>
              <p><strong>pages/Todos.js</strong> also have the input that triggered <i>addTodo</i> function that update
                state.todos.todoNew.
                After state.todos.todoNew was updated, new todo can be stored by clicking on "Add todo" button, that
                triggered <i>addTodo</i> function and update the state.</p>
              <p>So <strong>pages/Todos.js</strong> have a <i>state</i> which means the Todos.js
                is <strong>stateful</strong> component.</p>
              <p>The state of <strong>Todo.js</strong> holds data which can be rendered to display the required data.
              </p>
            </details>
            <hr/>
              <summary><h5>Manegement state via Redux</h5></summary>
              The Redux implementation of this app placed here: https://github.com/Gogn/react-Todo-app_Redux
              <details>
                <summary>Project tree</summary>
                <p className='mb-0'>.</p>
                <p className='mb-0'>├── App.js</p>
                <p className='mb-0'>├── components</p>
                <p className='mb-0'>│ ├── navbar.js</p>
                <p className='mb-0'>│ └── todo.js</p>
                <p className='mb-0'>├── index.css</p>
                <p className='mb-0'>├── index.js</p>
                <p className='mb-0'>├── pages</p>
                <p className='mb-0'>│ ├── Home.js</p>
                <p className='mb-0'>│ └── Todos.js</p>
                <p className='mb-0'>└── store</p>
                <p className='mb-0'> ├── Actions</p>
                <p className='mb-0'> │ ├── actions.js</p>
                <p className='mb-0'> │ └── actionTypes.js</p>
                <p className='mb-0'> ├── index.js</p>
                <p className='mb-0'> └── Reducers</p>
                <p className='mb-0'> ├── rootReducer.js</p>
                <p className='mb-0'> └── todoReducer.js</p>
              </details>
              <p><i>Redux</i> is a library that let use one centralizing state and logic component for whole app.</p>
              <p>If the app will need a states (or logic functions) for several components, Redux allow describe it in
                centralized file.
                Without <i>Redux</i>, for this, it would be necessary to add the desired state and functions to each
                component, which can be confusing if there are many such components.
                In this app we have only one component with state\logic - <strong>Todos.js</strong> so in this case
                Redux may be redundant. It's useful for a large apps.</p>
              <p>This app uses <i>Redux</i> library along with <i>react-redux</i> that lets easily bind components
                with <i>Redux</i> store.</p>
              <p><i>Redux/react-redux</i> connect to the app in a
                file <strong>index.js</strong>. 'const store = createStore(rootReducer)'
                tell that <strong>store/Reducers/rootReducer.js</strong> is the main reducer of the app.</p>
              <p><strong>rootReducer</strong> connect all reducers used in the app. In this app we have only one reducer
                so <strong>rootReducer</strong> export only
                <strong>store/Reducers/todoReducer.js</strong> via <i>combineReducers</i> function.</p>
              <p>Reducers produce the state of app.</p>
              <p>Next, in <strong>index.js</strong> the <i>app</i> formed as <strong>App.js</strong> component inside
                a <i>Provider</i>
                that receive store via <i>react-redux</i> library, so every component gain access to store.</p>
              <p>Next, the <strong>store/Actions/actions.js</strong> declare what action needs to perform on the state.
              </p>
              <p><strong>actions.js</strong> uses variables from <strong>store/Actions/actionTypes.js</strong>
                that describe what action needs to do.</p>
              <p>Every function in <strong>actions.js</strong> have an object with <i>type</i> of action
                and payload with necessary data that will be passed to <i>Reducer</i></p>
              <p>As it mentioned above, <i>Reducers</i> define <i>state</i> and <i>actions</i> that can be produced
                on <i>state</i>.</p>
              <p><strong>store/Reducers/todoReducer.js</strong> declare the <i>initialState</i> object
                with <i>todos</i> array of the todos.</p>
              <p><i>todoReducer</i> function determine what <i>action</i> has come and describe the actions to be
                committed.</p>
              <p>Back to <strong>pages/Todos.js</strong>.</p>
              <p><strong>Todos.js</strong> have a <i>local state</i> that have only a todoNew object that can be update
                thru <i>addTodoHandler</i> and passed to the todoReducer</p>
              <p><strong>Todos.js</strong> include list of todos from <strong>components/todo.js</strong> by mapping
                state.todos from <strong>todoReducer.js</strong>: 'this.props.todos.map((todo, id) => ( ... )'
              </p>
              <p>The <i>todos</i> get into props via <i>mapStateToProps</i>.</p>
              <p>So every todo object from props.todos will be shown from <strong>components/todo.js </strong>
                with
                parameters: 'todo={todo}, key={id}, onDone={this.props.onDone}, onDelete={this.props.onDelete}'
              </p>
              <ul>
                <li><i>todo</i> - is the current state.todos[] object from <i>map</i> method</li>
                <li><i>key</i> - is necessary parameter for the <i>map</i> method</li>
                <li><i>onDone</i> - is the function from <strong>todoReducer.js</strong> for update todos.done parameter
                </li>
                <li><i>onDelete</i> - is the function from <strong>todoReducer.js</strong> to delete todo from todos
                  array
                </li>
              </ul>
              <p>That functions setting by <i>mapDispatchToProps</i> function.</p>
              <p>So when you clicking on the todo element or delete button the <strong>components/todo.js</strong>
                calling function from props and action from <strong>actions.js</strong> is set, that
                allow <strong>todoReducer.js</strong> determine what action needs to perform.</p>
              <p><strong>Todos.js</strong> also have the input that triggered <i>addTodoHandler</i> function to set a
                todoNew.
                After todos.todoNew was updated, new todo can be stored by clicking on "Add todo" button, that
                triggered <i>onSubmit</i> function that triggered <i>onAdd</i> function
                from <strong>todoReducer.js</strong> to add a new todo.</p>
              <p><strong>Todo.js</strong> gets props and functions from the reducer using the <i>connect</i> function
                from <i>react-redux</i> library.</p>
              <p>So we have centralized state for whole app.</p>
            <hr/>
            <details>
              <summary><h5>Use hooks</h5></summary>
              <p>Version that uses Hooks state management app placed here:</p>
            </details>
          </article>
</article>