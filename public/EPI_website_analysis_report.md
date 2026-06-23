# Complete Website Analysis and Documentation

Project inspected: `plateformeen ligne.zip`  
Extracted folder: `/workspace/analysis_site/EPI-projet-complet-corrige`  
Application name: **EPI / Espace Pedagogique Informatique**  
Inspection date: 2026-06-22

## 1. Executive Summary

This website is a local educational web platform for teaching computer science at the Moroccan middle-school level. It is not a classic static website with separate pages; it is a single-page JavaScript application served by a small Node.js server. The product provides two main spaces:

- **Student space**, where authorized students access computer-science units, lessons, visual explanations, audio/text-to-speech explanations, practical activities, dictionary games, integration situations, shortcut-key games, and final evaluations.
- **Teacher space**, where the teacher can manage results, add users, add and modify units, edit lesson components, configure dictionary terms, configure keyboard shortcuts, manage integration-file submissions, change the teacher password, and export results.

The platform is designed around a pedagogical sequence: the learner sees the concept visually, listens to or reads explanations, practices with activities, then self-evaluates. The active implementation contains four default units organized by level:

| Level | Default Units |
|---|---|
| 1st year middle school | Systeme informatique, Systeme d'exploitation |
| 2nd year middle school | Tableur, Programmation LOGO |

Custom units can be created by the teacher and attached to school years. Those units are persisted through local/server-backed storage and become visible in the student dashboard when creation succeeds.

Technically, the project is built with plain HTML, CSS, JavaScript, and Node.js. There is no React, Vue, database server, build system, or package dependency beyond Node's built-in modules. The server provides static hosting, JSON-like key-value storage, file/media upload, media retrieval, teacher authentication, and teacher-password update endpoints.

## 2. Product Purpose

The product is an interactive learning platform for computer-science lessons. Its main goal is to make ICT concepts easier for pupils to understand through multiple learning styles:

- **Visual learning**: images, definitions, clickable cards, mind maps, diagrams, and explanatory media.
- **Auditory learning**: text-to-speech in French and Arabic, audio/video media, and teacher-like explanation scripts.
- **Kinesthetic/practical learning**: fill-in activities, drag-and-drop associations, ordered steps, direct questions, practical tasks, and production situations.
- **Evaluation and remediation**: dictionary game, final QCM-style control, score calculation, correction display, bonus handling, revision advice, and teacher dashboard.

The implementation is strongly classroom-oriented. It assumes a teacher manages a list of allowed students and prepares content. Students do not freely self-register; they must match a user added by the teacher in the teacher space.

## 3. How the Website Runs

The site should be launched through the Node.js server, not by directly opening `index.html`.

The documented launch methods are:

```bash
node server.js
```

or:

```bash
npm start
```

Then open:

```text
http://localhost:3000
```

On Windows, the project also includes `LANCER_PROJET.bat`, intended to start the local server and open the browser.

The default teacher password is:

```text
EduLibre2026
```

The server listens on port `3000` by default. It can use another port through the `PORT` environment variable.

## 4. High-Level Architecture

The application is a single-page app controlled mostly by global JavaScript functions and a shared global state object. The root page is `index.html`, which contains only a loading screen, an empty `#app` container, and a long list of scripts.

### Main Files

