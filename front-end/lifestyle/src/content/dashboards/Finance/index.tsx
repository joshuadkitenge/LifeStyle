import { Helmet } from 'react-helmet-async';
import PageHeader from '../Common/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';

function DashboardFinance() {
  return (
    <>
      <Helmet>
        <title>Finance Dashboard</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader
          name="Joshua Kitenge"
          avatar="/static/images/avatars/detective.png"
          message="Today is a good day to start sorting out your finances!"
        />
      </PageTitleWrapper>
      <Container maxWidth="lg"></Container>
      <Footer />
    </>
  );
}

export default DashboardFinance;
