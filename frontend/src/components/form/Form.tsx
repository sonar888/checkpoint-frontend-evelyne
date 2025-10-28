import Input from "./Input";
import Button from "./Button";

export default function Form() {
  return (
    <form 
    className="flex flex-col m-4 p-4 border border-gray-300 rounded-lg bg-white shadow-md 
    md:flex md:flex-row md:justify-between gap-3"> 
        <Input name='Name' />
        <Input name='Emoji' />
        <Input name='Code' />
        <Button />     
    </form>
    );
}