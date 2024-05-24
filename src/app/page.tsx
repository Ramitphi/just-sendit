import { getFrameMetadata } from "@coinbase/onchainkit/frame";
import type { Metadata } from "next";

const NEXT_PUBLIC_URL = "https://just-sendit.vercel.app";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Enjoooyyyyyy !!!",
    },
  ],
  image: `${NEXT_PUBLIC_URL}/enjoy.png`,

  post_url: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: "ramit.xyz",
  description: "LFG",
  openGraph: {
    title: "ramit",
    description: "LFG",
    images: [`${NEXT_PUBLIC_URL}/enjoy.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Home() {
  return <>gggg</>;
}
