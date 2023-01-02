import { Helmet } from 'react-helmet-async';
import PageHeader from '../Common/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';

function DashboardFitness() {
  return (
    <>
      <Helmet>
        <title>Fitness Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader
          name="Joshua Kitenge"
          avatar="/static/images/avatars/detective.png"
          message="Today is a good day to start seeting your fitness targets!"
        />
      </PageTitleWrapper>
      <Container maxWidth="lg"></Container>
      <Footer />
    </>
  );
}

export default DashboardFitness;
