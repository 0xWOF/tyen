const NotFoundError = (path: string): Error => (
    Error(
        `[tyen] environment is not found on path: ${path}.`
        + `check .ts file is created on ${path} and contain`
        + `const environment = { ... } and export { environment }`
    )
)