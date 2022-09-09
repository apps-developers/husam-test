import styled from "styled-components";

const Title = (props) => {
  return (
    <div>
      <h1
        style={{
          color: props.color,
        }}
        className="title"
        onClick={() => {
          console.log(props.name);
        }}
      >
        Hi {props.name}
      </h1>

      <Descreiption>this is help info</Descreiption>
    </div>
  );
};

const Descreiption = styled.h5`
  color: yellow;
  background: black;
  padding: 20px;
`;

export default Title;
