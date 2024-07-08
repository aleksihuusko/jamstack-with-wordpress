import Link from "next/link";
import { CMS_NAME, CMS_URL } from "../lib/constants";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href="/" className="hover:text-neutral-600 transition-colors">
          JAMStack
        </Link>
      </h1>
      <p className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog example using{" "}
        <Link
          target="_blank"
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Next.js
        </Link>{" "}
        and{" "}
        <Link
          target="_blank"
          href={CMS_URL}
          className="underline hover:text-success duration-200 transition-colors"
        >
          {CMS_NAME}
        </Link>
        .{" "}
        <Link
          className="underline hover:text-success duration-200 transition-colors"
          href="/blog"
        >
          All posts.
        </Link>
      </p>
    </section>
  );
}
