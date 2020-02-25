export interface Drug{
    drugName: string,
    strength: string,
    quantityPerDay: number,
    quantityRemaining: number,
    daysRemaining: number,
    syncQuantity?: number,
    syncDate?: Date
}