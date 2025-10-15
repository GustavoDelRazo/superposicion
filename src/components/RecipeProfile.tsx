import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Settings, 
  Heart, 
  Book, 
  Award, 
  Clock, 
  Star, 
  Users,
  Camera,
  Edit
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function RecipeProfile() {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold">Mi Perfil</h1>
          <Button size="sm" variant="ghost" className="p-2 text-white hover:bg-white/10">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
        
        {/* Profile Info */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <Avatar className="w-20 h-20">
              <AvatarImage src="https://images.unsplash.com/photo-1659354218430-ac7f0b31e977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHByb2ZpbGV8ZW58MXx8fHwxNzU4OTIzMjE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" />
              <AvatarFallback>MT</AvatarFallback>
            </Avatar>
            <Button size="sm" className="absolute -bottom-1 -right-1 w-7 h-7 p-0 rounded-full bg-white text-gray-600 hover:bg-gray-100">
              <Camera className="w-3 h-3" />
            </Button>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-white">María Torres</h2>
            <p className="text-orange-100 text-sm">Chef casera apasionada</p>
            <div className="flex items-center gap-1 mt-1">
              <Star className="w-4 h-4 text-yellow-300" />
              <span className="text-sm text-white">4.8 • 127 seguidores</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">23</div>
            <div className="text-xs text-orange-100">Recetas</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">156</div>
            <div className="text-xs text-orange-100">Me gusta</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">89</div>
            <div className="text-xs text-orange-100">Guardadas</div>
          </div>
        </div>
      </div>

      {/* Profile Tabs */}
      <div className="p-6">
        <Tabs defaultValue="recipes" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="recipes">Mis Recetas</TabsTrigger>
            <TabsTrigger value="favorites">Favoritas</TabsTrigger>
            <TabsTrigger value="achievements">Logros</TabsTrigger>
          </TabsList>

          <TabsContent value="recipes" className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Recetas Creadas</h3>
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                <Edit className="w-4 h-4 mr-1" />
                Nueva
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2glMjBjb29raW5nfGVufDF8fHx8MTc1ODkyMjkxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Carbonara de la abuela"
                    className="w-full h-24 object-cover"
                  />
                  <div className="p-3">
                    <h4 className="font-medium text-sm mb-1">Carbonara de la Abuela</h4>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500" />
                        4.9
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3 text-red-500" />
                        24
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1438118907704-7718ee9a191a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMHJlY2lwZXMlMjBjb29raW5nfGVufDF8fHx8MTc1ODkyMjkwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Ensalada detox"
                    className="w-full h-24 object-cover"
                  />
                  <div className="p-3">
                    <h4 className="font-medium text-sm mb-1">Ensalada Detox</h4>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500" />
                        4.7
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3 text-red-500" />
                        18
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1643750182373-b4a55a8c2801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhZCUyMGJvd2wlMjBoZWFsdGh5fGVufDF8fHx8MTc1ODg4NTQwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Bowl energético"
                    className="w-full h-24 object-cover"
                  />
                  <div className="p-3">
                    <h4 className="font-medium text-sm mb-1">Bowl Energético</h4>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500" />
                        4.8
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3 text-red-500" />
                        31
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1590759485285-0e5c13ebba50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwaW5ncmVkaWVudHMlMjBraXRjaGVufGVufDF8fHx8MTc1ODkyMzIxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Tarta casera"
                    className="w-full h-24 object-cover"
                  />
                  <div className="p-3">
                    <h4 className="font-medium text-sm mb-1">Tarta de Manzana</h4>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500" />
                        4.6
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3 text-red-500" />
                        15
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="favorites" className="mt-6 space-y-4">
            <h3 className="font-medium">Recetas Guardadas</h3>
            
            <div className="space-y-3">
              <Card>
                <CardContent className="p-3">
                  <div className="flex gap-3">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1696805566858-fe4a670d5df3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGhvdG9ncmFwaHklMjBkaXNofGVufDF8fHx8MTc1ODkyMzIxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Paella valenciana"
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">Paella Valenciana</h4>
                      <p className="text-sm text-gray-600">Chef Ricardo</p>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          45 min
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500" />
                          4.9
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-3">
                  <div className="flex gap-3">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRpc2glMjBjb29raW5nfGVufDF8fHx8MTc1ODkyMjkxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Risotto cremoso"
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">Risotto de Champiñones</h4>
                      <p className="text-sm text-gray-600">Chef Sofia</p>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          35 min
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500" />
                          4.7
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="mt-6 space-y-4">
            <h3 className="font-medium">Mis Logros</h3>
            
            <div className="grid grid-cols-2 gap-3">
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Award className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="font-medium text-sm">Chef Novato</div>
                  <div className="text-xs text-gray-600">5 recetas creadas</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Heart className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="font-medium text-sm">Muy Querido</div>
                  <div className="text-xs text-gray-600">100 me gusta</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="font-medium text-sm">Influencer</div>
                  <div className="text-xs text-gray-600">100 seguidores</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Book className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="font-medium text-sm">Coleccionista</div>
                  <div className="text-xs text-gray-600">50 guardadas</div>
                </CardContent>
              </Card>
            </div>

            {/* Next Achievement */}
            <Card className="bg-gray-50">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">Próximo Logro: Chef Experto</div>
                    <div className="text-xs text-gray-600 mb-2">Crea 20 recetas (23/20) ✓</div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}