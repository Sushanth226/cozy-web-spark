# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/41d8af61-3b35-4ce2-8a17-6bce9fe1d9e7

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/41d8af61-3b35-4ce2-8a17-6bce9fe1d9e7) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/41d8af61-3b35-4ce2-8a17-6bce9fe1d9e7) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

---

# Cafe Website – Webhook & Deployment Guide

## Replacing the n8n Webhook URL

1. Open the app and go to the "Feedback" page (also linked in the footer).
2. Paste your n8n webhook URL into the "n8n Webhook URL" field.
   - Example: `https://n8n.yourdomain.com/webhook/XXXXXXXX`
3. Click "Save". The URL is stored locally in your browser (localStorage).
4. Submit the form. A POST request will be sent with this JSON structure:

```json
{
  "customer_name": "John Doe",
  "email": "john@example.com",
  "visit_frequency": "Weekly",
  "coffee_quality": 5,
  "service_quality": 4,
  "favorite_item": "Latte",
  "improvement_suggestions": "Add more vegan options"
}
```

Notes:
- We send the request with `mode: "no-cors"` to avoid development CORS issues. Check your n8n execution history to verify receipt.
- Update the saved URL anytime from the Feedback page.

## Deploying

- In Lovable, click "Share" → "Publish" to deploy.
- For a custom domain, go to Project → Settings → Domains and follow the steps.

## Accessibility & SEO

- All inputs are labeled and keyboard-accessible.
- Pages set titles, meta descriptions, and canonical tags using `react-helmet-async`.
