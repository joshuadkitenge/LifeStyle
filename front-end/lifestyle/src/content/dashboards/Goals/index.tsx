import { Helmet } from 'react-helmet-async';
import PageHeader from '../Common/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';

function DashboardGoals() {
  return (
    <>
      <Helmet>
        <title>Goals Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader
          name="Joshua Kitenge"
          avatar="/static/images/avatars/detective.png"
          message="Today is a good day to start setting your goals!"
        />
      </PageTitleWrapper>
      <Container maxWidth="lg"></Container>
      <Footer />
    </>
  );
}

export default DashboardGoals;
