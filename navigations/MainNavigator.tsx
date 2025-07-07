import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//COMPONENTES
import GuardarScreen from "../screens/GuardarScreen";
import LeerScreen from "../screens/LeerScreen";
import EditarScreen from "../screens/EditarScreen";
import EliminarScreen from "../screens/EliminarScreen";
import HomeScreen from "../screens/HomeScreen";
import CargarProductosScreen from "../screens/CargarDatosScreen";
import CatalogoScreen from "../screens/CatalogoScreen";
import AgregarProductoScreen from "../screens/AgregarProductoScreen";


const Stack =  createStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Guardar" component={GuardarScreen} />
            <Stack.Screen name="Leer" component={LeerScreen} />
            <Stack.Screen name="Editar" component={EditarScreen} />
            <Stack.Screen name="Eliminar" component={EliminarScreen} />
            <Stack.Screen name="CargarProductos" component={CargarProductosScreen} />
            <Stack.Screen name="Catalogo" component={CatalogoScreen} />
            <Stack.Screen name="AgregarProducto" component={AgregarProductoScreen} />

        </Stack.Navigator>
    )
}



export default function NavegadorPrincipal(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}