import React from "react";
import "./todo.css";

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      listItem: [],
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.Remove = this.Remove.bind(this);
  }
  Remove(index) {
    var key = index;
    if (this.state.listItem.length === 1) {
      debugger;
      document.getElementById("todo_nothing").style.display = "block";
    }
    // console.log("id" + item);
    this.setState({
      listItem: this.state.listItem.filter(function (index, i) {
        // console.log(el)
        return i !== key;
      }),
    });
  }

  handleInput(e) {
    this.setState({
      text: e.target.value,
    });
    console.log(e.target.value);
  }
  addItem(e) {
    // console.log("hello");
    e.preventDefault();
    const item = this.state.text;
    if (this.state.text !== "") {
      this.setState({
        listItem: this.state.listItem.concat([item]),
        text: "",
      });
      // console.log(this.state.listItem);
      // document.getElementById("todo_nothing").style.visibility = "hidden";
      document.getElementById("todo_nothing").style.display = "none";
      document.getElementById("input_todo").value = "";
    }
  }

  render() {
    return (
      <div>
        <h1>TODO List</h1>
        <br />
        <div className="card todo_card">
          <form onSubmit={this.addItem}>
            <input
              id="input_todo"
              className="form-control form-control-lg"
              type="text"
              placeholder="Todays Task"
              value={this.state.text}
              onChange={this.handleInput}
            />
            <ul id="todo_ul" className="list-group">
              <li
                id="todo_nothing"
                className="list-group-item list-group-item-info "
              >
                You Have Nothing To DO
              </li>
              {this.state.listItem.map((item, index) => {
                // console.log("qwertyui");
                // console.log(index);
                return (
                  <li
                    id={index}
                    className="list-group-item list-group-item-info todo_li"
                    value={item}
                  >
                    <span>{item}</span>

                    <i
                      className="fa fa-trash todo_trash"
                      aria-hidden="true"
                      onClick={(e) => this.Remove(index)}
                    ></i>
                  </li>
                );
              })}
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default Todo;
