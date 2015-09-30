var React = require('react');
var TodoComponent = require('./TodoComponent');

module.exports = React.createClass({
	render: function() {
		var todoList = this.props.todos.map(function(todo) {
			return(
				<TodoComponent todo={todo} />
				);
		});
		return (
			<div className="row">
				<h1>Todos</h1>
				<table className="table">
					<thread>
						<tr>
							<th>Description</th>
							<th>Completed</th>
						</tr>
					</thread>
					<tbody>
					{todoList}
					</tbody>
				</table>
			</div>
		);
	}
});