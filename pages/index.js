import Empty from "@/components/empty";
import Layout from "@/components/layout";
import Statement from "@/components/statement";

export default function Home() {
  return (
    <Layout>
      <div className="flex-col p-6 justify-center w-[85vw] h-[96vh] bg-slate-950 rounded-lg text-slate-500 text-lg">
        <div className="flex flex-col space-y-10 h-1/3">
          <span>Emma</span>
          <div className="w-full h-[0.5rem] bg-slate-800 rounded"></div>
          <div className="flex gap-6">
            <Statement />
            <Empty />
            <Statement />
          </div>
        </div>
        <div className="flex flex-col space-y-10 h-1/3">
          <span>Boyfriend</span>
          <div className="w-full h-[0.5rem] bg-slate-800 rounded"></div>
          <div className="flex gap-6">
            <Empty />
            <Statement />
            <Empty />
            <Empty />
          </div>
        </div>
        <div className="flex flex-col space-y-10 h-1/3">
          <span>Police</span>
          <div className="w-full h-[0.5rem] bg-slate-800 rounded"></div>
          <div className="flex gap-6">
            <Empty />
            <Empty />
            <Empty />
            <Statement />
          </div>
        </div>
      </div>
    </Layout>
  );
}
