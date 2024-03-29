# ovatify-web-demo

Music platform focused on sharing and viewing music information, designed to offer tailored experiences to music enjoyers.

![Ovatify Demo Image](https://github.com/akifisitan/ovatify-demo/blob/main/ovatify.png)

## Preface

This is a demo version of the web app with static assets and predetermined responses. The main idea is to show a feel of the website without the need for a backend server. As such the code has been modified, please check out the [main repository](https://github.com/enesonus/ovatify-web) for the original source code and git history.

### Repositories

- [Web](https://github.com/enesonus/ovatify-web)
- [Backend](https://github.com/enesonus/ovatify-backend)
- [Mobile](https://github.com/enesonus/ovatify-mobile)

## Features

- Display a wide range of songs and albums
- Personalized music recommendations
- User rating system for songs
- Social features, including friend connections
- Habit, song and artist statistics
- Responsive web and mobile interfaces

## Technology Stack

- **Backend:** Django (Python), Firebase
- **Frontend:** Svelte Kit (Web), Kotlin (Mobile/Android)
- **Database:** PostgreSQL
- **CI/CD:** GitHub Actions, Fly.io, Vercel
- **Project Management:** Jira, Agile with Scrum

## Prerequisites

- [Node](https://nodejs.org/) v18 or newer
- [pnpm](https://pnpm.io/) or npm as package manager, pnpm is preferred
- [A Firebase Project](https://firebase.google.com/) (For Authentication)

## Local Development Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/enesonus/ovatify-web.git
   ```

2. **Setup:**

   - Install dependencies: `pnpm install`

   ```markdown
   ## Environment Variables

   Ensure to set up the following environment variables in your root .env file:

   Required env variables

   - `PUBLIC_BASE_URL`
   - `PUBLIC_SPOTIFY_CLIENT_ID`
   - `PUBLIC_SPOTIFY_REDIRECT_URI`

   Optional env variables

   - `PUBLIC_REQUIRE_EMAIL_VERIFICATION` // Make sure to set this to "false" for development as not having it or setting it to anything else will require emails to be verified before logging in.

   Take a look at `.env.example` for example values
   ```

   ## Configuring Firebase Integration

   Make sure to populate the `firebaseConfig` entry in `src/lib/utils/firebase.ts` with your own [project credentials](https://firebase.google.com/docs/web/setup), these are safe to include in client side code.s

   ## Configuring Spotify Integration

   Make sure to populate the environment variables stated above, more information about client side spotify apps can be found in the [Spotify Docs](https://developer.spotify.com/documentation/web-api/concepts/apps). Make sure that backend and frontend applications share the same Client ID. Also be sure to register the redsirect URI in the Spotify Dashboard as
   `http://localhost:5173/login` for development and `https://<your_domain>/login` for production environments and add also add the URI to the corresponding environment variable.

   ## Commands

   - Start the development server: `npm run dev`
   - Build for deployment: `npm run build`
   - Preview deployment build locally: `npm run preview`

## Continuous Integration and Deployment

CI/CD is managed through the [SvelteKit](https://kit.svelte.dev/) - [Vercel](https://vercel.com/) project integration. This integration provides automatic deployment upon pushing to the `main` or `dev` branches. Both branches have their own Vercel project and public url, providing the benefits of separating test and production environments. Deployment instructions for Vercel can be read [here](https://kit.svelte.dev/docs/adapter-vercel). Different deployment options can be read via the [official SvelteKit documentation](https://kit.svelte.dev/docs/building-your-app).

## Contributing

Contributions are welcome! Please read our [Contribution Guidelines](CONTRIBUTING_GUIDELINES.md) for more details.
