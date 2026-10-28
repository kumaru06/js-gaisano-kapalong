# Deployment

This app is a Next.js project and can be deployed on Vercel. Do not put real API keys in Git.

## 1. Create the Git repository

The folder may already contain a local Git repository created with the Next.js scaffold. If it does not:

```bash
git init
git add .
git commit -m "Add the Kapalong academic website"
```

Create an empty GitHub repository, then:

```bash
git remote add origin https://github.com/YOUR_USER/js-gaisano-kapalong.git
git branch -M main
git push -u origin main
```

Confirm `.env.local` is not in the commit. `.env.example` should be included.

## 2. Import into Vercel

1. Sign in at [vercel.com](https://vercel.com).
2. Choose **Add New… → Project** and import the GitHub repository.
3. Framework preset: Next.js. Root directory: the repository root.
4. Add environment variables before the first deploy:
   - `NEXT_PUBLIC_SITE_URL` = your production URL, such as `https://your-project.vercel.app`
   - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` = optional Embed API key
5. Deploy.

## 3. Restrict the Maps key

After the first URL exists, add that origin to the key’s HTTP referrer restrictions, along with `http://localhost:3000/*` for local work. Limit the key to Maps Embed API. The key is public in the browser, so restriction is what keeps it from being reused on other sites.

## 4. Check the deployed site

Open these routes:

- `/`
- `/about`
- `/products`
- `/contact`

On Contact, confirm the map shows Kapalong, the Get Directions link opens that same destination, and the fallback Google Maps link works. Submit the inquiry form and confirm the success text says the message was not emailed or saved.

Search the catalog, filter a category, and use Reset filters.

## 5. Update the live site

Commit changes, push to the connected branch, and Vercel will redeploy. If you change `NEXT_PUBLIC_` variables, redeploy after saving them in the Vercel project settings.