| File | Role |
|---|---|
| `index.html` | Entry point; loads CSS and all JavaScript modules. |
| `styles.css` | Main styling file; very large, includes many historical and final UI styles. |
| `app.js` | Main data and application logic: default units, lessons, rendering, student pages, evaluation, audio, dictionary, integration, and many historical patches. |
| `server.js` | Local Node.js server: static hosting, storage API, media upload/retrieval, teacher authentication, password change. |
| `server-storage.js` | Overrides selected `localStorage` keys so heavy/important data is stored through the server API. |
| `content-data.js` | External dynamic content library for practical questions and scenarios. |
| `dynamic-app.js` | Adds dynamic activities, progress tracking, and a local teacher editor layer. |
| `teacher-content-manager.js` | Main teacher dashboard and content-management system. |
| `auth-student-access.js` | Final robust authentication layer for students and teachers. |
| `auth-buttons-fix.js` | Fixes authentication submit-button behavior and teacher auth flow. |
| `media-import-fix.js` | Uploads imported images/audio/video to the server instead of storing base64 in localStorage. |
| `media-preview-upload-fix.js` | Renders customized media and audio panels for student views. |
| `shortcut-true-false-game.js` | Adds the keyboard shortcut true/false game to each unit. |
| `shortcut-admin-editor.js` | Adds teacher-side shortcut editing for add/modify unit workflows. |
| `integration-file-submissions.js` | Adds student document upload in integration situations and teacher-side submission records. |
| `corrections-finales.js` and other fix files | Later UI and behavior corrections layered on top of earlier code. |

### Important Technical Pattern

The implementation is not organized as a clean modular application. It is built as a succession of patches. Many functions are defined, then redefined later by newer scripts or later sections of `app.js`. The final behavior is determined by script order:

1. `app.js` defines initial data and many progressively newer overrides.
2. `content-data.js`, `dynamic-app.js`, and `teacher-content-manager.js` add dynamic content and teacher management.
3. Media, authentication, student interface, shortcut, and final correction scripts patch specific behaviors.

This means documentation must describe the final active behavior, not the first version of each function.

## 5. Content Model

Each unit is represented as a JavaScript object. A unit typically contains:

- `id`: internal identifier.
- `title`: displayed unit title.
- `short`: short description.
- `competence`: competence code.
- `duration`: instructional duration.
- `officialResources`: curriculum-related resources.
- `intro`: general pedagogical introduction.
- `dictionary`: vocabulary pairs, usually French/Arabic.
- `lessons`: lesson/subtitle list.
- `integration`: production or integration situation.
- `exam`: final QCM-style assessment.

Each lesson usually contains:

- `title`
- `objective`
- `officialObjectives`
- `visualType`
- `visual`
- `fr`
- `ar`
- `fill`
- `drag`
- `order`

The teacher editor extends this model with customizable `subtitleItems`, `visualItems`, `audioItems`, `kineExercises`, `mindmapBranches`, `integrationTasks`, `examQuestions`, `shortcutItems`, and related metadata.

## 6. Default Educational Content

### Unit 1: Systeme informatique

This unit targets foundational ICT concepts. Its final 1st-year version focuses on:

- Information, data, knowledge, message, image.
- Informatics as automatic data processing.
- The information system as a relationship between user, interface, functional core, and processing.
- Connectivity: Bluetooth, Wi-Fi, USB, wired/wireless links.
- Software, applications, mobile applications, and operating systems.

It includes visual assets such as diagrams and examples for information, data processing, system interaction, connectivity, and software categories.

### Unit 2: Systeme d'exploitation

This unit covers the operating system and basic desktop environment:

- Definition and role of an operating system.
- Examples: Windows, Linux, Android, iOS, macOS.
- Window management: close, maximize, minimize.
- Desktop organization: icons, wallpaper, Start button, taskbar, notification area.

It includes images related to operating systems, Windows desktop, window buttons, and basic interface manipulation.

### Unit 3: Tableur

This unit targets spreadsheet skills:

- Creating and saving a spreadsheet file.
- Workbook, sheets, cells, addresses, ranges.
- Data entry and table formatting.
- Formulas, functions, and autofill.
- Charts, page setup, and printing.

The unit is strongly Excel-oriented. It includes images for creating a workbook, the Excel interface, saving, cell references, entering formulas, formatting, borders, fill color, formula result, autofill handle, and chart/printing concepts.

### Unit 4: Programmation LOGO

This unit introduces programming through LOGO:

- Programming language and LOGO environment.
- Turtle movement.
- Basic primitives: `AV`, `RE`, `TD`, `TG`, `LC`, `BC`, `VE`, `FCFG`.
- Repetition with `REPETE`.
- Procedures with `POUR ... FIN`.
- Writing messages with `ECRIS`.

