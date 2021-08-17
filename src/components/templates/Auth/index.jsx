import { Fragment } from 'react';
import { Button, Form } from 'react-bootstrap';
import fbIcon from 'assets/images/Icon/fb.png';
import googleIcon from 'assets/images/Icon/google.png';
import './Auth.css';

export const Auth = ({ newUser, setNewUser, onGoogle, onFacebook, changeHandler, submitHandler }) => {
	return (
		<Fragment>
			<Form className="form-style mx-auto">
				{newUser ? <h5>Create an acount</h5> : <h5>Login</h5>}
				{newUser && (
					<Form.Group onChange={changeHandler}>
						<Form.Control required name="name" type="text" placeholder="Your Name" />
					</Form.Group>
				)}
				<Form.Group onChange={changeHandler}>
					<Form.Control required name="email" type="email" placeholder="Email" />
				</Form.Group>
				<Form.Group onChange={changeHandler}>
					<Form.Control required name="password" type="password" placeholder="Password" />
				</Form.Group>
				{newUser && (
					<Form.Group onChange={changeHandler}>
						<Form.Control required name="confirmPassword" type="password" placeholder="Confirm Password" />
					</Form.Group>
				)}
				<Button type="submit" variant="warning" style={{ width: '100%' }} onClick={submitHandler}>
					{newUser ? <span>Create an acount</span> : <span>Login</span>}
				</Button>
				<br />
				<p style={{ textAlign: 'center', marginTop: '5px' }}>
					{newUser ? <small>Already have an acount? </small> : <small>Don't have an acount? </small>}
					<Button
						variant="link"
						className="text-warning"
						style={{ boxShadow: 'none' }}
						onClick={() => setNewUser(!newUser)}
					>
						{!newUser ? <span>Create an acount</span> : <span>Login</span>}
					</Button>
				</p>
			</Form>

			<hr style={{ backgroundColor: 'gray', height: '1px' }} />
			<div style={{ textAlign: 'center' }}>
				<Button onClick={onGoogle} className="btn-style" variant="secondary">
					<img style={{ height: '25px' }} src={googleIcon} alt="" /> Sign in with Google
				</Button>
				<br />
				<br />
				<Button onClick={onFacebook} className="btn-style" variant="secondary">
					<img style={{ height: '25px' }} src={fbIcon} alt="" /> Sign in with Facebook
				</Button>
			</div>
		</Fragment>
	);
};
