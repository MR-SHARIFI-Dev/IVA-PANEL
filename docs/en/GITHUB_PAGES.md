# Publish the IVA Panel website with GitHub Pages

The project website lives in this repository's `docs/` folder and can be published without a separate server.

## Enable Pages

1. Upload and commit the website package while preserving its folder structure.
2. Open the repository's **Settings** page.
3. Select **Pages** in the left sidebar.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Select branch **main** and folder **/docs**.
6. Click **Save** and wait a few minutes for the website URL.

The standard URL is:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
```

Add the generated URL to the repository's **About → Website** field. Future commits to `docs/` are published automatically.

If the site returns 404, confirm that `docs/index.html` exists, the selected source is `main /docs`, and the Pages workflow completed successfully in the **Actions** tab.

Do not add a `CNAME` file until a custom domain and its DNS records are ready.

