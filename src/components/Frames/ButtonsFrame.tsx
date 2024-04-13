import { Button } from "../ui/button";
import { Typography } from "../ui/typography";

const ButtonsFrame = () => {
  return (
    <div className="flex-column space-y-3 m-4">
      <Typography type="h1">Buttons</Typography>
      <Button>Continue</Button>
    </div>
  );
}

export default ButtonsFrame