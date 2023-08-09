# Sprint 5.

## NodeJs y Testing

### Node

- Utilizar el archivo adjunto en el sprint 4 para el día 3 y el día 4.

  - El get deberá de retornar la lista adjunta en el sprint 4
  - El put deberá actualizar la lista adjunta en el sprint 4
  - El post deberá agregar un ítem a la lista adjunta en el sprint 4

- El sprint está dividio por objetivos diarios para que puedas construir un API sin mucha complejidad.
- Si te sobra tiempo y cumpliste con el objetivo diario, investiga e intenta agregar cosas nuevas a tu API.

### Testing

- Deberás crear funciones de Javascript y probar con la librería Jest. Esto es independiente a tu API y es para practicar las funciones de Jest

  - El archivo funciones.js tiene ejemplos de algunas funciones que puedes utilizar para realizar tus pruebas

- Para el día 8 de este sprint, las pruebas serán sobre las rutas de tu API.

  - Probablemente debas usar una librería extra aquí. supertest

- Ejemplo de una prueba de un endpoint

```js
/* eslint-disable no-undef */
// supertest es un framework que nos permite testar api rest
import request from "supertest";

const api = request("https://my-json-server.typicode.com/typicode/demo/");

describe("testing-api-rest", () => {
  test("GET /posts - success", async () => {
    const response = await api.get("/posts");
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual([
      {
        id: 1,
        title: "Post 1",
      },
      {
        id: 2,
        title: "Post 2",
      },
      {
        id: 3,
        title: "Post 3",
      },
    ]);
  });
});
```
