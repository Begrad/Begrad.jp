import About from '@/components/About';
import MembersList from '@/components/MembersList';
import Mission from '@/components/Mission';
import Products from '@/components/Products';
import Support from '@/components/Support';
import { getCompany } from '@/microCMS/apiClient';

const HomePage = async (): Promise<React.JSX.Element> => {
  const company = await getCompany();

  return (
    <>
      <Mission text={company.mission} />
      <About text={company.about} />
      <Products />
      <Support textTitle={company.supportTitle} textDescription={company.supportDescription} />
      <MembersList />
    </>
  );
};

export default HomePage;
