import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const GradientButtonPrimary = styled(Button)({
  color: "#ffffff",
  border: "none",
  background: "linear-gradient(91.93deg, #AD18C7 1.75%, #E552FF 98.27%)",
  borderRadius: "10px",
  boxShadow: "none",
  padding: "8px 1.5rem",
  textTransform: "capitalize",
  "&:hover": {
    boxShadow: "none",
    background: "linear-gradient(91.93deg, #AD18C7 98.27%, #E552FF 1.75%)",
  },
  "&:active": {
    boxShadow: "none",
    background: "linear-gradient(91.93deg, #AD18C7 98.27%, #E552FF 1.75%)",
  },
  "&:focus": {
    background: "linear-gradient(91.93deg, #AD18C7 98.27%, #E552FF 1.75%)",
  },
});
const GradientButtonSecondary = styled(Button)({
  color: "#ffffff",
  border: "none",
  background: "linear-gradient(to right, #46bdf4 0%, #2b56f5 100%)",
  borderRadius: "10px",
  boxShadow: "none",
  padding: "8px 1.5rem",
  marginTop: "-5px",
  textTransform: "capitalize",
  "&:hover": {
    boxShadow: "none",
    background: "linear-gradient(91.95deg, #06BFDF 98.13%, #00D9FF 1.75%)",
  },
  "&:active": {
    boxShadow: "none",
    background: "linear-gradient(91.95deg, #06BFDF 98.13%, #00D9FF 1.75%)",
  },
  "&:focus": {
    background: "linear-gradient(91.95deg, #06BFDF 98.13%, #00D9FF 1.75%)",
  },
});

const GradientButtonThird = styled(Button)({
  color: "#ffffff",
  border: "none",
  background: "linear-gradient(to bottom left, #0FC5FF 30%, #FF0099 90% )",
  borderRadius: "10px",
  boxShadow: "none",
  padding: "8px 1.5rem",
  marginTop: "-5px",
  textTransform: "capitalize",
  "&:hover": {
    boxShadow: "none",
    background: "linear-gradient(91.95deg, #0FC5FF 30%, #FF0099 100%)",
  },
  "&:active": {
    boxShadow: "none",
    background: "linear-gradient(91.95deg, #0FC5FF 30%, #FF0099 100%)",
  },
  "&:focus": {
    background: "linear-gradient(91.95deg, #0FC5FF 30%, #FF0099 100%)",
  },
});

export { GradientButtonPrimary, GradientButtonSecondary, GradientButtonThird };
