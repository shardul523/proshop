import Button from "../common/Button";
import FormInput from "../common/FormInput";
import FormTextarea from "../common/FormTextarea";
import {
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  Select,
} from "../ui/select";

function ReviewForm() {
  return (
    <div className="space-y-5">
      <h3 className="bg-secondary-300 text-secondary-700 text-lg px-3 py-2 rounded">
        Write a customer review
      </h3>
      <Select>
        <SelectTrigger className=" w-full bg-secondary-50">
          <SelectValue placeholder={"Rating"} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={5}>5 (Great)</SelectItem>
          <SelectItem value={4}>4 (Good)</SelectItem>
          <SelectItem value={3}>3 (Average)</SelectItem>
          <SelectItem value={2}>2 (Bad)</SelectItem>
          <SelectItem value={1}>1 (Worst)</SelectItem>
        </SelectContent>
      </Select>
      <FormInput placeholder={"Title"} />
      <FormTextarea placeholder={"Write your comments"} />
      <div className="flex justify-end">
        <Button variant={"neutral"}>Submit</Button>
      </div>
    </div>
  );
}
export default ReviewForm;
