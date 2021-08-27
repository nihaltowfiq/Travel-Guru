import { Container } from 'react-bootstrap';
import { Header } from '../Header';
import './MainLayout.css';

export const MainLayout = ({ isCover = false, children }) => {
	return (
		<section className={`Wrapper ${isCover ? 'Background_Img Dark_Bg' : ''}`}>
			<div className="Inner">
				<Container>
					<Header isDark={isCover} />
					<main>{children}</main>
				</Container>
			</div>
		</section>
	);
};
