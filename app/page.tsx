import { handlegetChats } from "@/actions/handlegetChats";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

export default function Home() {
const handleSubmit = async (formData: FormData) => {
  "use server"
  const prompt: any = formData.get("prompt");
  const res = await handlegetChats(prompt);
  console.log(res);
}
  return (
    <form action={handleSubmit}>
     Full Name
     <Input placeholder="Enter Your Prompt" name="prompt"  />
     <Button type="submit">Submit</Button>
    </form>
  );
}
