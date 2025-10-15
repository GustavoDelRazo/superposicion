import { useState } from "react";
import { Button } from "./ui/button";
import { RecipeHome } from "./RecipeHome";
import { RecipeDetail } from "./RecipeDetail";
import { RecipeSearch } from "./RecipeSearch";
import { RecipeProfile } from "./RecipeProfile";
import { RecipeCreate } from "./RecipeCreate";
import { 
  Home, 
  Search, 
  User, 
  Plus, 
  BookOpen,
  ChefHat 
} from "lucide-react";

type ViewType = "home" | "detail" | "search" | "profile" | "create";

export function RecipeApp() {
  const [currentView, setCurrentView] = useState<ViewType>("home");

  const navigation = [
    { id: "home", label: "Inicio", icon: Home },
    { id: "search", label: "Buscar", icon: Search },
    { id: "detail", label: "Detalle", icon: BookOpen },
    { id: "create", label: "Crear", icon: Plus },
    { id: "profile", label: "Perfil", icon: User },
  ] as const;

  const renderContent = () => {
    switch (currentView) {
      case "home":
        return <RecipeHome />;
      case "detail":
        return <RecipeDetail />;
      case "search":
        return <RecipeSearch />;
      case "profile":
        return <RecipeProfile />;
      case "create":
        return <RecipeCreate />;
      default:
        return <RecipeHome />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-orange-500 to-red-500 text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-orange-400/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <ChefHat className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold">CocinaFácil</h1>
              <p className="text-orange-100 text-sm">Sabores increíbles</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={currentView === item.id ? "secondary" : "ghost"}
                  className={`w-full justify-start gap-3 ${
                    currentView === item.id
                      ? "bg-white/20 text-white hover:bg-white/25"
                      : "text-orange-100 hover:bg-white/10 hover:text-white"
                  }`}
                  onClick={() => setCurrentView(item.id as ViewType)}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </Button>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-orange-400/30">
          <div className="text-center text-orange-100 text-xs">
            <p>PWA Demo Version</p>
            <p>© 2024 CocinaFácil</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
}