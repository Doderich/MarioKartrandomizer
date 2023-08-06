import { Button } from "./ui/button";

function Randomize({ handleRandomize }: any) {
  return (
    <div className="flex items-center justify-center w-full h-20 gap-10 p-3">
      <Button className="h-full p-3" onClick={handleRandomize}>
        <span className="text-4xl text-center ">Randomize</span>
      </Button>
    </div>
  );
}

export default Randomize;
