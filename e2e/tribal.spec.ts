import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero section with Clearwater Band content', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { name: /Honoring Our Heritage/i })).toBeVisible()
  })

  test('renders stats section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Enrolled Members')).toBeVisible()
    await expect(page.getByText('12,400')).toBeVisible()
  })

  test('renders CTA section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('Member Services Portal').first()).toBeVisible()
  })
})

test.describe('Departments', () => {
  test('listing page shows all departments', async ({ page }) => {
    await page.goto('/departments')
    await expect(page.getByRole('heading', { level: 1, name: 'Departments' })).toBeVisible()
    await expect(page.getByText('Cultural Preservation').first()).toBeVisible()
    await expect(page.getByText('Natural Resources').first()).toBeVisible()
  })

  test('detail page renders via slug', async ({ page }) => {
    await page.goto('/cultural-preservation-department')
    await expect(page.getByRole('heading', { name: /Cultural Preservation/i }).first()).toBeVisible()
  })
})

test.describe('Council Members', () => {
  test('listing page shows council members', async ({ page }) => {
    await page.goto('/council')
    await expect(page.getByRole('heading', { level: 1, name: 'Council' })).toBeVisible()
    await expect(page.getByText('Mary Whitehawk').first()).toBeVisible()
    await expect(page.getByText('James Strongbow').first()).toBeVisible()
  })
})

test.describe('Services', () => {
  test('listing page shows services', async ({ page }) => {
    await page.goto('/services')
    await expect(page.getByRole('heading', { level: 1, name: 'Services' })).toBeVisible()
    await expect(page.getByText('Language Immersion').first()).toBeVisible()
    await expect(page.getByText('Elder Services').first()).toBeVisible()
  })
})

test.describe('Events', () => {
  test('listing page shows events', async ({ page }) => {
    await page.goto('/events')
    await expect(page.getByRole('heading', { level: 1, name: 'Events' })).toBeVisible()
    await expect(page.getByText('Powwow').first()).toBeVisible()
    await expect(page.getByText('Wild Rice').first()).toBeVisible()
  })
})

test.describe('News', () => {
  test('listing page shows news articles', async ({ page }) => {
    await page.goto('/news')
    await expect(page.getByRole('heading', { level: 1, name: 'News' })).toBeVisible()
    await expect(page.getByText('Self-Governance').first()).toBeVisible()
    await expect(page.getByText('Health Center').first()).toBeVisible()
  })
})

test.describe('Static Pages', () => {
  test('about page renders', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByRole('heading', { name: /About the Clearwater/i })).toBeVisible()
  })

  test('contact page renders', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.getByRole('heading', { name: /Contact/i }).first()).toBeVisible()
  })
})

test.describe('Navigation', () => {
  test('header has all navigation links', async ({ page }) => {
    await page.goto('/')
    const nav = page.locator('nav')
    await expect(nav.locator('a[href="/departments"]')).toBeVisible()
    await expect(nav.locator('a[href="/council"]')).toBeVisible()
    await expect(nav.locator('a[href="/services"]')).toBeVisible()
    await expect(nav.locator('a[href="/events"]')).toBeVisible()
    await expect(nav.locator('a[href="/news"]')).toBeVisible()
  })
})
