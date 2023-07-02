import { Container } from '@material-ui/core';
import Footer from '../../molecules/Footer';
import Header from '../../molecules/Header';

const Layout = (props: any) => {
  const { children } = props;
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
