import { extract, optional, throws } from 'tyfell'

import { Schema, SchemaOf } from './type/schema'

const Environment = async <
    EnvironmentSchema extends Schema
> (
    path: string,
    schema: EnvironmentSchema,
): Promise<SchemaOf<EnvironmentSchema>> => {
    const data = await optional.try(async () => (
        await import(path)
    )) ?? throws(NotFoundError(path))

    extract.entries(schema).forEach(([key, type]) => (
        optional[type](data[key]) ?? throws(NotInSchemaError(key, type))
    ))

    return data
}

type Environment = {
    getString: (key: string) => string,
}

export { Environment }