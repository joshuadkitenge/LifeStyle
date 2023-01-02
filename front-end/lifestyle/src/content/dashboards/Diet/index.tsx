import { Helmet } from 'react-helmet-async';
import PageHeader from '../Common/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';

function DashboardDiet() {
  return (
    <>
      <Helmet>
        <title>Diet Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader
          name="Joshua Kitenge"
          avatar="/static/images/avatars/detective.png"
          message="Today is a good day to start making a diet!"
        />
      </PageTitleWrapper>
      <Container maxWidth="lg"></Container>
      <Footer />
    </>
  );
}

export default DashboardDiet;
