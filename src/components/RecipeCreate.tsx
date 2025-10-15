import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { 
  ArrowLeft, 
  Camera, 
  Plus, 
  X, 
  Clock, 
  Users, 
  ChefHat,
  Minus,
  Save
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function RecipeCreate() {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <Button size="sm" variant="ghost" className="p-2">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-bold">Nueva Receta</h1>
        </div>
        <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
          <Save className="w-4 h-4 mr-1" />
          Guardar
        </Button>
      </div>

      <div className="p-6 space-y-6">
        {/* Photo Upload */}
        <Card className="border-dashed border-2 border-gray-300">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Camera className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="font-medium mb-1">Añadir Foto</h3>
            <p className="text-sm text-gray-600 mb-3">
              Una buena foto hace que tu receta se vea deliciosa
            </p>
            <Button variant="outline" size="sm">
              <Camera className="w-4 h-4 mr-2" />
              Subir Imagen
            </Button>
          </CardContent>
        </Card>

        {/* Basic Info */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Nombre de la Receta</Label>
            <Input 
              id="title"
              placeholder="Ej: Pasta Carbonara Casera"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="description">Descripción</Label>
            <Textarea 
              id="description"
              placeholder="Describe tu receta, qué la hace especial..."
              className="mt-1 h-20"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="time">Tiempo (minutos)</Label>
              <div className="flex items-center gap-2 mt-1">
                <Clock className="w-4 h-4 text-gray-400" />
                <Input 
                  id="time"
                  type="number"
                  placeholder="30"
                  className="flex-1"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="servings">Porciones</Label>
              <div className="flex items-center gap-2 mt-1">
                <Users className="w-4 h-4 text-gray-400" />
                <Input 
                  id="servings"
                  type="number"
                  placeholder="4"
                  className="flex-1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div>
          <Label>Categorías</Label>
          <div className="flex flex-wrap gap-2 mt-2 mb-3">
            <Badge variant="secondary" className="bg-orange-100 text-orange-700">
              Italiano
              <Button size="sm" variant="ghost" className="p-0 ml-1 h-auto">
                <X className="w-3 h-3" />
              </Button>
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              Vegetariano
              <Button size="sm" variant="ghost" className="p-0 ml-1 h-auto">
                <X className="w-3 h-3" />
              </Button>
            </Badge>
          </div>
          <Input placeholder="Añadir categoría..." />
        </div>

        {/* Ingredients */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ChefHat className="w-5 h-5" />
              Ingredientes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-2">
              <Input placeholder="Ingrediente" className="flex-1" />
              <Input placeholder="Cantidad" className="w-24" />
              <Button size="sm" variant="ghost" className="p-2">
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex gap-2">
              <Input placeholder="Ingrediente" className="flex-1" defaultValue="Spaghetti" />
              <Input placeholder="Cantidad" className="w-24" defaultValue="400g" />
              <Button size="sm" variant="ghost" className="p-2">
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex gap-2">
              <Input placeholder="Ingrediente" className="flex-1" defaultValue="Panceta" />
              <Input placeholder="Cantidad" className="w-24" defaultValue="150g" />
              <Button size="sm" variant="ghost" className="p-2">
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex gap-2">
              <Input placeholder="Ingrediente" className="flex-1" defaultValue="Huevos" />
              <Input placeholder="Cantidad" className="w-24" defaultValue="3 unidades" />
              <Button size="sm" variant="ghost" className="p-2">
                <X className="w-4 h-4" />
              </Button>
            </div>

            <Button variant="outline" size="sm" className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Añadir Ingrediente
            </Button>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card>
          <CardHeader>
            <CardTitle>Instrucciones</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-1">
                1
              </div>
              <div className="flex-1">
                <Textarea 
                  placeholder="Describe el primer paso..."
                  className="h-16"
                  defaultValue="Hierve agua con sal abundante y cocina los spaghetti al dente."
                />
              </div>
              <Button size="sm" variant="ghost" className="p-2 mt-1">
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-1">
                2
              </div>
              <div className="flex-1">
                <Textarea 
                  placeholder="Describe el segundo paso..."
                  className="h-16"
                  defaultValue="Corta la panceta en dados y cocínala hasta que esté dorada."
                />
              </div>
              <Button size="sm" variant="ghost" className="p-2 mt-1">
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-1">
                3
              </div>
              <div className="flex-1">
                <Textarea 
                  placeholder="Describe el siguiente paso..."
                  className="h-16"
                />
              </div>
              <Button size="sm" variant="ghost" className="p-2 mt-1">
                <X className="w-4 h-4" />
              </Button>
            </div>

            <Button variant="outline" size="sm" className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Añadir Paso
            </Button>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card>
          <CardHeader>
            <CardTitle>Consejos (Opcional)</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea 
              placeholder="Comparte algunos consejos para que la receta salga perfecta..."
              className="h-20"
            />
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          <Button className="w-full bg-orange-500 hover:bg-orange-600 py-3">
            <Save className="w-4 h-4 mr-2" />
            Publicar Receta
          </Button>
          <Button variant="outline" className="w-full py-3">
            Guardar como Borrador
          </Button>
        </div>
      </div>
    </div>
  );
}