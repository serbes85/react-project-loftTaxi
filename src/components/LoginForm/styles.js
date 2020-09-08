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
    // animation: "0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) both 0.3s",
    // filter: "blur(40px)",
    // opacity: "0",
    // transform: "translateX(-1000px) scaleX(2.5) scaleY(0.2)",
    // transformOrigin: "100% 50%",
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
  signIn: {
    color: "#1473e6",
    cursor: "pointer",
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
