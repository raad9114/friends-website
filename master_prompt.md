You are the lead frontend engineer, interaction designer, and visual storyteller for **The One With the Website**, a cinematic, unofficial, non-commercial fan experience inspired by the television series **Friends**.

Work directly inside the current project workspace. Inspect all existing files, code, content, media, and assets before editing.

If the project already exists, preserve working content and useful behavior while bringing it into compliance with this specification. If the workspace is empty, create the complete project.

Treat requests to build, fix, restore, or improve the website as authorization to implement and verify the work—not merely describe a possible solution.

## Goal

Create a polished, responsive, accessible, and deployment-safe single-page fan website celebrating the humor, friendships, characters, apartments, memorable moments, and comforting atmosphere of Friends.

The experience should feel like stepping into a warm 1990s New York sitcom world built around:

* Six unforgettable friends
* Monica’s apartment
* Joey and Chandler’s apartment
* Central Perk
* Character relationships
* Memorable episodes
* Running jokes
* Famous quotations
* Interactive trivia
* A playful personality quiz
* Nostalgic objects and locations
* Sitcom-inspired transitions and interface details

The result should feel cheerful, nostalgic, editorial, and handcrafted—not like a streaming-service clone, generic portfolio, or dark cinematic template.

## Success criteria

The project is complete when:

* The website works from `index.html` on a normal static web server.
* Desktop, laptop, tablet, and mobile layouts work without horizontal overflow.
* Navigation, mobile menu, theme control, sound control, character filters, episode search, apartment hotspots, modals, carousel, quiz, trivia, and form interactions work.
* Dynamic content has loading, empty, offline, and failure states.
* The custom cursor remains visible above all overlays and modals.
* All important images use valid relative local paths.
* The website remains usable when remote services are unavailable.
* Reduced-motion and touch-device fallbacks work.
* JavaScript syntax, CSS structure, asset paths, and navigation targets have been verified.
* Normal use produces no avoidable console errors.
* No copyrighted video, music, or imagery is hotlinked from unofficial third-party websites.

## Technology and file structure

Use:

* Semantic HTML5
* Modern CSS3
* Vanilla JavaScript
* Inline SVG where appropriate

Do not introduce:

* React
* Vue
* Angular
* Bootstrap
* Tailwind
* jQuery
* Package dependencies
* Bundlers
* A build step

Maintain these primary files:

* `index.html`
* `style.css`
* `script.js`
* `README.md`
* `master_prompt.md`

Use or preserve this asset structure:

```text
assets/
├── audio/
│   └── coffee-shop-ambience.mp3
├── images/
│   ├── characters/
│   ├── episodes/
│   ├── locations/
│   ├── objects/
│   ├── favicon.svg
│   └── siteicon.png
├── video/
│   └── new-york-background.mp4
└── ASSET-CREDITS.txt
```

Confirm every local asset exists before referencing it. Match filename capitalization exactly.

Use relative paths for all local media. Do not invent asset filenames or silently replace valid existing media with unrelated placeholders.

If preferred media is unavailable, use a polished CSS, gradient, or inline-SVG fallback while keeping the section functional.

## Creative direction

Build a warm, colorful 1990s New York sitcom identity.

Use:

* Warm cream and soft beige foundations
* Muted lavender inspired by Monica’s apartment
* Deep coffee brown
* Brick red
* Mustard yellow
* Teal and faded blue
* Olive green
* Small red, blue, and yellow accent dots
* Warm lamp light
* Coffee-shop textures
* Subtle paper grain
* Apartment-wall details
* Polaroid frames
* Handwritten notes
* Newspaper and magazine references
* Soft shadows
* Rounded cards mixed with imperfect scrapbook edges

The design should feel nostalgic and playful without copying the official title treatment exactly.

Avoid making the entire website look like a direct replica of the official logo or promotional artwork.

## Typography

Use a completely different font system from the fantasy websites.

Recommended pairing:

