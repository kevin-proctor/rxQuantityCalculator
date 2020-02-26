export interface Drug{
    drugName: string,
    quantityPerDay: number,
    quantityRemaining: number,
    daysRemaining: number,
    syncQuantity?: number,
    syncDate?: Date
}