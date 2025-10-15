import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Search, Heart, Clock, Users, Star, Bookmark, Filter, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function RecipeHome() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">¡Hola, Chef! 👋</h1>
              <p className="text-gray-600 mt-1">Descubre nuevas recetas y sabores increíbles</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600">
                <TrendingUp className="w-4 h-4 mr-2" />
                Tendencias
              </Button>
            </div>
          </div>
          
          {/* Search */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input 
              placeholder="Buscar recetas, ingredientes, chefs..."
              className="pl-12 h-12 text-lg"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Categories */}
        <div className="mb-8">
          <div className="flex gap-4 mb-6">
            <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">
              Populares
            </Button>
            <Button variant="outline">Vegetariano</Button>
            <Button variant="outline">Postres</Button>
            <Button variant="outline">Rápido</Button>
            <Button variant="outline">Mediterráneo</Button>
            <Button variant="outline">Saludable</Button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="col-span-8">
            {/* Featured Recipe */}
            <Card className="mb-8 overflow-hidden">
              <div className="relative">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1438118907704-7718ee9a191a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMHJlY2lwZXMlMjBjb29raW5nfGVufDF8fHx8MTc1ODkyMjkwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Ensalada mediterránea"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Button size="sm" variant="secondary" className="w-12 h-12 p-0 rounded-full bg-white/90 hover:bg-white">
                    <Heart className="w-5 h-5" />
                  </Button>
                </div>
                <Badge className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1">
                  Saludable
                </Badge>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Ensalada Mediterránea Deluxe</h2>
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>15 min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>4 personas</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>4.8 (234 reseñas)</span>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Una deliciosa ensalada fresca con ingredientes mediterráneos que te transportará directamente 
                  a las costas del Mediterráneo. Perfecta para una comida ligera y nutritiva.
                </p>
                <div className="flex gap-3">
                  <Button className="bg-orange-500 hover:bg-orange-600 flex-1">
                    Ver Receta Completa
                  </Button>
                  <Button variant="outline">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recipe Grid */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Recetas Populares</h2>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2glMjBjb29raW5nfGVufDF8fHx8MTc1ODkyMjkxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Pasta carbonara"
                      className="w-full h-48 object-cover"
                    />
                    <Button size="sm" variant="secondary" className="absolute top-3 right-3 w-8 h-8 p-0 rounded-full bg-white/90">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-2">Pasta Carbonara Auténtica</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        30 min
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        4.6
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Clásica pasta italiana con huevo y panceta, preparada como en Roma.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Ver Receta
                    </Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1643750182373-b4a55a8c2801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhZCUyMGJvd2wlMjBoZWFsdGh5fGVufDF8fHx8MTc1ODg4NTQwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Bowl de quinoa"
                      className="w-full h-48 object-cover"
                    />
                    <Button size="sm" variant="secondary" className="absolute top-3 right-3 w-8 h-8 p-0 rounded-full bg-white/90">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold mb-2">Bowl de Quinoa Energético</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        20 min
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        4.9
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Nutritivo bowl con quinoa y vegetales frescos de temporada.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Ver Receta
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-4">
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tu Actividad</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Recetas guardadas</span>
                    <span className="font-bold">23</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Recetas cocinadas</span>
                    <span className="font-bold">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Puntuación promedio</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="font-bold">4.7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trending */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tendencia de la Semana</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1590759485285-0e5c13ebba50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwaW5ncmVkaWVudHMlMjBraXRjaGVufGVufDF8fHx8MTc1ODkyMzIxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Tarta de manzana"
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">Tarta de Manzana Casera</h4>
                      <p className="text-sm text-gray-600">+156% de popularidad</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 text-yellow-500" />
                        <span className="text-sm">4.8</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Acciones Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Search className="w-4 h-4 mr-2" />
                    Buscar por ingredientes
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Clock className="w-4 h-4 mr-2" />
                    Recetas rápidas (&lt; 30 min)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Heart className="w-4 h-4 mr-2" />
                    Ver mis favoritas
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}