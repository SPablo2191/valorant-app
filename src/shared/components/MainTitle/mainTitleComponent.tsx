export function MainTitle({ title }: { title: string }) {
  return (
    <>
      <h2 className="text-slate-800 font-bold text-2xl md:text-4xl dark:text-white">
        {title}
      </h2>
      <hr className="w-24 h-1 mx-auto  bg-red-600  border-0 rounded mt-3" />
    </>
  );
}