It includes LOGO environment screenshots and instruction visuals.

## 7. Student Experience

### Authentication

The final authentication layer requires the student to enter a name and surname that exist in the teacher-managed user list. The student is not allowed to enter with any arbitrary name. If the name does not match a teacher-added user, the application displays an error message similar to:

```text
Ressaisis bien votre nom et prénom.
```

The authenticated student is stored under:

```text
edu_libre_current_student_v41
```

### Student Dashboard

After successful authentication, the student sees a dashboard grouped by school level. The dashboard displays only the school level and unit buttons, not long lesson descriptions. The final implementation groups visible units as:

- 1ere annee collegiale
- 2eme annee collegiale
- 3eme annee collegiale, only if custom units exist for that level

Custom units created by the teacher can appear in these groups. The dashboard is intentionally simple: it is not a marketing page and does not show all lesson details. Its purpose is to let the pupil choose a level and unit quickly.

### Unit Navigation

Inside a unit, the student sees a compact dropdown selector rather than the older sidebar in the final patched view. The selector contains:

- Presentation de l'unite
- Each lesson/subtitle
- Jeu raccourcis clavier - Vrai/Faux
- Jeu dictionnaire - 3 choix
- Situation d'integration
- Controle final de l'unite

When a lesson is selected, the student can work through three learning styles:

- Visual
- Audio
- Kinesthetic

Depending on the final patches and available custom content, these styles may be displayed as separate content panels inside the selected lesson.

## 8. Visual Learning Features

Visual pages combine several types of material:

- Introductory teacher-like explanation sheet.
- Image or video cards.
- Definition shown at the top of media cards.
- Clickable "read example" style interaction.
- Optional action and "to remember" text.
- Mind maps with central node, branches, and clickable subnodes.

For built-in units, the visual content is backed by assets in `/assets`. For teacher-customized content, media is uploaded to the server and referenced by short identifiers like:

```text
epi-media:image:<id>
epi-media:video:<id>
epi-media:audio:<id>
```

The media rendering layer converts those references to:

```text
/api/media/<id>
```

This design avoids storing large base64 media inside browser storage.

## 9. Audio and Text-to-Speech Features

The application provides audio learning in two ways:

1. **Text-to-speech** using the browser SpeechSynthesis API.
2. **Uploaded media** through audio/video files stored by the server.

French and Arabic are both considered. Earlier code includes a Google Translate TTS fallback for Arabic, but later media/audio fixes rely mainly on browser speech synthesis and imported media.

Teacher-customized audio items can contain:

- Title.
- French text to read.
- Arabic text.
- Optional uploaded audio/video source.

Student audio cards can provide buttons for reading:

- title + definition + text,
- only the requested text,
- Arabic text,
- stop playback.

## 10. Kinesthetic and Practical Activities

Kinesthetic activities include:

- Fill-in-the-blank questions.
- Multiple choice buttons.
- Drag-and-drop association of terms and definitions.
- Ordering steps.
- Direct practical questions.
- Teacher-customized exercises.

The system stores practical exercises either in built-in lesson objects or in teacher-managed custom content. The teacher can add multiple kinesthetic exercises per subtitle.

## 11. Dictionary Game

Each unit includes a dictionary game based on vocabulary pairs. The student sees a word and chooses the correct translation/signification from three choices. The game tracks:

- Current question index.
- Score.
- Whether the current question has been answered.
- History of correct and incorrect words.

At the end, the application shows:

- Final score.
- Words mastered.
- Words to review.
- Revision advice.
- Button to restart the game.

Vocabulary is typically French/Arabic, for example terms such as `Classeur`, `Feuille`, `Cellule`, `Tortue`, `Primitive`, `Systeme d'exploitation`, and so on.

## 12. Keyboard Shortcut True/False Game

