import {
  Container,
  Toolbar,
  Typography,
  Box,
  Divider,
  TextField,
  Button,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import React from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function AppForm() {
  const [state, setState] = React.useState({
    name: "",
    type: "other",
    logo: "",
  });

  const [saving, setSaving] = React.useState(false);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSaving(true);
    const response = await axios.post("/api/forms/app", { ...state });
    if (response) {
      setSaving(false);
      router.push("/");
    }
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setState((p) => ({ ...p, [name]: value }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Toolbar />
        <Toolbar>
          <Box>
            <Typography variant="h4">Create a new app</Typography>
          </Box>
        </Toolbar>
        <Stack spacing={2}>
          <Divider />
          <TextField
            onChange={handleChange}
            name="name"
            label="Name"
            fullWidth
            required
            value={state.name}
          />
          <TextField
            onChange={handleChange}
            name="logo"
            label="Logo url"
            fullWidth
            value={state.logo}
            required
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">App type</InputLabel>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state.type}
              label="App type"
              name="type"
              onChange={handleChange}
            >
              <MenuItem value={"other"}>Other</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            disabled={saving}
            disableElevation
            variant="contained"
          >
            Save {saving && <>(Saving...)</>}
          </Button>
        </Stack>
      </Container>
    </form>
  );
}
