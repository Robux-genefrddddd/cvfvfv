import { Send } from "lucide-react";
import { useState } from "react";

export function ChatArea() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      console.log("Message sent:", message);
      setMessage("");
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-background">
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto flex items-center justify-center p-6">
        <div className="text-center">
          {/* Placeholder for empty state */}
          <div
            className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
            style={{
              backgroundImage:
                "url(https://cdn.builder.io/api/v1/image/assets%2Fafa67d28f8874020a08a6dc1ed05801d%2F340d671f0c4b45db8b30096668d2bc7c)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <h2 className="text-lg font-semibold text-foreground mb-2">
            Start a conversation
          </h2>
          <p className="text-sm text-foreground/60">
            Type a message below to begin
          </p>
        </div>
      </div>

      {/* Message Input Area */}
      <div className="px-6 py-6">
        <div className="flex items-end gap-2">
          <div className="flex-1">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Message..."
              className="w-full bg-transparent border-b border-foreground/20 px-0 py-2 text-foreground placeholder-foreground/40 focus:outline-none focus:border-foreground/40 transition-colors"
            />
          </div>
          <button
            onClick={handleSend}
            className="text-foreground hover:text-foreground/70 transition-colors flex items-center justify-center"
            aria-label="Send message"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