* `Bebas Neue` for large section titles and episode-style headings
* `DM Sans` for body text, navigation, controls, and forms
* `Caveat` for handwritten notes, annotations, Polaroid captions, and playful labels

Fallbacks:

```css
--font-display: "Bebas Neue", "Arial Narrow", sans-serif;
--font-body: "DM Sans", Arial, sans-serif;
--font-handwritten: "Caveat", "Comic Sans MS", cursive;
```

Typography requirements:

* Use bold, condensed display headings with generous letter spacing.
* Keep body text clean and highly readable.
* Use the handwritten font sparingly.
* Do not use handwritten text for long paragraphs, filters, or essential controls.
* Use fluid typography with `clamp()`.
* Ensure remote-font failure does not damage the layout.

## Global visual system

Define reusable CSS custom properties for:

* Colors
* Fonts
* Spacing
* Container widths
* Border radii
* Transitions
* Shadows
* Card surfaces
* Paper textures
* Glass surfaces
* Focus rings
* Accent dots
* Modal layers
* Character-specific colors

Use restrained recurring motifs:

* Red, blue, and yellow dots
* Coffee rings
* Picture frames
* Polaroid cards
* Handwritten arrows
* Apartment keys
* Taxi signs
* Clapboard lines
* Umbrellas
* Couch silhouettes

Avoid excessive visual clutter. Interactive controls and text must remain readable against every surface.

## Global page structure

Build the page in this order:

1. Apartment-door preloader
2. Fixed navigation
3. Opening-credits hero
4. Featured quote
5. Meet the Six
6. “Which Friend Are You?” personality quiz
7. Friendship and relationship web
8. Apartment explorer
9. Episode guide
10. Central Perk memory wall
11. Running jokes and iconic objects
12. Trivia night
13. Quote carousel
14. Leave a Note form
15. Footer
16. Reusable global modal

Use stable, semantic section IDs for navigation.

## Apartment-door preloader

Create a playful preloader inspired by an apartment door and peephole frame.

Include:

* A purple apartment door built with HTML and CSS
* Gold peephole frame
* Apartment number treatment
* A small hanging picture frame
* Text: “The Gang Will Be Right With You”
* Supporting line: “Saving Your Spot on the Couch”
* Animated loading line
* Visible loading percentage
* Subtle hallway-light change
* Short door-opening dismissal animation

Prevent scrolling while the preloader is active and restore it afterward.

Requirements:

* Include a maximum loading timeout.
* Do not keep visitors waiting for large optional media.
* Do not trap keyboard users.
* Dismiss the preloader even if an image, audio file, or remote request fails.
* Simplify the opening animation under reduced motion.

## Navigation

Create a fixed navigation bar linking to:

* Home
* The Six
* Quiz
* Connections
* Apartments
* Episodes
* Memories
* Trivia

Requirements:

* Transparent over the hero
* Warm blurred-glass treatment after scrolling
* Active-link indicator based on the visible section
* Responsive mobile menu
* Light/Dark theme control
* Sound control
* Mobile menu closes after selecting a link
* Escape closes the mobile menu
* Focus returns to the menu button after closing
* All icon-only buttons have accessible names and titles
* Keyboard activation works correctly
* Logo and controls do not overlap on narrow screens

Add a thin scroll-progress bar at the top using the recurring red, yellow, and blue accent colors.

## Light and Night themes

Provide two polished themes.

### Apartment Day

The default theme should use:

* Warm cream
* Lavender
* Muted teal
* Coffee brown
* Mustard
* Brick red
* Soft paper textures
* Natural apartment daylight

### New York Night

The alternate theme should use:

* Deep navy
* Charcoal
* Muted purple
* Neon amber
* Soft red
* Cool window light
* Warm café highlights

Requirements:

* Save theme choice in `localStorage`.
* Synchronize the theme icon, label, title, and accessible name.
* Keep both themes readable.
* Recreate ambient decorative particles after theme changes.
* Preserve quiz, filter, carousel, and modal state when switching.
* Do not use pure black for every night surface.
* Avoid aggressive neon effects.

