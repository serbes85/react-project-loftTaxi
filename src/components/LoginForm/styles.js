import Background from "./assets/login-background.jpg";

const styles = () => ({
  backgroundForm: {
    width: "100vw",
    height: "100vh",
    backgroundSize: "cover",
    backgroundImage: `url(${Background})`,
  },
  container: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexWrap: "wrap",
    boxSizing: "border-box",
    justifyContent: "center",
    alignItems: "center",
  },
  containerForm: {
    width: "100%",
    display: "flex",
    boxSizing: "border-box",
  },
  imgItemAnimation: {
    width: "150px",
  },

  imgItem: {
    flexGrow: "0",
    maxWidth: "25%",
    flexBasis: "25%",
  },
  paper: {
    minWidth: "500px",
    borderRadius: "4px",
    padding: "44px 60px",
    boxSizing: "border-box",
  },

  title: {
    marginBottom: "30px",
  },
  buttonItem: {
    display: "flex",
    justifyContent: "flex-end",
  },
  buttonHover: {
    background: "#ffc617",
    "&:hover": {
      background: "#b28a10",
    },
  },
});

export default styles;
