export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}
export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
    
}
export const produtos: IProduto[] = [
    { id: 1, descricao: "Mouse Gamer G102 Logitech", preco: 106.00, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-3.jpg", quantidadeEstoque: 10 },
    { id: 2, descricao: "Apple Studio Display – Vidro padrão – Adaptador para montagem VESA ​​​​​​​ ", preco: 15499, descricaoPreco: "À vista no PIX", imagem: "./assets/monitor-apple.jpg", quantidadeEstoque: 100 },
    { id: 3, descricao: "Teclado Magic Keyboard ", preco: 1149.99, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-1.jpg", quantidadeEstoque: 1098 },
    { id: 4, descricao: "Headphone Sony WH-1000XM4 Preto", preco: 1847.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-2.jpg", quantidadeEstoque: 410 },
    { id: 5, descricao: "AirPods Pro (2ª geração)", preco: 2599.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-1.jpg", quantidadeEstoque: 90 },
    { id: 6, descricao: "Headphone sem fio", preco: 99.99, descricaoPreco: "À vista no PIX", imagem: "./assets/fone-de-ouvido-3.jpg", quantidadeEstoque: 8732 },
    { id: 7, descricao: "HD 1TB", preco: 499.99, descricaoPreco: "À vista no PIX", imagem: "./assets/hd.jpg", quantidadeEstoque: 410 },
    { id: 8, descricao: "Placa de vídeos 1080ti", preco: 1449.99, descricaoPreco: "À vista no PIX", imagem: "./assets/placa-video.jpg", quantidadeEstoque: 107 },
    { id: 9, descricao: "Processador AMD Ryzen 7 3700X", preco: 2800, descricaoPreco: "À vista no PIX", imagem: "./assets/processador.jpg", quantidadeEstoque: 105 },
    { id: 10, descricao: "MacBook Air M1", preco: 7799, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-1.jpg", quantidadeEstoque: 510 },
    { id: 11, descricao: "MacBook Air M1 cinza espacial", preco: 7799, descricaoPreco: "À vista no PIX", imagem: "./assets/laptop-2.jpg", quantidadeEstoque: 910 },
    { id: 12, descricao: "Mouse barato", preco: 20, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-1.png", quantidadeEstoque: 540 },
    { id: 13, descricao: "Mouse Logitech G305 LIGHTSPEED", preco: 332.99, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-2.jpg", quantidadeEstoque: 980 },
    { id: 14, descricao: "Mouse pequeno", preco: 50, descricaoPreco: "À vista no PIX", imagem: "./assets/mouse-4.jpg", quantidadeEstoque: 1210 },
    { id: 15, descricao: "Teclado bom", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "./assets/teclado-2.jpg", quantidadeEstoque: 10321 },
]