## Custom cursor

Create a custom cursor for fine-pointer desktop devices.

The cursor may use:

* A small coffee-colored dot
* A thin surrounding ring
* A tiny accent-dot trail
* A restrained coffee-cup glow over interactive elements

Requirements:

* Follow pointer movement accurately.
* Expand over buttons, links, cards, map hotspots, form controls, filters, and modal controls.
* Support dynamically rendered elements through event delegation.
* Use `pointer-events: none`.
* Keep its `z-index` above all modal layers.
* Clear stale hover state when menus or modals open and close.
* Hide it on touch and coarse-pointer devices.
* Restore the native cursor when disabled.
* Disable custom cursor movement under reduced motion.
* Never block text selection or normal browser behavior.

## Opening-credits hero

Create a full-viewport hero that feels like a colorful 1990s sitcom opening sequence.

Use the local video only when available:

```text
assets/video/new-york-background.mp4
```

If unavailable, use a layered New York skyline, apartment-window, or fountain-inspired CSS background.

Do not use copyrighted episode footage unless it is already legally provided in the project.

Include:

* Warm cinematic grading
* New York skyline silhouettes
* Floating Polaroid cards
* Subtle fountain or city-light references
* Kicker: “Six Friends. Ten Seasons. One Unforgettable Story.”
* Main heading: “THE ONE WITH THE WEBSITE”
* Subtitle: “Welcome to the place where friendship, coffee, and chaos are always on the menu.”
* Primary action: “Meet the Six”
* Secondary action: “Find Your Character”
* Decorative three-color dot divider
* Animated scroll indicator
* Series statistics:

  * `06` Friends
  * `10` Seasons
  * `236` Episodes
  * `01` Orange Couch

Use a strong condensed display style for the main heading. Add small red, blue, and yellow dots between selected words or around the title without directly copying the official logo.

Hero buttons should include:

* Strong focus states
* Rounded or ticket-like shapes
* Restrained shine effect
* Small animated arrow or coffee icon
* Comfortable mobile tap targets

## Featured quote

Create a warm editorial quotation section with:

* Kicker: “Could This Be Any More Iconic?”
* Quote: “I’ll be there for you.”
* Attribution: “A Story About Friendship”
* Supporting line: “Through every breakup, new job, bad haircut, and cup of coffee.”

Use semantic `blockquote`, `footer`, and `cite` elements.

The design should include:

* Large cream or paper-textured quote card
* Layered picture-frame border
* Purple outer frame
* Small red, blue, and yellow dots
* Oversized translucent quotation marks
* Coffee-ring decoration
* Handwritten annotations
* Warm lamp-light ambience
* Six small character-color markers
* Carefully scaled mobile typography
* Slightly imperfect scrapbook alignment

All purely decorative elements must use `aria-hidden="true"`.

## Meet the Six

Render the six main character cards from JavaScript data:

* Rachel Green
* Monica Geller
* Phoebe Buffay
* Joey Tribbiani
* Chandler Bing
* Ross Geller

Each character record should contain:

* ID
* Name
* Occupation or major career path
* Personality traits
* Signature color
* Short description
* Extended biography
* Important relationships
* Memorable habits
* Famous running jokes
* Favorite location
* Local portrait path when available

Suggested character directions:

### Rachel Green

* Stylish
* Independent
* Ambitious
* Warm
* Fashion-focused visual accents

### Monica Geller

* Organized
* Competitive
* Caring
* Energetic
* Lavender and kitchen-inspired details

### Phoebe Buffay

* Eccentric
* Creative
* Spiritual
* Honest
* Handmade textures and musical motifs

### Joey Tribbiani

* Loyal
* Confident
* Food-loving
* Playful
* Warm red and pizza-inspired accents

### Chandler Bing

* Sarcastic
* Awkward
* Thoughtful
* Funny
* Teal and office-note details

### Ross Geller

