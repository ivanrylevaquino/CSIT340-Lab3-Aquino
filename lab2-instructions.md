# Lab Activity — Portfolio in Components

## Given

`portfolio.html`. Open it in a browser. That is the page you are reproducing.

## Task

Build the same page in a new React project using the components below, then replace the content with your own details. This page becomes your portfolio for the rest of the semester.

## Instructions

1. Scaffold a new React project, set up Tailwind CSS, and clear the generated styles, same as Lab 1.
2. Create the folder `src/components/`. Each component below goes in its own file there, named after the component (for example, `src/components/Navbar.jsx`), and is exported the same way `App` is.

   | Component           | Props                                          | Used for                                                              |
   |---------------------|------------------------------------------------|-----------------------------------------------------------------------|
   | `Navbar`            | none                                           | the `<nav>` tag and everything inside it                              |
   | `NavLink`           | `href`, `label`                                | each `<a>` tag in the `<nav>`, except the first one (your name)       |
   | `Hero`              | none                                           | the `<header>` tag and everything inside it                           |
   | `SectionHeading`    | `title`, `subtitle`                            | the `<h2>` tag and the `<p>` tag right below it, in every `<section>` |
   | `AboutSection`      | none                                           | the `<section id="about">` tag and everything inside it               |
   | `Fact`              | `label`, `value`                               | each `<div>` tag inside the `<dl>` tag                                |
   | `SkillsSection`     | none                                           | the `<section id="skills">` tag and everything inside it              |
   | `SkillTag`          | `name`                                         | each `<span>` tag inside the `<section id="skills">`                  |
   | `ProjectsSection`   | none                                           | the `<section id="projects">` tag and everything inside it            |
   | `ProjectCard`       | `year`, `title`, `description`, `tech`, `link` | each `<article>` tag                                                  |
   | `ExperienceSection` | none                                           | the `<section id="experience">` tag and everything inside it          |
   | `TimelineItem`      | `period`, `title`, `place`, `description`      | each `<li>` tag inside the `<ol>` tag                                 |
   | `ContactSection`    | none                                           | the `<section id="contact">` tag and everything inside it             |
   | `ContactLink`       | `label`, `href`, `text`                        | each `<li>` tag inside the `<ul>` tag                                 |
   | `Footer`            | none                                           | the `<footer>` tag and everything inside it                           |

3. Every component with props uses destructured props.
4. `App.jsx` only imports and arranges: `Navbar`, `Hero`, a `<main>` holding the five sections in order, and `Footer`.
5. Once the page matches `portfolio.html`, replace the text and links with your own. A project link points to its repository, or to your GitHub profile if it has none.

## Constraints

- Exactly the components in the table. No more, no fewer.
- Same sections, same order, same classes, same structure. Text and links are the only things that change.
- Exactly 5 nav links, 4 facts, 4 + 3 + 4 skills, 4 projects, 3 timeline items, and 3 contact links.
- No images.

## Submission

Create a GitHub repository named `CSIT340-Lab3-LastName`, using your own last name.

Push the project to it and submit the **repository link** in the posted assignment in MS Teams.

## Done when

- The page loads with no error screen and a clean console.
- Side by side with `portfolio.html`, the layout is identical.
- `src/components/` contains exactly the 15 files in the table.
- Every piece of text is about you.
