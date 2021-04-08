export const CardStyle = {
  container: () => ({
    margin: "0.2rem 0 1rem 0",
  }),
  card: () => ({
    background: "transparent",
    borderRadius: "none",
    border: "none",
  }),
  movierunTime: () => ({
    color: "#949CB0",
    margin: "0 1rem",
  }),
  moviDetailsRow: () => ({
    fontSize: "15px",
  }),

  Details: () => ({
    margin: "0.5rem 0",
    paddingLeft: "0",
  }),
  brandcolor: (sm) => ({
    color: "#FEB896",
    fontSize: `${sm ? "12px" : ""}`,
    paddingLeft: `${sm ? "0" : ""}`,
  }),
};
