import { Typography } from "../ui/typography";

interface ColorBoxProps {
  color: string
}

const ColorBox = ({ color }: ColorBoxProps) => {

  return (
    <div className="flex flex-col w-40 space-y-3 border-2 rounded-xl">
      <div>
        <div className={color + " h-20 rounded-t-2xl"} />
      </div>
      <div><Typography className="text-gray">{color}</Typography> </div>
    </div>
  );
}


const ColorsFrame = () => {
  return (
    <div className="flex-column space-y-3 m-4">
      <Typography type="h1">Colors</Typography>
      <div className="flex space-x-3">
        <ColorBox color="bg-white" />
        <ColorBox color="bg-white-off" />
      </div>
      <div className="flex space-x-3">
        <ColorBox color="bg-gray" />
        <ColorBox color="bg-gray-light" />
        <ColorBox color="bg-gray-disabled" />
      </div>
      <div className="flex space-x-3">
        <ColorBox color="bg-brand" />
        <ColorBox color="bg-brand-midnightGreen" />
        <ColorBox color="bg-brand-beige" />
      </div>
      <div className="flex space-x-3">
        <ColorBox color="bg-red-light" />
        <ColorBox color="bg-red-dark" />
      </div>
      <div className="flex space-x-3">
        <ColorBox color="bg-yellow-dark" />
      </div>
      <div className="flex space-x-3">
        <ColorBox color="bg-misc-stakingPurple" />
        <ColorBox color="bg-misc-opal" />
        <ColorBox color="bg-misc-emerald" />
      </div>

    </div>
  );
}

export default ColorsFrame