* Academic
* Emotional
* Curious
* Persistent
* Museum, fossil, and muted green details

Each card should include:

* Portrait or polished fallback monogram
* Name
* Character summary
* Distinct character color
* Polaroid or magazine-cover composition
* Fine hover border
* Image zoom
* Handwritten caption
* Restrained desktop 3D tilt
* “View Profile” button

Clicking “View Profile” opens the global modal with:

* Large portrait
* Name
* Occupations
* Personality traits
* Biography
* Relationships
* Running jokes
* Memorable moments
* Short quotation when appropriate

Use short quotation excerpts only. Do not reproduce large portions of copyrighted scripts.

## “Which Friend Are You?” quiz

Create an interactive personality quiz titled:

**“Which Friend Are You?”**

Supporting copy:

**“Answer a few questions and find out who would save your seat at Central Perk.”**

Use six to eight situational questions based on:

* How the user handles problems
* Social style
* Career priorities
* Food preferences
* Organization
* Humor
* Relationships
* Weekend plans
* Conflict resolution

Requirements:

* Show one question at a time.
* Provide a visible progress indicator.
* Use accessible answer buttons.
* Do not preselect an answer.
* Include a Previous button.
* Use consistent scoring.
* Document tie-breaking logic in JavaScript.
* Announce the result using `aria-live`.
* Save the latest result in `localStorage`.
* Allow users to retake the quiz.
* Support keyboard navigation.
* Respect reduced-motion preferences.

The result panel should display:

* Character portrait or monogram
* Character name
* Match percentage or descriptive match level
* Three shared traits
* Short personalized explanation
* “View Character” button
* “Take It Again” button

Clearly label the quiz as a playful, fan-made personality experience.

## Friendship and relationship web

Create a section titled:

**“The Connections That Made the Story”**

Build an interactive SVG or DOM-based relationship diagram connecting the six main characters.

Possible relationship categories:

* Friendship
* Siblings
* Roommates
* Romantic relationship
* Marriage
* Former relationship
* Family connection

Requirements:

* Display no more than six main character nodes.
* Use lines with different visual styles or small labels.
* Provide a legend.
* Allow the user to select a character.
* Highlight that character’s direct relationships.
* Dim unrelated connections without hiding them completely.
* Display a side panel summarizing the selected relationships.
* Include a Reset button.
* Make nodes keyboard accessible.
* Provide a mobile alternative using stacked relationship cards.
* Do not rely on color alone to explain relationships.
* Provide screen-reader-friendly relationship descriptions.

Keep the visualization understandable rather than attempting to include every minor relationship from the series.

## Apartment explorer

Create an interactive section titled:

**“Across the Hall”**

Include two primary illustrated spaces:

* Monica and Rachel’s apartment
* Joey and Chandler’s apartment

Optionally include Central Perk as a third tab.

Use stylized illustrations, CSS compositions, or a verified local image rather than copyrighted screenshots from unlicensed sources.

Add clickable hotspots for memorable objects:

### Monica’s apartment

* Purple door
* Gold peephole frame
* Kitchen table
* Balcony
* Giant white dog
* Picture frame
* Secret closet

### Joey and Chandler’s apartment

* Foosball table
* Recliners
* Entertainment unit
* Magna Doodle
* Canoe
* Pizza boxes
* Chick and duck references

### Central Perk

* Orange couch
* Coffee counter
* Stage microphone
* Reserved table
* Large café window

Requirements:

* Tabs for switching locations
* Accessible hotspot buttons
* Keyboard navigation
* Visible selected-hotspot state
* Information panel with title, image or icon, and description
* Reset button
* Close button for the information panel
* Mobile-friendly layout
* Loading and failure states
* Clear alternative list view when the visual explorer cannot load

Add restrained room transitions. Do not use confusing camera movement or large perspective shifts.

## Episode guide

Create a searchable, filterable episode archive titled:

**“The One With All the Episodes”**

Use a curated local dataset. If a reliable public data source is configured, treat it as an enhancement rather than a requirement.

