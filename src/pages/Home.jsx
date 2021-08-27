import { MainLayout } from 'components/others';
import { Home as HomeComponent } from 'components/templates';
import { destinationData } from 'libs/database/destinationData';

export const Home = () => {
	const places = destinationData;

	return (
		<MainLayout isCover showSearch>
			<HomeComponent data={places} />
		</MainLayout>
	);
};
