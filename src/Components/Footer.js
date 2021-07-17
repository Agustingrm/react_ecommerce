function Footer() {
  const styles = {
    box: {
      display: "flex",
      backgroundColor: "black",
      height: "40px",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: "16px",
      fontWeight: "500",
      color: "white",
    },
  };
  return (
    <div style={styles.box}>
      <div style={styles.text}>
        Made with <span style={{ color: "red" }}>♥</span> by Agustín Gramajo Gaitán
      </div>
    </div>
  );
}

export default Footer;
