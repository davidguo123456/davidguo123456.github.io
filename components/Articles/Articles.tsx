import { IconBrandGithubFilled, IconFileTypePdf } from '@tabler/icons-react';
import {
  ActionIcon,
  Badge,
  Card,
  Container,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import projects from '../../public/projects.json';
import classes from './Articles.module.css';

export function ArticlesCardsGrid() {
  const theme = useMantineTheme();
  const cards = projects.data.map((article) => ArticleCard(article));

  return (
    <Container py="xl">
      <div className={classes.articleGrid}>
        <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
      </div>
    </Container>
  );
}

export function ArticleCard(article: any) {
  return (
    <Card key={article.key} radius="md" className={classes.card}>
      <Card.Section>
        <a href={article.repo} target="_blank" style={{ color: 'grey' }}>
          <Image src={article.image} height={360} />
          <div className={classes.imageGrad} />
        </a>
      </Card.Section>

      <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
        {article.framework}
      </Badge>

      <Text className={classes.cardTitle} fw={500} component="a">
        {article.title}
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={4}>
        {article.description}
      </Text>

      <Group justify="space-between" className={classes.footer}>
        <Text fz="sm" c="dimmed" lineClamp={4}>
          {article.date_start} — {article.date_end}
        </Text>
        <Group gap="xs">
          {article.paper !== '' && (
            <ActionIcon size="lg" color="gray" variant="subtle">
              <a href={article.paper} target="_blank" style={{ color: 'grey' }}>
                <IconFileTypePdf size={18} stroke={1.5} />
              </a>
            </ActionIcon>
          )}

          <ActionIcon size="lg" color="gray" variant="subtle">
            <a href={article.repo} target="_blank" style={{ color: 'grey' }}>
              <IconBrandGithubFilled size={18} stroke={1.5} />
            </a>
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
}

export function ArticlesHeader() {
  return (
    <div>
      <div className={classes.svgContainer}>
        <svg viewBox="0 0 500 50" preserveAspectRatio="xMinYMin meet">
          <path
            d="M0,15 C150,30 350,0 500,15 L500,00 L0,0 Z"
            style={{ stroke: 'none', fill: '#f1f3f5' }}
          />
        </svg>
      </div>
      <header className={classes.header}>
        <Container size="md">
          <div className={classes.inner}>
            <div className={classes.content} id="projects">
              <Stack>
                <Title className={classes.title}>Projects</Title>
                <Text mt="md">A selection of projects I've worked on with public repositories</Text>
              </Stack>
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
}