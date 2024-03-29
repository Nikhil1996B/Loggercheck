export const CardHeaderStyle = () => {
  return {
    width: "100%",
    background: "#131722",
    minHeight: "54px",
    padding: `${8}px`,
  };
};

export const CardStyle = () => {
  return {
    width: "100%",
    background: "#131722",
    color: "white",
    borderBottom: "0.5px solid #707070",
  };
};

export const ImageStyle = () => {
  return {
    width: `18px`,
    margin: `${1}rem 0`,
    marginLeft: `${2}rem`,
    height: `18px`,
  };
};

export const CrossBtnStyle = () => {
  return {
    fontSize: `${10}rem`,
    color: "#000000",
  };
};

export const FigureStyle = {
  figure: () => ({
    padding: "2rem",
  }),
  image: () => ({
    height: "45%",
    width: "",
    background: "#949CB0",
    borderRadius: "50%",
    padding: "1rem",
  }),
  caption: () => ({
    color: "#ffffff",
    fontSize: "14px",
    padding: "10px 0",
    textTransform: "capitalize",
  }),
};

export const SubscribeBtnStyle = {
  background: "#E1540F",
  color: "#FFFFFF",
  padding: "1rem 6rem",
  margin: "2rem 0",
  border: "none",
  fontSize: "14px",
  textTransform: "uppercase",
};
