import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { 
  Search, 
  Filter, 
  Clock, 
  Star, 
  SlidersHorizontal,
  X,
  Grid3X3,
  List,
  Heart
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function RecipeSearch() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">Buscar Recetas</h1>
              <p className="text-gray-600 mt-1">Encuentra la receta perfecta para cualquier ocasión</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Grid3X3 className="w-4 h-4 mr-2" />
                Vista grid
              </Button>
              <Button variant="ghost" size="sm">
                <List className="w-4 h-4 mr-2" />
                Vista lista
              </Button>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input 
                placeholder="Buscar recetas, ingredientes, chefs..."
                className="pl-12 h-12 text-lg"
                defaultValue="pasta"
              />
            </div>
            <Button variant="outline" size="lg">
              <SlidersHorizontal className="w-5 h-5 mr-2" />
              Filtros Avanzados
            </Button>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-3 mb-4">
            <Badge variant="secondary" className="bg-orange-100 text-orange-700 flex items-center gap-2 px-3 py-1">
              Tiempo: &lt; 30 min
              <Button size="sm" variant="ghost" className="p-0 h-auto hover:bg-transparent">
                <X className="w-3 h-3" />
              </Button>
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-700 flex items-center gap-2 px-3 py-1">
              Vegetariano
              <Button size="sm" variant="ghost" className="p-0 h-auto hover:bg-transparent">
                <X className="w-3 h-3" />
              </Button>
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 flex items-center gap-2 px-3 py-1">
              Dificultad: Fácil
              <Button size="sm" variant="ghost" className="p-0 h-auto hover:bg-transparent">
                <X className="w-3 h-3" />
              </Button>
            </Badge>
            <Button variant="outline" size="sm" className="px-3 py-1">
              <Filter className="w-3 h-3 mr-1" />
              Más filtros
            </Button>
          </div>

          {/* Sort Options */}
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              <span className="font-medium text-gray-900">24 recetas</span> encontradas para "pasta"
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Ordenar por:</span>
              <Select defaultValue="relevance">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Más relevantes</SelectItem>
                  <SelectItem value="rating">Mejor puntuados</SelectItem>
                  <SelectItem value="time">Tiempo de preparación</SelectItem>
                  <SelectItem value="recent">Más recientes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar Filters */}
          <div className="col-span-3">
            <div className="bg-white rounded-xl p-6 sticky top-8">
              <h3 className="font-bold mb-4">Filtros</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Tipo de cocina</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="text-sm">Italiana (12)</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Mediterránea (8)</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Asiática (6)</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Mexicana (4)</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Dificultad</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="text-sm">Fácil (18)</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Intermedio (5)</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Difícil (1)</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Tiempo de preparación</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="text-sm">&lt; 30 min (15)</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">30-60 min (7)</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">&gt; 60 min (2)</span>
                    </label>
                  </div>
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  Aplicar Filtros
                </Button>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="col-span-9">
            <div className="grid grid-cols-3 gap-6">
              {/* Result 1 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2glMjBjb29raW5nfGVufDF8fHx8MTc1ODkyMjkxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Pasta Carbonara"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button size="sm" variant="secondary" className="absolute top-3 right-3 w-8 h-8 p-0 rounded-full bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Badge className="absolute bottom-3 left-3 bg-orange-500 text-white">
                    Destacada
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2">Pasta Carbonara Auténtica</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Receta tradicional italiana con panceta y huevos
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      25 min
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      4.8 (156)
                    </div>
                  </div>
                  <div className="flex gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      Italiano
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Fácil
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Ver Receta
                  </Button>
                </CardContent>
              </Card>

              {/* Result 2 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1590759485285-0e5c13ebba50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwaW5ncmVkaWVudHMlMjBraXRjaGVufGVufDF8fHx8MTc1ODkyMzIxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Pasta Primavera"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button size="sm" variant="secondary" className="absolute top-3 right-3 w-8 h-8 p-0 rounded-full bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2">Pasta Primavera</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Pasta fresca con vegetales de temporada
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      20 min
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      4.6 (89)
                    </div>
                  </div>
                  <div className="flex gap-2 mb-3">
                    <Badge variant="outline" className="text-xs bg-green-50 text-green-700">
                      Vegetariano
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Fácil
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Ver Receta
                  </Button>
                </CardContent>
              </Card>

              {/* Result 3 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1696805566858-fe4a670d5df3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGhvdG9ncmFwaHklMjBkaXNofGVufDF8fHx8MTc1ODkyMzIxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Pasta Boloñesa"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button size="sm" variant="secondary" className="absolute top-3 right-3 w-8 h-8 p-0 rounded-full bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2">Pasta Boloñesa Casera</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Salsa boloñesa tradicional cocinada a fuego lento
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      45 min
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      4.9 (203)
                    </div>
                  </div>
                  <div className="flex gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      Casero
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Intermedio
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Ver Receta
                  </Button>
                </CardContent>
              </Card>

              {/* Result 4 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1438118907704-7718ee9a191a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMHJlY2lwZXMlMjBjb29raW5nfGVufDF8fHx8MTc1ODkyMjkwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Pasta Pesto"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button size="sm" variant="secondary" className="absolute top-3 right-3 w-8 h-8 p-0 rounded-full bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2">Pasta al Pesto</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Pesto fresco de albahaca con piñones
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      15 min
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      4.7 (124)
                    </div>
                  </div>
                  <div className="flex gap-2 mb-3">
                    <Badge variant="outline" className="text-xs bg-green-50 text-green-700">
                      Vegetariano
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Fácil
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Ver Receta
                  </Button>
                </CardContent>
              </Card>

              {/* Result 5 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1643750182373-b4a55a8c2801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhZCUyMGJvd2wlMjBoZWFsdGh5fGVufDF8fHx8MTc1ODg4NTQwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Pasta con Champiñones"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button size="sm" variant="secondary" className="absolute top-3 right-3 w-8 h-8 p-0 rounded-full bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2">Pasta con Champiñones</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Cremosa pasta con variedad de setas frescas
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      30 min
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      4.5 (67)
                    </div>
                  </div>
                  <div className="flex gap-2 mb-3">
                    <Badge variant="outline" className="text-xs bg-green-50 text-green-700">
                      Vegetariano
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Fácil
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Ver Receta
                  </Button>
                </CardContent>
              </Card>

              {/* Result 6 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1590759485285-0e5c13ebba50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwaW5ncmVkaWVudHMlMjBraXRjaGVufGVufDF8fHx8MTc1ODkyMzIxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Pasta Arrabbiata"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button size="sm" variant="secondary" className="absolute top-3 right-3 w-8 h-8 p-0 rounded-full bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2">Pasta Arrabbiata</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Pasta con salsa picante de tomate y ajo
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      25 min
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      4.4 (92)
                    </div>
                  </div>
                  <div className="flex gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      Picante
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Fácil
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Ver Receta
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Load More */}
            <div className="flex justify-center mt-8">
              <Button variant="outline" size="lg">
                Cargar más resultados (18 restantes)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}