# 🚀 ENTREGA FINAL NODE — API REST con Firebase, JWT y Express

API REST construida con **Node.js**, **Express**, **Firebase Firestore** y **JWT**, que permite manejar productos (CRUD) con rutas protegidas mediante autenticación.

🌐 URL de despliegue: [https://entrega-final-node-pink.vercel.app/](https://entrega-final-node-pink.vercel.app/)

---

## 📁 Estructura del proyecto



ENTREGA-NODEJS/
```
├── src/
│   ├── controllers/ 
│   │   ├── products.controllers.js
│   │   └── auth.controllers.js        
│   ├── services/  
│   │   ├── products.services.js          
│   ├── models/  
│   │   ├── products.models.js            
│   ├── routes/ 
│   │   ├── auth.routes.js     
│   │   └── products.routes.js             
│   ├── middleware/ 
│   │   ├── authentication.js        
│   └── data/ 
│       ├── data.js    
│       └── token.js  
├── .env 
├── package.json
├── vercel.json 
└── index.js 


```

## 🚀 Tecnologías utilizadas

- Node.js  
- JavaScript (ES)  
- Express (framework web para Node.js) 
- Firebase Firestore  
- JWT (jsonwebtoken)  
- CORS  
- dotenv  
- (Opcional) configuración para despliegue vía Vercel — por el archivo `vercel.json`


## ⚙️ Variables de entorno (`.env`)

Tu aplicación requiere estas claves:

```bash
JWT_SECRET_KEY=xxxxxx

FIREBASE_API_KEY=xxxxxx
FIREBASE_AUTH_DOMAIN=xxxxxx
FIREBASE_STORAGE_BUCKET=xxxxxx
FIREBASE_APP_ID=xxxxxx
```

## 🛠 Instalación y ejecución local

1. Clonar el repositorio:

```bash
git clone https://github.com/JoseMariaMuller/EntregaFinal-Node.git
cd EntregaFinal-Node
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar el servidor en modo desarrollo / local:
```bash
npm start
```

## 👨‍💻 Autor

José María Müller
— Entrega Final  Node.js
2025