import "@testing-library/jest-dom/extend-expect";
import "whatwg-fetch";

import { server } from "../../src/api_mocks/server";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
