import { Grid, Typography } from "@mui/material";
import Web3 from "web3";

import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useConfirmDialog } from "react-mui-confirm";

import Transaction from "../../components/Transaction/Transaction";
import TransactionHeader from "../../components/Transaction/TransactionHeader";

const TransactionHistory = () => {
  const [account, setAccount] = useState("Connecting to Metamask..");
  const [transactions, setTransactions] = useState([]);
  const confirm = useConfirmDialog();

  useEffect(() => {
    window.scrollTo(0, 0);
    const ethEnabled = async () => {
      fetchDataFromBlockchain();
    };

    ethEnabled();
  }, []);

  const getTransactions = async () => {
    if (account !== "Connecting to Metamask..") {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: { address: account },
      };

      fetch("/api/getTransactionHistory", requestOptions)
        .then((res) => res.json())
        .then((list) => setTransactions(list));
    } else {
      confirm({
        title: "Please Connect your metamask.",
        confirmButtonText: "Close",
        cancelButtonText: "Yes",
      });
    }
  };

  const fetchDataFromBlockchain = async () => {
    if (window.ethereum) {
      // await window.ethereum.send('eth_requestAccounts');
      await window.ethereum.request({ method: "eth_requestAccounts" });
      window.web3 = new Web3(window.ethereum);

      //connecting to metamask
      let web3 = window.web3;
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
    }
  };

  return (
    <>
      <Box zIndex={1000}>
        <Box sx={{ mt: 10.5, mb: 4 }}></Box>
        <Box
          color={"#ffffff"}
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 3,
            mb: 3,
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
              component="p"
              sx={{
                zIndex: 2,
                cursor: "pointer",
                color: "white",
                fontSize: "12px",
                background: "rgba(0, 0, 0, .4)",
                padding: "11px 33px 11px 33px",
                borderRadius: "40px",
              }}
            >
              {account}
            </Typography>
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }} onClick={getTransactions}>
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
                View History
              </Typography>
            </Typography>
          </Box>
        </Box>
        {transactions.length !== 0 ? (
          <Box
            sx={{
              backgroundColor: "#171C26",
              pr: 6,
              pl: 4,
              py: 4,
              borderRadius: "16px",
            }}
          >
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <TransactionHeader />
              {transactions.map((transaction, index) => (
                <Transaction key={index} transaction={transaction} />
              ))}
            </Grid>
          </Box>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default TransactionHistory;
