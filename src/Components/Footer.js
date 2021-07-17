function Footer() {
  const styles = {
    box: {
      display: "flex",
      backgroundColor: "green",
      height: "40px",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: "16px",
      fontWeight:'500' 
    },
  };
  return (
    <div style={styles.box}>
      <div style={styles.text}>
        Made with <span style={{ color: "red" }}>♥</span> by Agustin Gramajo Gaitán
      </div>
    </div>
  );
}

export default Footer;
