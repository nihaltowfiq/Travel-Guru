import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fbIcon from '../../../assets/images/Icon/fb.png';
import googleIcon from '../../../assets/images/Icon/google.png';
import './Auth.css';

export const Auth = ({ user, newUser, setUser, setNewUser, onGoogle, onFacebook, changeHandler, submitHandler }) => {
	return (
		<Row className="justify-content-md-center mt-3">
			<Col md="auto">
				<Form className="form-style" onSubmit={submitHandler}>
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
							<Form.Control
								required
								name="confirmPassword"
								type="password"
								placeholder="Confirm Password"
							/>
						</Form.Group>
					)}
					<Button style={{ width: '100%' }} variant="warning" type="submit">
						{newUser ? <span>Create an acount</span> : <span>Login</span>}
					</Button>
					<br />
					<p style={{ textAlign: 'center', marginTop: '5px' }}>
						{newUser ? <small>Already have an acount? </small> : <small>Don't have an acount? </small>}
						<Button
							variant="link"
							className="text-warning"
							style={{ boxShadow: 'none' }}
							onClick={() => {
								setNewUser(!newUser);
								setUser({ error: '' });
							}}
						>
							{!newUser ? <span>Create an acount</span> : <span>Login</span>}
						</Button>
					</p>
					<p style={{ color: 'red', textAlign: 'center' }}>{user.error}</p>
					{user.success && (
						<p style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
							User Created Successfully
						</p>
					)}
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
			</Col>
		</Row>
	);
};
