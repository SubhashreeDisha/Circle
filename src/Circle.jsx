import React, { useState } from "react";

function Circle() {
  const [circle, setCircle] = useState([]);

  function addHandler() {
    let temparr = [
      ...circle,
      {
        id: Math.trunc(Math.random() * 1000000),
        isSelected: false,
      },
    ];
    setCircle(temparr);
  }

  function selectHandler(id) {
    let temparr = [...circle];
    let index = temparr.findIndex((ele) => {
      return ele.id === id;
    });
    if (temparr[index].isSelected === false) {
      temparr[index].isSelected = true;
    } else {
      temparr[index].isSelected = false;
    }

    setCircle(temparr);
  }

  function deleteHandler() {
    let temparr = circle.filter((value) => {
      return value.isSelected === false;
    });
    setCircle(temparr);
  }

  return (
    <div style={styles.container}>
      <button onClick={addHandler} style={styles.button}>
        Add Circle
      </button>
      <button onClick={deleteHandler} style={styles.button}>
        Delete Selected
      </button>
      <div style={styles.circlesContainer}>
        {circle.map((value) => {
          return (
            <div
              key={value.id}
              onClick={() => selectHandler(value.id)}
              style={{
                ...styles.circle,
                backgroundColor: value.isSelected
                  ? "rgb(255, 0, 255)"
                  : "rgb(0, 255, 255)", // Neon pink when selected, neon cyan when not
                boxShadow: value.isSelected
                  ? "0 0 15px 5px rgba(255, 0, 255, 0.7)"
                  : "0 0 15px 5px rgba(0, 255, 255, 0.7)", // Glowing effect for selection
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

// Inline CSS for the neon glowing theme
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(45deg, #1d1d1d, #2e2e2e)", // Dark background to make neon colors pop
  },
  button: {
    backgroundColor: "rgb(0, 255, 255)", // Neon cyan button
    color: "black",
    padding: "15px 30px",
    margin: "20px",
    border: "none",
    borderRadius: "30px",
    fontSize: "20px",
    fontWeight: "bold",
    textTransform: "uppercase",
    cursor: "pointer",
    boxShadow: "0 0 10px rgba(0, 255, 255, 0.7)",
    transition: "background-color 0.3s, box-shadow 0.3s",
  },
  circlesContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "20px",
  },
  circle: {
    height: "120px",
    width: "120px",
    borderRadius: "50%",
    margin: "15px",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease", // Adding smooth transition on hover
  },
};

export default Circle;
