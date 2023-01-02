import { Typography, Avatar, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface PageHeaderProps {
  message: string;
  name: string;
  avatar: string;
}

function PageHeader(props: PageHeaderProps) {
  const user = {
    name: props.name,
    avatar: props.avatar
  };
  const theme = useTheme();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Avatar
          sx={{
            mr: 2,
            width: theme.spacing(8),
            height: theme.spacing(8)
          }}
          variant="rounded"
          alt={user.name}
          src={user.avatar}
        />
        {console.log(theme.spacing(8))}
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Welcome, {user.name}!
        </Typography>
        <Typography variant="subtitle2">{props.message}</Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
