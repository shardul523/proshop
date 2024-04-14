import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

function PlaceholderProductCard() {
  return (
    <Card className="w-56 opacity-75">
      <CardHeader>
        {/* <img className="h-36 w-44" src={product.image} /> */}
        <div className="w-44 h-36 bg-gray-300" />
      </CardHeader>
      <CardContent className="text-nowrap overflow-hidden text-ellipsis p-4 pt-0">
        <div className="w-40 h-4 bg-gray-200" />
      </CardContent>
      <CardFooter className="flex flex-col p-4 pt-0 gap-4 items-start">
        <div className="h-4 w-40 bg-gray-200" />
        <div className="h-4 w-40 bg-gray-200" />
      </CardFooter>
    </Card>
  );
}

export default PlaceholderProductCard;
