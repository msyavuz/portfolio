import { ALIASES, INITIAL_FILES } from "@lib/constants";

export type Instruction =
  | {
      cmd: "print" | "error" | "list";
      payload: string;
    }
  | { cmd: "list"; payload: string[] }
  | { cmd: "clear" | "idle" | "remove" };

export let files = INITIAL_FILES;

export function parsePrompt(prompt: string): Instruction {
  const alias = prompt.split(" ")[0];
  const args = prompt.split(" ").slice(1);

  if (!ALIASES.includes(alias)) {
    return { cmd: "error", payload: `msh: command not found: ${alias}` };
  }

  switch (alias) {
    case "rm": {
      const path = files[args[0]];
      if (!path) {
        return {
          cmd: "error",
          payload: `${alias}: ${args[0]}: No such file or directory`,
        };
      }
      return { cmd: "remove" };
    }
    case "cat": {
      const path = files[args[0]];
      if (!path) {
        return {
          cmd: "error",
          payload: `cat: ${args[0]}: No such file or directory`,
        };
      }
      return { cmd: "print", payload: files[args[0]] };
    }
    case "ls": {
      if (!args || args.length === 0) {
        return {
          cmd: "list",
          payload: Object.keys(files).filter(
            (filename) => !filename.startsWith("."),
          ),
        };
      } else if (args[0].startsWith("-")) {
        if (args[0] == "-a") {
          return { cmd: "list", payload: Object.keys(files) };
        }
        return { cmd: "error", payload: `ls: ${args[0]}: flag not recognized` };
      }
      return {
        cmd: "error",
        payload: `ls: ${args[0]}: No such file or directory`,
      };
    }
    case "clear": {
      return { cmd: "clear" };
    }
  }
  return { cmd: "print", payload: "\n" };
}

export function prependIcon(filename: string) {
  if (filename.endsWith("md")) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#7aa2f7" d="m16 15l3-3l-1.05-1.075l-1.2 1.2V9h-1.5v3.125l-1.2-1.2L13 12zM4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm1.5-5H7v-4.5h1v3h1.5v-3h1V15H12v-5q0-.425-.288-.712T11 9H6.5q-.425 0-.712.288T5.5 10z"/></svg>${filename}`;
  } else if (filename.endsWith("txt")) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#7aa2f7" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM9.998 14.768H8.895v3.274h-.917v-3.274H6.893V14h3.105zm2.725 3.274l-.365-.731c-.15-.282-.246-.492-.359-.726h-.013c-.083.233-.185.443-.312.726l-.335.731h-1.045l1.171-2.045L10.336 14h1.05l.354.738c.121.245.21.443.306.671h.013c.096-.258.174-.438.276-.671l.341-.738h1.043l-1.139 1.973l1.198 2.069zm4.384-3.274h-1.104v3.274h-.917v-3.274h-1.085V14h3.105zM14 9h-1V4l5 5z"/></svg>${filename}`;
  } else {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#7aa2f7" d="M13 9V3.5L18.5 9M6 2c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/></svg>${filename}`;
  }
}
