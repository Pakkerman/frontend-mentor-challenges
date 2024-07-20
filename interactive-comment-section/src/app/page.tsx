import { api, HydrateClient } from "~/trpc/server";
import CommentSection from "src/app/_components/commentSection";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="mx-auto flex h-[100lvh] max-w-[375px] justify-center overflow-y-scroll px-4 py-6 sm:max-w-2xl">
        <section className="">
          <CommentSection />
        </section>
      </main>
    </HydrateClient>
  );
}
