const fetchDataOverApi = require("../project/asyncExample");

test("test del usuario 1", async () => {
  const data = await fetchDataOverApi();
  expect(data).toBe("John");
});
