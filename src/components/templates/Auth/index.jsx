import { Fragment } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Auth.css';

export const Auth = ({ newUser, setNewUser, onGoogle, onFacebook, changeHandler, submitHandler }) => {
	return (
		<Fragment>
			<Form className="auth_form mx-auto">
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

			<hr className="divider" />

			<div className="social_wrapper">
				<Button variant="light" className="social_btn" onClick={onGoogle}>
					<img src="/images/Icon/google.png" alt="" /> <span>Continue with Google</span>
				</Button>
				<br /> <br />
				<Button variant="light" className="social_btn" onClick={onFacebook}>
					<img src="/images/Icon/fb.png" alt="" /> <span>Continue with Facebook</span>
				</Button>
			</div>
		</Fragment>
	);
};
