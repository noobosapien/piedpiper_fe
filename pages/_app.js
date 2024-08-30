import "@/styles/globals.css";
import { StoryProvider } from "@/utils/story";

export default function App({ Component, pageProps }) {
  return (
    <StoryProvider>
      <Component {...pageProps} />
    </StoryProvider>
  );
}
