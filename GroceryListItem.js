class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  render() {
    return (
      <li>{this.props.name}</li>
    );
  }
}