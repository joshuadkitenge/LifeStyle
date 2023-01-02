import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';

import { Grid, Container, avatarClasses } from '@mui/material';

import ProfileCover from './ProfileCover';

function ManagementUserProfile() {
  const user = {
    savedCards: 1,
    name: 'Joshua Kitenge',
    coverImg: '/static/images/placeholders/covers/5.jpg',
    avatar: '/static/images/avatars/detective.png',
    description: '',
    jobtitle: 'Web Developer',
    location: ''
  };

  return (
    <>
      <Helmet>
        <title>User Details - Management</title>
      </Helmet>
      <Container sx={{ mt: 3 }} maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={8}>
            <ProfileCover
              savedCards={user.savedCards}
              name={user.name}
              coverImg={user.coverImg}
              avatar={user.avatar}
              description={user.description}
              jobtitle={user.jobtitle}
              location={user.location}
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default ManagementUserProfile;