The shortcut game is available as a section in each unit, but the final implementation deliberately avoids injecting automatic default shortcuts. Earlier banks exist in the code, but `shortcutsFor(unit)` returns only teacher-configured shortcuts.

If no shortcuts are configured, the student sees a message saying no shortcuts are defined for the unit and the teacher can add them from the teacher space.

When shortcuts are configured, the game:

- Shows a table of shortcut/function pairs.
- Generates true/false statements.
- Marks some statements as deliberately false by pairing a shortcut with another action.
- Lets students choose "Vrai" or "Faux".
- Displays correction feedback.
- Calculates a final score.

Teacher-side shortcut entry format:

```text
Ctrl + C || Copier
Ctrl + V || Coller
Ctrl + Z || Annuler
```

The shortcut text is saved into both a dedicated shortcut key and the unit content object.

## 13. Situation d'Integration and Production Work

The integration section presents a real-world scenario and tasks that mobilize the whole unit. Different historical versions included textareas for open responses, but later corrections aimed to remove manual answer fields and present a production situation.

The current codebase contains both older and newer integration renderers, plus final file-upload injection. The intended final behavior is:

- Display a real scenario.
- Display production tasks/questions.
- Avoid forcing the student to write all answers directly in the app.
- Allow the student to upload a final document file.

The uploaded document can be:

- PDF
- Word: `.doc`, `.docx`
- PowerPoint: `.ppt`, `.pptx`

The upload block appears at the end of the integration situation and includes a "Parcourir" file input. The uploaded file is sent to:

```text
POST /api/media-file?kind=document
```

The submission metadata is stored under:

```text
epi_integration_submissions
```

The teacher can then see these files in the teacher dashboard under "Fichiers situation d'integration".

## 14. Final Control / Evaluation

Each unit includes a final control, usually a QCM. The default 2nd-year units contain 20 questions each. Some 1st-year units also have 20 questions, though one final operating-system version contains 10 questions.

The final control:

- Displays questions and answer options.
- Calculates the score.
- Uses +1 per correct answer.
- Adds a bonus of +5 if the raw score is greater than 10, capped at 20.
- Saves the result.
- Shows corrections for unanswered or incorrect questions.
- Generates a revision diagnosis in later patches.

Stored result fields can include:

- `nom`
- `prenom`
- `unite`
- `note_finale`
- `bonus`
- `total_avec_bonus`
- `statut`
- `reussi`
- `diagnostic`
- `points_a_reviser`
- `plan_revision`
- `date_iso`

Results are saved under:

```text
edu_libre_results_db_v41
```

Because `server-storage.js` intercepts that key, the results are stored through the server storage API when the site is run with `node server.js`.

## 15. Teacher Experience

The teacher space is a separate administrative dashboard. It is opened from the login page with the teacher password.

### Teacher Authentication

The final robust layer verifies the password through:

```text
POST /api/teacher-auth
```

The server compares the submitted password to the current teacher password. The default comes from:

```text
EPI_PROF_PASSWORD
```

or falls back to:

```text
EduLibre2026
```

Once accepted, a session flag is stored:

```text
epi_v212_teacher_unlocked
```

### Teacher Dashboard Sections

The teacher dashboard contains these main panels:

| Panel | Purpose |
|---|---|
| Notes | Consult student results and export them. |
| Fichiers situation d'integration | See uploaded student PDF/Word/PowerPoint documents. |
| Ajouter unite | Create a new unit with subtitles, media, exercises, integration tasks, exam, dictionary, shortcuts. |
| Modifier unite | Select an existing unit and modify its components. |
| Liste des unites | View units and delete/modify them. |
| Ajouter utilisateur | Add an authorized student by name and surname. |
| Voir la liste des utilisateurs | View and delete teacher-added users. |
| Changer mot de passe prof | Change teacher password through the server API. |

### Adding Users

The teacher can add student users with:

- Nom
- Prenom
- Creation date

These are stored under:

```text
epi_teacher_added_users
```

