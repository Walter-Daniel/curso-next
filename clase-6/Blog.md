```mermaid
graph TD;
    A[Autenticación] --> B[Página de Usuario];
    B --> C[Crear Publicación];
    C --> D[Comentarios];

    subgraph Autenticación
        A --> A1[Ingresar Credenciales];
        A1 --> A2[Verificar Credenciales];
        A2 -->|Credenciales Correctas| B;
        A2 -->|Credenciales Incorrectas| A1;
    end

    subgraph Página de Usuario
        B --> B1[Ver Publicaciones Anteriores];
        B --> B2[Editar Perfil];
    end

    subgraph Crear Publicación
        C --> C1[Seleccionar Categoría];
        C1 --> C2[Subir Imágenes];
        C2 --> C3[Escribir Contenido];
        C3 --> C4[Publicar];
       
    end

    subgraph Comentarios
        D --> D1[Leer Comentarios];
        
    end