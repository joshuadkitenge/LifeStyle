import { Typography } from '@mui/material';
interface PageHeaderProps {
  name: string;
  message: string;
}
function PageHeader(props: PageHeaderProps) {
  return (
    <>
      <Typography variant="h3" component="h3" gutterBottom>
        User Settings
      </Typography>
      <Typography variant="subtitle2">
        {props.name}, {props.message}
      </Typography>
    </>
  );
}

export default PageHeader;
