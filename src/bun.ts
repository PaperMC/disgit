import {BoundEnv} from "./env";
import {handleRequest} from "./index";

const boundEnv = new BoundEnv({
    IGNORED_BRANCHES_REGEX: process.env.IGNORED_BRANCHES_REGEX!,
    IGNORED_BRANCHES: process.env.IGNORED_BRANCHES!,
    IGNORED_USERS: process.env.IGNORED_USERS!,
    IGNORED_PAYLOADS: process.env.IGNORED_PAYLOADS!,
    GITHUB_WEBHOOK_SECRET: process.env.GITHUB_WEBHOOK_SECRET!,
})

Bun.serve({
    fetch(req) {
        return handleRequest(req, boundEnv);
    }
});
