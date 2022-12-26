import { trpc } from "../utils/trpc";

export default function Testing() {
  const showUsers = trpc.prisma.getUsers.useQuery();
  return (
    <>
      <div className="min-h-64 break-words bg-red-400">
        <div className="bg-red-500 font-bold text-white shadow-lg">
          <h1 className="p-2 uppercase">testing</h1>
        </div>
        <div className="p-2 text-white">{JSON.stringify(showUsers)}</div>
        <div className="h-5 bg-red-500"></div>
      </div>
    </>
  );
}