The final student authentication checks against this list. This is critical: a fresh installation has no authorized students unless the teacher adds them.

### Managing Units

The teacher can create, modify, and delete units. A custom unit contains:

- General information: title, short text, duration, competence, year.
- Subtitles.
- Definitions and examples.
- Child nodes/sub-branches for mind maps.
- Visual media: images/videos with definitions and examples.
- Audio content: text/audio/video.
- Kinesthetic exercises.
- Dictionary entries.
- Integration scenario and tasks.
- Exam questions.
- Shortcut-key game rows.

Custom units are saved under:

```text
epi_v175_custom_units
epi_v183_custom_units_visible
epi_v181_custom_units_visible
```

Unit-specific teacher content is saved under keys like:

```text
epi_v170_unit_content_<unitId>
```

Deleted unit ids are tracked under:

```text
epi_v191_deleted_units
```

The dashboard tries to ensure that newly created custom units are visible in the student space immediately after creation.

## 16. Storage and Persistence

The application uses a hybrid storage model:

1. Some small/session keys remain in browser `localStorage` or `sessionStorage`.
2. Important content/results/custom-unit keys are intercepted by `server-storage.js` and stored through `/api/storage`.
3. Media and documents are stored as files under `/data/media`.

### Server Storage

`server-storage.js` intercepts these exact keys:

- `epi_v175_custom_units`
- `epi_v183_custom_units_visible`
- `epi_v181_custom_units_visible`
- `epi_v191_deleted_units`
- `edu_libre_students_db_v41`
- `edu_libre_results_db_v41`

And keys with these prefixes:

- `epi_v170_unit_content_`
- `epi_v169_teacher_questions_`

This avoids overloading browser storage with large persistent content.

### Files on Disk

The server uses:

```text
data/storage.json
data/media-index.json
data/media/images
data/media/videos
data/media/audios
data/media/documents
data/teacher-password.json
```

At inspection time:

- `data/storage.json` was empty (`{}`).
- `data/media-index.json` contained one stored SVG media record.
- The extracted project size was about 9.5 MB.
- The `assets` folder contained 96 files: 73 PNG, 18 SVG, 4 JPG, and 1 backup file.

## 17. Server API

The local server is implemented with Node's built-in `http`, `fs`, `path`, and `crypto` modules. It does not depend on Express.

### Static Files

All files are served from the project root. `/` maps to `/index.html`.

### Storage API

```text
GET    /api/storage
GET    /api/storage/<key>
PUT    /api/storage/<key>
POST   /api/storage/<key>
DELETE /api/storage/<key>
```

Values are stored as strings inside `data/storage.json`.

### Media Upload

```text
POST /api/media-file?kind=image
POST /api/media-file?kind=audio
POST /api/media-file?kind=video
POST /api/media-file?kind=document
```

The uploaded file is written to disk, indexed in `data/media-index.json`, and returned as:

```json
{ "ok": true, "id": "...", "kind": "...", "url": "/api/media/<id>" }
```

### Media Retrieval

```text
GET /api/media/<id>
```

The server supports range requests, useful for video/audio playback.

### Teacher Authentication

```text
POST /api/teacher-auth
```

Request body:

```json
{ "password": "..." }
```

Returns `200 {"ok":true}` for correct password and `401 {"ok":false}` for incorrect password.

### Teacher Password Change

```text
POST /api/teacher-password
```

Request body:

```json
{
  "oldPassword": "...",
  "newPassword": "..."
}
```

The new password must contain at least 4 characters.

## 18. Security Observations

This is a local classroom application, not a hardened public web service.

Important observations:

- Teacher authentication is server-side in the final layer, which is better than earlier client-only checks.
- There is no user account system with individual passwords for students.
- Student authorization is based on matching name and surname against a teacher-added list.
- There is no CSRF protection.
- API endpoints have permissive CORS headers (`Access-Control-Allow-Origin: *`).
- Static file serving is root-based but includes path normalization and prefix checks.
- Teacher access uses sessionStorage after password validation.
- The server stores the teacher password in plain JSON if changed through `/api/teacher-password`.
- The application is suitable for trusted local use, but should not be exposed publicly without substantial hardening.

