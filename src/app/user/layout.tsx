import ExplorerLayout from "@/layouts/explorer/layout";

export default function UserLayout({ children }: 
    {
        children: React.ReactNode;
    }) {
    return (
      <ExplorerLayout>{children}</ExplorerLayout>
    )
}
