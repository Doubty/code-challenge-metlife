import * as React from "react";
import ButtonUnstyled, {
  ButtonUnstyledProps,
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled, Theme } from "@mui/system";

const ButtonRoot = React.forwardRef(function ButtonRoot(
  props: React.PropsWithChildren<{}>,
  ref: React.ForwardedRef<any>
) {
  const { children, ...other } = props;

  return (
    <svg width="330" height="50" {...other} ref={ref}>
      <polygon points="0,50 0,0 330,0 330,50" className="bg" />
      <polygon points="0,50 0,0 330,0 330,50" className="borderEffect" />
      <foreignObject x="0" y="0" width="330" height="50">
        <div className="content">{children}</div>
      </foreignObject>
    </svg>
  );
});

const CustomButtonRoot = styled(ButtonRoot)(
  ({ theme }: { theme: Theme }) => `
  overflow: visible;
  cursor: pointer;
  --main-color: ${theme.palette.mode === "light" ? "rgb(25,118,210)" : "rgb(144,202,249)"
    };
  --hover-color: ${theme.palette.mode === "light" ? "#2ecc71" : "#1abc9c"};
  --active-color: ${theme.palette.mode === "light" ? "#1abc9c" : "#1abc9c"};

  & polygon {
    fill: transparent;
    transition: all 800ms ease;
    pointer-events: none;
  }
  
  & .bg {
    stroke: #2ecc71;
    stroke-width: 1;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
    fill: transparent;
    fill: var(--hover-color);
  }

  & .borderEffect {
    stroke: white;
    stroke-width: 2;
    stroke-dasharray: 150 600;
    stroke-dashoffset: 150;
    fill: transparent;
  }

  &:hover,
  &.${buttonUnstyledClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }

    .bg {
      fill: var(--hover-color);
    }
  }

  &:focus,
  &.${buttonUnstyledClasses.focusVisible} {
    outline: none;
  }

  &.${buttonUnstyledClasses.active} { 
    & .bg {
      fill: var(--active-color);
      transition: fill 300ms ease-out;
      color: white;
    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      font-family: Helvetica, Inter, Arial, sans-serif;
      font-size: 14px;
      font-weight: 200;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-transform: uppercase;
    }

    & svg {
      margin: 0 5px;
    }
  }`
);

const SvgButton = React.forwardRef(function SvgButton(
  props: ButtonUnstyledProps,
  ref: React.ForwardedRef<any>
) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} ref={ref} />;
});

export default function Button({ name, func }: { name: any; func: any }) {
  return <SvgButton onClick={func}>{name}</SvgButton>;
}
