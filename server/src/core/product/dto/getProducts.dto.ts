export class GetProductsDto {
    readonly category: string | "default"
    readonly sort: "desc" | "asc" | "default"
}