# Deployment Guide

This document outlines the process for deploying the Light Ocean Studios website.

## Hosting Platform

The static nature of the initial site makes it a perfect candidate for deployment on platforms like:
- **Netlify**
- **Vercel**
- **GitHub Pages**

These platforms offer free tiers for static sites, automatic deployments from Git, and simple custom domain configuration.

## Standard Deployment Steps

1.  **Connect Git Repository**: Connect the GitHub repository to the chosen hosting platform.
2.  **Configure Build Settings**:
    -   **Build Command**: N/A (for the current static site). If a build step is added (e.g., for Sass or JavaScript minification), this will need to be configured.
    -   **Publish Directory**: `html`
3.  **Set Environment Variables**: If any API keys or other secrets are introduced later, they should be stored as environment variables in the hosting platform's dashboard, not committed to the repository.
4.  **Configure Domain**:
    -   Add the custom domain (e.g., `lightoceanstudios.com`) to the project settings.
    -   Update the DNS records with your domain registrar to point to the hosting provider.
5.  **Enable SSL**: Most modern hosting platforms provide free, automated SSL certificates (e.g., via Let's Encrypt). Ensure this is enabled to serve the site over HTTPS.

## Pre-launch Deployment Checklist

- [ ] Verify that the publish directory is correctly set to `html`.
- [ ] Ensure the custom domain has been configured and DNS has propagated.
- [ ] Confirm that the SSL certificate is active and the site loads via `https://`.
- [ ] Test all site functionality on the live URL, including the email capture modal and all animations.
