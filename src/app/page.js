import AccordionDemo from "./components/Accordion";
import PopoverDemo from "./components/Popover";
import { LockOpen2Icon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main>
      <p>
        This is an icon <LockOpen2Icon />{" "}
      </p>
      <AccordionDemo />
      <PopoverDemo />
    </main>
  );
}