## 19. UX and Interface Observations

The site is highly styled and tries to be visually friendly for students. It includes:

- Auth page with centered card.
- Dashboard grouped by level.
- Color-coded unit cards.
- Compact unit dropdown selector.
- Large cards for learning content.
- Mind maps with colored branches.
- Responsive CSS rules for mobile widths.
- Many correction styles that hide older sidebar/page elements in favor of compact layouts.

The teacher space is more operational: dashboard cards, tables, forms, editors, file inputs, and save/reset buttons.

The codebase contains many CSS and JavaScript patches from earlier versions. This gives the interface many final behaviors, but it also creates maintenance risk because old selectors and old renderers still exist.

## 20. Verification Performed

The following checks were performed during inspection:

- Archive extraction succeeded.
- Project structure inspected.
- Main HTML, CSS, JS, server, data, assets, and README files inspected.
- All JavaScript files passed `node --check`.
- Node server started with `npm start`.
- `GET /` returned `200 OK`.
- `GET /api/storage` returned `{}`.
- `POST /api/teacher-auth` with `EduLibre2026` returned `{"ok":true}`.
- `POST /api/teacher-auth` with a bad password returned `401 {"ok":false}`.
- Asset counts and project size were checked.

Browser rendering could not be fully verified in this environment because the Playwright package was installed but its browser executable was missing, and no system Chrome/Chromium was available.

## 21. Main Strengths

- The product is pedagogically rich and clearly classroom-oriented.
- It supports multiple learning styles.
- It includes both student and teacher workflows.
- It lets teachers add users and customize content without editing code.
- It avoids storing large media as base64 by uploading files to the local server.
- It provides exportable student results.
- It supports submitted integration documents.
- It has a simple local deployment model.

## 22. Main Risks and Limitations

- The codebase is patch-heavy: many functions are redefined several times.
- The final behavior depends heavily on script loading order.
- Some older units and older renderers remain in the code, which can confuse maintenance.
- There is no formal module boundary or build system.
- Student access depends on names, not secure personal accounts.
- Server storage is a single JSON file; concurrent writes could be risky in heavy multi-user use.
- Teacher password storage is plain JSON when changed.
- The UI cannot be confidently verified here without a browser runtime.
- Some features, especially integration rendering, have several historical versions in the code; the final intended behavior is achieved by later overrides and injection scripts rather than one clean implementation.

## 23. Recommendations

1. Consolidate the active code into fewer files and remove superseded patches.
2. Export the unit/content model into a clear JSON schema.
3. Replace repeated function overrides with explicit modules or classes.
4. Add a small test suite for authentication, unit visibility, result saving, media upload, and teacher edits.
5. Add a browser smoke test once Chromium/Playwright is available.
6. Store teacher password as a hash if the app will be used beyond a trusted local classroom.
7. Replace name-only student authorization with generated student codes if stronger access control is needed.
8. Keep media references server-side and avoid returning to base64 storage.
9. Document the final data keys and avoid introducing new versioned keys unless necessary.
10. Create a clean "current implementation" README for teachers that excludes historical version notes.

## 24. Final Product Description

EPI is a local interactive educational platform for middle-school computer science. A teacher launches it on a local machine, logs into the teacher area, adds authorized pupils, and manages units. Pupils then log in with their names and access a dashboard grouped by school level. Each unit gives them structured lessons with visual explanations, audio support, practical activities, vocabulary games, integration situations, file submission, shortcut-key practice, and final assessments. Results and submitted documents are collected in the teacher space for follow-up and export.

The product is therefore both a learning environment and a lightweight classroom-management tool. Its strongest value is that it turns static computer-science lessons into interactive, multi-modal learning sequences that can be adapted by the teacher without rebuilding the website.
