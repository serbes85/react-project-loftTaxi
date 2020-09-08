const styles = () => ({
  paper: {
    top: "20%",
    left: "5%",
    padding: "20px",
    position: "absolute",
    width: "400px",
    height: "265px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  select: {
    marginTop: "16px",
  },
  buttonItem: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  buttonHover: {
    background: "#ffc617",
    "&:hover": {
      background: "#b28a10",
    },
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  text: {
    textAlign: "center",
  },
});

export default styles;
