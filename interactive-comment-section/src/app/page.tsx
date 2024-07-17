import CommentSection from "~/_components/commentSection";

export default function HomePage() {
  return (
    <main className="mx-auto flex h-[100lvh] max-w-[375px] justify-center overflow-y-scroll px-4 py-6 sm:max-w-2xl">
      <section className="">
        <CommentSection />
      </section>
    </main>
  );
}
