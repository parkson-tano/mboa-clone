import React from 'react'
import { Button } from "@mantine/core";

function ContactUsBtn() {
  return (
    <Button
      radius="xl"
      size="lg"
      className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      Contact Us
    </Button>
  );
}

export default ContactUsBtn