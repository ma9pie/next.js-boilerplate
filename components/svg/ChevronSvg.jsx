/**
 * [Title] 꺽쇠 모양의 화살표 <, >
 * [Description] props로 type("up","down","left","right")를 주면
 * 해당 방향의 꺽쇠 모양의 화살표를 반환
 * [Usage]
 * @props fill로 화살표 색 지정 가능. default는 var(--mainText)
 * [Referrence] bootstrap icon's HTML
 */
import styled from "@emotion/styled";

function SvgComponent(props) {
  let degree = 0;

  switch (props.type) {
    case "up":
      degree = 0;
      break;
    case "right":
      degree = 90;
      break;
    case "down":
      degree = 180;
      break;
    case "left":
      degree = 270;
      break;

    default:
      break;
  }
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" degree={degree} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071L12 10.4142L6.70711 15.7071C6.31658 16.0976 5.68342 16.0976 5.29289 15.7071C4.90237 15.3166 4.90237 14.6834 5.29289 14.2929L11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071Z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;

SvgComponent.defaultProps = {
  color: "var(--main)",
  cursor: "pointer",
};

const Svg = styled.svg`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  fill: ${(props) => props.fill};
  transform: ${(props) => `rotate(` + props.degree + `deg)`};
  background-color: inherit;
`;
