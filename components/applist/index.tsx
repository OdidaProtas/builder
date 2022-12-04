import { Container, Typography, Button, Stack } from "@mui/material";
import { useRouter } from "next/router";

export default function AppList({ data = [] }: any) {
  const emptyApps = !data.length;
  const router = useRouter();

  const href = "/app/new";

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  if (emptyApps) {
    return (
      <Container>
        <Stack spacing={3}>
          <Typography variant="h2">Dream Apps</Typography>
          <Typography variant="caption">
            Build dream apps with zero code
          </Typography>
          <Typography>You have 0 apps. Create a new app</Typography>
          <Button
            // href={href}
            onClick={handleClick}
            disableElevation
            variant="contained"
          >
            Create app
          </Button>
        </Stack>
      </Container>
    );
  }

  return <Container></Container>;
}
