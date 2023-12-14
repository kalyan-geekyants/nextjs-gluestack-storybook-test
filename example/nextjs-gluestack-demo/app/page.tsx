import styles from './page.module.css';
import { Box, Text } from '@custom-ui/themed';

export default function Home() {
  return (
    <main className={styles.main}>
      <Box>
        <Text>Hello</Text>
      </Box>
    </main>
  );
}
