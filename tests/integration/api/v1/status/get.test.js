test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  // TESTES QUE FIZ PARA O EXERCÍCIO
  // const postgresVersion = +responseBody.postgres_version;
  // expect(postgresVersion).toBeDefined();
  // expect(postgresVersion).toBeGreaterThan(0);

  // const maxConnections = +responseBody.max_connections;
  // expect(maxConnections).toBeDefined();
  // expect(maxConnections).toBeGreaterThan(0);

  // const usedConnections = +responseBody.used_connections;
  // expect(usedConnections).toBeDefined() ;
  // expect(usedConnections).toBeGreaterThan(0);

  expect(responseBody.dependencies.database.version).toEqual("16.13");
  expect(responseBody.dependencies.database.max_connections).toEqual(100);
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});
