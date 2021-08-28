import { Badge, Button, Col, Form, Row } from 'react-bootstrap';

export const Booking = ({ data, values, error, changeHandler, submitHandler }) => {
	const { name, longDescription } = data;

	return (
		<Row className="p-5 text-white">
			<Col className="p-5">
				<h2>{name.toUpperCase()}</h2>
				<p>{longDescription}</p>
			</Col>
			<Col className="p-5">
				<Form autoComplete="off" style={{ paddingBottom: '20px' }} onSubmit={submitHandler}>
					<Form.Group>
						<Form.Label>Origin</Form.Label>
						<Form.Control
							name="origin"
							size="lg"
							type="text"
							placeholder="Your Location"
							value={values.origin}
							onChange={changeHandler}
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Destination</Form.Label>
						<Form.Control size="lg" value={values.destination} readOnly />
					</Form.Group>
					<Form.Row>
						<Form.Group as={Col}>
							<Form.Label>From</Form.Label>
							<Form.Control
								type="date"
								size="sm"
								name="startDate"
								value={values.startDate}
								onChange={changeHandler}
							/>
						</Form.Group>

						<Form.Group as={Col}>
							<Form.Label>To</Form.Label>
							<Form.Control
								type="date"
								size="sm"
								name="endDate"
								value={values.endDate}
								onChange={changeHandler}
							/>
						</Form.Group>
					</Form.Row>
					{error && (
						<p className="text-center">
							<Badge variant="danger">please fill all the input!</Badge>
						</p>
					)}
					<Button type="submit" variant="warning" style={{ width: '100%' }}>
						Start Booking
					</Button>
				</Form>
			</Col>
		</Row>
	);
};
