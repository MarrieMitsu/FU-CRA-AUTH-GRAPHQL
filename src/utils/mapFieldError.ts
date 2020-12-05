import { FieldError } from "../generated/graphql";

// mapFieldError
export const mapFieldError = (errors: FieldError[]) => {
    const errorMap: Record<string, string> = {};
    errors.forEach(({field, message}) => {
        errorMap[field] = message
    });
    return errorMap;
}