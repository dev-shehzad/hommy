// import "server-only";

export const token = "skhmIeD9JiOZo68fhctuEQAigOgcIsLWvJz6VFbqClypnMVw6L0zasPiDD3LzCJkWDl69E61KjgHZA0t821DaCvtDwllPpHjrFiqxBXyKo0bt1R7UZyvESwT0we2x1QcnOdFkB8kdNIADlRgylCFKkNr9pAvWfGYh0uTaXznCHComW35hCww";

if (!token) {
  throw new Error("Missing SANITY_API_READ_TOKEN");
}