Each episode record should contain:

* ID
* Episode title
* Season
* Episode number
* Original air date when reliably available
* Short synopsis
* Featured characters
* Memorable theme
* Local image path when available

Requirements:

* Search by episode title, synopsis, theme, and character
* Filter by seasons 1 through 10
* Include an “All Seasons” filter
* Optional filters for Thanksgiving, Weddings, Holidays, Relationships, Careers, and Travel
* Display visible count and total count
* Show a helpful empty state
* Show an unobtrusive offline or fallback message
* Render cards dynamically
* Reinitialize reveal behavior after rendering
* Use a sticky filter toolbar on desktop
* Keep filters usable and wrappable on mobile
* Provide a “Surprise Me” button that selects a random visible episode

Each episode card should include:

* Season and episode label
* Episode title
* Short synopsis
* Character tags
* Theme badge
* Image or decorative clapboard fallback
* “View Episode” button

The episode modal should display:

* Full title
* Season and episode number
* Air date
* Synopsis
* Featured characters
* Themes
* Small “Why fans remember it” note

Do not embed pirated video or link to unauthorized streaming sources.

## Central Perk memory wall

Create a section titled:

**“Memories from Central Perk”**

Design it as a scrapbook or café pinboard containing:

* Polaroids
* Coffee receipts
* Napkin notes
* Newspaper clippings
* Handwritten captions
* Ticket stubs
* Small character memories

Allow filtering by:

* All
* Friendship
* Romance
* Holidays
* Careers
* Chaos
* Central Perk

Requirements:

* Render memory cards from JavaScript data.
* Use an irregular but controlled masonry-style layout.
* Maintain logical keyboard and reading order.
* Avoid overlapping important text.
* Add subtle hover rotation and elevation.
* Open expanded memories in the reusable modal.
* Provide text alternatives for every meaningful visual.
* Remove card rotation under reduced motion.

## Running jokes and iconic objects

Create a playful section titled:

**“You Had to Be There”**

Include data-driven interactive cards for references such as:

* The orange couch
* The purple apartment door
* The gold peephole frame
* The foosball table
* The Magna Doodle
* The recliners
* The giant white dog
* The Thanksgiving turkey
* The leather pants
* The holiday armadillo
* The chick and the duck
* The moving couch
* Joey’s food
* Phoebe’s guitar
* Ross’s dinosaurs
* Monica’s labels

Each card should contain:

* Object or joke name
* Illustration or icon
* Short explanation
* Related character
* Related category
* Optional short quotation
* Accent color

Include filters for:

* Objects
* Food
* Costumes
* Catchphrases
* Apartment
* Holiday
* Character habits

Add a small interaction such as:

* Rotating the couch through a staircase illustration
* Revealing a Magna Doodle message
* Opening a labeled storage box
* Switching on the recliners
* Displaying a randomized sandwich message

Keep interactions short, optional, and accessible.

## Trivia night

Create an interactive section titled:

**“Central Perk Trivia Night”**

Include:

* Ten-question trivia round
* Multiple-choice answers
* Visible question progress
* Current score
* Next-question control
* Final results
* Restart button
* Difficulty selector
* Optional category selector
* Accessible answer feedback
* Keyboard support

Suggested categories:

* Characters
* Relationships
* Apartments
* Careers
* Holidays
* Quotes
* General

Requirements:

* Do not reveal the correct answer before the user chooses.
* Prevent scoring the same question more than once.
* Clearly show correct and incorrect feedback.
* Explain the correct answer briefly.
* Announce score changes through a polite `aria-live` region.
* Randomize question order safely.
* Save the best score locally.
* Avoid questions based on uncertain fan trivia.
* Provide at least three difficulty levels.
* Make the section fully usable without animation.

Use playful final result labels such as:

* “New to the Coffee House”
* “Regular at Central Perk”
* “Apartment Key Holder”
* “Seventh Friend”

## Quote carousel

