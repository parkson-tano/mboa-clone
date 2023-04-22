import React from 'react'
import { Grid, Box, Title, Text } from '@mantine/core';
import imgSvg from '../assets/agile.svg'

function AgileCard() {
  return (
    <Box className='md:px-5 px-8'>
      <Grid>
        <Grid.Col md={6}>
          <img src={imgSvg} alt="Agile" />
        </Grid.Col>
        <Grid.Col md={5}>
          <Title
            order={1}
            fz={90}
            className="mt-8 pt-8 px-8 md:text-6xl font-bold tracking-tight text-cyan-500 text-3xl "
          >
            Agile software delivery teams
          </Title>
          <Text className="mt-8 mt-6 md:text-2xl text-lg leading-8 text-gray-600 text-justify">
            At MBOA DIGITAL, we have agile delivery teams. We view software as a
            living entity that needs to evolve to continuously meet your
            customers’ expectations. We believe in small increments adding
            value, and have DevOps consultants to sustain that model and quickly
            bring changes to life.
            <br />
            <br />
            We are passionate about problem solving. We integrate the best from
            design patterns, open source, cloud infrastructures, to write neat,
            cost effective, and fit for purpose software.
          </Text>
        </Grid.Col>
      </Grid>
    </Box>
  );
}

export default AgileCard