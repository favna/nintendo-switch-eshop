import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HeadTags from '@site/src/components/Home/HeadTags';
import HomePageHeader from '@site/src/components/Home/HomePageHeader';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();

	return (
		<>
			<HeadTags />
			<Layout title="Home" description={siteConfig.tagline}>
				<HomePageHeader />
			</Layout>
		</>
	);
}
