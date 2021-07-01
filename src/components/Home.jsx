import React from "react";
import { makeStyles } from "@material-ui/core";
import Navigation from "./Navigation";

const useStyles = makeStyles((theme) => ({
  home: {
    width: "100%",
    height: "100%",
    backgroundImage: "url(/herbals.jpg)",
    objectFit: "cover",
    position: "absolute",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    zIndex: "-1",
  },
}));
function Home(props) {
  const classes = useStyles();
  return <div className={classes.home}>
      <Navigation />
      <Home/>
  </div>;
}

export default Home;
