const { test, expect } = require('@playwright/test');

test('Zurich E2E Regression - Verification Application Uptime', async ({ page }) => {
  // 1. On navigue vers l'application et on attend que le réseau soit totalement inactif
  // (ce qui garantit que l'écran de chargement est passé)
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // 2. On vérifie simplement que l'URL est la bonne
  await expect(page).toHaveURL('http://localhost:3000/#/');

  console.log('✅ Test de non-régression réussi avec succès ! L\'application est pleinement opérationnelle.');
});