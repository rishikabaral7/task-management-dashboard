import{LayoutDashboard,CheckSquare, FolderKanban, Settings} from 'lucide-react'

const Sidebar = () => {
  return (
    <aside className="w-64 border-r">
        <nav className="flex flex-col p-4">
            <a href="#" className="flex items-center gap-2 rounded-md p-2 hover:bg-muted">
                <LayoutDashboard className="size-5">Dashboard</LayoutDashboard>
            </a>

            <a href="#" className="flex items-center gap-2 rounded-md p-2 hover:bg-muted">
                <CheckSquare className="size-5">Tasks</CheckSquare>
            </a>
            <a href="#" className="flex items-center gap-2 rounded-md p-2 hover:bg-muted">
                <FolderKanban className="size-5">Project</FolderKanban>
            </a>
            <a href="#" className="flex items-center gap-2 rounded-md p-2 hover:bg-muted">
                <Settings className="size-5 ">Settings</Settings>
            </a>

        </nav>

    </aside>
  )
}

export default Sidebar