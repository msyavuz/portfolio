<script lang="ts">
    import { ALIASES } from "@lib/constants";
    import { createEventDispatcher } from "svelte";

    let history: Array<string> = [];
    $: placeInHistory = history.length - 1;

    let validCommand = false;

    // $: console.log(validCommand);

    const dispatch = createEventDispatcher();
    const submitHandler = (event: SubmitEvent) => {
        event.preventDefault();
        const target = event.target as HTMLFormElement;
        const prompt = new FormData(target).get("prompt") as string;
        console.log(target, prompt);
        dispatch("prompt", { target: target, prompt: prompt });
        history = [...history, prompt];
        target.reset();
    };

    const keydownHandler = (event: KeyboardEvent) => {
        const key = event.key;
        const target = event.target as HTMLInputElement;
        switch (key) {
            case "ArrowUp":
                event.preventDefault();
                placeInHistory =
                    placeInHistory > 0 ? placeInHistory - 1 : placeInHistory;
                target.value = history[placeInHistory];
                break;
            case "ArrowDown":
                event.preventDefault();
                placeInHistory =
                    placeInHistory < history.length - 1
                        ? placeInHistory + 1
                        : placeInHistory;
                target.value = history[placeInHistory];
                break;
            case "Tab":
                event.preventDefault();
                break;
            default:
                // console.log(key);
                break;
        }
    };

    function changeHandler(
        event: Event & { currentTarget: EventTarget & HTMLInputElement },
    ) {
        if (
            ALIASES.some((alias) => event.currentTarget.value.startsWith(alias))
        ) {
            validCommand = true;
        } else {
            validCommand = false;
        }
    }
</script>

<form on:submit={submitHandler} class="mt-2 mb-4 flex w-[32rem] flex-col">
    <p class="pure text-green">~</p>
    <div class="flex w-[32rem] gap-2">
        <p class="text-brightGreen">></p>
        <label for="prompt" class="sr-only">Prompt</label>
        <!-- svelte-ignore a11y-autofocus -->
        <input
            type="text"
            autofocus
            autocomplete="off"
            class="whitespace-pre-wrap border-transparent bg-transparent p-0 text-foreground focus:border-transparent focus:outline-none"
            class:text-green={validCommand}
            name="prompt"
            id="prompt"
            on:keydown={keydownHandler}
            on:input={changeHandler}
        />
        <input type="submit" class="hidden" />
    </div>
</form>
