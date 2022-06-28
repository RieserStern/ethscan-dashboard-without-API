import { Grid, Typography } from "@mui/material";

import { Box } from "@mui/system";

const TransactionHeader = () => {
  return (
    <>
      <Grid item xs={2} sm={4} md={1}>
        <Box
          bgcolor="#121212"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0.3rem",
            zIndex: "10",
            cursor: "pointer",
            position: "relative",
          }}
        >
          <Box
            sx={{
              alignItems: "center",
            }}
          >
            <Box
              color={"#ffffff"}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                component="div"
                m="auto"
                sx={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="subtitle1"
                  component="p"
                  sx={{
                    zIndex: 2,
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  Block
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={2} sm={4} md={5}>
        <Box
          bgcolor={"#121212"}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0.3rem",
            zIndex: "10",
            cursor: "pointer",
            position: "relative",
          }}
        >
          <Box
            color={"#ffffff"}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              component="div"
              m="auto"
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                component="p"
                sx={{
                  zIndex: 2,
                  cursor: "pointer",
                  color: "white",
                }}
              >
                Txn Hash
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={2} sm={4} md={2}>
        <Box
          bgcolor={"#121212"}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0.3rem",
            zIndex: "10",
            cursor: "pointer",
            position: "relative",
          }}
        >
          <Box
            color={"#ffffff"}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              component="div"
              m="auto"
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                component="p"
                sx={{
                  zIndex: 2,
                  cursor: "pointer",
                  color: "white",
                }}
              >
                Asset
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={2} sm={4} md={3}>
        <Box
          bgcolor={"#121212"}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0.3rem",
            zIndex: "10",
            cursor: "pointer",
            position: "relative",
          }}
        >
          <Box
            color={"#ffffff"}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              component="div"
              m="auto"
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                component="p"
                sx={{
                  zIndex: 2,
                  cursor: "pointer",
                  color: "white",
                }}
              >
                Value
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={2} sm={4} md={1}>
        <Box
          bgcolor={"#121212"}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0.3rem",
            zIndex: "10",
            cursor: "pointer",
            position: "relative",
          }}
        >
          <Box
            color={"#ffffff"}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              component="div"
              m="auto"
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                component="p"
                sx={{
                  zIndex: 2,
                  cursor: "pointer",
                  color: "white",
                }}
              >
                Detail
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default TransactionHeader;
