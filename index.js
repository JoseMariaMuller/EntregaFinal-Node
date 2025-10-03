const BASE_URL = 'https://fakestoreapi.com';

const [, , metodo, recursoCompleto, ...parametros] = process.argv;
const [recurso, id] = recursoCompleto.split('/');


// Función para obtener todos los productos
async function obtenerTodosLosProductos() {
    try {
        const respuesta = await fetch(`${BASE_URL}/products`);
        const productos = await respuesta.json();
        console.log(productos);
    } catch (error) {
        console.error('Error al obtener los productos:', error.message);
    }
}

// Función para obtener un producto por ID
async function obtenerProductoPorId(id) {
    try {
        const respuesta = await fetch(`${BASE_URL}/products/${id}`);
        if (!respuesta.ok) throw new Error('Producto no encontrado');
        const producto = await respuesta.json();
        console.log(producto);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Función para crear un nuevo producto
async function crearProducto(titulo, precio, categoria) {
    try {
        const nuevoProducto = {
            title: titulo,
            price: Number(precio),
            category: categoria
        };

        const respuesta = await fetch(`${BASE_URL}/products`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevoProducto)
        });

        if (!respuesta.ok) throw new Error('No se pudo crear el producto');
        const productoCreado = await respuesta.json();
        console.log('✅ Producto creado:', productoCreado);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Función para eliminar un producto
async function eliminarProducto(id) {
    try {
        const respuesta = await fetch(`${BASE_URL}/products/${id}`, {
            method: 'DELETE'
        });

        if (!respuesta.ok) throw new Error('No se pudo eliminar el producto');
        const resultado = await respuesta.json();
        console.log('🗑️  Producto eliminado:', resultado);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Función principal que decide qué hacer según el comando
async function iniciar() {
  switch (metodo) {
    case 'GET':
        if (recurso === 'products') {
            if (id) {
                await obtenerProductoPorId(id);
            } else if (parametros.length > 0) {
                await obtenerProductoPorId(parametros[0]);
            } else {
                await obtenerTodosLosProductos();
            }
        } else {
            console.error('Recurso no válido para GET');
        }
        break;

    case 'POST':
        if (recurso === 'products') {
            const [titulo, precio, categoria] = parametros;
            if (titulo && precio && categoria) {
                await crearProducto(titulo, precio, categoria);
            } else {
                console.error('Faltan datos para crear el producto (titulo, precio, categoria)');
            }
        } else {
            console.error('Recurso no válido para POST');
        }
        break;

    case 'DELETE':
        if (recurso === 'products') {
            const idAEliminar = id || parametros[0];
            if (idAEliminar) {
                await eliminarProducto(idAEliminar);
            } else {
                console.error('Falta el ID del producto a eliminar');
            }
        } else {
            console.error('Recurso no válido para DELETE');
        }
        break;

    default:
        console.error('Método no reconocido. Usá GET, POST o DELETE.');
    }
}

iniciar();
