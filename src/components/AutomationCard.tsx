import React from "react";
import { Grid, Box, Title, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import DesignIcon from "../assets/design.svg";
import DevelopmentIcon from "../assets/develop.svg";
import LiveIcon from "../assets/live.svg";
import SupportIcon from "../assets/support.svg";

interface CarouselItem {
  title: string;
  icon: string;
}

const carouselItems: CarouselItem[] = [
  { title: "Design", icon: DesignIcon },
  { title: "Development", icon: DevelopmentIcon },
  { title: "Live", icon: LiveIcon },
  { title: "Support", icon: SupportIcon },
];

const AutomationCard: React.FC = () => {
  return (
    <Box className="md:px-5 px-8 h-screen bg-gray-200">
      <Grid>
        <Grid.Col md={6}>
          <Title
            order={1}
            fz={90}
            className="mt-8 pt-8 px-8 md:text-5xl font-serif leading-8 text-cyan-500 text-3xl animate-bounce "
          >
            Automation at heart - Meet Our process
          </Title>
          <Text className="mt-8 px-8 mt-6 md:text-2xl text-lg leading-8 text-gray-600">
            From design to development & support, we automate all our processes
            so we can always deliver repeatable results in the shortest amount
            of time possible.
          </Text>
        </Grid.Col>
        <Grid.Col md={12} className="mt-5 px-8">
          <Carousel
            withIndicators
            height={300}
            slideSize="25%"
            slideGap="md"
            loop
            dragFree
            align="start"
            mx="auto"
            breakpoints={[
              { maxWidth: "md", slideSize: "50%" },
              { maxWidth: "sm", slideSize: "100%" },
            ]}
          >
            {carouselItems.map((item) => {

              return (
                <Carousel.Slide key={item.title} gap="xl">
                  <img src={item.icon} alt={item.title} className="w-10" />
                  <Text className="font-bold text-2xl text-center">
                    {item.title}
                  </Text>
                </Carousel.Slide>
              );
            })}
          </Carousel>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default AutomationCard;
