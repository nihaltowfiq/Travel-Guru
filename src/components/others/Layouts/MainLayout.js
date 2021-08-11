import { Container } from 'react-bootstrap';
import { Header } from '../Header';
import './MainLayout.css';

export const MainLayout = ({ children }) => {
	return (
		<section className="Wrapper">
			<div className="Inner">
				<Container>
					<Header />
					<main>{children}</main>
				</Container>
			</div>
		</section>
	);
};
