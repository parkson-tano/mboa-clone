import React, {useState} from "react";
import {
  Grid,
  Box,
  Title,
  Text,
  Card,
  Container,
  Image,
  Badge,
  Button,
  Group,
  Modal,
  ScrollArea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { service } from "../data/mboateam";
function ServiceCard() {
  // Define state for the Modal
  const [opened, setOpened] = useState(false);
  const [content, setContent] = useState("");
  const [heading, setHeading] = useState("");

  // Define function to open the Modal and set its content
  const openModal = (description: string, heading: string) => {
    setContent(description);
    setHeading(heading);
    setOpened(true);
  };

  // Define function to close the Modal
  const closeModal = () => {
    setOpened(false);
    setContent("");
  };
  return (
    <Container fluid size="xs" px="xs" py="lg" className="bg-gray-300">
      <div className="px-8">
        <Title
          order={1}
          className="text-6xl font-serif leading-8 text-slate-800 text-3xl animate-bounce p-5"
        >
          Service
        </Title>
        <Grid>
          <Button
            color="cyan"
            size="md"
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            Settings
          </Button>

          {service.map((ser) => {
            return (
              <>
                <Modal
                  opened={opened}
                  onClose={closeModal}
                >
                  <Title order={1}>{heading}</Title>
                  <Text fz={20} className="text-justify">
                    {content}
                    </Text>
                </Modal>
                <Grid.Col xs={12} md={4} key={ser.title}>
                  <Card
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    withBorder
                    style={{ height: "80vh", position: "relative" }}
                    className="bg-gray-300"
                  >
                    <Card.Section component="a" href="https://mantine.dev/">
                      <Image
                        src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                        height={160}
                        alt={ser.title}
                        className="animate-none"
                      />
                    </Card.Section>

                    <Group position="apart" mt="md" mb="xs">
                      <Title order={2}>{ser.title}</Title>
                      <Badge
                        color="pink"
                        variant="light"
                        className="animate-ping"
                      >
                        Active
                      </Badge>
                    </Group>

                    <Text lineClamp={4} size="lg" color="dimmed">
                      {ser.description}
                    </Text>

                    <Button
                      variant="outline"
                      color="blue"
                      fullWidth
                      mt="md"
                      size="lg"
                      radius="md"
                      style={{
                        position: "absolute",
                        bottom: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                      onClick={() => openModal(ser.description, ser.title)}
                    >
                      Learn More
                    </Button>
                  </Card>
                </Grid.Col>
              </>
            );
          })}
        </Grid>
      </div>
    </Container>
  );
}

export default ServiceCard;
