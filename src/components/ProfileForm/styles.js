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
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    boxSizing: "border-box",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  paperForm: {
    padding: "44px 60px",
  },
  paperField: {
    width: "300px",
    height: "150px",
    paddingTop: "16px",
    paddingLeft: "32px",
    paddingRight: "32px",
    paddingBottom: "16px",
  },
  formItem: {
    padding: "20px",
  },
  buttonItem: {
    display: "flex",
    justifyContent: "center",
  },
  buttonHover: {
    background: "#ffc617",
    "&:hover": {
      background: "#b28a10",
    },
  },
  withoutDecoration: {
    textDecoration: "none",
  },
});
export default styles;
