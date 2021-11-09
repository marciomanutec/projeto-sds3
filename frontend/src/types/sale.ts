export type SaleSum = {
    show: {
        name: string,
        id: number
    }
}

export type SaleSucess =
    {
        score: number,
        show: {
            name: string,
            id: number,
        }
    }


export type DadosTable = [
    {
        score: number,
        show: {
            name: string,
            type: string,
            language: string,
            id: number,
            status?: string,
            premiered: string
        }
    }
]