Create a cinematic but cheerful quotation carousel.

Include:

* Several short quotations
* Speaker attribution
* Character-color accent
* Previous button
* Next button
* Position indicators
* Automatic rotation
* Manual navigation
* Pause on hover
* Pause while keyboard focus is inside
* Pause when the browser tab is hidden
* Accessible control labels
* Touch swipe support when reliable
* Reduced-motion compatibility

Use short excerpts only. Do not reproduce long portions of copyrighted scripts.

## Leave a Note

Create a styled static contact form titled:

**“Leave a Note on the Door”**

Include:

* Name
* Email
* Favorite character
* Message
* “Pin My Note” button
* Sticky-note treatment
* Gold picture-frame decoration
* Small pen or coffee-cup illustration
* Accessible status message
* Client-side validation
* Simulated successful submission

Requirements:

* Use visible labels.
* Clearly mark required fields.
* Display errors beside the relevant inputs.
* Move focus appropriately if validation fails.
* Do not navigate or reload.
* Do not imply that a message was delivered to a real backend.

Suggested success message:

**“Your note has been pinned for this demonstration. No real message was sent.”**

Add a short pinning animation on success. Disable or simplify it under reduced motion.

## Audio

Use a local ambient audio file only if it exists:

```text
assets/audio/coffee-shop-ambience.mp3
```

Use café ambience, room tone, or properly licensed instrumental audio. Do not automatically use or distribute the official theme song.

Requirements:

* Loop playback.
* Use a moderate default volume.
* Respect browser autoplay restrictions.
* Attempt playback after the first meaningful pointer or keyboard interaction.
* Allow explicit play and mute control.
* Save explicit mute preference in `localStorage`.
* Keep icon, title, and accessible-label state synchronized.
* Show brief feedback through an `aria-live` region.
* Avoid repeated errors when autoplay is blocked.
* Stop automatic retries after a reasonable limit.
* Keep the site usable if the audio file is absent.
* Document audio rights and attribution.

## Reusable global modal

Use one reusable modal system for:

* Character profiles
* Episodes
* Memories
* Objects
* Apartment hotspots

Requirements:

* `role="dialog"`
* `aria-modal="true"`
* Correct `aria-hidden` state
* Accessible title reference
* Warm darkened overlay
* Blurred background
* Purple, cream, or coffee-colored panel edge
* Responsive maximum width and height
* Scrollable content when necessary
* Visible close button
* Escape-key closing
* Overlay-click closing
* Body scroll lock
* Scroll restoration
* Focus moved inside after opening
* Focus trapped while open
* Focus restored to the triggering control
* Custom cursor displayed above the modal
* Cursor hover state cleared when opening and closing

## Motion and interactions

Include:

* Opening-credits hero entrance
* Scroll-reveal transitions
* Floating Polaroids
* Gentle coffee steam
* Button shine
* Card elevation
* Image zoom
* Restrained desktop card tilt
* Handwritten underline animation
* Relationship-line highlighting
* Apartment hotspot pulses
* Short sitcom-style section transitions
* Modal entrance animation
* Trivia feedback
* Quiz result reveal
* Small accent-dot movement

Use transforms and opacity where practical.

Avoid:

* Rapid flashing
* Aggressive screen shaking
* Constant bouncing
* Excessive card rotation
* Large autoplay video sections
* Motion that blocks reading
* Animation that triggers expensive layout repeatedly
* Effects that make the site feel like a children’s game

## Responsive behavior

Support:

* Large desktop monitors
* Laptops
* Tablets
* Phones
* Narrow screens around 320px

At smaller sizes:

* Collapse navigation into a full-screen or near-full-screen menu.
* Keep logo and controls from overlapping.
* Stack hero actions.
* Keep statistics readable.
* Reduce or remove floating Polaroids.
* Keep quote decorations inside the viewport.
* Stack character cards appropriately.
* Convert the relationship web into accessible relationship cards.
* Stack apartment explorer controls and details.
* Allow episode filters to wrap.
* Make search fields full-width.
* Preserve logical scrapbook reading order.
* Keep trivia answers easy to tap.
* Keep modal content inside the viewport.
* Reduce ambient decoration.
* Prevent horizontal overflow.

