const HEAD = <div className="head" />;
const BODY = <div className="body" />;
const RIGHT_ARM = <div className="right-arm" />;
const LEFT_ARM = <div className="left-arm" />;
const RIGHT_LEG = <div className="right-leg" />;
const LEFT_LEG = <div className="left-leg" />;

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type DrawingProps = {
  numberOfGuesses: number;
};

const Drawing = ({ numberOfGuesses }: DrawingProps) => {
  return (
    <div className="hangman-drawing">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="block-4" />
      <div className="block-3" />
      <div className="block-2" />
      <div className="block-1" />
    </div>
  );
};
export default Drawing;
