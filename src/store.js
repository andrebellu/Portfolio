import { writable, derived } from 'svelte/store';

export const term = writable('');
export const items = writable([{
    name: "CodeWars solved katas",
    description: "I solved some katas on codewars, you can see them here",
    badge: "python",
    color: "badge-info",
    link: "/CodeWars",
},
{
    name: "Leetcode solved problems",
    description: "I solved some problems on leetcode, you can see them here",
    badge: "python",
    color: "badge-info",
    link: "/LeetCode",
},
{
    name: "Webapp for a company",
    description: "Webapp made with SAPUI5",
    badge: "javascript",
    color: "badge-warning",
    link: "/WebappRegesta",
},
{
    name: "Portfolio",
    description: "This portfolio",
    badge: "svelte",
    color: "badge-error",
    link: "/Portfolio",
},
{
    name: "RGB Arduino",
    description: "RGB led controlled by a telegram bot",
    badge: "arduino",
    color: "badge-success",
    link: "/RGBarduino",
},
{
    name: "Emoji Search Engine",
    description: "Search engine for emojis",
    badge: "javascript",
    color: "badge-warning",
    link: "/ESE",
},
{
    name: "Ulam Spiral",
    description: "Ulam Spiral made with processing",
    badge: "processing",
    color: "badge-default",
    link: "/UlamSpiral",
},
{
    name: "Airport Search Engine",
    description: "Search engine for airports",
    badge: "javascript",
    color: "badge-warning",
    link: "/ASE",
},
{
    name: "Pokèdex",
    description: "Pokèdex made with python notebook",
    badge: "python",
    color: "badge-info",
    link: "/Pokedex",
},
{
    name: "IP Locator",
    description: "IP locator made with javascript",
    badge: "javascript",
    color: "badge-warning",
    link: "/IPLocator",
},
{
    name: "todo-list",
    description: "Todo list made with plain javascript",
    badge: "javascript",
    color: "badge-warning",
    link: "/todo.list"
},
{
    name: "Encrypter",
    description: "Encrypter made with Java",
    badge: "java",
    color: "badge-primary",
    link: "/Encrypter",
},
]);
export const filtered = derived(
    [term, items],
    ([$term, $items]) => $items.filter(x => x.badge.includes($term))
);