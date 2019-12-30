// TODO

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseEnter={this.onHover.bind(this)} onMouseLeave={this.onHover.bind(this)}>{this.props.name}</li>
    );
  }
}

var GroceryList = (props) => (
  // <ul>
  //   <li>eggs</li>
  //   <li>milk</li>
  //   <Kale />
  //   <Cucumbers />
  // </ul>
  // <ul>
  //   <GroceryListItem name={items[0]} />
  //   <GroceryListItem name={items[1]} />
  //   <GroceryListItem name={items[2]} />
  // </ul>
//   <ul>
//     <GroceryListItem name={props.list[0]} />
//     <GroceryListItem name={props.list[1]} />
//     <GroceryListItem name={props.list[2]} />
// </ul>

  <ul>
    {
      props.list.map(item => <GroceryListItem name={item} />)
    }
  </ul>
);

var Kale = () => (
  <li>kale</li>
);

var Cucumbers = () => (
  <li>cucumbers</li>
);

// var GroceryListItem = (props) => (
//   <li>{props.name}</li>
// );

var items = ["bread", "milk", "bleach"];

ReactDOM.render(<GroceryList list={items} />, document.getElementById("app"));