const NotInSchemaError = (key: string, type: string): Error => (
    Error(
        `[tyen] key: ${key} type: ${type} is not in schema`
    )
)