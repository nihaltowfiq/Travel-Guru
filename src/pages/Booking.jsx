/* eslint-disable react-hooks/exhaustive-deps */
import { MainLayout } from 'components/others';
import { Booking as BookingComponent } from 'components/templates';
import { destinationData } from 'libs/database';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const initialValues = { origin: '', destination: '', startDate: '', endDate: '' };

export const Booking = () => {
	const [values, setValues] = useState(initialValues);
	const [error, setError] = useState(false);
	const { placeName } = useParams();
	const history = useHistory();
	const data = destinationData.find((place) => place.name === placeName);

	useEffect(() => {
		setValues({ ...values, destination: placeName });
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const { origin, startDate, endDate } = values;
		if (origin !== '' && startDate !== '' && endDate !== '') {
			setError(false);
			history.push(`/hotel-details/${placeName}`);
		} else {
			setError(true);
		}
	};

	return (
		<MainLayout isCover showSearch>
			<BookingComponent
				data={data}
				values={values}
				error={error}
				changeHandler={(e) =>
					setValues((prevState) => {
						const { name, value } = e.target;
						return { ...prevState, [name]: value };
					})
				}
				submitHandler={handleSubmit}
			/>
		</MainLayout>
	);
};
