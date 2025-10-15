import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  Clock, 
  Users, 
  ChefHat, 
  Star,
  Timer,
  Printer,
  MessageCircle,
  CheckCircle
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function RecipeDetail() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b px-8 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver
              </Button>
              <div>
                <h1 className="text-2xl font-bold">Pasta Carbonara Auténtica</h1>
                <p className="text-gray-600">Receta tradicional italiana</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Printer className="w-4 h-4 mr-2" />
                Imprimir
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Compartir
              </Button>
              <Button size="sm" className="bg-red-500 hover:bg-red-600">
                <Heart className="w-4 h-4 mr-2" />
                Guardar
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="col-span-8">
            {/* Hero Image */}
            <div className="relative mb-8">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1696805566858-fe4a670d5df3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGhvdG9ncmFwaHklMjBkaXNofGVufDF8fHx8MTc1ODkyMzIxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Pasta Carbonara"
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Badge className="bg-green-500 text-white px-3 py-1">
                  Auténtico
                </Badge>
                <Badge variant="secondary">
                  Italiano
                </Badge>
              </div>
            </div>

            {/* Recipe Info */}
            <div className="bg-white rounded-xl p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="https://images.unsplash.com/photo-1659354218430-ac7f0b31e977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHByb2ZpbGV8ZW58MXx8fHwxNzU4OTIzMjE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
                    <AvatarFallback>MA</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Marco Aurelio</div>
                    <div className="text-sm text-gray-600">Chef tradicional • 127 recetas</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="flex items-center gap-1 mb-1">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="font-medium">30 min</span>
                    </div>
                    <span className="text-sm text-gray-600">Tiempo total</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-1 mb-1">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="font-medium">4 personas</span>
                    </div>
                    <span className="text-sm text-gray-600">Porciones</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="font-medium">4.8</span>
                    </div>
                    <span className="text-sm text-gray-600">234 reseñas</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                La auténtica carbonara romana, preparada como se hace en Italia desde hace generaciones. 
                Sin nata, sin ajo, solo los ingredientes tradicionales para un sabor incomparable que te 
                transportará directamente a las calles de Roma.
              </p>
            </div>

            {/* Ingredients */}
            <div className="bg-white rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <ChefHat className="w-6 h-6" />
                Ingredientes
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="font-medium">Spaghetti</span>
                    </div>
                    <span className="text-gray-600">400g</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="font-medium">Panceta</span>
                    </div>
                    <span className="text-gray-600">150g</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="font-medium">Huevos enteros</span>
                    </div>
                    <span className="text-gray-600">3 unidades</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="font-medium">Queso Pecorino Romano</span>
                    </div>
                    <span className="text-gray-600">100g</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="font-medium">Pimienta negra</span>
                    </div>
                    <span className="text-gray-600">Al gusto</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span className="font-medium">Sal gruesa</span>
                    </div>
                    <span className="text-gray-600">Para el agua</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-white rounded-xl p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Timer className="w-6 h-6" />
                Instrucciones paso a paso
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-2">Preparar el agua para la pasta</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Hierve agua con sal abundante en una olla grande. La proporción debe ser aproximadamente 
                      10g de sal por litro de agua. Cuando el agua hierva, añade los spaghetti y cocina al dente 
                      según las instrucciones del paquete (normalmente 8-10 minutos).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-2">Cocinar la panceta</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Mientras tanto, corta la panceta en dados pequeños de aproximadamente 1cm. Cocínala en una 
                      sartén grande a fuego medio-bajo hasta que esté dorada y crujiente. No añadas aceite, 
                      la panceta soltará su propia grasa.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-2">Preparar la mezcla de huevos</h3>
                    <p className="text-gray-700 leading-relaxed">
                      En un bowl grande, bate los huevos enteros con el queso Pecorino rallado y una generosa 
                      cantidad de pimienta negra recién molida. La mezcla debe quedar homogénea y cremosa.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-2">Combinar todos los elementos</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Escurre la pasta reservando un poco del agua de cocción. Inmediatamente, mezcla la pasta 
                      caliente con la panceta en la sartén. Retira del fuego y añade la mezcla de huevo removiendo 
                      rápidamente para crear una salsa cremosa. Añade agua de cocción si es necesario.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-4">
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardContent className="p-6">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 mb-3 h-12">
                    <Timer className="w-5 h-5 mr-2" />
                    Comenzar a Cocinar
                  </Button>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" size="sm">
                      <Heart className="w-4 h-4 mr-1" />
                      Favorito
                    </Button>
                    <Button variant="outline" size="sm">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Hecho
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Nutrition Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Información Nutricional</CardTitle>
                  <p className="text-sm text-gray-600">Por porción</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Calorías</span>
                    <span className="font-medium">485 kcal</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Proteínas</span>
                    <span className="font-medium">22g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Carbohidratos</span>
                    <span className="font-medium">58g</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Grasas</span>
                    <span className="font-medium">18g</span>
                  </div>
                </CardContent>
              </Card>

              {/* Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Consejos del Chef</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <p className="text-sm">
                      <strong>Secreto:</strong> La temperatura es clave. La pasta debe estar muy caliente 
                      para cocinar los huevos sin que se conviertan en huevos revueltos.
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm">
                      <strong>Ingrediente:</strong> Usa siempre Pecorino Romano, no Parmesano. 
                      Es la diferencia entre una carbonara auténtica y una imitación.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Comments */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Comentarios (23)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>AM</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-sm">Ana María</div>
                      <p className="text-sm text-gray-600">¡Perfecta! Siguiendo los pasos al pie de la letra queda increíble.</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 text-yellow-500" />
                        <Star className="w-3 h-3 text-yellow-500" />
                        <Star className="w-3 h-3 text-yellow-500" />
                        <Star className="w-3 h-3 text-yellow-500" />
                        <Star className="w-3 h-3 text-yellow-500" />
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    Ver todos los comentarios
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