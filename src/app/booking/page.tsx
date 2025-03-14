import {
  TextField,
  Select,
  MenuItem,
  Button,
  Box,
  FormControl,
  InputLabel,
} from "@mui/material";
import DateReserve from "@/components/DateReserve";

export default function Reservations() {
  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div className="py-10 text-xl font-medium">New Reservation</div>

      <Box
        className="w-fit"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          alignItems: "center",
        }}
      >
        <TextField
          name="Name-Lastname"
          label="Name-Lastname"
          variant="standard"
          fullWidth
        />

        <TextField
          name="Contact-Number"
          label="Contact-Number"
          variant="standard"
          fullWidth
        />

        {/* Modified Select with gray label */}
        <FormControl fullWidth variant="standard">
          <InputLabel sx={{ color: "gray" }}>Venue</InputLabel>
          <Select id="venue" variant="standard" fullWidth>
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ width: "100%" }}>
          <div className="text-md text-left text-gray-600">Event Date</div>
          <DateReserve />
        </Box>

        <Button
          name="Book Venue"
          variant="contained"
          sx={{
            backgroundColor: "#0288d1",
            "&:hover": { backgroundColor: "#0277bd" },
            mt: 2,
          }}
        >
          Book Venue
        </Button>
      </Box>
    </main>
  );
}
