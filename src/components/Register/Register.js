import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Email: '',
      Password: ''
    };
  }

  onNameChange = event => {
    this.setState({ Name: event.target.value });
  };

  onEmailChange = event => {
    this.setState({ Email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ Password: event.target.value });
  };

  onSubmitRegister = () => {
    fetch('https://cryptic-oasis-38489.herokuapp.com/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.Name,
        email: this.state.Email,
        password: this.state.Password
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUserInfo(user);
          this.props.changeRoute('App');
        }
      });
  };
  render() {
    return (
      <div className='signForm'>
        <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 pt4 center'>
          <main className='pa4 black-80'>
            <div className='measure'>
              <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
                <legend className='f4 fw6 ph0 mh0 center'>Register</legend>
                <div className='mt3'>
                  <label className='db fw6 lh-copy f6' htmlFor='email-address'>
                    Name
                  </label>
                  <input
                    className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                    type='text'
                    name='Name'
                    id='Name'
                    onChange={this.onNameChange}
                  />
                </div>
                <div className='mt3'>
                  <label className='db fw6 lh-copy f6' htmlFor='email-address'>
                    Email
                  </label>
                  <input
                    className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                    type='email'
                    name='email-address'
                    id='email-address'
                    onChange={this.onEmailChange}
                  />
                </div>
                <div className='mv3'>
                  <label className='db fw6 lh-copy f6' htmlFor='password'>
                    Password
                  </label>
                  <input
                    className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                    type='password'
                    name='password'
                    id='password'
                    onChange={this.onPasswordChange}
                  />
                </div>
              </fieldset>
              <div className=''>
                <input
                  onClick={this.onSubmitRegister}
                  className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                  type='submit'
                  value='Register'
                />
              </div>
            </div>
          </main>
        </article>
      </div>
    );
  }
}

export default Register;
