export const ALIASES = ["cat", "ls", "clear", "rm", "touch"];
export const SOCIALS = [
  `<a href="https://www.github.com/msyavuz" target="_blank" class="text-cyan underline max-w-max">github</a>`,
  `<a href="https://twitter.com/salihy_avuz" target="_blank" class="text-cyan underline max-w-max">twitter</a>`,
  `<a href="https://www.linkedin.com/in/mehmetsalihyavuz/" target="_blank" class="text-cyan underline max-w-max">linkedin</a>`,
  `<a href="https://letterboxd.com/SalihYavuz/" target="_blank" class="text-cyan underline max-w-max">letterboxd</a>`,
];

export const INITIAL_FILES: Record<string, string> = {
  "intro.txt": `
---
Hello and Welcome to my corner of the web. I am Salih, a fullstack developer.

This is one of those terminal style portfolio websites.
<p class="font-bold text-blue">
If you prefer a more traditional approach you can click the icon at top right corner.
</p>

- You can list files with "ls" 
- Print files to output with "cat" 
- Clear the output with "clear" 

Example: "cat msyavuz.txt"

I didn't implement other linux utils yet.`,

  "socials.md": `${SOCIALS.join("\t")}`,

  "msyavuz.txt": `
<p>
---
Some things about me:

- I am a fullstack developer with 3 years of experience in freelance work.

- I started out with C++ in college but branched out pretty quickly. Now i consider myself proficient in multiple languages such as:
		- Typescript/Javascript
		- Python
		- Go

- Currently i am learning Elixir and Phoenix along with functional programming paradigms. (GenServers everywhere)

- I worked with variety of web frameworks (even Spring and Angular) but i prefer Svelte or Solid if i have a say in it.

- I daily drive Linux (wm's and the whole shebang) with Neovim and i live in the terminal, hence the website.
</p>

<p class="font-bold">
- Coding is my passion, i would still code as a hobby even if there was no money involved. 
</p>
	`,
  "work.md": `
Side Projects:
<a href="https://github.com/msyavuz/Lua-Capture" target="_blank" class="text-cyan underline max-w-max">LuaCapture</a> A website to test lua capture groups
<a href="https://github.com/msyavuz/disco-api" target="_blank" class="text-cyan underline max-w-max">Disco Api</a> An api for Disco Elysium, my favourite video game
<a href="https://github.com/msyavuz/resumeio2pdf" target="_blank" class="text-cyan underline max-w-max">ResumeIo2PDF</a> Resume downloader for resume.io
<a href="https://github.com/msyavuz/my-unsplash" target="_blank" class="text-cyan underline max-w-max">My Unsplash</a> Unsplash library
	
I worked with a lot of clients as a freelance contractor over the years but unfortunately i can't put them here.
	`,
};
