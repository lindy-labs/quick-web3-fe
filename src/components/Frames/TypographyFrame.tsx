import { Typography } from "../ui/typography";

const TypographyFrame = () => {
  return (
    <div className="flex-column space-y-2 m-4">
      <Typography type="h1">Typography</Typography>
      <div className="flex-column space-y-2">
        <Typography className="text-5xl">Aeonik</Typography>
        <Typography className="text-8xl">Ag</Typography>
        <Typography className="text-5xl">ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()</Typography>
        <Typography type={"h1"}>h1</Typography>
        <Typography type={"h1"}>Taxing Laughter: The Joke TaxChronicles</Typography>
        <Typography type={"h2"}>h2</Typography>
        <Typography type={"h2"}>The People of the Kingdom</Typography>
        <Typography type={"h3"}>h3</Typography>
        <Typography type={"h3"}>The Joke Tax</Typography>
        <Typography type={"h4"}>h4</Typography>
        <Typography type={"h4"}>People stopped telling jokes</Typography>
        <Typography type={"p"}>p</Typography>
        <Typography type={"p"}>The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.</Typography>
      </div>
    </div>
  );
}
export default TypographyFrame