// Run from the repository root against the disposable, seeded CI stack.
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';

const origin = 'http://127.0.0.1:3000';
assert.equal((await fetch(origin)).status, 200);
assert.equal((await fetch('http://127.0.0.1:4000/api/docs')).status, 200);

async function api(path, { body, token, key } = {}) {
  const headers = {};
  if (body) headers['Content-Type'] = 'application/json';
  if (token) headers.Authorization = `Bearer ${token}`;
  if (key) headers['Idempotency-Key'] = key;
  const response = await fetch(`${origin}/api${path}`, {
    method: body ? 'POST' : 'GET',
    headers,
    body: body && JSON.stringify(body),
    signal: AbortSignal.timeout(15000),
  });
  return { status: response.status, data: await response.json() };
}

const menu = await api('/products');
assert.equal(menu.status, 200);
const product = menu.data.data.find((item) => item.stock > 0);
assert.ok(product, 'Seed must create at least one orderable product');

const login = await api('/auth/login', {
  body: { email: 'demo@brewlite.com', password: 'Demo@1234' },
});
assert.equal(login.status, 200);
const token = login.data.accessToken;
assert.ok(token);

const order = await api('/orders', {
  token,
  key: randomUUID(),
  body: { items: [{ productId: product.id, size: 'S', quantity: 1 }] },
});
assert.equal(order.status, 201);
assert.equal(order.data.status, 'PENDING');

const payment = await api('/payments', {
  token,
  key: randomUUID(),
  body: { orderId: order.data.id, method: 'WALLET', mockResult: 'SUCCESS' },
});
assert.equal(payment.status, 201);

const history = await api('/orders/me', { token });
assert.equal(history.status, 200);
assert.equal(history.data.data.find((item) => item.id === order.data.id)?.status, 'PAID');
console.log('Web, Swagger, seed, mock checkout and order history passed.');
