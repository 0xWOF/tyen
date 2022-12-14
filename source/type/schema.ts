type Schema = {
    [key: string]: 'string' | 'number' | 'boolean'
}

type SchemaOf<Input extends Schema> = {
    [Key in keyof Input]: TypeOf<Input[Key]>
}

type TypeOf<Input extends string> = (
    Input extends 'string' ? string :
    Input extends 'number' ? number :
    Input extends 'boolean' ? boolean :
    never
)

export { Schema, SchemaOf }