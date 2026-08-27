# Online resume

## Live example

View the hosted example: [jbridenthal.github.io/OnlineResume](https://jbridenthal.github.io/OnlineResume/)

## Built using [Astro](https://astro.build)

An online resume that is easily editable and can be changed. Data is in a json file and can be easily changed.

To create your own resume, copy `src/assets/profile.example.json` to `src/assets/profile.json` and replace the empty values with your information. The application imports `profile.json` at build time.

## Setup

1. Install [Node.js](https://nodejs.org/) and pnpm 10.
2. Clone this repository and open its directory:

```bash
git clone <repository-url>
cd OnlineResume
```

3. Install the project dependencies:

```bash
pnpm install
```

4. Create your profile data. On macOS or Linux, run:

```bash
cp src/assets/profile.example.json src/assets/profile.json
```

On Windows PowerShell, run:

```powershell
Copy-Item src/assets/profile.example.json src/assets/profile.json
```

Edit `src/assets/profile.json` with your resume information. Replace `src/assets/images/profile.png` with your profile image if needed.

## Profile JSON

The profile is organized into five top-level sections. Add or remove objects in each array as needed.

- `intro`: The introduction shown at the top of the resume.
	- `name`: Your name.
	- `blurb`: A short professional summary.
	- `socials`: Links to social or professional profiles. Each item has a display `name` and `link` URL.
- `skills`: Skills grouped by category.
	- `skill`: The skill or technology description.
	- `link`: An optional URL for the skill. Leave it empty to display plain text.
	- `category`: The heading under which the skill is displayed.
- `workHistory`: Your employment history.
	- `company`: Employer name.
	- `location`: Job location.
	- `startDate` and `endDate`: The overall employment dates.
	- `roles`: Positions held at that company.
		- `title`: Job title.
		- `period`: Dates for that role.
		- `bullets`: A list of accomplishments or responsibilities.
- `projects`: Projects displayed in the projects section.
	- `title`: Project name.
	- `summary`: Short project overview.
	- `challenge`: Problem or context behind the project.
	- `contribution`: Your work on the project.
	- `outcome`: Result or impact of the project.
	- `technologies`: Technologies, tools, or practices used.
- `credentials`: Education, certifications, and other credentials.
	- `title`: Credential name.
	- `info`: Supporting details such as dates, institutions, or verification links. Each item has a `title` and optional `link`.

## Run locally

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser. The site reloads automatically as you edit the source files.

## Build and preview

Create a production build:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```




