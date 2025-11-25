import { Plus, Menu, LogOut } from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const [conversations] = useState([
    { id: 1, name: "New Conversation", active: true },
  ]);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 w-64 bg-sidebar border-r border-sidebar-border flex flex-col transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-50`}
      >
        {/* Header */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-sidebar-primary rounded-full flex items-center justify-center text-sidebar-primary-foreground text-sm font-bold">
              N
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-sidebar-foreground">
                Nothing
              </p>
              <div className="flex items-center gap-1">
                <span className="text-xs text-sidebar-foreground/70">PRO</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-sidebar-foreground/50 truncate">
            nothing@example.com
          </p>
        </div>

        {/* New Conversation Button */}
        <div className="p-4 border-b border-sidebar-border">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-sidebar-primary text-sidebar-primary-foreground rounded-lg hover:bg-sidebar-primary/90 transition-colors text-sm font-medium">
            <Plus size={16} />
            Nouvelle Conversation
          </button>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto p-4">
          <h3 className="text-xs font-semibold text-sidebar-foreground/50 uppercase tracking-wide mb-3">
            Conversations
          </h3>
          <div className="space-y-2">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                  conv.active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                }`}
              >
                {conv.name}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-sidebar-border">
          <button className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sidebar-foreground hover:text-sidebar-accent transition-colors text-sm">
            <LogOut size={16} />
            <span className="hidden sm:inline">Déconnexion</span>
          </button>
        </div>
      </aside>
    </>
  );
}
