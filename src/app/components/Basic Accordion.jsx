"use client";
import * as Accordion from "@radix-ui/react-accordion";

export default function BasicAccordion() {
  return (
    <>
      <Accordion.Root>
        <Accordion.Item>
          <Accordion.Header>
            <Accordion.Trigger>I am the trigger</Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content> I am the content </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </>
  );
}
