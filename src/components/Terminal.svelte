<script lang="ts">
    import Prompt from "@components/Prompt.svelte";
    import { Render } from "svelte-purify";
    import { parsePrompt, prependIcon } from "@lib/util";
    import { files } from "@lib/util";
    import { tick } from "svelte";

    let outputArray: Array<{ text: string; buf: "out" | "err" }> = [
        { text: files["intro.txt"], buf: "out" },
    ];

    let container: HTMLDivElement;
    const scrollToBottom = async (node: HTMLElement) => {
        node.scroll({ top: node.scrollHeight, behavior: "smooth" });
    };

    const handlePrompt = async (event: CustomEvent<HTMLFormElement>) => {
        const prompt = event.detail.prompt;
        // const target = event.detail.target;
        const instruction = parsePrompt(prompt);

        outputArray = [
            ...outputArray,
            {
                text: `<div class="flex gap-2"><p>></p> <p>${prompt}</p> </div>`,
                buf: "out",
            },
        ];
        switch (instruction.cmd) {
            case "print": {
                outputArray = [
                    ...outputArray,
                    { text: instruction.payload, buf: "out" },
                ];
                break;
            }
            case "list": {
                const files = instruction.payload as string[];
                const withIcons = files
                    .map((file) => prependIcon(file))
                    .join("\t");
                outputArray = [...outputArray, { text: withIcons, buf: "out" }];
                break;
            }
            case "error": {
                outputArray = [
                    ...outputArray,
                    { text: instruction.payload, buf: "err" },
                ];
                break;
            }
            case "clear": {
                outputArray = [];
                break;
            }
        }

        await tick();
        scrollToBottom(container);
    };
</script>

<div
    class="flex h-screen flex-col overflow-x-hidden overflow-y-scroll scroll-smooth bg-background px-2 font-jetBrainsMono selection:bg-selectionBackground lg:gap-2 lg:px-8 lg:py-1 lg:text-xl"
    bind:this={container}
>
    {#each outputArray as output}
        <p
            class="flex flex-col flex-wrap justify-start whitespace-pre-wrap text-left has-[svg]:flex-row lg:gap-1"
            class:text-foreground={output.buf === "out"}
            class:text-red={output.buf === "err"}
        >
            <Render html={output.text} config={{ ADD_ATTR: ["target"] }} />
        </p>
    {/each}
    <Prompt on:prompt={handlePrompt} />
</div>