## Accessibility

Implement:

* Semantic landmarks
* Logical heading hierarchy
* Descriptive page title and meta description
* Visible labels for all form fields
* Screen-reader-only utility class
* Accessible names for icon buttons
* Strong keyboard focus styles
* Keyboard-operable navigation
* Keyboard-operable cards
* Keyboard-operable relationship nodes
* Keyboard-operable apartment hotspots
* Accessible dialogs
* `aria-live` regions for loading, counts, audio, quiz results, trivia feedback, and form status
* Sufficient contrast
* Decorative elements excluded from the accessibility tree
* Meaningful alternative text
* Native cursor fallback
* Large mobile tap targets
* No essential meaning communicated only by color
* `prefers-reduced-motion` fallbacks

When reduced motion is preferred:

* Disable continuous decorative animations.
* Hide the custom cursor and restore the native cursor.
* Use a stable hero background instead of video movement.
* Remove card tilt and floating Polaroid movement.
* Stop automatic carousel rotation.
* Simplify quiz and trivia feedback.
* Remove hotspot pulsing.
* Preserve all content and controls.

## Performance

Requirements:

* Lazy-load below-the-fold images.
* Set image dimensions or aspect ratios.
* Use compressed modern image formats when available.
* Limit decorative elements based on viewport size.
* Pause optional animation when the document is hidden.
* Avoid repeated DOM queries inside animation frames.
* Throttle or debounce pointer, scroll, resize, and search handlers.
* Avoid duplicate event listeners.
* Use passive listeners where appropriate.
* Do not preload every large image.
* Ensure video and audio failure cannot block the page.
* Add timeouts and fallbacks for remote requests.
* Keep initial content visible quickly.

## Deployment safety

The website must work after publishing to a static server.

Requirements:

* Use relative paths.
* Match filename capitalization exactly.
* Do not use paths such as `C:\...`.
* Do not depend on a local development environment.
* Do not hotlink images from fan wikis or unstable image hosts.
* Do not embed unauthorized episode footage.
* Do not provide links to pirated streams.
* Provide fallbacks for fonts, images, video, audio, and APIs.
* Use `rel="noopener noreferrer"` for external links opened in new tabs.
* Preserve attribution files.
* Do not expose secrets.
* Do not require API keys.
* Keep essential features functional offline.
* Document optional network dependencies clearly.

## Footer and credits

Include:

* Accessible site title
* Internal navigation links
* Three-color dot divider
* Copyright line for the original fan-project implementation
* Asset and data credits
* Font credits
* Audio credits
* Image credits
* Clear unofficial fan-project disclaimer

Use a disclaimer similar to:

**“This is an unofficial, non-commercial fan project created for educational and entertainment purposes. It is not affiliated with, endorsed by, or sponsored by Warner Bros. Television, NBC, Bright/Kauffman/Crane Productions, the creators, cast, or any related rights holders. Friends and related characters, titles, imagery, quotations, and marks belong to their respective owners.”**

Do not imply that the website is official.

Do not include fake working social-media destinations. Clearly label placeholders or omit them.

## Code quality

Keep HTML semantic, organized, and readable.

Organize CSS into labeled sections:

1. Variables and reset
2. Typography
3. Accessibility utilities
4. Preloader
5. Navigation
6. Hero
7. Featured quote
8. Character cards
9. Personality quiz
10. Relationship web
11. Apartment explorer
12. Episode guide
13. Memory wall
14. Iconic objects
15. Trivia
16. Quote carousel
17. Contact form
18. Footer
19. Modal
20. Cursor and decoration
21. Responsive rules
22. Reduced-motion rules

Organize JavaScript into clear functional areas:

