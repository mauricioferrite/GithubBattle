var React = require('react');
var PropTypes = require('prop-types');

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      var value = event.target.value;

      this.setState(function () {
        return{
          username: value
        }
      });
    }
    handleSubmit(event){
      event.preventDefault();

      this.props.onSubmit(
        this.props.id,
        this.props.username
      );
    }
    render(){
      return(
        <form className='column' onSubmit={this.handleSubmit}>
          <lable className='header' htmlFor='username'>{this.props.label}</lable>
          <input
            id='username'
            placeholder='github username'
            type='text'
            value={this.state.username}
            autoComplete='off'
            onChange={this.handleChange}
          />
          <button
            className='button'
            type='submit'
            disabled={!this.state.username}>
              Submit
            </button>
        </form>
      )
    }
  }

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

class Battle extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(id, username) {
    this.setState(function () {
      var NewState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
      return newSatate;
    });
  }
  render() {
    var playerOneName = this.state.playerOneName;
    var playerTwoName = this.state.playerTwoName;

    return(
      <div>
        <div className='row'>
          {!playerOneName &&
            <PlayerInput
            id='PlayerOne'
            label='Player One'
            onSubmit={this.handleSubmit}/>}

            {!playerTwoName &&
              <PlayerInput
              id='PlayerTwo'
              label='Player Two'
              onSubmit={this.handleSubmit}/>}
        </div>
      </div>
    )
  }
}

module.exports = Battle;
