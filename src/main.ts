import { parse } from "std/flags/mod.ts";

const flags = parse(Deno.args);
console.log(flags);
