import React, { useEffect } from "react";

import {
  Grid,
  Typography,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { Box } from "@mui/system";
import { FaPlusSquare } from "react-icons/fa";

const Transaction = ({ transaction }) => {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const openBlockExplorer = (transaction) => {
    console.log("test");
    const blockExplorerBaseURL = "https://etherscan.io/tx/" + transaction;
    window.open(blockExplorerBaseURL, "_blank", "noopener, noreferrer");
  };

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

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
                  {transaction.blockNum}
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
          onClick={() => openBlockExplorer(transaction.hash)}
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
                {transaction.hash}
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
                {transaction.asset}
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
                {transaction.value ? transaction.value : 0}
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
                <IconButton onClick={handleClickOpen("paper")}>
                  <Typography component="span" color="secondary" fontSize={15}>
                    <FaPlusSquare color="secondary" />
                  </Typography>
                </IconButton>
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Transaction Details</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            asset: {transaction.asset} <br />
            blockNum: {transaction.blockNum}
            <br />
            category: {transaction.category}
            <br />
            erc721TokenId:{" "}
            {transaction.erc721TokenId ? transaction.erc721TokenId : "null"}
            <br />
            erc1155Metadata:{" "}
            {transaction.erc1155Metadata ? transaction.erc1155Metadata : "null"}
            <br />
            from: {transaction.from}
            <br />
            hash: <br />
            {transaction.hash}
            <br />
            to: {transaction.to}
            <br />
            tokenId: {transaction.tokenId ? transaction.tokenId : "null"}
            <br />
            value: {transaction.value} <br /> <br />
            <h6>rawContract:</h6>
            address: {transaction.rawContract.address} <br />
            decimal: {transaction.rawContract.decimal} <br />
            value : {transaction.value} <br />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Transaction;
