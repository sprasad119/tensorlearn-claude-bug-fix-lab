import test from 'node:test';
import assert from 'node:assert/strict';
import { getClaim } from '../../src/claims.mjs';

// Incident: viewer user-4 received claim-B, owned by user-42 (prefix match on ownerId).
test('a viewer whose ID is a prefix of the owner ID does not receive the claim', () => {
  const claims = [
    { id: 'claim-A', ownerId: 'user-4', status: 'open' },
    { id: 'claim-B', ownerId: 'user-42', status: 'approved' },
  ];
  assert.equal(getClaim(claims, 'user-4', 'claim-B'), null);
  assert.equal(getClaim(claims, 'user-42', 'claim-B'), claims[1]);
});