1. Data sources
2. Utility and sanitization helpers
3. Preloader
4. Custom cursor
5. Navigation and scroll progress
6. Theme management
7. Audio
8. Character rendering
9. Personality quiz
10. Relationship web
11. Apartment explorer
12. Episode search and filters
13. Memory wall
14. Object interactions
15. Trivia
16. Quote carousel
17. Form validation
18. Global modal
19. Observers, tilt, and decoration
20. Initialization and cleanup

Avoid:

* Duplicate listeners
* Undeclared globals
* Inline `onclick` handlers
* Invalid nested interactive elements
* Unsafe remote content insertion
* Missing null checks
* Repeated animation-frame queries
* Placeholder TODOs
* Dead CSS
* Unused data fields
* Broken asset paths
* Unnecessary dependencies
* Silent errors
* Buttons that do nothing
* Filters that only look functional
* Fake loading delays

Use safe DOM methods or sanitation for any remote content.

## README

Create or update `README.md` with:

* Project overview
* Feature list
* Technology used
* File structure
* Local setup instructions
* Static deployment instructions
* Asset requirements
* Optional media filenames
* Remote-service behavior
* Accessibility details
* Browser compatibility
* Credits and licensing
* Fan-project disclaimer

Include simple local-server examples:

```bash
python -m http.server 8000
```

or:

```bash
npx serve .
```

Do not add Node.js as a required project dependency.

## Verification

Verify in proportion to the implementation.

At minimum:

1. Run a JavaScript syntax check.
2. Confirm CSS braces and media-query blocks are balanced.
3. Confirm required HTML IDs are unique.
4. Confirm every navigation link targets an existing section.
5. Confirm all referenced assets exist or have graceful fallbacks.
6. Search for absolute local-machine paths.
7. Search for unstable fan-wiki image hotlinks.
8. Confirm no unauthorized video or streaming embed is present.
9. Confirm the preloader always dismisses.
10. Confirm theme persistence and correct control labels.
11. Confirm the mobile menu opens, closes, handles Escape, and restores focus.
12. Confirm all six character cards render.
13. Confirm every character modal opens with the correct data.
14. Confirm the personality quiz progresses, scores, saves, displays, and restarts.
15. Confirm relationship selection, highlighting, reset, and mobile fallback.
16. Confirm apartment tabs, hotspots, keyboard controls, and detail panel.
17. Confirm episode search, season filters, count, empty state, and random selection.
18. Confirm the memory-wall filters and modals.
19. Confirm iconic-object interactions do not break keyboard navigation.
20. Confirm trivia scoring, feedback, best score, and restart behavior.
21. Confirm quote carousel controls and visibility handling.
22. Confirm form validation and simulated success behavior.
23. Confirm no form wording implies real delivery.
24. Confirm modal closing by button, overlay, and Escape.
25. Confirm focus trapping and restoration.
26. Confirm the custom cursor remains above the modal.
27. Confirm missing or blocked audio does not break the website.
28. Confirm reduced-motion behavior.
29. Confirm touch-device cursor fallback.
30. Confirm no horizontal overflow at approximately 320px, 375px, 768px, 1024px, and large desktop widths.
31. Confirm the page remains usable without remote services.
32. Confirm normal interaction produces no avoidable console errors.
33. Confirm credits and the unofficial disclaimer are visible.
34. Confirm the project loads from a normal static server.

Fix all discovered issues before finishing.

## Final response

After completing the website, report:

* The outcome
* Files created or changed
* Main features implemented or repaired
* Responsive improvements
* Accessibility improvements
* Verification performed and results
* Optional assets that remain unavailable
* Any remaining external network dependencies

Keep the final response concise.

The edited files are the deliverable. Do not paste their complete contents unless explicitly requested.

## Stop rule

Stop only when the Friends-inspired fan website has been implemented and the relevant verification checks pass, or when a concrete external blocker prevents further progress.

If blocked, state:

* The exact blocker
* Which feature it affects
* What has already been completed
* The smallest action required from the user
