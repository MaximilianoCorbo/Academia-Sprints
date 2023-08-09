const request = require("supertest");
const app = require("../app");

describe("testear tareas", () => {
  test("Debe traer la tarea de id = 1", async () => {
    const response = await request(app).get("/api/tareas/obtenerTareasPorUsuario/1");
    
    expect(response.status).toBe(200);
    expect(response.body[0]).toEqual({
        id: 1,
        prioridad_id: 1,
        usuario_id: 1,
        titulo: "Tomar Agua",
        completado: true
    });
  });
});

describe("testear status", () => {
  test("El status de /tareas debe estar entre los valores 200 y 299", async () => {
    const response = await request(app).get("/api/tareas");
    expect(response.status).toBeGreaterThanOrEqual(200);
    expect(response.status).toBeLessThan(300);
    });
});

describe("testear status", () => {
  test("Completado=verdadero en id = 1", async () => {
    const response = await request(app).get("/api/tareas/1");
    expect(response.body[0].completado).toBeTruthy();
    });
});

describe("testear status", () => {
  test("Completado=falso en id = 4", async () => {
    const response = await request(app).get("/api/tareas/4");
    expect(response.body[0].completado).toBeFalsy();
    });
});

describe("testear status", () => {
  test("Busqueda de tarea indefinida", async () => {
    const response = await request(app).get("/api/tareas/3");
    expect(response.body[0].funcionalidad).toBeUndefined();
    });
});

describe("testear status", () => {
  test("Busqueda que contenga la palabra 'agua' en id = 2", async () => {
    const response = await request(app).get("/api/tareas/2");
    expect(response.body[0].titulo).toContain("Agua");
    });
});

describe("testear status", () => {
  test("Tener un largo de tareas", async () => {
    const response = await request(app).get("/api/tareas");
    expect(response.body).toHaveLength(8);
    });
});

describe("testear status", () => {
  test("Tener un largo dentro de la tarea id = 5", async () => {
    const response = await request(app).get("/api/tareas/5");
    expect(response.body[0].titulo).toHaveLength(20);
    });
});

describe("testear status", () => {
  test("Coincidir dentro de la tarea id = 3", async () => {
    const response = await request(app).get("/api/tareas/3");
    expect(response.body[0].titulo).toMatch(/Agua/);
    });
});