export const TitleStyle = {
  column: (smallsize) => ({
    fontSize: "12px",
    marginBottom: `${smallsize ? 0 : ""}`,
    marginTop: `${smallsize ? 0 : ""}`,
    paddingBottom: `${smallsize ? 0 : ""}`,
  }),
  image: (smallsize) => ({
    height: `${smallsize ? "12px" : "19px"}`,
    width: `${smallsize ? "12px" : "19px"}`,
  }),
  span: (smallsize) => ({
    paddingLeft: `${smallsize ? "" : "6px"}`,
    textTransform: "capitalize",
  }),
  textalign: () => ({
    textAlign: "right",
    marginTop: "-0.5rem",
    padding: "0 1rem",
  }),
  rightImage: (smallsize) => ({
    width: `${smallsize ? "12px" : "16px"}`,
    height: "16px",
    margin: "0",
    marginRight: "1rem",
  }),
  leftImage: (smallsize) => ({
    width: `${smallsize ? "14px" : "20px"}`,
    height: `${smallsize ? "10px" : "20px"}`,
    paddingLeft: "4px",
    margin: "0",
  }),
};
