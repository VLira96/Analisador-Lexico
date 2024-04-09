export default interface IBasePage {
    titulo: string
    alfabeto: string[]
    verificacao: (lista: string[], texto :string) => string
    listaParagrafo: string
}